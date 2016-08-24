/**
 * SORA Med - Damascus Edge - The Forge
 * https://github.com/relderDE/sora_med_app.git
 * @flow
 */

'use strict';
import React, { Component } from 'react';
import {
  StyleSheet,
  TouchableHighlight,
  AsyncStorage,
  Text,
  Image,
  Dimensions,
  View,
  ScrollView,
  PickerIOS,
  Switch,
} from 'react-native';
import { Form, InputField,
        Separator, SwitchField, LinkField ,
        PickerField, DatePickerField
      } from 'react-native-form-generator';

// Global Stylesheet
var s = require('../global/style');

var p2q1q1 = 'Does the patient have facial droop?';
var p2q1q2 = 'Arm/leg or unilateral weakness?';
var p2q1q3 = 'Speech abnormality?';
var p2q1q4 = 'Is the last known normal known?';
var p2q1q5 = 'Known arrival time?';


class StrokeStepOne extends Component {

  handleFormChange(formData){
    /*
    formData will contain all the values of the form,
    in this example.
 
    formData = {
      first_name:"",
      last_name:"",
      gender: '',
      birthday: Date,
      has_accepted_conditions: bool
    }
     */
 
   }

  navigate(routeName) {
    this.props.navigator.push({
      name: routeName
    });
  }
  
  constructor(props){
    super(props);
    this.state = {
      yes: false,
      no: false,
    };
  }
  
  updateChoice(type) {
    let newState = {...this.state};
    newState[type] = !newState[type];
    this.setState(newState);
  }
  
  render() {
    
    return (
    
    <View style={s.wrapper}>
        
        <View style={s.headerwrapper}>
            <View style={s.headernavigation}>
                <View style={s.buttonWrapBack}>
                    <TouchableHighlight onPress={ this.navigate.bind(this, 'Stroke') } style={s.backButton}>
                        <Image
                          source={require('../assets/icons/backArrow.png')}
                        />
                    </TouchableHighlight>
                </View>
                <View style={s.buttonWrapTitle}>
                    <Text style={s.title}>Stroke</Text>
                </View>
                <View style={s.buttonWrapTopButton}>
                    <TouchableHighlight onPress={ this.navigate.bind(this, 'Main') } style={s.button}>
                        <Image
                          source={require('../assets/icons/HomeIcon.png')}
                        />
                    </TouchableHighlight>
                </View>
                <View style={s.buttonWrapTopButton}>
                    <TouchableHighlight onPress={ this.navigate.bind(this, 'Report') } style={s.button}>
                        <Image
                          source={require('../assets/icons/SOFAbutton.png')}
                        />
                    </TouchableHighlight>
                </View>
            </View>
        </View>
      
      
      
      
        
        
        
        <View style={s.contentwrapper}>
            <View style={s.timerWrap}>
              <View style={s.timerTextWrapperLeft}>
                  <Text style={s.timerText}>Last Normal: 0:00</Text>
              </View>
              <View style={s.timerTextWrapper}>
                  <Text style={s.timerText}>Arrival: 0:00</Text>
              </View>
            </View>
            
              <ScrollView style={s.gridTainer}>
            
                <View style={s.optionSetContainer}>
                    <Text style={s.optionSetTitle}>{p2q1q1}</Text>
                </View>
                <Form ref='facialDroop' style={s.optionSetInputYN}>
                  <View style={s.yesNoContainer}>
                    <Text style={s.yesNo}>No</Text>
                    <SwitchField label='' ref="facialDroop"/>
                    <Text style={s.yesNo}>Yes</Text>
                  </View>
                </Form>
                
                <View style={s.optionSetContainer}>
                    <Text style={s.optionSetTitle}>{p2q1q2}</Text>
                </View>
                <Form ref='armLegWeak' style={s.optionSetInputYN}>
                  <View style={s.yesNoContainer}>
                    <Text style={s.yesNo}>No</Text>
                    <SwitchField label='' ref="armLegWeak"/>
                    <Text style={s.yesNo}>Yes</Text>
                  </View>
                </Form>
                
                <View style={s.optionSetContainer}>
                    <Text style={s.optionSetTitle}>{p2q1q3}</Text>
                </View>
                <Form ref='speachAbnormal' style={s.optionSetInputYN}>
                  <View style={s.yesNoContainer}>
                    <Text style={s.yesNo}>No</Text>
                    <SwitchField label='' ref="speachAbnormal"/>
                    <Text style={s.yesNo}>Yes</Text>
                  </View>
                </Form>
                
                <View style={s.optionSetContainer}>
                    <Text style={s.optionSetTitle}>{p2q1q4}</Text>
                </View>
                <Form ref='lastKnownNormal' style={s.optionSetInputYN}>
                  <View style={s.yesNoContainer}>
                    <Text style={s.yesNo}>No</Text>
                    <SwitchField label='' ref="lastKnownNormal"/>
                    <Text style={s.yesNo}>Yes</Text>
                  </View>
                  <View style={s.yesNoContainer}>
                    <DatePickerField ref='lastKnownNormalTime'
                      minimumDate={new Date('8/1/2016')}
                      maximumDate={new Date()} mode='datetime' placeholder='Choose Time       '
                      />
                  </View>
                </Form>
                
                <View style={s.optionSetContainer}>
                    <Text style={s.optionSetTitle}>{p2q1q5}</Text>
                </View>
                <Form ref='knownArrival' style={s.optionSetInputYN}>
                  <View style={s.yesNoContainer}>
                    <Text style={s.yesNo}>No</Text>
                    <SwitchField label='' ref="knownArrival"/>
                    <Text style={s.yesNo}>Yes</Text>
                  </View>
                  <View style={s.yesNoContainer}>
                    <DatePickerField ref='arrivalDate'
                      minimumDate={new Date('8/1/2016')}
                      maximumDate={new Date()} mode='datetime' placeholder='Choose Date       '
                      />
                  </View>
                </Form>
                
                <TouchableHighlight onPress={ this.navigate.bind(this, 'Stroke') } style={s.buttonBlue}>
                    <Text style={s.whiteText}>Continue</Text>
                </TouchableHighlight>
                
              </ScrollView>
            
        </View>

        
        
        
        
        
        
        <View style={s.footerwrapper}>
            <View style={s.footernavigation}>
                <View style={s.buttonWrap}>
                    <TouchableHighlight onPress={ this.navigate.bind(this, 'Stroke') } style={s.buttonbottomActive}>
                        <Text style={s.buttonBottomText}>ACTIVE</Text>
                    </TouchableHighlight>
                </View>
                <View style={s.divider}>
                    
                </View>
                <View style={s.buttonWrap}>
                    <TouchableHighlight onPress={ this.navigate.bind(this, 'Report') } style={s.buttonbottom}>
                        <Text style={s.buttonBottomText}>DOCUMENT</Text>
                    </TouchableHighlight>
                </View>
                <View style={s.divider}>
                    
                </View>
                <View style={s.buttonWrap}>
                    <TouchableHighlight onPress={ this.navigate.bind(this, 'Status') } style={s.buttonbottom}>
                        <Text style={s.buttonBottomText}>STATUS</Text>
                    </TouchableHighlight>
                </View>
                <View style={s.divider}>
                    
                </View>
                <View style={s.buttonWrap}>
                    <TouchableHighlight onPress={ this.navigate.bind(this, 'Share') } style={s.buttonbottom}>
                        <Text style={s.buttonBottomText}>SHARE</Text>
                    </TouchableHighlight>
                </View>
                <View style={s.divider}>
                    
                </View>
            </View>
        </View>
        
    </View>
    );
  }
}

const styles = StyleSheet.create({
  bubblechoice_click: {
    height: window.height/12.335,
    borderRadius: (window.height/12.3350)/2,
    marginRight: 5,
    width: window.height/12.335,
  },
  bubblechoice: {
    height: window.height/12.335,
    borderRadius: (window.height/12.3350)/2,
    marginRight: 5,
    width: window.height/12.335,
  },
  choicetext: {
    alignItems: 'center',
    alignSelf: 'center',
    color: "'rgba(0,43,55,0.87)'",
    fontWeight: '600',
    fontSize: 14,
    flex: 1,
    textAlign: 'center',
    marginTop: 10,
  },
  overlay: {
    height: 40,
    width: 60,
    alignItems:'center'
  },
});

export default StrokeStepOne

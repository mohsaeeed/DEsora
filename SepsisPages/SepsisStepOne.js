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
} from 'react-native';
import { Form, InputField,
        Separator, SwitchField, LinkField ,
        PickerField, DatePickerField
      } from 'react-native-form-generator';

var {height, width}     = Dimensions.get('window');

// Dynamics and Default Constants
var q = require('../global/questions');


// Global Stylesheet
var s = require('../global/style');

var p1q1q1 = 'Is temperature UNDER 36C/96.8F OR OVER 38.3C/100.0F?';
var p1q1q2 = 'Is heart rate OVER 90 BPM?';
var p1q1q3 = 'Is respiration rate OVER 20 OR is PaCO2 UNDER 32?';
var p1q1q4 = 'Is there a known arrival time?';


class SepsisStepOne extends Component {
  
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
  
  _renderCopy(){
    return(
      <Text>{q.p1q1q1}</Text>
    );
  }
  
  render() {
    return (
    <View style={s.wrapper}>
        
        <View style={s.headerwrapper}>
            <View style={s.headernavigation}>
                <View style={s.buttonWrapBack}>
                    <TouchableHighlight onPress={ this.navigate.bind(this, 'Sepsis') } style={s.backButton}>
                        <Image
                          source={require('../assets/icons/backArrow.png')}
                        />
                    </TouchableHighlight>
                </View>
                <View style={s.buttonWrapTitle}>
                    <Text style={s.title}>Sepsis: Diagnosis</Text>
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
              <View style={s.timerTextWrapper}>
                  <Text style={s.timerText}>Arrival: 0:00</Text>
              </View>
            </View>
        <ScrollView style={s.gridTainer}>
            <View style={s.optionSetContainer}>
                <Text style={s.optionSetTitle}>{p1q1q1}</Text>
            </View>
            <Form ref='tempOutOfRange' style={s.optionSetInputYN}>
              <View style={s.yesNoContainer}>
                <Text style={s.yesNo}>No</Text>
                <SwitchField label="" ref="tempOutOfRange"/>
                <Text style={s.yesNo}>Yes</Text>
              </View>
            </Form>
            
            <View style={s.optionSetContainer}>
                <Text style={s.optionSetTitle}>{p1q1q2}</Text>
            </View>
            <Form ref='heartRate' style={s.optionSetInputYN}>
              <View style={s.yesNoContainer}>
                <Text style={s.yesNo}>No</Text>
                <SwitchField label='' ref="heartRate"/>
                <Text style={s.yesNo}>Yes</Text>
              </View>
            </Form>
            
            <View style={s.optionSetContainer}>
                <Text style={s.optionSetTitle}>{p1q1q3}</Text>
            </View>
            <Form ref='respiration' style={s.optionSetInputYN}>
              <View style={s.yesNoContainer}>
                <Text style={s.yesNo}>No</Text>
                <SwitchField label='' ref="respiration"/>
                <Text style={s.yesNo}>Yes</Text>
              </View>
            </Form>
            
            <View style={s.optionSetContainer}>
                <Text style={s.optionSetTitle}>{p1q1q4}</Text>
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
            
            
            <TouchableHighlight onPress={ this.navigate.bind(this, 'SepsisTwo') } style={s.buttonBlue}>
                <Text style={s.whiteText}>Continue</Text>
            </TouchableHighlight>
          </ScrollView>
        </View>

        
        
        
        
        
        
        <View style={s.footerwrapper}>
            <View style={s.footernavigation}>
                <View style={s.buttonWrap}>
                    <TouchableHighlight onPress={ this.navigate.bind(this, 'Sepsis') } style={s.buttonbottomActive}>
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
  test: {
    margin:50,
  },  
  
});

export default SepsisStepOne

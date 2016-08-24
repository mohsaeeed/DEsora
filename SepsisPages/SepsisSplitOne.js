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

class SepsisSplitOne extends Component {

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
                    <TouchableHighlight onPress={ this.navigate.bind(this, 'SepsisStepOne') } style={s.backButton}>
                        <Image
                          source={require('../assets/icons/backArrow.png')}
                        />
                    </TouchableHighlight>
                </View>
                <View style={s.buttonWrapTitle}>
                    <Text style={s.title}>Sepsis</Text>
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
                    <Text style={s.optionSetTitle}>This patient has SIRS.</Text>
                    <Text style={s.optionSetTitle}>Now we need to determine whether the SIRS is infectious (Sepsis) or non-infectious.</Text>
                </View>
                
                <View style={s.optionSetContainer}>
                    <Text style={s.optionSetTitle}>Does the patient have active infection or suspected source of infection?</Text>
                </View>
                <Form ref='mentalStatus' style={s.optionSetInputYN}>
                  <View style={s.yesNoContainer}>
                    <Text style={s.yesNo}>No</Text>
                    <SwitchField label='' ref="mentalStatus"/>
                    <Text style={s.yesNo}>Yes</Text>
                  </View>
                </Form>
                
                <TouchableHighlight onPress={ this.navigate.bind(this, 'SepsisTwo') } style={s.optionButton}>
                    <Text style={s.optionText}>Continue with Sepsis</Text>
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

export default SepsisSplitOne

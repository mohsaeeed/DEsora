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
        PickerFieldBasic, DatePickerField
      } from 'react-native-form-generator';

// Global Stylesheet
var s = require('../global/style');

var p2q4q1 = 'CT Head Results';
var p2q4q2 = 'Platelet Count is less than 100k';
var p2q4q3 = 'INR less than 1.7';
var p2q4q4 = 'Symptoms Resolved with Corrected Blood Glucose?';
var p2q4q5 = 'Symptoms Resolved with Corrected Blood Pressure?';



class StrokeStepFour extends Component {
  
  navigate(routeName) {
    this.props.navigator.push({
      name: routeName
    });
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
            <View>
                <Form ref="ctHeadResults" style={s.pickerTainer}>
                  <PickerFieldBasic ref='ctHeadResults' placeholder='+0' value="+0" label={p2q4q1} style={s.optionText}
                      options={{
                        0: 'Normal',
                        1: 'Hemhorage',
                        2: 'Tumor',
                        3: 'Subacute Stroke < 1/3 MCA',
                        4: 'Subacute Stroke > 1/3 MCA',
                      }}
                  />
                </Form>
            </View>
            
            <View>
                <Form ref="plateletCount" style={s.pickerTainer}>
                  <PickerFieldBasic ref='plateletCount' placeholder='+0' value="+0" label={p2q4q2} style={s.optionText}
                      options={{
                        0: 'Yes',
                        1: 'No',
                        2: 'Other',
                      }}
                  />
                </Form>
            </View>
            
            <View>
                <Form ref="INR" style={s.pickerTainer}>
                  <PickerFieldBasic ref='INR' placeholder='+0' value="+0" label={p2q4q3} style={s.optionText}
                      options={{
                        0: 'Yes',
                        1: 'No',
                        2: 'Other',
                      }}
                  />
                </Form>
            </View>
            
            <View style={s.optionSetContainer}>
                <Text style={s.optionSetTitle}>{p2q4q4}</Text>
            </View>
            <Form ref='bloodGlucoseCorrected' style={s.optionSetInputYN}>
              <View style={s.yesNoContainer}>
                <Text style={s.yesNo}>No</Text>
                <SwitchField label='' ref="bloodGlucoseCorrected"/>
                <Text style={s.yesNo}>Yes</Text>
              </View>
            </Form>
            
            
            <View style={s.optionSetContainer}>
                <Text style={s.optionSetTitle}>{p2q4q5}</Text>
            </View>
            <Form ref='bloodPressureCorrected' style={s.optionSetInputYN}>
              <View style={s.yesNoContainer}>
                <Text style={s.yesNo}>No</Text>
                <SwitchField label='' ref="bloodPressureCorrected"/>
                <Text style={s.yesNo}>Yes</Text>
              </View>
            </Form>
            
            
            <TouchableHighlight onPress={ this.navigate.bind(this, 'IVTPA') } style={s.buttonBlue}>
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
 
});

export default StrokeStepFour

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


// Global Stylesheet
var s = require('../global/style');



class StrokeStepThree extends Component {
  
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
            <View style={s.optionSetContainer}>
                <Text style={s.optionSetTitle}>CT Head (Non-Contrast)</Text>
                <Text style={s.redText}>Run within 25 minutes of arrival</Text>
                <Text style={s.minorText}>Eval for Hemmorhagic Bleed/Subacute Stroke > 1/3 MCA territory/Tumor</Text>
            </View>
            <Form ref='ctHead' style={s.optionSetInputYN}>
              <View style={s.yesNoContainer}>
                <Text style={s.yesNo}>No</Text>
                <SwitchField label='' ref="ctHead"/>
                <Text style={s.yesNo}>Yes</Text>
              </View>
            </Form>
            
            <View style={s.optionSetContainer}>
                <Text style={s.optionSetTitle}>Creatanine</Text>
                <Text style={s.redText}>Run within 10 minutes of arrival</Text>
                <Text style={s.minorText}>Screen for further imaging with contrast-intra-arterial angiogram, MR with contrast</Text>
            </View>
            <Form ref='creatine' style={s.optionSetInputYN}>
              <View style={s.yesNoContainer}>
                <Text style={s.yesNo}>No</Text>
                <SwitchField label='' ref="creatine"/>
                <Text style={s.yesNo}>Yes</Text>
              </View>
            </Form>
            
            <View style={s.optionSetContainer}>
                <Text style={s.optionSetTitle}>Coagulation Studies</Text>
                <Text style={s.redText}>Run within 10 minutes of arrival</Text>
                <Text style={s.minorText}>Greater than 1.7 INR exclusion of TPA</Text>
            </View>
            <Form ref='coagulationStudies' style={s.optionSetInputYN}>
              <View style={s.yesNoContainer}>
                <Text style={s.yesNo}>No</Text>
                <SwitchField label='' ref="coagulationStudies"/>
                <Text style={s.yesNo}>Yes</Text>
              </View>
            </Form>
            
            <View style={s.optionSetContainer}>
                <Text style={s.optionSetTitle}>Blood Glucose Level</Text>
                <Text style={s.redText}></Text>
                <Text style={s.minorText}>Potential for stroke-like symptoms</Text>
            </View>
            <Form ref='bloodGlucoseLevel' style={s.optionSetInputYN}>
              <View style={s.yesNoContainer}>
                <Text style={s.yesNo}>No</Text>
                <SwitchField label='' ref="bloodGlucoseLevel"/>
                <Text style={s.yesNo}>Yes</Text>
              </View>
            </Form>
            
            <View style={s.optionSetContainer}>
                <Text style={s.optionSetTitle}>Blood Pressure</Text>
                <Text style={s.redText}></Text>
                <Text style={s.minorText}>Potential for stroke-like symptoms</Text>
            </View>
            <Form ref='bloodPressure' style={s.optionSetInputYN}>
              <View style={s.yesNoContainer}>
                <Text style={s.yesNo}>No</Text>
                <SwitchField label='' ref="bloodPressure"/>
                <Text style={s.yesNo}>Yes</Text>
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
  
  
});

export default StrokeStepThree

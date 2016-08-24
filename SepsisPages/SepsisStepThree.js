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

// Dynamics and Default Constants
var q = require('../global/questions');

// Global Stylesheet
var s = require('../global/style');

var p1q3q1 = 'Measure Lactate Level';
var p1q3q2 = 'Obtain Blood Cultures prior to administration of antibiotics';
var p1q3q3 = 'Administer broad spectrum antibiotics';
var p1q3q4 = 'Administer 30 ml/kg crystalloid for hypotension or lactate >= 4mmol/L';
var p1q3q5 = 'Patient has persistent hypotension despite volume resuscitation or initial lactate >=4';

class SepsisStepThree extends Component {
  
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
                    <TouchableHighlight onPress={ this.navigate.bind(this, 'SepsisThree') } style={s.backButton}>
                        <Image
                          source={require('../assets/icons/backArrow.png')}
                        />
                    </TouchableHighlight>
                </View>
                <View style={s.buttonWrapTitle}>
                    <Text style={s.title}>Treatment</Text>
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
                <Text style={s.optionSetTitle}>{p1q3q1}</Text>
            </View>
            <Form ref='lactateLevel' style={s.optionSetInputYN}>
              <View style={s.yesNoContainer}>
                <Text style={s.yesNo}>No</Text>
                <SwitchField label='' ref="lactateLevel"/>
                <Text style={s.yesNo}>Yes</Text>
              </View>
            </Form>
            <View style={s.optionSetContainer}>
                <Text style={s.optionSetTitle}>{p1q3q2}</Text>
            </View>
            <Form ref='bloodCultures' style={s.optionSetInputYN}>
              <View style={s.yesNoContainer}>
                <Text style={s.yesNo}>No</Text>
                <SwitchField label='' ref="bloodCultures"/>
                <Text style={s.yesNo}>Yes</Text>
              </View>
            </Form>
            <View style={s.optionSetContainer}>
                <Text style={s.optionSetTitle}>{p1q3q3}</Text>
            </View>
            <Form ref='broadSpectrumAntibiotics' style={s.optionSetInputYN}>
              <View style={s.yesNoContainer}>
                <Text style={s.yesNo}>No</Text>
                <SwitchField label='' ref="broadSpectrumAntibiotics"/>
                <Text style={s.yesNo}>Yes</Text>
              </View>
            </Form>
            <View style={s.optionSetContainer}>
                <Text style={s.optionSetTitle}>{p1q3q4}</Text>
            </View>
            <Form ref='crystalloidHypotension' style={s.optionSetInputYN}>
              <View style={s.yesNoContainer}>
                <Text style={s.yesNo}>No</Text>
                <SwitchField label='' ref="crystalloidHypotension"/>
                <Text style={s.yesNo}>Yes</Text>
              </View>
            </Form>
            <View style={s.optionSetContainer}>
                <Text style={s.optionSetTitle}>{p1q3q5}</Text>
            </View>
            <Form ref='persistentHypotension' style={s.optionSetInputYN}>
              <View style={s.yesNoContainer}>
                <Text style={s.yesNo}>No</Text>
                <SwitchField label='' ref="persistentHypotension"/>
                <Text style={s.yesNo}>Yes</Text>
              </View>
            </Form>
            <TouchableHighlight onPress={ this.navigate.bind(this, 'endEvent') } style={s.buttonBlue}>
                    <Text style={s.whiteText}>Continue</Text>
                </TouchableHighlight>
          </ScrollView>
        </View>

        
        
        
        
        
        
        <View style={s.footerwrapper}>
            <View style={s.footernavigation}>
                <View style={s.buttonWrap}>
                    <TouchableHighlight onPress={ this.navigate.bind(this, 'SepsisThree') } style={s.buttonbottomActive}>
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

export default SepsisStepThree

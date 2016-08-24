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

var p1NIq1 = 'Acute Myocardial Infraction';
var p1NIq2 = 'Acute Pulmonary Embolism';
var p1NIq3 = 'Adrenal Insuddiciency';
var p1NIq4 = 'Anaphylaxis';
var p1NIq5 = 'Aspiration';
var p1NIq6 = 'Autoimmune Disease with Exacerbation';
var p1NIq7 = 'Systemic Vasculitis';
var p1NIq8 = 'Burns';
var p1NIq9 = 'Cardiomic Shock';
var p1NIq10 = 'DKA';
var p1NIq11 = 'Drug Overdose';
var p1NIq12 = 'Hemorrhagic Shock';
var p1NIq13 = 'Pancreatitis';
var p1NIq14 = 'Peri-operative Period';
var p1NIq15 = 'Trauma';


class NonInfectiousSIRS extends Component {
  
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
                    <TouchableHighlight onPress={ this.navigate.bind(this, 'SepsisSplitOne') } style={s.backButton}>
                        <Image
                          source={require('../assets/icons/backArrow.png')}
                        />
                    </TouchableHighlight>
                </View>
                <View style={s.buttonWrapTitle}>
                    <Text style={s.title}>Evaluation</Text>
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
                
                <View style={s.optionSetContainerNoBorder}>
                    <Text style={s.optionSetTitle}>This patient has non-infectious SIRS</Text>
                    <Text style={s.optionSetTitle}>Select any causes that apply:</Text>
                </View>
            
            
                <View style={s.optionSetContainer}>
                    <Text style={s.optionSetTitle}>{p1NIq1}</Text>
                </View>
                <Form ref='acuteMyocardialInfraction' style={s.optionSetInputYN}>
                  <View style={s.yesNoContainer}>
                    <Text style={s.yesNo}>No</Text>
                    <SwitchField label='' ref="acuteMyocardialInfraction"/>
                    <Text style={s.yesNo}>Yes</Text>
                  </View>
                </Form>
                
                <View style={s.optionSetContainer}>
                    <Text style={s.optionSetTitle}>{p1NIq2}</Text>
                </View>
                <Form ref='acutePulmonaryEmbolism' style={s.optionSetInputYN}>
                  <View style={s.yesNoContainer}>
                    <Text style={s.yesNo}>No</Text>
                    <SwitchField label='' ref="acutePulmonaryEmbolism"/>
                    <Text style={s.yesNo}>Yes</Text>
                  </View>
                </Form>
                
                <View style={s.optionSetContainer}>
                    <Text style={s.optionSetTitle}>{p1NIq3}</Text>
                </View>
                <Form ref='adrenalInsuddiciency' style={s.optionSetInputYN}>
                  <View style={s.yesNoContainer}>
                    <Text style={s.yesNo}>No</Text>
                    <SwitchField label='' ref="adrenalInsuddiciency"/>
                    <Text style={s.yesNo}>Yes</Text>
                  </View>
                </Form>
                
                <View style={s.optionSetContainer}>
                    <Text style={s.optionSetTitle}>{p1NIq4}</Text>
                </View>
                <Form ref='anaphylaxis' style={s.optionSetInputYN}>
                  <View style={s.yesNoContainer}>
                    <Text style={s.yesNo}>No</Text>
                    <SwitchField label='' ref="anaphylaxis"/>
                    <Text style={s.yesNo}>Yes</Text>
                  </View>
                </Form>
                
                <View style={s.optionSetContainer}>
                    <Text style={s.optionSetTitle}>{p1NIq5}</Text>
                </View>
                <Form ref='aspiration' style={s.optionSetInputYN}>
                  <View style={s.yesNoContainer}>
                    <Text style={s.yesNo}>No</Text>
                    <SwitchField label='' ref="aspiration"/>
                    <Text style={s.yesNo}>Yes</Text>
                  </View>
                </Form>
                
                <View style={s.optionSetContainer}>
                    <Text style={s.optionSetTitle}>{p1NIq6}</Text>
                </View>
                <Form ref='autoimmuneDiseaseExacerbation' style={s.optionSetInputYN}>
                  <View style={s.yesNoContainer}>
                    <Text style={s.yesNo}>No</Text>
                    <SwitchField label='' ref="autoimmuneDiseaseExacerbation"/>
                    <Text style={s.yesNo}>Yes</Text>
                  </View>
                </Form>
                
                <View style={s.optionSetContainer}>
                    <Text style={s.optionSetTitle}>{p1NIq7}</Text>
                </View>
                <Form ref='systemicVasculitis' style={s.optionSetInputYN}>
                  <View style={s.yesNoContainer}>
                    <Text style={s.yesNo}>No</Text>
                    <SwitchField label='' ref="systemicVasculitis"/>
                    <Text style={s.yesNo}>Yes</Text>
                  </View>
                </Form>
                
                <View style={s.optionSetContainer}>
                    <Text style={s.optionSetTitle}>{p1NIq8}</Text>
                </View>
                <Form ref='burns' style={s.optionSetInputYN}>
                  <View style={s.yesNoContainer}>
                    <Text style={s.yesNo}>No</Text>
                    <SwitchField label='' ref="burns"/>
                    <Text style={s.yesNo}>Yes</Text>
                  </View>
                </Form>
                
                <View style={s.optionSetContainer}>
                    <Text style={s.optionSetTitle}>{p1NIq9}</Text>
                </View>
                <Form ref='cardiomicShock' style={s.optionSetInputYN}>
                  <View style={s.yesNoContainer}>
                    <Text style={s.yesNo}>No</Text>
                    <SwitchField label='' ref="cardiomicShock"/>
                    <Text style={s.yesNo}>Yes</Text>
                  </View>
                </Form>
                
                <View style={s.optionSetContainer}>
                    <Text style={s.optionSetTitle}>{p1NIq10}</Text>
                </View>
                <Form ref='DKA' style={s.optionSetInputYN}>
                  <View style={s.yesNoContainer}>
                    <Text style={s.yesNo}>No</Text>
                    <SwitchField label='' ref="DKA"/>
                    <Text style={s.yesNo}>Yes</Text>
                  </View>
                </Form>
                
                <View style={s.optionSetContainer}>
                    <Text style={s.optionSetTitle}>{p1NIq11}</Text>
                </View>
                <Form ref='drugOverdose' style={s.optionSetInputYN}>
                  <View style={s.yesNoContainer}>
                    <Text style={s.yesNo}>No</Text>
                    <SwitchField label='' ref="drugOverdose"/>
                    <Text style={s.yesNo}>Yes</Text>
                  </View>
                </Form>
                
                <View style={s.optionSetContainer}>
                    <Text style={s.optionSetTitle}>{p1NIq12}</Text>
                </View>
                <Form ref='hemorrhagicShock' style={s.optionSetInputYN}>
                  <View style={s.yesNoContainer}>
                    <Text style={s.yesNo}>No</Text>
                    <SwitchField label='' ref="hemorrhagicShock"/>
                    <Text style={s.yesNo}>Yes</Text>
                  </View>
                </Form>
                
                <View style={s.optionSetContainer}>
                    <Text style={s.optionSetTitle}>{p1NIq13}</Text>
                </View>
                <Form ref='pancreatitis' style={s.optionSetInputYN}>
                  <View style={s.yesNoContainer}>
                    <Text style={s.yesNo}>No</Text>
                    <SwitchField label='' ref="pancreatitis"/>
                    <Text style={s.yesNo}>Yes</Text>
                  </View>
                </Form>
                
                <View style={s.optionSetContainer}>
                    <Text style={s.optionSetTitle}>{p1NIq14}</Text>
                </View>
                <Form ref='periOperativePeriod' style={s.optionSetInputYN}>
                  <View style={s.yesNoContainer}>
                    <Text style={s.yesNo}>No</Text>
                    <SwitchField label='' ref="periOperativePeriod"/>
                    <Text style={s.yesNo}>Yes</Text>
                  </View>
                </Form>
                
                <View style={s.optionSetContainer}>
                    <Text style={s.optionSetTitle}>{p1NIq15}</Text>
                </View>
                <Form ref='trauma' style={s.optionSetInputYN}>
                  <View style={s.yesNoContainer}>
                    <Text style={s.yesNo}>No</Text>
                    <SwitchField label='' ref="trauma"/>
                    <Text style={s.yesNo}>Yes</Text>
                  </View>
                </Form>
                
                
                <TouchableHighlight onPress={ this.navigate.bind(this, 'SepsisResults') } style={s.buttonBlue}>
                    <Text style={s.whiteText}>Continue</Text>
                </TouchableHighlight>
              </ScrollView>
        </View>

        
        
        
        
        
        
        <View style={s.footerwrapper}>
            <View style={s.footernavigation}>
                <View style={s.buttonWrap}>
                    <TouchableHighlight onPress={ this.navigate.bind(this, 'SepsisOne') } style={s.buttonbottomActive}>
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

export default NonInfectiousSIRS

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

var p1iSq1 = 'Pneumonia';
var p1iSq2 = 'Empyema';
var p1iSq3 = 'Abscess';
var p1iSq4 = 'Indwelling lines';
var p1iSq5 = 'Endocarditis';
var p1iSq6 = 'Abscess';
var p1iSq7 = 'Peritonitis';
var p1iSq8 = 'Appendicitis';
var p1iSq9 = 'Cholecystutus';
var p1iSq10 = 'Bowel Rupture';
var p1iSq11 = 'Clostridium difficile';
var p1iSq12 = 'Indwelling foley';
var p1iSq13 = 'UTI';
var p1iSq14 = 'Pyelonephritis';
var p1iSq15 = 'PID';
var p1iSq16 = 'Toxic Shock Syndrome';
var p1iSq17 = 'Meningitis';
var p1iSq18 = 'Encephalitis';


class InfectiousSIRS extends Component {

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
                    <TouchableHighlight onPress={ this.navigate.bind(this, 'SepsisTwo') } style={s.backButton}>
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
            
                <View style={s.optionSetContainerNoBorder}>
                    <Text style={s.optionSetTitle}>This patient has Sepsis</Text>
                    <Text style={s.optionSetTitle}>Select any causes that apply:</Text>
                </View>
                
                
                
                
                <View style={s.optionSetContainerFullBorder}>
                    <Text style={s.headingTitle}>Respiratory</Text>
                </View>
                <View style={s.optionSetContainer}>
                    <Text style={s.optionSetTitle}>{p1iSq1}</Text>
                </View>
                <Form ref='pneumonia' style={s.optionSetInputYN}>
                  <View style={s.yesNoContainer}>
                    <Text style={s.yesNo}>No</Text>
                    <SwitchField label="" ref="pneumonia"/>
                    <Text style={s.yesNo}>Yes</Text>
                  </View>
                </Form>
                
                <View style={s.optionSetContainer}>
                    <Text style={s.optionSetTitle}>{p1iSq2}</Text>
                </View>
                <Form ref='empyema' style={s.optionSetInputYN}>
                  <View style={s.yesNoContainer}>
                    <Text style={s.yesNo}>No</Text>
                    <SwitchField label='' ref="empyema"/>
                    <Text style={s.yesNo}>Yes</Text>
                  </View>
                </Form>
                
                <View style={s.optionSetContainer}>
                    <Text style={s.optionSetTitle}>{p1iSq3}</Text>
                </View>
                <Form ref='abscess' style={s.optionSetInputYN}>
                  <View style={s.yesNoContainer}>
                    <Text style={s.yesNo}>No</Text>
                    <SwitchField label='' ref="abscess"/>
                    <Text style={s.yesNo}>Yes</Text>
                  </View>
                </Form>
                
                
                
                
                
                <View style={s.optionSetContainerFullBorder}>
                    <Text style={s.headingTitle}>Cardiovascular</Text>
                </View>
                <View style={s.optionSetContainer}>
                    <Text style={s.optionSetTitle}>{p1iSq4}</Text>
                </View>
                <Form ref='indwellingLines' style={s.optionSetInputYN}>
                  <View style={s.yesNoContainer}>
                    <Text style={s.yesNo}>No</Text>
                    <SwitchField label='' ref="indwellingLines"/>
                    <Text style={s.yesNo}>Yes</Text>
                  </View>
                </Form>
                
                <View style={s.optionSetContainer}>
                    <Text style={s.optionSetTitle}>{p1iSq5}</Text>
                </View>
                <Form ref='endocarditis' style={s.optionSetInputYN}>
                  <View style={s.yesNoContainer}>
                    <Text style={s.yesNo}>No</Text>
                    <SwitchField label='' ref="endocarditis"/>
                    <Text style={s.yesNo}>Yes</Text>
                  </View>
                </Form>
                
                
                
                
                
                
                <View style={s.optionSetContainerFullBorder}>
                    <Text style={s.headingTitle}>Abdominal</Text>
                </View>
                <View style={s.optionSetContainer}>
                    <Text style={s.optionSetTitle}>{p1iSq6}</Text>
                </View>
                <Form ref='abscess' style={s.optionSetInputYN}>
                  <View style={s.yesNoContainer}>
                    <Text style={s.yesNo}>No</Text>
                    <SwitchField label='' ref="abscess"/>
                    <Text style={s.yesNo}>Yes</Text>
                  </View>
                </Form>
                
                <View style={s.optionSetContainer}>
                    <Text style={s.optionSetTitle}>{p1iSq7}</Text>
                </View>
                <Form ref='peritonitis' style={s.optionSetInputYN}>
                  <View style={s.yesNoContainer}>
                    <Text style={s.yesNo}>No</Text>
                    <SwitchField label='' ref="peritonitis"/>
                    <Text style={s.yesNo}>Yes</Text>
                  </View>
                </Form>
                
                <View style={s.optionSetContainer}>
                    <Text style={s.optionSetTitle}>{p1iSq8}</Text>
                </View>
                <Form ref='appendicitis' style={s.optionSetInputYN}>
                  <View style={s.yesNoContainer}>
                    <Text style={s.yesNo}>No</Text>
                    <SwitchField label='' ref="appendicitis"/>
                    <Text style={s.yesNo}>Yes</Text>
                  </View>
                </Form>
                
                <View style={s.optionSetContainer}>
                    <Text style={s.optionSetTitle}>{p1iSq9}</Text>
                </View>
                <Form ref='cholecystutus' style={s.optionSetInputYN}>
                  <View style={s.yesNoContainer}>
                    <Text style={s.yesNo}>No</Text>
                    <SwitchField label='' ref="cholecystutus"/>
                    <Text style={s.yesNo}>Yes</Text>
                  </View>
                </Form>
                
                <View style={s.optionSetContainer}>
                    <Text style={s.optionSetTitle}>{p1iSq10}</Text>
                </View>
                <Form ref='bowelRupture' style={s.optionSetInputYN}>
                  <View style={s.yesNoContainer}>
                    <Text style={s.yesNo}>No</Text>
                    <SwitchField label='' ref="bowelRupture"/>
                    <Text style={s.yesNo}>Yes</Text>
                  </View>
                </Form>
                
                <View style={s.optionSetContainer}>
                    <Text style={s.optionSetTitle}>{p1iSq11}</Text>
                </View>
                <Form ref='clostridiumDifficile' style={s.optionSetInputYN}>
                  <View style={s.yesNoContainer}>
                    <Text style={s.yesNo}>No</Text>
                    <SwitchField label='' ref="clostridiumDifficile"/>
                    <Text style={s.yesNo}>Yes</Text>
                  </View>
                </Form>
                
                
                
                
                
                <View style={s.optionSetContainerFullBorder}>
                    <Text style={s.headingTitle}>Urinary</Text>
                </View>
                <View style={s.optionSetContainer}>
                    <Text style={s.optionSetTitle}>{p1iSq12}</Text>
                </View>
                <Form ref='indwellingFoley' style={s.optionSetInputYN}>
                  <View style={s.yesNoContainer}>
                    <Text style={s.yesNo}>No</Text>
                    <SwitchField label='' ref="indwellingFoley"/>
                    <Text style={s.yesNo}>Yes</Text>
                  </View>
                </Form>
                
                <View style={s.optionSetContainer}>
                    <Text style={s.optionSetTitle}>{p1iSq13}</Text>
                </View>
                <Form ref='UTI' style={s.optionSetInputYN}>
                  <View style={s.yesNoContainer}>
                    <Text style={s.yesNo}>No</Text>
                    <SwitchField label='' ref="UTI"/>
                    <Text style={s.yesNo}>Yes</Text>
                  </View>
                </Form>
                
                <View style={s.optionSetContainer}>
                    <Text style={s.optionSetTitle}>{p1iSq14}</Text>
                </View>
                <Form ref='pyelonephritis' style={s.optionSetInputYN}>
                  <View style={s.yesNoContainer}>
                    <Text style={s.yesNo}>No</Text>
                    <SwitchField label='' ref="pyelonephritis"/>
                    <Text style={s.yesNo}>Yes</Text>
                  </View>
                </Form>
                
                
                
                
                <View style={s.optionSetContainerFullBorder}>
                    <Text style={s.headingTitle}>Gynecologic</Text>
                </View>
                <View style={s.optionSetContainer}>
                    <Text style={s.optionSetTitle}>{p1iSq15}</Text>
                </View>
                <Form ref='PID' style={s.optionSetInputYN}>
                  <View style={s.yesNoContainer}>
                    <Text style={s.yesNo}>No</Text>
                    <SwitchField label='' ref="PID"/>
                    <Text style={s.yesNo}>Yes</Text>
                  </View>
                </Form>
                
                <View style={s.optionSetContainer}>
                    <Text style={s.optionSetTitle}>{p1iSq16}</Text>
                </View>
                <Form ref='toxicShockSyndrome' style={s.optionSetInputYN}>
                  <View style={s.yesNoContainer}>
                    <Text style={s.yesNo}>No</Text>
                    <SwitchField label='' ref="toxicShockSyndrome"/>
                    <Text style={s.yesNo}>Yes</Text>
                  </View>
                </Form>
                
                
                
                
                
                <View style={s.optionSetContainerFullBorder}>
                    <Text style={s.headingTitle}>CNS</Text>
                </View>
                <View style={s.optionSetContainer}>
                    <Text style={s.optionSetTitle}>{p1iSq17}</Text>
                </View>
                <Form ref='meningitis' style={s.optionSetInputYN}>
                  <View style={s.yesNoContainer}>
                    <Text style={s.yesNo}>No</Text>
                    <SwitchField label='' ref="meningitis"/>
                    <Text style={s.yesNo}>Yes</Text>
                  </View>
                </Form>
                
                <View style={s.optionSetContainer}>
                    <Text style={s.optionSetTitle}>{p1iSq18}</Text>
                </View>
                <Form ref='encephalitis' style={s.optionSetInputYN}>
                  <View style={s.yesNoContainer}>
                    <Text style={s.yesNo}>No</Text>
                    <SwitchField label='' ref="encephalitis"/>
                    <Text style={s.yesNo}>Yes</Text>
                  </View>
                </Form>
                
                
                
                <TouchableHighlight onPress={ this.navigate.bind(this, 'VolumeStatus') } style={s.buttonBlue}>
                    <Text style={s.whiteText}>Continue</Text>
                </TouchableHighlight>
              </ScrollView>
            
        </View>

        
        
        
        
        
        
        <View style={s.footerwrapper}>
            <View style={s.footernavigation}>
                <View style={s.buttonWrap}>
                    <TouchableHighlight onPress={ this.navigate.bind(this, 'SepsisTwo') } style={s.buttonbottomActive}>
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

export default InfectiousSIRS

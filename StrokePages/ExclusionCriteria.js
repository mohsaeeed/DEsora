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
  TouchableOpacity,
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

var p2eCq1 = 'Head Trauma, Neuro Surgery';
var p2eCq1a = 'Head Trauma, neurologic surgery, intreacranial or instraspinal, or prior stroke in previous 3 months';
var p2eCq2 = 'Arterial Puncture';
var p2eCq2a = 'Arterial puncture at a non-compressible site in previous 7 days';
var p2eCq3 = 'Uncontrolled HTN UNDER 185 or 110 DBP';
var p2eCq4 = 'Active Bleeding';
var p2eCq5 = 'Hx of previous Hemorrhage';
var p2eCq5a = 'Hx of previous Intracranial Hemorrhage / Intracranial Neoplasm / Av malformation or aneurysm';
var p2eCq6 = 'None of the above are present';



class InclusionCriteria extends Component {
  
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
                    <TouchableHighlight onPress={ this.navigate.bind(this, 'IVTPA') } style={s.backButton}>
                        <Image
                          source={require('../assets/icons/backArrow.png')}
                        />
                    </TouchableHighlight>
                </View>
                <View style={s.buttonWrapTitle}>
                    <Text style={s.title}>Exclusion Criteria</Text>
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
            <ScrollView style={s.gridTainer}>
            
                <View style={s.optionSetContainer}>
                    <Text style={s.optionSetTitle}>{p2eCq1}</Text>
                    <Text style={s.minorText}>{p2eCq1a}</Text>
                </View>
                <Form ref='headTrauma' style={s.optionSetInputYN}>
                  <View style={s.yesNoContainer}>
                    <Text style={s.yesNo}>No</Text>
                    <SwitchField label='' ref="headTrauma"/>
                    <Text style={s.yesNo}>Yes</Text>
                  </View>
                </Form>
                
                <View style={s.optionSetContainer}>
                    <Text style={s.optionSetTitle}>{p2eCq2}</Text>
                    <Text style={s.minorText}>{p2eCq2a}</Text>
                </View>
                <Form ref='arterialPuncture' style={s.optionSetInputYN}>
                  <View style={s.yesNoContainer}>
                    <Text style={s.yesNo}>No</Text>
                    <SwitchField label='' ref="arterialPuncture"/>
                    <Text style={s.yesNo}>Yes</Text>
                  </View>
                </Form>
                
                <View style={s.optionSetContainer}>
                    <Text style={s.optionSetTitle}>{p2eCq3}</Text>
                </View>
                <Form ref='htnDBP' style={s.optionSetInputYN}>
                  <View style={s.yesNoContainer}>
                    <Text style={s.yesNo}>No</Text>
                    <SwitchField label='' ref="htnDBP"/>
                    <Text style={s.yesNo}>Yes</Text>
                  </View>
                </Form>
                
                <View style={s.optionSetContainer}>
                    <Text style={s.optionSetTitle}>{p2eCq4}</Text>
                </View>
                <Form ref='activeBleeding' style={s.optionSetInputYN}>
                  <View style={s.yesNoContainer}>
                    <Text style={s.yesNo}>No</Text>
                    <SwitchField label='' ref="activeBleeding"/>
                    <Text style={s.yesNo}>Yes</Text>
                  </View>
                </Form>
                
                <View style={s.optionSetContainer}>
                    <Text style={s.optionSetTitle}>{p2eCq5}</Text>
                    <Text style={s.minorText}>{p2eCq5a}</Text>
                </View>
                <Form ref='hxHemorrhage' style={s.optionSetInputYN}>
                  <View style={s.yesNoContainer}>
                    <Text style={s.yesNo}>No</Text>
                    <SwitchField label='' ref="hxHemorrhage"/>
                    <Text style={s.yesNo}>Yes</Text>
                  </View>
                </Form>
                
                <View style={s.optionSetContainer}>
                    <Text style={s.optionSetTitle}>{p2eCq5}</Text>
                    <Text style={s.minorText}>{p2eCq5a}</Text>
                </View>
                <Form ref='nonePresent' style={s.optionSetInputYN}>
                  <View style={s.yesNoContainer}>
                    <Text style={s.yesNo}>No</Text>
                    <SwitchField label='' ref="nonePresent"/>
                    <Text style={s.yesNo}>Yes</Text>
                  </View>
                </Form>
                
                
            </ScrollView>
        </View>
        
    </View>
    );
  }
}

const styles = StyleSheet.create({
  
});

export default InclusionCriteria

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

var p2iCq1 = 'Diagnosis of Ischemic Stroke';
var p2iCq1a = 'Diagnosis of Ischemic Sroke causing measurable neurological deficits';
var p2iCq2 = 'Onset of symtoms UNDER 4.5 hours';
var p2iCq2a = 'Onset of symtoms are less than 4.5 hours';
var p2iCq3 = 'Age OVER 18 years old';


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
                    <Text style={s.title}>Inclusion Criteria</Text>
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
                    <Text style={s.optionSetTitle}>{p2iCq1}</Text>
                    <Text style={s.minorText}>{p2iCq1a}</Text>
                </View>
                <Form ref='diagnosisIschemic' style={s.optionSetInputYN}>
                  <View style={s.yesNoContainer}>
                    <Text style={s.yesNo}>No</Text>
                    <SwitchField label='' ref="diagnosisIschemic"/>
                    <Text style={s.yesNo}>Yes</Text>
                  </View>
                </Form>
                <View style={s.optionSetContainer}>
                    <Text style={s.optionSetTitle}>{p2iCq2}</Text>
                    <Text style={s.minorText}>{p2iCq2a}</Text>
                </View>
                <Form ref='ageOverEighteen' style={s.optionSetInputYN}>
                  <View style={s.yesNoContainer}>
                    <Text style={s.yesNo}>No</Text>
                    <SwitchField label='' ref="ageOverEighteen"/>
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

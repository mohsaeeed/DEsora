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

var p2Niq1 = 'CT Angio/CT Perfusion';
var p2Niq2 = 'Contact teriary care center or Interventionalist';
var p2Niq3 = 'Angiogram with Large Vessel Neuro-Intervention';
var p2Niq3r = 'Patient needs to be admitted to the ICU for close monitoring';

class NonIVTPA extends Component {
  
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
            
                <TouchableOpacity onPress={ this.navigate.bind(this, 'CTAngio') } style={s.optionButton}>
                    <Text style={s.optionText}>{p2Niq1}</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={ this.navigate.bind(this, 'Tertiary') } style={s.optionButton}>
                    <Text style={s.optionText}>{p2Niq2}</Text>
                </TouchableOpacity>
                
                <View style={s.optionSetContainer}>
                    <Text style={s.optionSetTitle}>{p2Niq3}</Text>
                </View>
                <Form ref='angiogram' style={s.optionSetInputYN}>
                  <View style={s.yesNoContainer}>
                    <Text style={s.yesNo}>No</Text>
                    <SwitchField label='' ref="angiogram"/>
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

export default NonIVTPA

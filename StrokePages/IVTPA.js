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

var p2iVq1 = 'Stroke has lasted UNDER 4.5 hours';
var p2iVq2 = 'Stroke has lasted between 3 - 4.5 hours';
var p2iVq3 = 'Inclusion Criteria';
var p2iVq3r = 'Not Completed';
var p2iVq4 = 'Exclusion Criteria';
var p2iVq4r = 'Not Completed';
var p2iVq5 = 'Relative Exclusion Criteria';
var p2iVq5r = 'Not Completed';
var p2iVq6 = 'Neurologist Consult';
var p2iVq6r = 'Not Completed';

class IVTPA extends Component {
  
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
                    <TouchableHighlight onPress={ this.navigate.bind(this, 'StrokeStepFour') } style={s.backButton}>
                        <Image
                          source={require('../assets/icons/backArrow.png')}
                        />
                    </TouchableHighlight>
                </View>
                <View style={s.buttonWrapTitle}>
                    <Text style={s.title}>IV TPA</Text>
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
                    <Text style={s.optionSetTitle}>{p2iVq1}</Text>
                </View>
                <Form ref='strokeLessThan' style={s.optionSetInputYN}>
                  <View style={s.yesNoContainer}>
                    <Text style={s.yesNo}>No</Text>
                    <SwitchField label='' ref="strokeLessThan"/>
                    <Text style={s.yesNo}>Yes</Text>
                  </View>
                </Form>
                <View style={s.optionSetContainer}>
                    <Text style={s.optionSetTitle}>{p2iVq2}</Text>
                </View>
                <Form ref='strokeBetween' style={s.optionSetInputYN}>
                  <View style={s.yesNoContainer}>
                    <Text style={s.yesNo}>No</Text>
                    <SwitchField label='' ref="strokeBetween"/>
                    <Text style={s.yesNo}>Yes</Text>
                  </View>
                </Form>
                
                <TouchableOpacity onPress={ this.navigate.bind(this, 'InclusionCriteria') } style={s.optionButtonSplit}>
                    <Text style={s.optionTextLeft}>{p2iVq3}</Text>
                    <Text style={s.optionTextRight}>{p2iVq3r}</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={ this.navigate.bind(this, 'ExclusionCriteria') } style={s.optionButtonSplit}>
                    <Text style={s.optionTextLeft}>{p2iVq4}</Text>
                    <Text style={s.optionTextRight}>{p2iVq4r}</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={ this.navigate.bind(this, 'RelativeExclusionCriteria') } style={s.optionButtonSplit}>
                    <Text style={s.optionTextLeft}>{p2iVq5}</Text>
                    <Text style={s.optionTextRight}>{p2iVq5r}</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={ this.navigate.bind(this, 'NeurologistConsult') } style={s.optionButtonSplit}>
                    <Text style={s.optionTextLeft}>{p2iVq6}</Text>
                    <Text style={s.optionTextRight}>{p2iVq6r}</Text>
                </TouchableOpacity>
                
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

export default IVTPA

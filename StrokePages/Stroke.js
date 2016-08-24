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
  View
} from 'react-native';

// Global Stylesheet
var s = require('../global/style');

var StrokeStepOneCompletion =  '0/4';
var StrokeStepTwoCompletion =  '0/15';
var StrokeStepThreeCompletion =  '0/5';
var StrokeStepFourCompletion =  '0/5';
var StrokeStepFiveCompletion =  '0/15';

class Stroke extends Component {
  
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
            <TouchableOpacity onPress={ this.navigate.bind(this, 'StrokeStepOne') } style={s.optionButton}>
                <Text style={s.optionText}>Diagnosis for Stroke</Text>
                <Text style={s.minorText}>{StrokeStepOneCompletion}</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={ this.navigate.bind(this, 'StrokeStepTwo') } style={s.optionButton}>
                <Text style={s.optionText}>Pre-Treatment NIH Score</Text>
                <Text style={s.minorText}>{StrokeStepTwoCompletion}</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={ this.navigate.bind(this, 'StrokeStepThree') } style={s.optionButton}>
                <Text style={s.optionText}>Step 3: Lab & Radiology</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={ this.navigate.bind(this, 'StrokeStepFour') } style={s.optionButton}>
                <Text style={s.optionText}>Step 4: Treatment Options</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={ this.navigate.bind(this, 'StrokeStepFive') } style={s.optionButton}>
                <Text style={s.optionText}>Step 5: Post-Treatment NIH Score</Text>
            </TouchableOpacity>
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

export default Stroke

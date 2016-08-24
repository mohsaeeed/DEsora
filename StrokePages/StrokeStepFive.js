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


var p2q5q1 = '1. Level of Consciousness';
var p2q5q2 = '2. Month and Age';
var p2q5q3 = '3. Blink Eyes and Squeeze Hands';
var p2q5q4 = '4. Horizontal Extra-Ocular Movements';
var p2q5q5 = '5. Visual Fields';
var p2q5q6 = '6. Facial Palsy';
var p2q5q7 = '7. Left Arm Motor Drift';
var p2q5q8 = '8. Right Arm Motor Drift';
var p2q5q9 = '9. Left Leg Motor Drift';
var p2q5q10 = '10. Right Leg Motor Drift';
var p2q5q11 = '11. Limb Ataxia';
var p2q5q12 = '12. Sensation';
var p2q5q13 = '13. Language/Aphasia';
var p2q5q14 = '14. Dysarthria';
var p2q5q15 = '15. Extinction/Inattention';


class StrokeStepFive extends Component {
  
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
            <Form ref="conciousLevel" style={s.pickerTainer}>
              <PickerField ref='conciousLevel' placeholder='+0' value="+0" label={p2q5q1} style={s.optionText}
                  options={{
                    0: 'Alert Keenly Responsive +0',
                    1: 'Arouses to Minor Stimulation +1',
                    2: 'Requires Repeated Stimulation to Arouse +2',
                    3: 'Movements to Pain, Postured or Un-responsive +3'
                  }}
              />
            </Form>
            <Form ref="monthAge" style={s.pickerTainer}>
              <PickerField ref='monthAge' placeholder='+0' value="+0" label={p2q5q2} style={s.optionText}
                  options={{
                    0: 'Both questions right +0',
                    1: '1 question right +1',
                    2: '0 questions right +2',
                    3: 'Disarthric/Intubated/Language Barrier +1',
                    4: 'Aphasic +2'
                  }}
              />
            </Form>
            <Form ref="blinkSqueeze" style={s.pickerTainer}>
              <PickerField ref='blinkSqueeze' placeholder='+0' value="+0" label={p2q5q3} style={s.optionText}
                  options={{
                    0: 'Performs both tasks +0',
                    1: 'Peforms 1 task +1',
                    2: 'Performs 0 tasks +2',
                  }}
              />
            </Form>
            <Form ref="ocular" style={s.pickerTainer}>
              <PickerField ref='ocular' placeholder='+0' value="+0" label={p2q5q4} style={s.optionText}
                  options={{
                    0: 'Normal +0',
                    1: 'Partial Gaze Palsy: Can Be Overcome +1',
                    2: 'Partial Gaze Palsy: Corrects with Oculecephalic Reflex +1',
                    3: 'Forced Gaze: Cannot Be Overcome +1'
                  }}
              />
            </Form>
            <Form ref="visualFields" style={s.pickerTainer}>
              <PickerField ref='visualFields' placeholder='+0' value="+0" label={p2q5q5} style={s.optionText}
                  options={{
                    0: 'No visual loss +0',
                    1: 'Partial hemianopia +1',
                    2: 'Complete hemianopia +2',
                    3: 'Patient is blaterally blind +3'
                  }}
              />
            </Form>
            <Form ref="facialPalsy" style={s.pickerTainer}>
              <PickerField ref='facialPalsy' placeholder='+0' value="+0" label={p2q5q6} style={s.optionText}
                  options={{
                    0: 'Normal symmetry +0',
                    1: 'Minor paralysis +1',
                    2: 'Partial paralysis +2',
                    3: 'Unilateral complete paralysis +3',
                    4: 'Bilateral complete paralysis +3'
                  }}
              />
            </Form>
            <Form ref="leftArm" style={s.pickerTainer}>
              <PickerField ref='leftArm' placeholder='+0' value="+0" label={p2q5q7} style={s.optionText}
                  options={{
                    0: 'No drift for 10 seconds +0',
                    1: "Drift but doesn't hit bed +1",
                    2: 'Drift hits bed +2',
                    3: 'Some efforts against gravity +2',
                    4: 'No effort against gravity +3',
                    5: 'No movement +4',
                    6: 'Amputation/joint fusion +0'
                  }}
              />
            </Form>
            <Form ref="rightArm" style={s.pickerTainer}>
              <PickerField ref='rightArm' placeholder='+0' value="+0" label={p2q5q8} style={s.optionText}
                  options={{
                    0: 'No drift for 10 seconds +0',
                    1: "Drift but doesn't hit bed +1",
                    2: 'Drift hits bed +2',
                    3: 'Some efforts against gravity +2',
                    4: 'No effort against gravity +3',
                    5: 'No movement +4',
                    6: 'Amputation/joint fusion +0'
                  }}
              />
            </Form>
            <Form ref="leftLeg" style={s.pickerTainer}>
              <PickerField ref='leftLeg' placeholder='+0' value="+0" label={p2q5q9} style={s.optionText}
                  options={{
                    0: 'No drift for 10 seconds +0',
                    1: "Drift but doesn't hit bed +1",
                    2: 'Drift hits bed +2',
                    3: 'Some efforts against gravity +2',
                    4: 'No effort against gravity +3',
                    5: 'No movement +4',
                    6: 'Amputation/joint fusion +0'
                  }}
              />
            </Form>
            <Form ref="rightLeg" style={s.pickerTainer}>
              <PickerField ref='rightLeg' placeholder='+0' value="+0" label={p2q5q10} style={s.optionText}
                  options={{
                   0: 'No drift for 10 seconds +0',
                    1: "Drift but doesn't hit bed +1",
                    2: 'Drift hits bed +2',
                    3: 'Some efforts against gravity +2',
                    4: 'No effort against gravity +3',
                    5: 'No movement +4',
                    6: 'Amputation/joint fusion +0'
                  }}
              />
            </Form>
            <Form ref="limbAtaxia" style={s.pickerTainer}>
              <PickerField ref='limbAtaxia' placeholder='+0' value="+0" label={p2q5q11} style={s.optionText}
                  options={{
                    0: 'No ataxia +0',
                    1: 'Ataxia 1 limb +1',
                    2: 'Ataxia in 2 limbs +2',
                    3: 'Does not understand +0',
                    4: 'Paralyzed +0',
                    5: 'Amputation/joint fusion +0',
                  }}
              />
            </Form>
            <Form ref="sensation" style={s.pickerTainer}>
              <PickerField ref='sensation' placeholder='+0' value="+0" label={p2q5q12} style={s.optionText}
                  options={{
                    0: 'Normal: No Sensory Loss +0',
                    1: 'Mid-Moderate Loss: Less Sharp/More Dull +1',
                    2: 'Mild-Moderate Loss: Can Sense Being Touched +1',
                    3: 'Complete Loss: Cannot Sesnse Being Touched At All +2',
                    4: 'No Response and Quadraplegic +2',
                  }}
              />
            </Form>
            <Form ref="languageAphasia" style={s.pickerTainer}>
              <PickerField ref='languageAphasia' placeholder='+0' value="+0" label={p2q5q13} style={s.optionText}
                  options={{
                    0: 'Normal +0',
                    1: 'Mid-Moderate aphasia +1',
                    2: 'Severe aphasia+2',
                    3: 'Mute/global aphasia +3',
                    4: 'Coma/unresponsive +0',
                  }}
              />
            </Form>
            <Form ref="dysarthia" style={s.pickerTainer}>
              <PickerField ref='dysarthia' placeholder='+0' value="+0" label={p2q5q14} style={s.optionText}
                  options={{
                    0: 'Normal +0',
                    1: 'Mid-moderate dysarthria +1',
                    2: 'Severe dysarthria +2',
                    3: 'Mute/anartric +3',
                    4: 'Intubated/unable to test +0',
                  }}
              />
            </Form>
            <Form ref="extinctionInattention" style={s.pickerTainer}>
              <PickerField ref='extinctionInattention' placeholder='+0' value="+0" label={p2q5q15} style={s.optionText}
                  options={{
                    0: 'No abnormality +0',
                    1: 'Visual/tactile/auditory/spatial/personal inattention +1',
                    2: 'Extinction to bilateral simultaneous stimulation +1',
                    3: 'Profound hemi-attention +2',
                    4: 'Extinction to >1 modality +2',
                  }}
              />
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

export default StrokeStepFive

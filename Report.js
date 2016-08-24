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


// Global Stylesheet
var s = require('./global/style');



class Report extends Component {
  
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
                <View style={s.buttonWrap}>
                    <TouchableHighlight onPress={ this.navigate.bind(this, 'Main') } style={s.button}>
                        <Image
                          source={require('./assets/icons/backArrow.png')}
                        />
                    </TouchableHighlight>
                </View>
                <View style={s.buttonWrapTitle}>
                    <Text style={s.title}>Patient Report</Text>
                </View>
                <View style={s.buttonWrap}>
                    <TouchableHighlight onPress={ this.navigate.bind(this, 'Main') } style={s.button}>
                        <Image
                          source={require('./assets/icons/calculator.png')}
                        />
                    </TouchableHighlight>
                </View>
            </View>
        </View>
      
      
      
      
        
        
        
        <View style={s.contentwrapper}>
            <View style={s.timerWrap}>
              <View style={s.timerTextWrapperLeft}>
                  <Text style={s.timerText}>Arrival: 0:00</Text>
              </View>
              <View style={s.timerTextWrapper}>
                  <Text style={s.timerText}>Last Normal: 0:00</Text>
              </View>
            </View>
          <ScrollView style={s.gridTainer}>
            <View style={s.gridHeader}>
                <Text style={s.gridHeaderText}>Summary</Text>
            </View>
            <View style={s.grid}>    
                <View style={s.gridWide}>
                    <Text style={s.gridHeaderText}>Symptoms</Text>
                </View>
                <View style={s.gridThin}>
                    <Text style={s.gridText}> </Text>
                </View>
            </View>
            <View style={s.grid}>    
                <View style={s.gridWide}>
                    <Text style={s.gridText}>Facial Droop</Text>
                </View>
                <View style={s.gridThin}>
                    <Text style={s.gridText}>Y</Text>
                </View>
            </View>
            <View style={s.grid}>    
                <View style={s.gridWide}>
                    <Text style={s.gridText}>Arm/leg or unilateral weakness</Text>
                </View>
                <View style={s.gridThin}>
                    <Text style={s.gridText}>N</Text>
                </View>
            </View>
            <View style={s.grid}>    
                <View style={s.gridWide}>
                    <Text style={s.gridText}>Speech abnormality</Text>
                </View>
                <View style={s.gridThin}>
                    <Text style={s.gridText}>N</Text>
                </View>
            </View>
            <View style={s.grid}>    
                <View style={s.gridWide}>
                    <Text style={s.gridText}>Last known normal</Text>
                </View>
                <View style={s.gridThin}>
                    <Text style={s.gridText}>8:15 a.m.</Text>
                </View>
            </View>
            <View style={s.grid}>    
                <View style={s.gridWide}>
                    <Text style={s.gridHeaderText}>Labs & Radiology</Text>
                </View>
                <View style={s.gridThin}>
                    <Text style={s.gridText}></Text>
                </View>
            </View>
            <View style={s.grid}>    
                <View style={s.gridWide}>
                    <Text style={s.gridText}>CT Head</Text>
                </View>
                <View style={s.gridThin}>
                    <Text style={s.gridText}>8:45 a.m.</Text>
                </View>
            </View>
            <View style={s.grid}>    
                <View style={s.gridWide}>
                    <Text style={s.gridText}>Creatinine</Text>
                </View>
                <View style={s.gridThin}>
                    <Text style={s.gridText}>8:20 a.m.</Text>
                </View>
            </View>
            <View style={s.grid}>    
                <View style={s.gridWide}>
                    <Text style={s.gridText}>Platelet Count</Text>
                </View>
                <View style={s.gridThin}>
                    <Text style={s.gridText}>8:30 a.m.</Text>
                </View>
            </View>
            <View style={s.grid}>    
                <View style={s.gridWide}>
                    <Text style={s.gridText}>Coagulation Studies</Text>
                </View>
                <View style={s.gridThin}>
                    <Text style={s.gridText}>Missing</Text>
                </View>
            </View>
            <View style={s.grid}>    
                <View style={s.gridWide}>
                    <Text style={s.gridText}>Glood Glucose Level</Text>
                </View>
                <View style={s.gridThin}>
                    <Text style={s.gridText}>8:30 a.m.</Text>
                </View>
            </View>
            <View style={s.grid}>    
                <View style={s.gridWide}>
                    <Text style={s.gridText}>Blood Pressure</Text>
                </View>
                <View style={s.gridThin}>
                    <Text style={s.gridText}>8:30 a.m.</Text>
                </View>
            </View>
            <View style={s.grid}>    
                <View style={s.gridWide}>
                    <Text style={s.gridHeaderText}>NIH Score - Pre-Treatment</Text>
                </View>
                <View style={s.gridThin}>
                    <Text style={s.gridText}>7</Text>
                </View>
            </View>
            <View style={s.grid}>    
                <View style={s.gridWide}>
                    <Text style={s.gridText}>Blink Eyes and Squeeze Hands</Text>
                </View>
                <View style={s.gridThin}>
                    <Text style={s.gridText}>2</Text>
                </View>
            </View>
            <View style={s.grid}>    
                <View style={s.gridWide}>
                    <Text style={s.gridText}>Visual Fields</Text>
                </View>
                <View style={s.gridThin}>
                    <Text style={s.gridText}>1</Text>
                </View>
            </View>
            <View style={s.grid}>    
                <View style={s.gridWide}>
                    <Text style={s.gridText}>Left Arm Motor Drift</Text>
                </View>
                <View style={s.gridThin}>
                    <Text style={s.gridText}>1</Text>
                </View>
            </View>
            <View style={s.grid}>    
                <View style={s.gridWide}>
                    <Text style={s.gridText}>Right Arm Motor Drift</Text>
                </View>
                <View style={s.gridThin}>
                    <Text style={s.gridText}>1</Text>
                </View>
            </View>
            <View style={s.grid}>    
                <View style={s.gridWide}>
                    <Text style={s.gridText}>Limb Ataxia</Text>
                </View>
                <View style={s.gridThin}>
                    <Text style={s.gridText}>1</Text>
                </View>
            </View>
            <View style={s.grid}>    
                <View style={s.gridWide}>
                    <Text style={s.gridText}>Sensation</Text>
                </View>
                <View style={s.gridThin}>
                    <Text style={s.gridText}>1</Text>
                </View>
            </View>
            
            <View style={s.grid}>    
                <View style={s.gridWide}>
                    <Text style={s.gridHeaderText}>NIH Score - Post-Treatment</Text>
                </View>
                <View style={s.gridThin}>
                    <Text style={s.gridText}>1</Text>
                </View>
            </View>
            <View style={s.grid}>    
                <View style={s.gridWide}>
                    <Text style={s.gridText}>Blink Eyes and Squeeze Hands</Text>
                </View>
                <View style={s.gridThin}>
                    <Text style={s.gridText}>1</Text>
                </View>
            </View>
        </ScrollView>
      </View>

        
        
        
        
        
        
        <View style={s.footerwrapper}>
            <View style={s.footernavigation}>
                <View style={s.buttonWrap}>
                    <TouchableHighlight onPress={ this.navigate.bind(this, 'Stroke') } style={s.buttonbottom}>
                        <Text style={s.buttonBottomText}>ACTIVE</Text>
                    </TouchableHighlight>
                </View>
                <View style={s.divider}>
                    
                </View>
                <View style={s.buttonWrap}>
                    <TouchableHighlight onPress={ this.navigate.bind(this, 'Report') } style={s.buttonbottomActive}>
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

export default Report

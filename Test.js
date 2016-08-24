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

// Global Stylesheet
var s = require('./global/style');

class Test extends Component {
  
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
                    <TouchableHighlight onPress={ this.navigate.bind(this, 'Main') } style={s.backButton}>
                        <Image
                          source={require('./assets/icons/backArrow.png')}
                        />
                    </TouchableHighlight>
                </View>
                <View style={s.buttonWrapTitle}>
                    <Text style={s.title}>Stroke</Text>
                </View>
                <View style={s.buttonWrapTopButton}>
                    <TouchableHighlight onPress={ this.navigate.bind(this, 'Main') } style={s.button}>
                        <Image
                          source={require('./assets/icons/HomeIcon.png')}
                        />
                    </TouchableHighlight>
                </View>
                <View style={s.buttonWrapTopButton}>
                    <TouchableHighlight onPress={ this.navigate.bind(this, 'Report') } style={s.button}>
                        <Image
                          source={require('./assets/icons/SOFAbutton.png')}
                        />
                    </TouchableHighlight>
                </View>
            </View>
        </View>
      
      
      
      
        
        
        
        <View style={s.contentwrapper}>
            <ScrollView>
            <TouchableOpacity onPress={ this.navigate.bind(this, 'SepsisSplitOne') } style={s.optionButton}>
                <Text style={s.optionText}>SepsisSplitOne</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={ this.navigate.bind(this, 'InfectiousSIRS') } style={s.optionButton}>
                <Text style={s.optionText}>InfectiousSIRS</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={ this.navigate.bind(this, 'NonInfectiousSIRS') } style={s.optionButton}>
                <Text style={s.optionText}>NonInfectiousSIRS</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={ this.navigate.bind(this, 'NonSepsis') } style={s.optionButton}>
                <Text style={s.optionText}>NonSepsis</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={ this.navigate.bind(this, 'SepticShock') } style={s.optionButton}>
                <Text style={s.optionText}>SepticShock</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={ this.navigate.bind(this, 'SevereSepsis') } style={s.optionButton}>
                <Text style={s.optionText}>SevereSepsis</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={ this.navigate.bind(this, 'NonSevereSepsis') } style={s.optionButton}>
                <Text style={s.optionText}>NonSevereSepsis</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={ this.navigate.bind(this, 'SevereSepsisTreatment') } style={s.optionButton}>
                <Text style={s.optionText}>SevereSepsisTreatment</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={ this.navigate.bind(this, 'VolumeStatus') } style={s.optionButton}>
                <Text style={s.optionText}>VolumeStatus</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={ this.navigate.bind(this, 'RemeasureLactate') } style={s.optionButton}>
                <Text style={s.optionText}>RemeasureLactate</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={ this.navigate.bind(this, 'SepsisResults') } style={s.optionButton}>
                <Text style={s.optionText}>SepsisResults</Text>
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

export default Test

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
  View
} from 'react-native';


//Dimensions and Calculated Heights

var {height, width}     = Dimensions.get('window');
var headerHeight        = 85 - 1;
var footerHeight        = 70 - 1;
var calculatedHeight    = height - headerHeight - footerHeight;
var contentHeight       = calculatedHeight;
var divider             = 50;
var paddedWidth         = width - 20;

//Colors and Color Sets

//Color Pallete
var baseColor           = "'rgba(0,159,183,1)'";
var secondaryColor      = "'rgba(39,39,39,1)'";
var tertiaryColor       = "'rgba(254,215,102,1)'";
var light               = "'rgba(239,241,243,1)'";
var dark                = "'rgba(105,103,115,1)'";
var gray                = "'rgba(39,39,39,0.2)'";
//Dark Set
var baseTextDark        = "'rgba(0,0,0,1)'";
var primaryTextDark     = "'rgba(0,0,0,0.87)'";
var secondaryTextDark   = "'rgba(0,0,0,0.54)'";
var disabledTextDark    = "'rgba(0,0,0,0.38)'";
var dividersDark        = "'rgba(0,0,0,0.12)'";
var iconsActiveDark     = "'rgba(0,0,0,0.54)'";
var iconsInactiveDark   = "'rgba(0,0,0,0.38)'";
//Light Set
var baseTextLight       = "'rgba(255,255,255,1)'";
var primaryTextLight    = "'rgba(255,255,255,1)'";
var secondaryTextLight  = "'rgba(255,255,255,0.7)'";
var disabledTextLight   = "'rgba(255,255,255,0.5)'";
var dividersLight       = "'rgba(255,255,255,0.12)'";
var iconsActiveLight    = "'rgba(255,255,255,1)'";
var iconsInactiveLight  = "''rgba(255,255,255,0.5)'";

//Typography

//Sizes
var p                   = 14;
var h1                  = 30;
var h2                  = 28;
var h3                  = 26;
var h4                  = 22;
var h5                  = 20;
var h6                  = 18;

class CBCPR extends Component {
  
  navigate(routeName) {
    this.props.navigator.push({
      name: routeName
    });
  }
  
  render() {
    return (
    <View style={styles.wrapper}>
        
        <View style={styles.headerwrapper}>
            <View style={styles.headernavigation}>
                <View style={styles.buttonWrap}>
                    <TouchableHighlight onPress={ this.navigate.bind(this, 'CBFirstSteps') } style={styles.button}>
                        <Text>Back</Text>
                    </TouchableHighlight>
                </View>
                <View style={styles.divider}>
                    
                </View>
                <View style={styles.buttonWrap}>
                    <Text style={styles.title}>Start CPR</Text>
                </View>
                <View style={styles.divider}>
                    
                </View>
                <View style={styles.buttonWrap}>
                    <TouchableHighlight onPress={ this.navigate.bind(this, 'Main') } style={styles.button}>
                        <Text>Home</Text>
                    </TouchableHighlight>
                </View>
            </View>
        </View>
      
      
      
      
        
        
        
        <View style={styles.contentwrapper}>
            <TouchableHighlight onPress={ this.navigate.bind(this, 'CBCycle') } style={styles.optionButton}>
                <Text style={styles.optionText}>Start Compressions Immediately</Text>
            </TouchableHighlight>
            <Text style={styles.normalText}>ACLS Guidelines</Text>
            <Text style={styles.normalTextIndented}>CPR Guidelines</Text>
            <Text style={styles.normalTextIndented}>&bull; High Quality Chest Compressions (HQCC)</Text>
            <Text style={styles.normalTextIndented}>&bull; 30 compressions then 2 breaths until help arrives</Text>
            <Text style={styles.normalTextIndented}>&bull; With help, 100 compressions/min</Text>
            <Text style={styles.normalTextIndented}>&bull; Continue CPR and HQCC for 2 minutes</Text>
        </View>

        
        
        
        
        
        <View style={styles.footerwrapper}>
            <View style={styles.footernavigation}>
                <View style={styles.buttonWrap}>
                    <TouchableHighlight onPress={ this.navigate.bind(this, 'CBBreathing') } style={styles.buttonbottom}>
                        <Text>Diagnosis</Text>
                    </TouchableHighlight>
                </View>
                <View style={styles.divider}>
                    
                </View>
                <View style={styles.buttonWrap}>
                    <TouchableHighlight onPress={ this.navigate.bind(this, 'CBCPR') } style={styles.buttonbottom}>
                        <Text>CPR</Text>
                    </TouchableHighlight>
                </View>
                <View style={styles.divider}>
                    
                </View>
                <View style={styles.buttonWrap}>
                    <TouchableHighlight onPress={ this.navigate.bind(this, 'CBCycle') } style={styles.buttonbottom}>
                        <Text>Cycle</Text>
                    </TouchableHighlight>
                </View>
                <View style={styles.divider}>
                    
                </View>
                <View style={styles.buttonWrap}>
                    <TouchableHighlight onPress={ this.navigate.bind(this, 'Main') } style={styles.buttonbottom}>
                        <Text>End Code</Text>
                    </TouchableHighlight>
                </View>
                <View style={styles.divider}>
                    
                </View>
                <View style={styles.buttonWrap}>
                    <TouchableHighlight onPress={ this.navigate.bind(this, 'Main') } style={styles.buttonbottom}>
                        <Text>Report</Text>
                    </TouchableHighlight>
                </View>
            </View>
        </View>
        
    </View>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  headerwrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: baseColor,
    width: width,
    height: headerHeight,
    borderBottomWidth: 1,
    borderBottomColor: dividersDark,
  },
  divider: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: dividersDark,
    width: 1,
    height: divider,
  },
  headernavigation: {
    flexDirection: 'row',
    alignSelf: 'stretch',
    justifyContent: 'center',
    alignItems: 'center',
    padding:10,
    flexWrap: 'wrap',
    paddingTop: 0,
    paddingBottom: 5,
    marginTop: 25,
    width: width
  },
  contentwrapper: {
    alignSelf: 'stretch',
    backgroundColor: '#FFFFFF',
    height: contentHeight,
    width: paddedWidth,
  },
  footerwrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: gray,
    width: width,
    height: footerHeight,
    borderTopWidth: 1,
    borderTopColor: dividersDark,
  },
  footernavigation: {
    flexDirection: 'row',
    alignSelf: 'stretch',
    justifyContent: 'center',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  buttonWrap: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonbottom: {
    height: 75,
    alignSelf: 'stretch',
    alignItems: 'center',
    justifyContent: 'center',
  },
  welcome: {
    fontSize: h2,
    color: primaryTextDark,
    padding: 15,
  },
  title: {
    flex: 1,
    height: 50,
    fontSize: h5,
    color: baseTextLight,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 13,
  },
  button: {
    height: 50,
    alignSelf: 'stretch',
    alignItems: 'center',
    justifyContent: 'center',
  },
  optionButton: {
    height: 50,
    alignSelf: 'stretch',
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: 'gray',
    borderTopWidth: 1,
    borderBottomWidth: 1,
    width: width - 20,
    backgroundColor: 'red',
    marginRight: 10,
    marginLeft: 10,
    marginTop: 10,
  },
  optionText: {
    fontSize: h5,
    color: primaryTextLight,
    
  },
  normalText: {
    fontSize: h6,
    color: primaryTextDark,
    paddingLeft: 25,
    paddingTop: 25,
  },
  normalTextIndented: {
    fontSize: h6,
    color: primaryTextDark,
    paddingLeft: 35,
    paddingTop: 15,
  },
});

export default CBCPR

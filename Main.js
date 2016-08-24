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


//Dimensions and Calculated Heights

var {height, width}     = Dimensions.get('window');
var headerHeight        = 85 - 1;
var footerHeight        = 65;
var calculatedHeight    = height - footerHeight - 10;
var contentHeight       = calculatedHeight;
var divider             = 50;
var paddedWidth         = width - 20;

//Colors and Color Sets

//Color Pallete
var baseColor           = "'rgba(0,159,183,1)'";
var secondaryColor      = "'rgba(39,39,39,1)'";
var tertiaryColor       = "'rgba(254,215,102,1)'";
var light               = "'rgba(239,241,243,1)'";
var dark                = "'rgba(0,54,66,1)'";
var gray                = "'rgba(39,39,39,0.2)'";
var blue                = "'rgba(1,139,207,1)'";
//Dark Set
var baseTextDark        = "'rgba(0,0,0,1)'";
var primaryTextDark     = "'rgba(0,0,0,0.87)'";
var secondaryTextDark   = "'rgba(0,0,0,0.54)'";
var disabledTextDark    = "'rgba(0,0,0,0.38)'";
var dividersDark        = "'rgba(0,0,0,0.8)'";
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

class Main extends Component {

  navigate(routeName) {
    this.props.navigator.push({
      name: routeName
    });
  }

  render() {
    return (
    <View style={styles.wrapper}>

        <View style={styles.contentWrapper}>
          <View style={styles.mainHeader}>
            <Text style={styles.headerText}>Select To Begin A New Event</Text>
          </View>

          <View style={styles.buttonWrap}>
            <TouchableOpacity onPress={ this.navigate.bind(this, 'Stroke') } style={styles.buttonTop}>
                <Image
                  style={styles.icon}
                  source={require('./assets/mainButtonAssets/mainBtn_stroke@4x.png')}
                />
            </TouchableOpacity>
          </View>

          <View style={styles.buttonWrap}>
            <TouchableOpacity onPress={ this.navigate.bind(this, 'Sepsis') } style={styles.buttonBottom}>
                <Image
                  style={styles.icon}
                  source={require('./assets/mainButtonAssets/mainBtn_sepsis@4x.png')}
                />
            </TouchableOpacity>
          </View>

          <View style={styles.buttonWrap}>
            <TouchableOpacity onPress={ this.navigate.bind(this, 'CBBreathing') } style={styles.buttonBlue}>
                <Image
                  style={styles.icon}
                  source={require('./assets/mainButtonAssets/mainBtn_codeBlue@4x.png')}
                />
            </TouchableOpacity>
          </View>
        </View>


          <View style={styles.footerwrapper}>
            <View style={styles.footernavigation}>
                <View style={styles.buttonWrapFoot}>
                    <TouchableHighlight onPress={ this.navigate.bind(this, 'Main') } style={styles.buttonbottom}>
                        <Image
                          style={styles.bottomIcon}
                          source={require('./assets/icons/nav/nav-item1-active@2x.png')}
                        />
                    </TouchableHighlight>
                </View>
                <View style={styles.divider}>

                </View>
                <View style={styles.buttonWrapFoot}>
                    <TouchableHighlight onPress={ this.navigate.bind(this, 'Test') } style={styles.buttonbottom}>
                        <Image
                          style={styles.bottomIcon}
                          source={require('./assets/icons/nav/nav-item2@2x.png')}
                        />
                    </TouchableHighlight>
                </View>
                <View style={styles.divider}>

                </View>
                <View style={styles.buttonWrapFoot}>
                    <TouchableHighlight onPress={ this.navigate.bind(this, 'Settings') } style={styles.buttonbottom}>
                        <Image
                          style={styles.bottomIcon}
                          source={require('./assets/icons/nav/nav-item4@2x.png')}
                        />
                    </TouchableHighlight>
                </View>
                <View style={styles.divider}>



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
    backgroundColor: 'rgba(250, 243, 223, 1)',
    height: height,
    paddingTop: 25,
  },
  contentWrapper: {
    height: contentHeight,
  },
  mainHeader: {
    width: width,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 35,
  },
  headerText: {
    fontSize: 24,
    color: '#777',
  },
  navWrap: {
    flexDirection: 'row',
    alignSelf: 'stretch',
    justifyContent: 'center',
    alignItems: 'center',
    flexWrap: 'wrap',
    padding: 0,
    width: width,
  },
  buttonWrap: {
    width: width,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonBlue: {
    alignSelf: 'stretch',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    paddingTop: 10,
    paddingBottom: 10,
  },
  buttonTop: {
    alignSelf: 'stretch',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    paddingTop: 20,
    paddingBottom: 10,
  },
  buttonBottom: {
    alignSelf: 'stretch',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    paddingTop: 10,
    paddingBottom: 10,
  },
  buttonbottom: {
    alignSelf: 'stretch',
    alignItems: 'center',
    justifyContent: 'flex-start',
    flex: 1,
  },
  icon: {
    width: width - 30,
    height: 140,
    borderRadius: 7,
  },
  bottomIcon: {
    width: width/3,
    height: footerHeight,
    marginTop: -13,
    paddingTop: 10,
  },
  lightText: {
    color: light,
    fontSize: h4,
  },
  darkText: {
    color: dark,
    fontSize: h4,
  },
  footerwrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,43,55,1)',
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
  buttonWrapFoot: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  buttonBottomText: {
    color: secondaryTextLight,
  },
  dividerH: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: dividersDark,
    width: width,
    height: 1,
  },
});

export default Main

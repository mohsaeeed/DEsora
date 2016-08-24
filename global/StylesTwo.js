'use strict';

import {
  StyleSheet,
  Dimensions,
} from 'react-native';




//Dimensions and Calculated Heights

var {height, width}     = Dimensions.get('window');
var headerHeight        = 80 - 1;
var footerHeight        = 50 - 1;
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
var dark                = "'rgba(0,43,55,1)'";
var gray                = "'rgba(39,39,39,0.2)'";
var bluegreen           = "'rgba(32, 161, 152, 1)'";

//Dark Set
var baseTextDark        = "'rgba(0,0,0,1)'";
var primaryTextDark     = "'rgba(0,43,55,0.87)'";
var secondaryTextDark   = "'rgba(0,0,0,0.54)'";
var disabledTextDark    = "'rgba(0,0,0,0.38)'";
var dividersDark        = "'rgba(0,0,0,0.12)'";
var iconsActiveDark     = "'rgba(0,0,0,0.54)'";
var iconsInactiveDark   = "'rgba(0,0,0,0.38)'";
//Light Set
var baseTextLight       = "'rgba(255,255,255,1)'";
var primaryTextLight    = "'rgba(255,255,255,1)'";
var secondaryTextLight  = "'rgba(100,123,131,1)'";
var disabledTextLight   = "'rgba(255,255,255,0.5)'";
var dividersLight       = "'rgba(255,255,255,0.12)'";
var iconsActiveLight    = "'rgba(255,255,255,1)'";
var iconsInactiveLight  = "'rgba(255,255,255,0.5)'";
var tertiaryTextLight   =  "'rgba(253,246,226,1)'";

//Typography

//Sizes
var p                   = 14;
var p16                 = 16;
var p22                 = 22;
var bold                = '700';
var h1                  = 30;
var h2                  = 28;
var h3                  = 26;
var h4                  = 22;
var h5                  = 20;
var h6                  = 18;




module.exports = StyleSheet.create({
  
    
    
})
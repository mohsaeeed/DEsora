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

//App Container Styles
  wrapper: {
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },


  
//Header Layout Styles
  headerwrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    width: width,
    height: headerHeight,
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
    width: width,
    backgroundColor: dark,
  },
  
  
  
  
//Content Layout Styles
  contentwrapper: {
    alignSelf: 'stretch',
    backgroundColor: 'rgba(238, 232, 212, 1)',
    height: contentHeight,
    width: width,
  },
  
  
  
  
//Footer Layout Styles
  footerwrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: dark,
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
  
  
  
  
  
//Text styles
  welcome: {
    fontSize: h1,
    color: primaryTextDark,
  },
  title: {
    height: 50,
    fontSize: h5,
    color: baseTextLight,
    paddingTop: 13,
  },
  redText: {
    color: 'red',
    fontSize: p16,
  },
  minorText: {
    fontSize: p,
    alignItems: 'center',
  },
  whiteText: {
    color: '#FFFFFF',
  },
  
  
  
//Buttons
  buttonWrap: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonWrapBack: {
    justifyContent: 'center',
    alignItems: 'flex-start',
    width: width / 8,
  },
  button: {
    paddingTop: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonBlue: {
    height: 50,
    alignSelf: 'stretch',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(38, 139, 210, 1)',
  },
  buttonWrapTitle: {
    width: width / 2 - 20,
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  buttonbottom: {
    height: 48,
    alignSelf: 'stretch',
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomWidth: 2,
    borderBottomColor: dark,
    backgroundColor: dark,
  },
  buttonbottomActive: {
    height: 48,
    alignSelf: 'stretch',
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomWidth: 2,
    borderBottomColor: '#FFFFFF',
    backgroundColor: dark,
  },
  buttonBottomText: {
    color: 'white',
  },
  optionButton: {
    height: 75,
    alignSelf: 'stretch',
    alignItems: 'flex-start',
    justifyContent: 'center',
    borderColor: 'gray',
    width: width,
    borderBottomWidth: 1,
    borderBottomColor: 'lightgray',
  },
  optionText: {
    fontSize: h6,
    color: primaryTextDark,
    paddingLeft: 25,
    padding: 10,
    paddingTop: 15,
    paddingRight: 0,
  },
  divider: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: dividersDark,
    width: 1,
    height: divider,
  },
  backButton: {
    padding: 5,
  },
  
  
//Containers
  optionSetContainer: {
    borderWidth: 2,
    borderBottomWidth: 0,
    borderColor: 'lightgray',
    borderTopLeftRadius: 7,
    borderTopRightRadius: 7,
    margin: 10,
    marginBottom: 0,
    alignItems: 'flex-start',
    justifyContent: 'center',
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 15,
    paddingRight: 15,
  },
  optionSetTitle: {
    fontSize: p16,
    color: primaryTextDark,
  },
  
  
  
  
  
//Timer Components
  timerWrap: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: width,
    backgroundColor: bluegreen,
    
  },
  timerTextWrapper: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 3,
    paddingBottom: 3,
  },
  timerTextWrapperLeft: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderRightWidth: 2,
    borderRightColor: 'rgba(0,43,55,1)',
    paddingTop: 3,
    paddingBottom: 3,
  },
  timerText: {
    fontSize: p,
    color: 'white',
    fontWeight: 'bold',
  },
  
  
  

  
// Grid Components
  gridTainer: {
    borderTopWidth: 1,
    borderRightWidth: 1,
    borderLeftWidth: 1,
    borderColor: 'gray',
    flexDirection: 'column',
    height: height * 2,
  },
  grid: {
    flexDirection: 'row',
    borderColor: 'gray',
    borderBottomWidth: 1,
  },
  gridHeader: {
    borderColor: 'gray',
    borderBottomWidth: 1,
    height: 50,
  },
  gridWide: {
    flex: 1,
    borderRightWidth: 1,
    borderColor: 'gray',
    paddingLeft: 5,
    height: 40,
  },
  gridThin: {
    width: 80,
    justifyContent: 'center',
    alignItems: 'center',
  },
  gridHeaderText: {
    fontWeight: 'bold',
    fontSize: h6,
    paddingTop: 10,
    paddingLeft: 5,
  },
  gridText: {
    fontSize: p,
    paddingTop: 15,
  },
  
  
  
  
  
  
/// NEW  
  buttonWrapTopButton: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      marginRight: 5,
      paddingRight: 10,
  },
  optionSetInputYN: {
    borderWidth: 2,
    borderColor: 'lightgray',
    borderBottomLeftRadius: 7,
    borderBottomRightRadius: 7,
    margin: 10,
    marginTop: 0,
    alignItems: 'flex-end',
    justifyContent: 'center',
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 15,
    paddingRight: 15,
  },
  bubblechoice_click: {
    height: window.height/12.335,
    borderRadius: (window.height/12.3350)/2,
    marginRight: 5,
    width: window.height/12.335,
  },
  bubblechoice: {
    height: window.height/12.335,
    borderRadius: (window.height/12.3350)/2,
    marginRight: 5,
    width: window.height/12.335,
  },
  choicetext: {
    alignItems: 'center',
    alignSelf: 'center',
    color: "'rgba(0,43,55,0.87)'",
    fontWeight: '600',
    fontSize: 14,
    flex: 1,
    textAlign: 'center',
    marginTop: 10,
  },
  overlay: {
    height: 40,
    width: 60,
    alignItems:'center'
  },
  pickerTainer: {
    borderBottomWidth: 1,
    borderBottomColor: 'lightgray',
  },
  yesNoContainer: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  yesNo: {
    flex: 1,
    fontSize: 18,
    justifyContent: 'center',
    color: primaryTextDark,
  },
  headerTitle: {
    fontSize: h4,
    fontWeight: 'bold',
  },
  optionTextLeft: {
    fontSize: h6,
    color: primaryTextDark,
    paddingLeft: 25,
    padding: 10,
    paddingTop: 15,
    width: width / 2,
  },
  optionTextRight: {
    fontSize: h6,
    color: primaryTextDark,
    paddingLeft: 25,
    padding: 10,
    paddingTop: 15,
    flex: 1,
    alignItems: 'flex-end',
  },
  optionButtonSplit: {
    height: 75,
    alignSelf: 'stretch',
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: 'gray',
    width: width,
    borderBottomWidth: 1,
    borderBottomColor: 'lightgray',
    flexDirection: 'row',
  },
  buttonWrapTitleFull: {
    width: width - 100,
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  optionSetContainerNoBorder: {
    margin: 10,
    marginBottom: 0,
    alignItems: 'flex-start',
    justifyContent: 'center',
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 15,
    paddingRight: 15,
  },
  optionSetContainerFullBorder: {
    borderWidth: 2,
    borderColor: 'lightgray',
    borderTopLeftRadius: 7,
    borderTopRightRadius: 7,
    borderBottomLeftRadius: 7,
    borderBottomRightRadius: 7,
    margin: 10,
    marginBottom: 0,
    marginTop: 25,
    alignItems: 'flex-start',
    justifyContent: 'center',
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 15,
    paddingRight: 15,
  },
  headingTitle: {
    fontSize: h3,
    color: primaryTextDark,
  },
  optionButtonSingle: {
    height: 50,
    alignSelf: 'stretch',
    alignItems: 'flex-start',
    justifyContent: 'center',
    borderColor: 'gray',
    width: width - 22,
    borderWidth: 1,
    borderBottomColor: 'lightgray',
    margin:10,
    borderTopLeftRadius: 7,
    borderTopRightRadius: 7,
    borderBottomLeftRadius: 7,
    borderBottomRightRadius: 7,
  },
  optionTextLess: {
    fontSize: h6,
    color: primaryTextDark,
    paddingLeft: 15,
    padding: 10,
    paddingRight: 0,
  },
  
  
  
  
  
  
  
  
  
  
  
  // New Rules
  optionSetTitleBold: {
    fontSize: p22,
    color: primaryTextDark,
    fontWeight: bold,
  },
    optionSetFontBold: {
    fontSize: p16,
    color: primaryTextDark,
    fontWeight: bold,
    flex: 1,
  },
  optionSetTitleOpaque: {
    fontSize: p16,
    color: disabledTextDark,
  },
  optionSetFontBoldLight: {
    fontSize: p16,
    color: primaryTextLight,
    fontWeight: bold,
  },
    optionSetFontBoldLight02: {
    fontSize: p16,
    color: tertiaryTextLight,
    fontWeight: bold,
  },
    formText: {
    fontSize: p,
    color: primaryTextDark,
    flex: 1,
    
  },
  
    formTextIndent: {
    fontSize: p,
    color: primaryTextDark,
    flex: 1,
    alignItems: 'flex-start',
    paddingLeft: 10,
    
  },
  
    formTextIndent02: {
    fontSize: p,
    color: primaryTextDark,
    flex: 1,
    alignItems: 'flex-start',
    paddingLeft: 30,
    
  },
  
  formTextOpaque: {
    fontSize: p,
    color: 'rgba(0,43,55,0.78)',
  },
   optionSetContainer02: {
    alignSelf: 'stretch',
    alignItems: 'flex-start',
    justifyContent: 'center',
    borderColor: 'gray',
    width: width,
    borderBottomColor: 'lightgray',
    paddingRight: 15,
    paddingLeft: 15,
    paddingTop: 5,
    paddingBottom: 2,
  },
  optionSetContainer03: {
    flex: 1,
    flexDirection: 'row',
    height: 75,
    alignSelf: 'stretch',
    alignItems: 'flex-start',
    justifyContent: 'center',
    borderColor: 'gray',
    width: width,
    borderBottomColor: 'lightgray',
    paddingRight: 3,
    paddingLeft: 3,
    paddingTop: 15,
    paddingBottom: 15,
  },
    optionSetContainer04: {
    alignSelf: 'stretch',
    alignItems: 'flex-start',
    justifyContent: 'center',
    width: 150,
  },
    optionSetContainer05: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    width: width,
  },
    optionSetContainer06: {
    flex: 1,
    borderWidth: 2,
    borderColor: 'lightgray',
    borderRadius: 7,
    margin: 10,
    justifyContent: 'center',
    paddingBottom: 10,
  },
    optionSetContainer07: {
    borderWidth: 2,
    borderColor: 'rgba(0,43,55,0.87)',
    borderRadius: 7,
    margin: 10,
    justifyContent: 'center',
    flex: 1,
    paddingTop: 2,
    paddingBottom: 2,
    paddingLeft: 15,
    paddingRight: 15,
  },
    optionSetContainer08: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    flex: 1,
  },
    optionSetContainer09: {
    flex: 1,
    borderBottomWidth: 2,
    borderLeftWidth: 2,
    borderRightWidth: 2,
    borderColor: 'lightgray',
    borderBottomLeftRadius: 7,
    borderBottomRightRadius: 7,
    margin: 10,
    justifyContent: 'center',
    paddingBottom: 10,
  },
    optionSetContainer10: {
    borderWidth: 2,
    borderColor: 'rgba(205,74,0,0.87)',
    backgroundColor: 'rgba(205,74,0,1)',
    borderRadius: 7,
    margin: 10,
    justifyContent: 'center',
    flex: 1,
    paddingTop: 2,
    paddingBottom: 2,
    paddingLeft: 15,
    paddingRight: 15,
  },
    optionSetContainer11: {
    flex: 1,
    borderBottomWidth: 2,
    borderColor: 'lightgray',
    borderRadius: 7,
    justifyContent: 'center',
    paddingBottom: 10,
    flexDirection: 'column',
  },
    optionSetContainer12: {
    borderWidth: 2,
    borderColor: 'rgba(0,43,55,0.87)',
    borderRadius: 7,
    backgroundColor: 'rgba(0,43,55,1)',
    margin: 10,
    justifyContent: 'center',
    flex: 1,
    paddingTop: 2,
    paddingBottom: 2,
    paddingLeft: 15,
    paddingRight: 15,
  },
  
    optionSetContainer13: {
    flex: 1,
    margin: 10,
    justifyContent: 'center',
    paddingBottom: 10,
  },
  
    optionSetContainer14: {
    borderWidth: 2,
    borderColor: 'lightgray',
    //borderTopLeftRadius: 7,
    //borderTopRightRadius: 7,
    borderRadius: 7,
    margin: 10,
    marginBottom: 0,
    alignItems: 'flex-start',
    justifyContent: 'center',
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 15,
    paddingRight: 15,
  },
  
    optionSetContainer15: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
    paddingTop: 15,
    paddingLeft: 12,
  },
  
    modalSetContainer01: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  
    modalSetContainer02: {
    borderWidth: 2,
    borderColor: 'lightgray',
    borderRadius: 3,
    backgroundColor: 'rgba(238, 232, 212, 1)',
    width: 325,
    height: 400,
  },
  
    modalHeader01: {
    flexDirection: 'row',
    height: 50,
    backgroundColor: baseColor,
    alignItems: 'center',
    justifyContent: 'center', 
    },
    
    modalContent01: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: gray,
    justifyContent: 'center',
    alignItems: 'center',
    },
    
    modalButton01: {
    flex: 1,
    flexDirection: 'row',
    height: 50,
    backgroundColor: dark,
    },
  
    buttonWrapRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-end',
    flex: 1,
  },
    buttonRow: {
    paddingLeft: 5,
    paddingRight: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
    gridForm: {
    flexDirection: 'row',
    borderColor: 'gray',
    borderBottomWidth: 0.75,
    paddingBottom: 1,
    paddingTop: 1,
    flex: 1,
  },
    gridFormBorderless: {
    flexDirection: 'row',
    paddingBottom: 1,
    paddingTop: 1,
    flex: 1,
    alignItems: 'center',
  },
    gridFormWide: {
    justifyContent: 'center',
    alignItems: 'flex-end',
    borderColor: 'gray',
    paddingRight: 10,
    paddingTop: 10,
    paddingBottom: 10,
    flex: 1,
  },
  gridFormThin: {
    justifyContent: 'center',
    alignItems: 'flex-start',
    paddingLeft: 10,
    paddingTop: 10,
    paddingBottom: 10,
  },
    gridFormWideLeft: {
    justifyContent: 'center',
    alignItems: 'flex-start',
    paddingLeft: 10,
    paddingTop: 10,
    paddingBottom: 10,
  },
  
    EULAFormBorderless: {
    flexDirection: 'row',
    borderColor: 'gray',
    paddingBottom: 15,
    paddingTop: 1,
    flex: 1,
  },
  
    inputForm: {
    flex: 1,
    alignItems: 'flex-start',
    backgroundColor: 'rgba(238, 232, 212, 1)',   
  },
  
    inputForm02: {
    flex: 1,
    backgroundColor: 'rgba(238, 232, 212, 1)',
    },
    
    formText02: {
    fontSize: p,
    color: primaryTextDark,
    flex: 1,
    alignItems: 'flex-end',
    backgroundColor: 'rgba(238, 232, 212, 1)',
    }

});










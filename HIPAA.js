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

//Dimensions and Calculated Heights

var {height, width}     = Dimensions.get('window');
var headerHeight        = 85 - 1;
var footerHeight        = 60;
var calculatedHeight    = height - footerHeight - 15;
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

class HIPAA extends Component {

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
                    <TouchableHighlight onPress={ this.navigate.bind(this, 'EventMan') } style={s.button}>
                        <Image
                          source={require('./assets/icons/nav/settings_viewToggle-activeA@4x.png')}
                        />
                    </TouchableHighlight>
                </View>
            </View>
        </View>

        <View style={s.contentwrapper}>
            <ScrollView style={s.gridTainer}>
                <View style={s.optionSetContainer11}>
                    <View style={s.optionSetContainer02}>
                        <Text style={s.optionSetTitleBold}>H.I.P.A.A. Compliancy</Text>
                    </View>

                    <View style={s.optionSetContainer13}>
                        <View style={s.EULAFormBorderless}>
                            <Text style={s.optionSetFontBold}>Purpose</Text>                     
                        </View>
                        <View style={s.EULAFormBorderless}>
                            <Text style={s.formText}>The purpose of this policy is to outline essential roles and responsibilities within SORA Medical Solutions for creating and maintaining an environment that safeguards data from threats to personal, professional and corporate interests and to establish a comprehensive data security program in compliance with applicable law. This policy is also designed to establish processes for ensuring the security and confidentiality of protected or confidential information and to establish administrative, technical and physical safeguards to protect against unauthorized access or use of this information.</Text>                     
                        </View>
                        <View style={s.EULAFormBorderless}>
                            <Text style={s.optionSetFontBold}>Scope</Text>                     
                        </View>
                        <View style={s.EULAFormBorderless}>
                            <Text style={s.formText}>This policy applies to all SORA Medical Solutions employees, full or part-time, and contractors interacting with information collected, stored or used by or on behalf of SORA Medical Solutions. </Text>                     
                        </View>
                        <View style={s.EULAFormBorderless}>
                            <Text style={s.optionSetFontBold}>Definitions</Text>                     
                        </View>
                        <View style={s.EULAFormBorderless}>
                            <Text style={s.formText}>Data Security Officers – employees of SORA Medical Solutions, designated by the SORA Leadership team, who provide administrative support for the implementation, oversight and coordination of security procedures and systems.</Text>                     
                        </View>
                        <View style={s.EULAFormBorderless}>
                            <Text style={s.formText}>Users – any individual with authorized access to Sora Medical Solutions systems or resources.</Text>                     
                        </View>
                        <View style={s.EULAFormBorderless}>
                            <Text style={s.formText}>Data Breach – unauthorized or inappropriate access (or significant risk of potential access) of confidential SORA or customer data. Examples include, but are not limited to:  </Text>    
                        </View>
                        <View style={s.EULAFormBorderless}>
                            <Text style={s.formTextIndent}>1.  Lost or stolen device (phone, laptop, external drive, etc)</Text>                     
                        </View>
                        <View style={s.EULAFormBorderless}>
                            <Text style={s.formTextIndent}>2.  Unauthorized access of servers</Text>                     
                        </View>
                        <View style={s.EULAFormBorderless}>
                            <Text style={s.formTextIndent}>3.  Accidentally sent to wrong person</Text>                     
                        </View>
                        <View style={s.EULAFormBorderless}>
                            <Text style={s.formTextIndent}>4.  Delivered to or stored on a non-encrypted device</Text>                     
                        </View>
                        <View style={s.EULAFormBorderless}>
                            <Text style={s.formText}>Confidential information – information regarding the following: computer applications, products, code, processes, trade secrets, copyrights, customer lists, prices, costs, discounts, business affairs, future plans, methodologies, processes, tools, and other vital information items (collectively, "Confidential Information") which are valuable, special and unique assets of SORA Medical Solutions has a legitimate business interest in protecting.</Text>                     
                        </View>
                        <View style={s.EULAFormBorderless}>
                            <Text style={s.formText}>Protected Health Information (PHI) – information that is created or received by a healthcare provider, health plan, employer, or health care clearinghouse; and relates to the past, present, or future physical or mental health or condition of an individual; or the past, present, or future payment for the provision of health care to an individual; and that identifies the individual; or with respect to which there is a reasonable basis to believe the information can be used to identify the individual. As of the effective date of this document, PHI includes the following (for an up to date list visit the HHS website):</Text>                     
                        </View>
                        <View style={s.EULAFormBorderless}>
                            <Text style={s.formTextIndent}>1.  Names</Text>                     
                        </View>
                        <View style={s.EULAFormBorderless}>
                            <Text style={s.formTextIndent}>2.  All geographic subdivisions smaller than a State, including street address, city, count, precinct, zip code, and their equivalent geocodes, except for the initial three digits of a zip code if, according to the current publicly available data from the Bureau of the Census:</Text>                     
                        </View>
                        <View style={s.EULAFormBorderless}>
                            <Text style={s.formTextIndent02}>The geographic unit formed by combining all zip codes with the same three initial digits contains more than 20,000 people; and</Text>                     
                        </View>
                        <View style={s.EULAFormBorderless}>
                            <Text style={s.formTextIndent02}>The initial three digits of a zip code for all such geographic units containing 20,000 or fewer people is changed to 000.</Text>                     
                        </View>
                        <View style={s.EULAFormBorderless}>
                            <Text style={s.formTextIndent}>3.  All elements of dates (except year) for dates directly related to an individual, including birth date, admission date, discharge date, date of death; and all ages over 89 and all elements of dates (including year) indicative of such age, except that ages and elements may be aggregated into a single category of age 90 or older</Text>                     
                        </View>
                        <View style={s.EULAFormBorderless}>
                            <Text style={s.formTextIndent}>4.  Telephone numbers</Text>                     
                        </View>
                        <View style={s.EULAFormBorderless}>
                            <Text style={s.formTextIndent}>5.  Fax numbers</Text>                     
                        </View>
                        <View style={s.EULAFormBorderless}>
                            <Text style={s.formTextIndent}>6.  Electronic mail addresses</Text>                     
                        </View>
                        <View style={s.EULAFormBorderless}>
                            <Text style={s.formTextIndent}>7.  Social security numbers</Text>                     
                        </View>
                        <View style={s.EULAFormBorderless}>
                            <Text style={s.formTextIndent}>8.  Medical record numbers</Text>                     
                        </View>
                        <View style={s.EULAFormBorderless}>
                            <Text style={s.formTextIndent}>9.  Health plan beneficiary numbers</Text>                     
                        </View>
                        <View style={s.EULAFormBorderless}>
                            <Text style={s.formTextIndent}>10.  Account numbers</Text>                     
                        </View>
                        <View style={s.EULAFormBorderless}>
                            <Text style={s.formTextIndent}>11.  Certificate/license numbers</Text>                     
                        </View>
                        <View style={s.EULAFormBorderless}>
                            <Text style={s.formTextIndent}>12.  Vehicle identifiers and serial numbers, including license plate numbers
                        </Text>                     
                        </View>
                        <View style={s.EULAFormBorderless}>
                            <Text style={s.formTextIndent}>13.  Device identifiers and serial numbers</Text>                     
                        </View>
                        <View style={s.EULAFormBorderless}>
                            <Text style={s.formTextIndent}>14.  Web Universal Resource Locators (URLs)</Text>                     
                        </View>
                        <View style={s.EULAFormBorderless}>
                            <Text style={s.formTextIndent}>15.  Internet Protocol (IP) address numbers</Text>                     
                        </View>
                        <View style={s.EULAFormBorderless}>
                            <Text style={s.formTextIndent}>16.  Biometric identifiers, including finger and voice prints</Text>                     
                        </View>
                        <View style={s.EULAFormBorderless}>
                            <Text style={s.formTextIndent}>17.  Full face photographic images and any comparable images</Text>                     
                        </View>
                        <View style={s.EULAFormBorderless}>
                            <Text style={s.formTextIndent}>18.  Any other unique identifying number, characteristic or code</Text>                     
                        </View>
                        <View style={s.EULAFormBorderless}>
                            <Text style={s.optionSetFontBold}>Security Responsibilities</Text>                     
                        </View>
                        <View style={s.EULAFormBorderless}>
                            <Text style={s.formText}>It is the policy of SORA Medical Solutions that all confidential and other sensitive information be safeguarded from unauthorized access, use, modification or destruction. All employees of SORA share in the responsibility for protecting the confidentiality and security of data.</Text>                     
                        </View>
                        <View style={s.EULAFormBorderless}>
                            <Text style={s.formText}>SORA Leadership</Text>                     
                        </View>
                        <View style={s.EULAFormBorderless}>
                            <Text style={s.formText}>Members of the SORA Leadership team are responsible for promoting the corporate awareness of this policy and for ensuring overall compliance with it by their staff.   In particular, members of the Leadership team are responsible for:</Text>                     
                        </View>
                        <View style={s.EULAFormBorderless}>
                            <Text style={s.formTextIndent}>1.  Ensuring that all staff have the training and support necessary to protect data in accordance with this policy</Text>                     
                        </View>
                        <View style={s.EULAFormBorderless}>
                            <Text style={s.formTextIndent}>2.  Time to time consulting with the Data Security Officers to review the implementation of this policy and compliance with the Computer System Security Requirements</Text>                     
                        </View>
                        <View style={s.EULAFormBorderless}>
                            <Text style={s.formTextIndent}>3.  Periodically reviewing identifiable risks to the security, confidentiality, and integrity of data, and reviewing this policy and the scope of the Computer System Security Requirements at least annually to assess its effectiveness and determine whether any changes are warranted</Text>                     
                        </View>
                        <View style={s.EULAFormBorderless}>
                            <Text style={s.formText}>Data Security Officers</Text>                     
                        </View>
                        <View style={s.EULAFormBorderless}>
                            <Text style={s.formText}>A Data Security Officer supports the implementation and monitoring of security measures associated with the management of SORA Medical Solutions data and systems. Data Security Officers are responsible for:</Text>                     
                        </View>
                        <View style={s.EULAFormBorderless}>
                            <Text style={s.formTextIndent}>1.  Ensuring adequate security technology is applied to devices and systems in keeping with the nature of the data stored on those devices or systems and in compliance with this policy</Text>                     
                        </View>
                        <View style={s.EULAFormBorderless}>
                            <Text style={s.formTextIndent}>2.  Monitoring for indicators of loss of integrity</Text>                     
                        </View>
                        <View style={s.EULAFormBorderless}>
                            <Text style={s.formTextIndent}>3.  Promptly reporting to the SORA Medical Solutions team any incidents of data being accessed or compromised by unauthorized Users, and any violations of this policy</Text>                     
                        </View>
                        <View style={s.EULAFormBorderless}>
                            <Text style={s.formTextIndent}>4.  Monitoring for risks to data security and reporting any known or reasonably foreseeable risks to the SORA Leadership team</Text>                     
                        </View>
                        <View style={s.EULAFormBorderless}>
                            <Text style={s.formText}>Users</Text>                     
                        </View>
                        <View style={s.EULAFormBorderless}>
                            <Text style={s.formText}>Users are responsible for complying with all security-related procedures pertaining to any SORA data to which they have authorized access or any information derived therefrom that they possess. Specifically, a User is responsible for:</Text>                     
                        </View>
                        <View style={s.EULAFormBorderless}>
                            <Text style={s.formTextIndent}>1.  Becoming familiar with and complying with all relevant SORA policies, including this policy.</Text>                     
                        </View>
                        <View style={s.EULAFormBorderless}>
                            <Text style={s.formTextIndent}>2.  Providing appropriate physical security for information technology equipment, storage media, and physical data. Such equipment and files shall not be left unattended with being locked or otherwise protected such that unauthorized Users cannot obtain physical access to the data or the device(s) storing the data.</Text>                     
                        </View>
                        <View style={s.EULAFormBorderless}>
                            <Text style={s.formTextIndent}>3.  Ensuring that confidential information is not distributed or accessible to unauthorized persons. Users must not share their authorization passwords under any circumstances. Users must avail themselves of any security measures, such as encryption technology, security updates or patches, provided by SORA. Users must log off from all applications, computers and networks, and physically secure printed material, when not in use.</Text>                     
                        </View>
                        <View style={s.EULAFormBorderless}>
                            <Text style={s.formTextIndent}>4.  Properly handling PHI due to its extremely sensitive nature:</Text>                     
                        </View>
                        <View style={s.EULAFormBorderless}>
                            <Text style={s.formTextIndent02}>Do not send PHI in email</Text>                     
                        </View>
                        <View style={s.EULAFormBorderless}>
                            <Text style={s.formTextIndent02}>Only save PHI on encrypted devices</Text>                     
                        </View>
                        <View style={s.EULAFormBorderless}>
                            <Text style={s.formTextIndent02}>Do not save PHI in any cloud-synced locations (such as DropBox)</Text>                     
                        </View>
                        <View style={s.EULAFormBorderless}>
                            <Text style={s.formTextIndent}>5.  When access to information is no longer required by a User, disposing of it in a manner to insure against unauthorized interception. Generally, paper-based duplicate copies should be properly shredded, and electronic data should be destroyed.</Text>                     
                        </View>
                        <View style={s.EULAFormBorderless}>
                            <Text style={s.formTextIndent}>6.  Immediately notifying SORA Medical Solutions management personnel of any incident that may cause a security breach or violation of this policy.</Text>                     
                        </View>
                        <View style={s.EULAFormBorderless}>
                            <Text style={s.formText}>Data Breach Response</Text>                     
                        </View>
                        <View style={s.EULAFormBorderless}>
                            <Text style={s.formText}>As provided above, Users and Data Security Officers must report any known Data Breach or incident that is likely to cause a Data Breach.</Text>                     
                        </View>
                        <View style={s.EULAFormBorderless}>
                            <Text style={s.formText}>Upon Learning of a Breach</Text>                     
                        </View>
                        <View style={s.EULAFormBorderless}>
                            <Text style={s.formText}>A breach or suspected breach of PHI must be immediately investigated. Since all PHI is of a highly confidential nature, only personnel necessary for the data breach investigation will be informed of the breach. Users must report the following information to a member of the SORA Medical Solutions team by phone, with a copy of the information delivered in email, the same day as the breach is suspected. Do not leave a voice mail – the user must keep calling until they speak directly with a member of the leadership team.</Text>                     
                        </View>
                        <View style={s.EULAFormBorderless}>
                            <Text style={s.formTextIndent}>1.  When (date and time) did the breach happen?</Text>                     
                        </View>
                        <View style={s.EULAFormBorderless}>
                            <Text style={s.formTextIndent}>2.  How did the breach happen?</Text>                     
                        </View>
                        <View style={s.EULAFormBorderless}>
                            <Text style={s.formTextIndent}>3.  What types of PHI were obtained (detailed as possible: name; name and social security number; name, medical record number and birth date; etc.)?</Text>                     
                        </View>
                        <View style={s.EULAFormBorderless}>
                            <Text style={s.formTextIndent}>4.  How many customers were affected?</Text>                     
                        </View>
                        <View style={s.EULAFormBorderless}>
                            <Text style={s.formText}>Management will then make a record of events and people involved, as well as any discoveries made over the course of the investigation and determine whether or not a breach has occurred.</Text>                     
                        </View>
                        <View style={s.EULAFormBorderless}>
                            <Text style={s.formText}>Breach Remediation</Text>                     
                        </View>
                        <View style={s.EULAFormBorderless}>
                            <Text style={s.formText}>Once a breach has been verified, take all available steps to prevent its spread and future incidences. Make sure to review applicable company policies and update them as appropriate. The specific steps taken to contain the breach and prevent future incidences will vary based on the nature of the breach, so use good judgment.</Text>                     
                        </View>
                        <View style={s.EULAFormBorderless}>
                            <Text style={s.formText}>Perform a Risk Assessment</Text>                     
                        </View>
                        <View style={s.EULAFormBorderless}>
                            <Text style={s.formText}>Once a breach has been verified and contained, SORA will perform a risk assessment that rates the:</Text>                     
                        </View>
                        <View style={s.EULAFormBorderless}>
                            <Text style={s.formTextIndent}>1.  Sensitivity of the PHI lost (email addresses alone may present much less of a threat than social security numbers or financial information)</Text>                     
                        </View>
                        <View style={s.EULAFormBorderless}>
                            <Text style={s.formTextIndent}>2.  Amount of PHI lost and the number of individuals affected</Text>                     
                        </View>
                        <View style={s.EULAFormBorderless}>
                            <Text style={s.formTextIndent}>3.  Likelihood PHI is usable or may cause harm</Text>                     
                        </View>
                        <View style={s.EULAFormBorderless}>
                            <Text style={s.formTextIndent}>4.  Likelihood the PHI was intentionally targeted (increases chance for fraudulent use)</Text>                     
                        </View>
                        <View style={s.EULAFormBorderless}>
                            <Text style={s.formTextIndent}>5.  Strength and effectiveness of security technologies protecting PHI (e.g. encrypted PHI on a stolen laptop. Technically stolen PHI but with a greatly decreased chance of access.)</Text>                     
                        </View>
                        <View style={s.EULAFormBorderless}>
                            <Text style={s.formTextIndent}>6.  Ability of SORA Medical Solutions to mitigate the risk of harm</Text>                     
                        </View>
                        <View style={s.EULAFormBorderless}>
                            <Text style={s.formText}>All information collected during the risk assessment must then be compiled into one report and analyzed. The risk assessment must then be provided to appropriate SORA Medical Solutions personnel in charge of data breach response management.</Text>                     
                        </View>
                        <View style={s.EULAFormBorderless}>
                            <Text style={s.formText}>Notify Affected Parties</Text>                     
                        </View>
                        <View style={s.EULAFormBorderless}>
                            <Text style={s.formText}>Responsibility to notify is based both on the number of individuals affected and the nature of the PHI that was accessed. Any information found in the initial risk assessment will be turned over to the legal counsel of SORA Medical Solutions who will review the situation to determine if, and to what extent, notification is required. Notification should occur in a manner that ensures the affected individuals will receive actual notice of the incident. Notification will be made in a timely manner, but not so soon as to unnecessarily compound the initial incident with incomplete facts or to make identity theft more likely through the notice.</Text>                     
                        </View>
                        <View style={s.EULAFormBorderless}>
                            <Text style={s.formText}>In the case that notification must be made:</Text>                     
                        </View>
                        <View style={s.EULAFormBorderless}>
                            <Text style={s.formTextIndent}>1.  Only those that are legally required to be notified will be informed of the breach. Notifying a broad base when it is not required could cause unnecessary concern in those who have not been affected.</Text>                     
                        </View>
                        <View style={s.EULAFormBorderless}>
                            <Text style={s.formTextIndent}>2.  A physical copy will always be mailed to the affected parties no matter what other notification methods are used (e.g. phone or email).</Text>                     
                        </View>
                        <View style={s.EULAFormBorderless}>
                            <Text style={s.formTextIndent}>3.  The notification letter will include:</Text>                     
                        </View>
                        <View style={s.EULAFormBorderless}>
                            <Text style={s.formTextIndent}>4.  A brief description of the incident including the nature of the breach and the approximate date it occurred.</Text>                     
                        </View>
                        <View style={s.EULAFormBorderless}>
                            <Text style={s.formTextIndent}>5.  A description of the type(s) of PHI that were involved in the breach (the general types of PHI, not an individual’s specific information).</Text>                     
                        </View>
                        <View style={s.EULAFormBorderless}>
                            <Text style={s.formTextIndent}>6.  Explanation of what SORA Medical Solutions is doing to investigate the breach, mitigate its negative effects and prevent future incidences.</Text>                     
                        </View>
                        <View style={s.EULAFormBorderless}>
                            <Text style={s.formTextIndent}>7.  Steps an individual can take to mitigate any potential side effects from the breach.</Text>                     
                        </View>
                        <View style={s.EULAFormBorderless}>
                            <Text style={s.formTextIndent}>8.  Contact information for a SORA Medical Solutions representative who can answer additional questions.</Text>                     
                        </View>
                        <View style={s.EULAFormBorderless}>
                            <Text style={s.formText}>Mitigating Risks</Text>                     
                        </View>
                        <View style={s.EULAFormBorderless}>
                            <Text style={s.formText}>Based off the findings of the risk assessment, a plan will be developed to mitigate risk involved with the breach. The exact course of action will be based on the type of PHI that was involved in the data breach. The course of action will aim to minimize the effect of the initial breach and to prevent similar breaches from taking place.</Text>                     
                        </View>
                        <View style={s.EULAFormBorderless}>
                            <Text style={s.formTextIndent}>1.  Affected individuals will be notified as soon as possible so they can take their own steps to mitigate potential risk.</Text>                     
                        </View>
                        <View style={s.EULAFormBorderless}>
                            <Text style={s.formTextIndent}>2.  If there is a substantial concern for fraudulent use of PHI, SORA Medical Solutions will offer: </Text>                     
                        </View>
                        <View style={s.EULAFormBorderless}>
                            <Text style={s.formTextIndent02}>Free Credit & Identity Monitoring Service to affected individuals free access to a credit monitoring service.  </Text>                     
                        </View>
                        <View style={s.EULAFormBorderless}>
                            <Text style={s.optionSetFontBold}>SORA Medical Solutions Computer System Security Requirements</Text>                     
                        </View>
                        <View style={s.EULAFormBorderless}>
                            <Text style={s.formText}>SORA maintains a computer security system that provides at a minimum to the extent technically feasible:</Text>                     
                        </View>
                        <View style={s.EULAFormBorderless}>
                            <Text style={s.formTextIndent}>1.  Security user authentication protocols including:</Text>                     
                        </View>
                        <View style={s.EULAFormBorderless}>
                            <Text style={s.formTextIndent02}>Control of user IDs and other identifiers</Text>                     
                        </View>
                        <View style={s.EULAFormBorderless}>
                            <Text style={s.formTextIndent02}>A reasonably secure method of assigning and selecting passwords, or use of unique identifier technologies, such as biometrics or token devices</Text>                     
                        </View>
                        <View style={s.EULAFormBorderless}>
                            <Text style={s.formTextIndent02}>Control of data security passwords to ensure that such passwords are kept in a location and/or format that does not compromise the security of the data they protect</Text>                     
                        </View>
                        <View style={s.EULAFormBorderless}>
                            <Text style={s.formTextIndent02}>Restricting access to active Users and active User accounts only</Text>                     
                        </View>
                        <View style={s.EULAFormBorderless}>
                            <Text style={s.formTextIndent02}>Blocking access to user identification after multiple unsuccessful attempts to gain access or the limitation placed on access for the particular system</Text>                     
                        </View>
                        <View style={s.EULAFormBorderless}>
                            <Text style={s.formTextIndent}>02.   Secure access control measures that:</Text>                     
                        </View>
                        <View style={s.EULAFormBorderless}>
                            <Text style={s.formTextIndent02}>Restrict access to records and files containing PHI and/or Confidential information to those who need such information to perform their job duties</Text>                     
                        </View>
                        <View style={s.EULAFormBorderless}>
                            <Text style={s.formTextIndent02}>Assign unique identifications plus passwords, which are not vendor supplied default passwords, to each person with computer access, that are reasonably designed to maintain the integrity of the security of the access controls</Text>                     
                        </View>
                        <View style={s.EULAFormBorderless}>
                            <Text style={s.formTextIndent}>03.  Encryption of all transmitted records and files containing PHI and/or Confidential information.</Text>                     
                        </View>
                        <View style={s.EULAFormBorderless}>
                            <Text style={s.formTextIndent}>04.  Encryption of all SORA Medical Solutions data stored on laptops or personal devices.</Text>                     
                        </View>
                        <View style={s.EULAFormBorderless}>
                            <Text style={s.formTextIndent}>05.  Reasonable monitoring of systems for unauthorized use of or access to PHI and/or Confidential information.</Text>                     
                        </View>
                        <View style={s.EULAFormBorderless}>
                            <Text style={s.formTextIndent}>06.  For devices or systems that are connected to the Internet, reasonably up-to-date firewall protection and operating system security patches</Text>                     
                        </View>
                        <View style={s.EULAFormBorderless}>
                            <Text style={s.formTextIndent}>07.  Reasonably up-to-date versions of system security agent software which must include malware protection and reasonably up-to-date patches and virus definitions, or a version of such software that can still be supported with up-to-date patches and virus definitions, and is set to receive the most current security updates on a regular basis.</Text>                     
                        </View>
                        <View style={s.EULAFormBorderless}>
                            <Text style={s.formTextIndent}>08.  Education and training of employees on the proper use of the computer security system and the importance of data security.</Text>                     
                        </View>
                        <View style={s.EULAFormBorderless}>
                            <Text style={s.optionSetFontBold}>Common Questions</Text>                     
                        </View>
                        <View style={s.EULAFormBorderless}>
                            <Text style={s.formTextIndent}>01.  I’ve received unprotected PHI in my email. What do I do?</Text>                     
                        </View>
                        <View style={s.EULAFormBorderless}>
                            <Text style={s.formTextIndent}>02.   If this came from another SORA employee, treat this as a potential data breach and follow the steps outlined in the Data Breach Response.</Text>                     
                        </View>
                        <View style={s.EULAFormBorderless}>
                            <Text style={s.formTextIndent}>03.  If this came from an outside organization, call a member of SORA Leadership so that SORA can contact the organization to notify them of a potential breach in their system.</Text>                     
                        </View>
                        <View style={s.EULAFormBorderless}>
                            <Text style={s.formTextIndent}>04.  I need to collaborate with another SORA employee on a customer problem but that other employee doesn’t have access to the customer system. How do I properly share the necessary data with this other employee?</Text>                     
                        </View>
                        <View style={s.EULAFormBorderless}>
                            <Text style={s.formTextIndent02}>Delete the data once the project or need is completed.</Text>                     
                        </View>
                        <View style={s.EULAFormBorderless}>
                            <Text style={s.formTextIndent}>05.  I found a document containing PHI on Google Drive. What do I do?</Text>                     
                        </View>
                        <View style={s.EULAFormBorderless}>
                            <Text style={s.formTextIndent02}>Call a member of SORA Medical Solutions to let them know where the document lives and the type of PHI it contains.</Text>                     
                        </View>
                        <View style={s.EULAFormBorderless}>
                            <Text style={s.formTextIndent02}>Clean up the original document. Either delete the file or remove the PHI and save it with a new name.</Text>                     
                        </View>
                        <View style={s.EULAFormBorderless}>
                            <Text style={s.formTextIndent02}>Contact the folder owner to have the PHI file permanently deleted from Google Drive</Text>                     
                        </View>
                        <View style={s.EULAFormBorderless}>
                            <Text style={s.formTextIndent02}>Contact Davin Hill or Sam Marten to identify who all had access to the original document.</Text>                     
                        </View>
                        <View style={s.EULAFormBorderless}>
                            <Text style={s.formTextIndent02}>Have each person who had access verify that the PHI removal has synced to all of their devices.</Text>                     
                        </View>                       
                    </View>
                    <View style={s.optionSetContainer07}>
                            <TouchableHighlight onPress={ this.navigate.bind(this, 'Settings') } style={styles.button}>
                                <View style={s.gridFormBorderless}>
                                    <View style={s.gridFormThin}>
                                        <Text style={s.optionSetFontBold}>Return</Text>
                                    </View>
                                    <View style={s.gridFormWide}>
                                        <Image
                                            source={require('./assets/icons/nav/nav_nextBtn@4x.png')}
                                        />
                                    </View>
                                </View>

                            </TouchableHighlight>
                    </View>
                </View>
              </ScrollView>
        </View>







          <View style={styles.footerwrapper}>
            <View style={styles.footernavigation}>
                <View style={styles.buttonWrapFoot}>
                    <TouchableHighlight onPress={ this.navigate.bind(this, 'Main') } style={styles.buttonbottom}>
                        <Image
                          style={styles.bottomIcon}
                          source={require('./assets/icons/nav/nav-item1@2x.png')}
                        />
                    </TouchableHighlight>
                </View>
                <View style={styles.divider}>

                </View>
                <View style={styles.buttonWrapFoot}>
                    <TouchableHighlight onPress={ this.navigate.bind(this, 'Report') } style={styles.buttonbottom}>
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
                          source={require('./assets/icons/nav/nav-item4-active@2x.png')}
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
  }


});

export default HIPAA

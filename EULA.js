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

class EULA extends Component {

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
                        <Text style={s.optionSetTitleBold}>E.U.L.A.</Text>
                    </View>

                    <View style={s.optionSetContainer13}>
                        <View style={s.EULAFormBorderless}>
                            <Text style={s.formText}>THIS PILOT SOFTWARE AGREEMENT (“Agreement ”) is by and between Sora Medical Solutions, LLC, a Kansas limited liability company (“SMS ”), and the individual identified above (“The Healthcare Provider or The Provider”). Each of SMS and The Healthcare Provider will be referred to in this Agreement individually as a “party” and together as the “parties.” This Agreement will be effective as of the date of the last signature below (“Effective Date ”).</Text>                     
                        </View>
                        <View style={s.EULAFormBorderless}>
                            <Text style={s.formText}>A.             SMS is currently designing and developing a proprietary mobile application for doctors for analyzing patients and making diagnoses (collectively with any related information, forms, documentation, modifications, updates, or improvements thereto, the “App ”);</Text>                         
                        </View>
                        <View style={s.EULAFormBorderless}>
                            <Text style={s.formText}>B.             SMS and the The Healthcare Provider each desire that the The Healthcare Provider be a beta tester of the App ; and</Text> 
                        </View>
                        <View style={s.EULAFormBorderless}>
                            <Text style={s.formText}>C.             SMS is willing to provide to the Provider a limited, beta and evaluation license to the App within the protection of this confidential relationship and subject to the terms and conditions of this Agreement.</Text> 
                        </View>
                        <View style={s.EULAFormBorderless}>
                            <Text style={s.optionSetFontBold}>The parties agree as follows:</Text> 
                        </View>
                        <View style={s.EULAFormBorderless}>
                            <Text style={s.formText}>1.              License Grant . Subject to the terms and conditions set forth in this Agreement, SMS hereby grants to the The Healthcare Provider, at no charge to the The Healthcare Provider, and the The Healthcare Provider hereby accepts, a personal, non-transferable, non-sub licensable, temporary, limited, and non-exclusive license (the “License ”) to use the App solely on the The Healthcare Provider’s mobile, handheld device. The The Healthcare Provider will not, without SMS’s prior written consent, copy, provide, disclose, or otherwise make the App available in any form to any other person or entity. Any new revision, update, or replacement of the App provided by SMS will be governed by this Agreement. Any rights not expressly granted to the The Healthcare Provider herein are hereby reserved by SMS.</Text> 
                        </View>
                        <View style={s.EULAFormBorderless}>
                            <Text style={s.formText}>2.              Ownership . SMS is the exclusive owner of the App (including any revisions, modifications, and enhancements thereto) and any other specifications, documentation, ideas, know-how, techniques, processes, inventions, or other intellectual property that SMS may develop, conceive, or deliver. The App is licensed hereunder, not sold. No title to or ownership of the App is transferred to the The Healthcare Provider. The The Healthcare Provider will not modify, enhance, supplement, create derivative works from, reverse assemble, reverse engineer, reverse compile, or otherwise reduce the App to human readable form without SMS’s prior written consent.</Text> 
                        </View>
                        <View style={s.EULAFormBorderless}>
                            <Text style={s.formText}>3.              Testing . All testing activities will be continuously monitored, supervised, and controlled by SMS. SMS will not be obligated to make the App available as a standard product or to make any changes or modifications to the App suggested or offered by the The Healthcare Provider. SMS reserves the right to discontinue work on the App or to revise the App so that it may provide different features or functionality, features in different combinations, and/or different environment configurations. The decision on whether to observe, test, repair, or replace the App during beta testing, or to terminate testing at any particular time, is and will remain solely up to SMS. The The Healthcare Provider agrees to promptly inform SMS of all errors, difficulties, or other problems associated with installing, activating, using, and testing the App.</Text> 
                        </View>
                        <View style={s.EULAFormBorderless}>
                            <Text style={s.formText}>4.              Confidentiality .</Text> 
                        </View>
                        <View style={s.EULAFormBorderless}>
                            <Text style={s.formText}>4.1.           Confidential Information . As a result of the relationship entered into under this Agreement, the parties acknowledge that they may from time to time require or gain access to information that is confidential or proprietary to one another. All information disclosed by a party hereunder that (i) is in writing and marked with an appropriately restrictive legend indicating the confidential or proprietary nature of the information; (ii) is disclosed orally and reduced to a writing marked with an appropriately restrictive legend promptly after the oral disclosure; or (iii) by its nature or under the circumstances of its disclosure should reasonably be understood to be confidential is referred to herein as “Confidential Information .” For avoidance of doubt, the The Healthcare Provider will treat the terms of this Agreement as SMS’s Confidential Information.</Text> 
                        </View>
                        <View style={s.EULAFormBorderless}>
                            <Text style={s.formText}>4.2.          Obligations . The receiving party (i) will hold all Confidential Information in confidence; (ii) will use the Confidential Information only for the purpose of performing its obligations under this Agreement; (iii) will reproduce the Confidential Information only to the extent necessary for such purpose; and (iv) will not disclose or cause to be disclosed the Confidential Information to any third party without prior written approval of the disclosing party.</Text> 
                        </View>
                        <View style={s.EULAFormBorderless}>
                            <Text style={s.formText}>4.3.          Exceptions . The foregoing restrictions do not apply to Confidential Information that (i) is or becomes a part of the public domain through no wrongful act or omission of the receiving party; (ii) was in the receiving party’s lawful possession before the disclosure as shown by written documentation obtained by the receiving party either directly or indirectly from the disclosing party; (iii) is lawfully disclosed to the receiving party by a third party without restriction on disclosure; (iv) is independently developed by the receiving party without reference to or reliance on the Confidential Information or participation of any person who had access to the Confidential Information; or (v) the disclosing party agrees in writing is free of such restrictions. In addition, if the receiving party is requested pursuant to, or required by, applicable law or regulation or by legal process to disclose any Confidential Information, then the receiving party will, to the
extent legally permissible, promptly notify the disclosing party in writing of such request(s) to enable the disclosing party to seek an appropriate protective order. If no such order is obtained within a reasonably prompt time, the receiving party may, without liability hereunder, disclose that portion of the Confidential Information that the receiving party’s legal counsel advises is legally required to be disclosed.</Text> 
                        </View>
                        <View style={s.EULAFormBorderless}>
                            <Text style={s.formText}>5.              Term; Termination . This Agreement and the license granted herein will commence as of the Effective Date and will continue for a period of one hundred and twenty (120) days; provided that SMS will have the absolute right, at any time and for any reason or no reason, to terminate this Agreement and take immediate possession of the App and all copies wherever located without demand or notice. Upon termination of this Agreement, the The Healthcare Provider will cease all use of the App and any SMS Confidential Information. Within five (5) days following termination of this Agreement, The The Healthcare Provider will (a) return the App to SMS in the form provided by SMS, together with all related equipment, all modifications made by the The Healthcare Provider, any other Confidential Information and all copies thereof made by The The Healthcare Provider, and/or (b) at SMS’s request, delete the App and all associated data from The The Healthcare Provider’s mobile, handheld device.</Text> 
                        </View>
                        <View style={s.EULAFormBorderless}>
                            <Text style={s.formText}>6.              Intellectual Property Rights .</Text> 
                        </View>
                        <View style={s.EULAFormBorderless}>
                            <Text style={s.formText}>6.1.          The The Healthcare Provider’s Information .   The The Healthcare Provider hereby grants to SMS a non-exclusive, perpetual, irrevocable, worldwide, royalty-free license to use, disclose, license, and/or sell any data (i) The The Healthcare Provider uploads or inputs into the App; (ii) collected by The The Healthcare Provider’s use of the App; or (iii) otherwise provided by The The Healthcare Provider to SMS regarding use of the App (collectively, the “Data ”) for any and all lawful purpose. SMS will use commercially reasonable efforts to de-identify any data it uses or disseminates that is not already de-identified. The The Healthcare Provider covenants that the Provider will not utilize the App to store or otherwise transmit protected health information as defined by HIPAA and HITECH.  I agree to abide by SMS's Data Security Policy, and I have read understand the terms outlined in the policy.  I furthermore acknowledge my responsibilities when a suspected Data Breach occurs, and that I am subject to disciplinary actions, civil litigation, or criminal penalties for failure to follow the terms and conditions outlined in the policy.  </Text> 
                        </View>
                        <View style={s.EULAFormBorderless}>
                            <Text style={s.formText}>6.2.          SMS’s Rights . SMS will have and retain sole and exclusive ownership of all right, title, and interest in and to (i) the Confidential Information, the App and any additions, modifications, or improvements thereto arising in conjunction with this Agreement or as a result of any other collaboration between SMS and The The Healthcare Provider relating to the App; (ii) any other work product or information derived from the App or developed by The The Healthcare Provider in conjunction with this Agreement; (iii) all media and documentation relating to the foregoing; and (iv) all intellectual property or other proprietary rights associated with any of the foregoing (including, without limitation, rights to patents, copyrights, trade secrets, or know-how) (collectively, the “Intellectual Property ”). The The Healthcare Provider will provide SMS with copies of all additions, modifications, or improvements made by The The Healthcare Provider to the App (whether or not permitted under this Agreement). The The Healthcare Provider acknowledges that SMS is the
exclusive owner of all such additions, modifications, or improvements including, but not limited to, the incorporation thereof into the App for assignment, license, or other transfer to third parties. To the extent any Intellectual Property or other rights related to or derived from the App or the Confidential Information do not automatically vest in SMS as a “work made for hire,” by operation of law or otherwise, The The Healthcare Provider hereby irrevocably assigns all such rights to SMS. Upon SMS’s request, The The Healthcare Provider agrees to execute such further instruments and take such further actions as SMS may reasonably request to effectuate SMS’s ownership of any of the foregoing. The parties do not intend to jointly create any intellectual property pursuant to this Agreement.</Text> 
                        </View>
                        <View style={s.EULAFormBorderless}>
                            <Text style={s.formText}>7.              The The Healthcare Provider Representations and Warranties . The The Healthcare Provider represents and warrants to SMS that: (i) SMS’s collection and accumulation of the Data does not and will not violate any applicable law, rule, or regulation or any agreement to which The The Healthcare Provider is a party or by which The The Healthcare Provider is bound; (ii) The The Healthcare Provider has the full power and authority to enter into this Agreement; (iii) The The Healthcare Provider has all necessary legal, corporate, contractual, and other power and authority to grant SMS the rights contemplated by this Agreement; and (iv) the execution, delivery, and performance of this Agreement will not violate any applicable law, rule, " regulation and will not violate any agreement to which The The Healthcare Provider is a party or by which The The Healthcare Provider is bound.</Text> 
                        </View>
                        <View style={s.EULAFormBorderless}>
                            <Text style={s.formText}>8.              Warranty Disclaimer . The The Healthcare Provider UNDERSTANDS AND AGREES that The App IS STILL BEING DESIGNED AND DEVELOPED AND HAS not been tested or debugged. SMS PROVIDES THE APP “AS IS” AND makes no representations or warranties, whether express or implied, regarding its use. to the maximum extent allowed under applicable law, SMS makes NO REPRESENTATIONS OR WARRANTIES OF MERCHANTABILITY OR FITNESS FOR A PARTICULAR PURPOSE, or that the use of The App or any information relating thereto or contained therein will not infringe any intellectual property rights of any third person. SMS makes no representations concerning the SUITABILITY, PERFORMANCE, completeness, accuracy, or operation of The App, and that SMS assumes no liability that may arise out of the use or possession of the App.</Text> 
                        </View>
                        <View style={s.EULAFormBorderless}>
                            <Text style={s.formText}>9.              Limitation of Damages . to the maximum extent allowed under applicable law, In no event will SMS be liable to The The Healthcare Provider, or any person or entity claiming through The The Healthcare Provider, FOR indirect, incidental, consequential, special, or exemplary damages, INCLUDING ANY LOSS OF PROFITS, arising out of or otherwise related to this Agreement. The The Healthcare Provider will have the sole responsibility for adequate protection and backup of its data used in connection with THE APP. SMS’s TOTAL LIABILITY TO The The Healthcare Provider, AND The The Healthcare Provider’S SOLE AND EXCLUSIVE REMEDY, FOR ANY CLAIM Of ANY TYPE WHATSOEVER ARISING OUT OF The The Healthcare Provider’s use of THE APP WILL BE LIMITED TO PROVEN DIRECT DAMAGES CAUSED BY SMS’S GROSS NEGLIGENCE IN AN AMOUNT NOT TO EXCEED THE AMOUNT PAID BY The The Healthcare Provider, IF ANY, FOR The The Healthcare Provider’S ACCESS AND USE OF THE APP.</Text> 
                        </View>
                        <View style={s.EULAFormBorderless}>
                            <Text style={s.formText}>10.            Indemnification .</Text> 
                        </View>
                        <View style={s.EULAFormBorderless}>
                            <Text style={s.formText}>10.1.       SMS Indemnification Obligation . SMS will defend the Healthcare Provider against any third party claim that the App (in the form provided to the Healthcare Provider) infringes a U.S. patent or copyright and will pay the resulting costs and damages awarded against the Healthcare Provider by a court of competent jurisdiction; provided that the Healthcare Provider: (i) notifies SMS promptly in writing of such claim; (ii) grants SMS sole control over the defense and settlement thereof; and (iii) reasonably cooperates in response to any SMS request for assistance. Should the App become, or in SMS’s opinion be likely to become, the subject of such a claim, SMS will, at its option and expense, (a) procure for the Healthcare Provider the right to make continued use thereof; (b) replace or modify the App so that it becomes non-infringing; or (c) terminate this Agreement and require the Healthcare Provider to promptly return the App or delete the App and all associated data from the Healthcare Provider’s mobile, handheld device. SMS will have no liability if the alleged
infringement is based on (1) combination of non-SMS products; (2) use for a purpose or in a manner for which the App was not designed; (3) use of any older version of the App when use of a new SMS version or revision would have avoided the infringement; (4) any modification not made with SMS’s written approval; (5) any modifications made by SMS pursuant to the Healthcare Provider’s specific instructions; or (6) any intellectual property right owned or licensed by the Healthcare Provider. THIS SECTION STATES THE HEALTHCARE PROVIDER’S SOLE AND EXCLUSIVE REMEDY AND SMS’S ENTIRE LIABILITY FOR INFRINGEMENT CLAIMS.</Text> 
                        </View>
                        <View style={s.EULAFormBorderless}>
                            <Text style={s.formText}>10.2.       The Healthcare Provider Indemnification Obligation . The Healthcare Provider will defend SMS against any third party claim to the extent that such claim pertains to the Healthcare Provider’s (i) use, misuse, or operation of the App; (ii) breach of this Agreement; or (iii) gross negligence or willful misconduct. SMS will promptly notify the Healthcare Provider in writing of such a claim, grant the Healthcare Provider sole control over the defense and settlement thereof, and reasonably cooperate in response to the Healthcare Provider’s request for assistance.</Text> 
                        </View>
                        <View style={s.EULAFormBorderless}>
                            <Text style={s.formText}>11.            Remedies . The parties acknowledge that the Healthcare Provider’s breach or anticipated or threatened breach of any part of this Agreement would cause irreparable injury to SMS, the resulting damages of which may be difficult if not impossible to measure in money damages, and for which there may be no adequate remedy at law. In addition to any and all other legal and equitable rights and remedies available to SMS, SMS will be entitled to seek and obtain injunctive and equitable relief hereunder and to secure enforcement of this Agreement. The foregoing will not preclude SMS from seeking and obtaining money damages, including attorney fees and costs, from the Healthcare Provider with respect to any such breach or anticipated or threatened breach.</Text> 
                        </View>
                        <View style={s.EULAFormBorderless}>
                            <Text style={s.formText}>12.            Notice . Any notice required hereunder will be delivered by hand, by courier service, or by U.S. mail to the address provided herein by the party to be notified. Either party may change the referenced addresses and contact information by written notice to the other in accordance with this section. Notices will be effective: (a) as of the date personally delivered if by hand; (b) for notices sent by U.S. mail, five (5) business days after the postmark date; or (c) upon receipt if sent by courier service. Notices also may be delivered by electronic means (but must be confirmed in writing as above) and notices so delivered will be effective upon actual receipt of the electronic transmission.</Text> 
                        </View>
                        <View style={s.EULAFormBorderless}>
                            <Text style={s.formText}>13.            Miscellaneous .</Text> 
                        </View>
                        <View style={s.EULAFormBorderless}>
                            <Text style={s.formText}>13.1.       Assignment . This Agreement and the license granted hereunder may not be assigned, sublicensed, or otherwise transferred by the Healthcare Provider without SMS’s prior written consent. Any attempt by the Healthcare Provider to assign this Agreement or the license granted hereunder without the required consent of SMS will be void.</Text> 
                        </View>
                        <View style={s.EULAFormBorderless}>
                            <Text style={s.formText}>13.2.        Merger of Terms; Modification . This Agreement, including all attached exhibits and schedules which are incorporated herein, supersedes all prior agreements concerning the subject matter herein and may not be changed or terminated except by a written communication signed by both the Healthcare Provider and SMS.</Text> 
                        </View>
                        <View style={s.EULAFormBorderless}>
                            <Text style={s.formText}>13.3.        Partial Invalidity . If any of the provisions of this Agreement are invalid under any applicable statute or rule of law, such provisions or portions thereof are to that extent deemed to be omitted.</Text> 
                        </View>
                        <View style={s.EULAFormBorderless}>
                            <Text style={s.formText}>13.4.        Governing Law; Jurisdiction . This Agreement will be governed by the laws of the State of Kansas without reference to principals of conflicts of law. All actions relating directly or indirectly to this Agreement will be brought and litigated in the District Court of Johnson County, Kansas or the U.S. Federal District Court for the District of Kansas. the Healthcare Provider expressly agrees and consents to the sole and exclusive jurisdiction of such courts and to venue therein.</Text> 
                        </View>
                        <View style={s.EULAFormBorderless}>
                            <Text style={s.formText}>13.5.        Survival . The provisions of Sections 2, 4, 6, 7, 8, 9, 10, 11, 12, and 13 will survive the termination or expiration of this Agreement.</Text> 
                        </View>
                        <View style={s.EULAFormBorderless}>
                            <Text style={s.formText}>13.6.        Counter Parts; Electronic Signatures . This Agreement may be executed in counterparts, each of which will be deemed to be an original and together will constitute one and the same instrument. In the event that any signature to this Agreement or any amendment hereto is delivered by e-mail delivery of an image or Portable Document Format (“PDF ”) data file, such signature will create a valid and binding obligation of the party executing (or on whose behalf such signature is executed) with the same force and effect as if such image or PDF signature page were an original thereof.</Text> 
                        </View>
                        <View style={s.EULAFormBorderless}>
                            <Text style={s.formText}>13.7.        Waiver . No term or provision hereof will be deemed waived and no breach excused unless such waiver or consent is in writing and signed by the party claimed to have waived or consented to such term or provision. The waiver or failure of either party to exercise in any respect any right provided for herein will not be deemed a waiver of any further right hereunder.</Text> 
                        </View>
                        <View style={s.EULAFormBorderless}>
                            <Text style={s.formText}>13.8.        No Third Party Beneficiaries . Nothing in this Agreement, express or implied, will create or confer upon any person or entity not a named party to this Agreement any legal or equitable rights, remedies, liabilities or claims with respect to this Agreement, except as expressly provided herein.

The parties hereto certify that they have read, understand, and agree to be legally bound by this Agreement, including the exhibits, schedules, and documents attached hereto. </Text> 
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

export default EULA

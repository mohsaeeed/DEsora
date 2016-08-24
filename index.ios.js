/**
 * SORA Med - Damascus Edge - The Forge
 * https://github.com/relderDE/sora_med_app.git
 * @flow
 */

'use strict';
import React, { Component } from 'react';
import {
	AppRegistry,
	StyleSheet,
	Navigator,
	Text,
	View
} from 'react-native';



import Main from './Main';

import Login from './Login';
import SignUp from './SignUp';
import ForgotPassword from './ForgotPassword';

import Stroke from './StrokePages/Stroke';
import StrokeStepOne from './StrokePages/StrokeStepOne';
import StrokeStepTwo from './StrokePages/StrokeStepTwo';
import StrokeStepThree from './StrokePages/StrokeStepThree';
import StrokeStepFour from './StrokePages/StrokeStepFour';
import StrokeStepFive from './StrokePages/StrokeStepFive';
import IVTPA from './StrokePages/IVTPA';
import NonIVTPA from './StrokePages/NonIVTPA';
import CTAngio from './StrokePages/CTAngio';
import InclusionCriteria from './StrokePages/InclusionCriteria';
import ExclusionCriteria from './StrokePages/ExclusionCriteria';
import RelativeExclusionCriteria from './StrokePages/RelativeExclusionCriteria';
import NeurologistConsult from './StrokePages/NeurologistConsult';

import Sepsis from './SepsisPages/Sepsis';
import SepsisTwo from './SepsisPages/SepsisTwo';
import SepsisThree from './SepsisPages/SepsisThree';
import SepsisStepOne from './SepsisPages/SepsisStepOne';
import SepsisStepTwo from './SepsisPages/SepsisStepTwo';
import SepsisStepThree from './SepsisPages/SepsisStepThree';
import NonSepsis from './SepsisPages/NonSepsis';
import SepsisSplitOne from './SepsisPages/SepsisSplitOne';
import SevereSepsis from './SepsisPages/SevereSepsis';
import NonSevereSepsis from './SepsisPages/NonSevereSepsis';
import InfectiousSIRS from './SepsisPages/InfectiousSIRS';
import NonInfectiousSIRS from './SepsisPages/NonInfectiousSIRS';
import SevereSepsisTreatment from './SepsisPages/SevereSepsisTreatment';
import SepticShock from './SepsisPages/SepticShock';
import VolumeStatus from './SepsisPages/VolumeStatus';
import RemeasureLactate from './SepsisPages/RemeasureLactate';
import SepsisResults from './SepsisPages/SepsisResults';

import CBBreathing from './CodeBluePages/CBBreathing';
import CBFirstSteps from './CodeBluePages/CBFirstSteps';
import CBPulse from './CodeBluePages/CBPulse';
import CBCPR from './CodeBluePages/CBCPR';
import CBCycle from './CodeBluePages/CBCycle';


import Settings from './Settings';
import EventMan from './EventMan';
import EULA from './EULA';
import HIPAA from './HIPAA';
import BugFix from './BugFix';

import Test from './Test';

import Report from './Report';

class soraMed extends Component {



	renderScene(route, navigator){
		if (route.name == 'Main') {
				return <Main navigator={navigator} />
		}
		if (route.name == 'Login') {
				return <Login navigator={navigator} />
		}
		if (route.name == 'SignUp') {
				return <SignUp navigator={navigator} />
		}
		if (route.name == 'ForgotPassword') {
				return <ForgotPassword navigator={navigator} />
		}


		//Code Blue
		if (route.name == 'CBBreathing') {
				return <CBBreathing navigator={navigator} />
		}
		if (route.name == 'CBFirstSteps') {
				return <CBFirstSteps navigator={navigator} />
		}
		if (route.name == 'CBPulse') {
				return <CBPulse navigator={navigator} />
		}
		if (route.name == 'CBCPR') {
				return <CBCPR navigator={navigator} />
		}
		if (route.name == 'CBCycle') {
				return <CBCycle navigator={navigator} />
		}




		//STROKE
		if (route.name == 'Stroke') {
				return <Stroke navigator={navigator} />
		}
		if (route.name == 'StrokeStepOne') {
				return <StrokeStepOne navigator={navigator} />
		}
		if (route.name == 'StrokeStepTwo') {
				return <StrokeStepTwo navigator={navigator} />
		}
		if (route.name == 'StrokeStepThree') {
				return <StrokeStepThree navigator={navigator} />
		}
		if (route.name == 'StrokeStepFour') {
				return <StrokeStepFour navigator={navigator} />
		}
		if (route.name == 'StrokeStepFive') {
				return <StrokeStepFive navigator={navigator} />
		}
		if (route.name == 'IVTPA') {
				return <IVTPA navigator={navigator} />
		}
		if (route.name == 'NonIVTPA') {
				return <NonIVTPA navigator={navigator} />
		}
		if (route.name == 'CTAngio') {
				return <CTAngio navigator={navigator} />
		}
		if (route.name == 'InclusionCriteria') {
				return <InclusionCriteria navigator={navigator} />
		}
		if (route.name == 'ExclusionCriteria') {
				return <ExclusionCriteria navigator={navigator} />
		}
		if (route.name == 'RelativeExclusionCriteria') {
				return <RelativeExclusionCriteria navigator={navigator} />
		}
		if (route.name == 'NeurologistConsult') {
				return <NeurologistConsult navigator={navigator} />
		}
		


		if (route.name == 'Sepsis') {
				return <Sepsis navigator={navigator} />
		}
		if (route.name == 'SepsisTwo') {
				return <SepsisTwo navigator={navigator} />
		}
		if (route.name == 'SepsisThree') {
				return <SepsisThree navigator={navigator} />
		}
		if (route.name == 'SepsisStepOne') {
				return <SepsisStepOne navigator={navigator} />
		}
		if (route.name == 'SepsisStepTwo') {
				return <SepsisStepTwo navigator={navigator} />
		}
		if (route.name == 'SepsisStepThree') {
				return <SepsisStepThree navigator={navigator} />
		}
		if (route.name == 'NonSepsis') {
				return <NonSepsis navigator={navigator} />
		}
		if (route.name == 'SepsisSplitOne') {
				return <SepsisSplitOne navigator={navigator} />
		}
		if (route.name == 'SevereSepsis') {
				return <SevereSepsis navigator={navigator} />
		}
		if (route.name == 'NonSevereSepsis') {
				return <NonSevereSepsis navigator={navigator} />
		}
		if (route.name == 'InfectiousSIRS') {
				return <InfectiousSIRS navigator={navigator} />
		}
		if (route.name == 'NonInfectiousSIRS') {
				return <NonInfectiousSIRS navigator={navigator} />
		}
		if (route.name == 'SepticShock') {
				return <SepticShock navigator={navigator} />
		}
		if (route.name == 'SevereSepsisTreatment') {
				return <SevereSepsisTreatment navigator={navigator} />
		}
		if (route.name == 'VolumeStatus') {
				return <VolumeStatus navigator={navigator} />
		}
		if (route.name == 'RemeasureLactate') {
				return <RemeasureLactate navigator={navigator} />
		}
		if (route.name == 'SepsisResults') {
				return <SepsisResults navigator={navigator} />
		}
		
		
		if (route.name == 'Settings') {
                return <Settings navigator={navigator} />
        }
        if (route.name == 'EventMan') {
                return <EventMan navigator={navigator} />
        }
        if (route.name == 'EULA') {
                return <EULA navigator={navigator} />
        }
        if (route.name == 'HIPAA') {
                return <HIPAA navigator={navigator} />
        }
        if (route.name == 'BugFix') {
                return <BugFix navigator={navigator} />
        }
		
		
		
		if (route.name == 'Report') {
				return <Report navigator={navigator} />
		}
		
		if (route.name == 'Test') {
				return <Test navigator={navigator} />
		}

	}

	render() {
		return (
			<View style={styles.container}>
				<Navigator
					initialRoute={{name: 'Main'}}
					renderScene={this.renderScene.bind(this)}
				/>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#FFF',
	},
});

AppRegistry.registerComponent('soraMed', () => soraMed);

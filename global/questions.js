/**
 * SORA Med - Damascus Edge - The Forge
 * https://github.com/relderDE/sora_med_app.git
 * @flow
 */

'use strict';
import React, { Component } from 'react';

var SQLite = require('react-native-sqlite-storage');

import {
  AppRegistry
} from 'react-native';


//Usage: api.call(table, arg1, arg2);
//var api = require('../global/fetchRoutes.js');

//Sepsis

//Page 1
var p1q1 = 'Diagnosis for Sepsis';
var p1q2 = 'Evaluate for Severity';
var p1q3 = 'Treatment Options';
//Page 1 - Page 1
var p1q1q1 = 'Is temperature UNDER 36C/96.8F OR OVER 38.3c/100.0F?';
var p1q1q2 = 'Is heart rate OVER 60BPM';
var p1q1q3 = 'Is respiration rate OVER 20 OR is PaCO2 UNDER 32?';
var p1q1q4 = 'Is there a known arrival time?';
//Page 1 - Page 2
var p1q2q1 = 'Facial Droop';
var p1q2q2 = 'Arm/leg or unilateral weakness';
var p1q2q3 = 'Speech abnormality';
var p1q2q4 = 'Last known normal known';
var p1q2q5 = 'Known arrival time';
//Page 1 - Page 3
var p1q3q1 = 'Level of Consciousness';
var p1q3q2 = 'Month and Age';
var p1q3q3 = 'Blink Eyes and Squeeze Hands';
var p1q3q4 = 'Horizontal Extra-Ocular Movements';
var p1q3q5 = 'Visual Fields';
var p1q3q6 = 'Facial Palsy';
var p1q3q7 = 'Left Arm Motor Drift';
var p1q3q8 = 'Right Arm Motor Drift';
var p1q3q9 = 'Left Leg Motor Drift';
var p1q3q10 = 'Right Leg Motor Drift';
var p1q3q11 = 'Limb Ataxia';
var p1q3q12 = 'Sensation';
var p1q3q13 = 'Language/Aphasia';
var p1q3q14 = 'Dysarthria';
var p1q3q15 = 'Extinction/Inattention';


//Stroke

//Code Blue


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

//Questions Include
//var que = require('../global/questions.js');

//Answers Include
//var ans = require('../global/answers.js');

//Sepsis

if (api.call(status) === 1 && api.call(path) === 'sepsis') {
  return api.call.sepsis.status;
  return api.call(sepsis);
  return responseJson.true;
}

//Stroke

if (api.call(status) === 1 && api.call(path) === 'stroke') {
  return api.call.stroke.status;
  return api.call(stroke);
  return responseJson.true;
}

//Code Blue

if (api.call(status) === 1 && api.call(path) === 'codeblue') {
  return api.call.codeblue.status;
  return api.call(codeblue);
  return responseJson.true;
}

//Local storage update pulled from higher level database based on status and time and app state. 

AsyncStorage.setItem("defaultuser", "Sora");

AsyncStorage.getItem("defaultuser").then((value) => {
    this.setState({"defaultuser": value});
}).done();
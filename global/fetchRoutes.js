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

//fetch urls
//dev
var fetchurl = 'http://sorawebapp.local/api/m/v1/';
//production
//var fetchurl = 'https://api.appmedica.com/api/m/v1/';

//default constructor
//var arg1 = '';
//var arg2 = '';
//fetch('' + fetch +'', {
//  method: 'POST',
//  headers: {
//    'Accept': 'application/json',
//    'Content-Type': 'application/json',
//  },
//  body: JSON.stringify({
//    firstParam: arg1,
//    secondParam: arg2,
//  })
//}

//Fallback method
function callfall(arg1, arg2) {
  fetch('' + fetchurl +'', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      firstParam: arg1,
      secondParam: arg2,
    })
  }
}

//ES2017 Syntax <-- the currently ussed and preferred method for DE working with React and restAPIs
function call(table, arg1, arg2) {
  async getSoraData() {
    try {
      let response = await fetch(fetchurl + if(table){ + return '/' + table;} + if(table && arg1){ + return '/' + table + '/' + arg1;} + if(table && arg1 && arg2){ + return '/' + table + '/' + arg1 + '/' + arg2;});
      let responseJson = await response.json();
      return responseJson.table;
    } catch(error) {
      console.error(error);
    }
  }
}

  
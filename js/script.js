// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Yuri G
// Created on: May 2023
// This file contains the JS functions for index.html

"use strict"

function myButtonClicked() {
  //input
  const firstInteger = parseInt(document.getElementById("first-number").value)
  const secondInteger = parseInt(document.getElementById("second-number").value)

  // process
  let counter = 0
  let answer = 0
  while (counter < secondInteger) {
    answer = answer + firstInteger
    counter = counter + 1
  }

  //output
  document.getElementById('the-answer').innerHTML = firstInteger + " x " + secondInteger + " = " + answer
}
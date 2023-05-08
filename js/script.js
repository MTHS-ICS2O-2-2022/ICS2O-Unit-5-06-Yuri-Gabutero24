// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Yuri G
// Created on: May 2023
// This file contains the JS functions for index.html

"use strict"

function myButtonClicked () {
  // this function does repeated addition
  // input
  let text = ""
  let counter = 0
  const firstNumber = parseInt(document.getElementById("first-number").value)
  const secondNumber = parseInt(document.getElementById("second-number").value)

  // process
  while (counter < firstNumber) {
    text = text + secondNumber + " "
    counter = counter + 1
  }

  // output
  document.getElementById("the-answer").innerHTML = text
}
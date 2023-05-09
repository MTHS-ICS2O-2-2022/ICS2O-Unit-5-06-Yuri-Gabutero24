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
  var secondNumber = parseInt(document.getElementById("second-number").value)
  const secondNumberTwo = parseInt(document.getElementById("second-number").value)

  // process
  while (counter < firstNumber) {
    text = text + secondNumber + "<br> Your answer is: " + (secondNumber) + "<br>"
    counter = counter + 1
    secondNumber = secondNumber + secondNumberTwo
  }

  // output
  document.getElementById("answer").innerHTML = text
}
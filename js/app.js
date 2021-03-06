// CLOCK

//IIFE
(function myFunc(win, doc){
'use strict'
setInterval(theClock, 1000)
const secHand = doc.querySelector('[data-sec-hand')
const minHand = doc.querySelector('[data-min-hand')
const hoursHand = doc.querySelector('[data-hour-hand')

function theClock(){
const todayDate = new Date()
const sec = todayDate.getSeconds() / 60
const min = (sec + todayDate.getMinutes()) / 60
const hours = (min + todayDate.getHours()) / 12
rotation(secHand, sec)
rotation(minHand, min)
rotation(hoursHand, hours)
}

function rotation(event, rotationAll){
event.style.setProperty('--rotation', rotationAll * 360)
}

theClock()

})(window, document)
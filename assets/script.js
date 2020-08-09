// Assignment code here
const results = document.querySelector("#password");
const UNInum =[48,57];
const UNIupper = [65,90];
const UNIlower = [97,122];
const UNIsym = [33,47];

// Get references to the #generate element
document.querySelector("#generate").addEventListener('click', ()=> {
  const length = document.querySelector("#length").value;
  const upper = document.querySelector("#upper").checked;
  const lower = document.querySelector("#lower").checked;
  const numbers = document.querySelector("#numeric").checked;
  const symbols = document.querySelector("#special").checked;
  
  const randSelector = [];
  const password = [];



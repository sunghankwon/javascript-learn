/*
This time we want to write calculations using functions and get the results. Let's have a look at some examples:

seven(times(five())); // must return 35
four(plus(nine())); // must return 13
eight(minus(three())); // must return 5
six(dividedBy(two())); // must return 3
Requirements:

There must be a function for each number from 0 ("zero") to 9 ("nine")
There must be a function for each of the following mathematical operations: plus, minus, times, dividedBy
Each calculation consist of exactly one operation and two numbers
The most outer function represents the left operand, the most inner function represents the right operand
Division should be integer division. For example, this should return 2, not 2.666666...:
eight(dividedBy(three()));
*/


function zero(func) {if (!func) {
    return 0;
  } else {
    return func(0);
  }}
  function one(func) {if (!func) {
    return 1;
  } else {
    return func(1);
  }}
  function two(func) {if (!func) {
    return 2;
  } else {
    return func(2);
  }}
  function three(func) {if (!func) {
    return 3;
  } else {
    return func(3);
  }}
  function four(func) {if (!func) {
    return 4;
  } else {
    return func(4);
  }}
  function five(func) {if (!func) {
    return 5;
  } else {
    return func(5);
  }}
  function six(func) {if (!func) {
    return 6;
  } else {
    return func(6);
  }}
  function seven(func) {if (!func) {
    return 7;
  } else {
    return func(7);
  }}
  function eight(func) {if (!func) {
    return 8;
  } else {
    return func(8);
  }}
  function nine(func) {if (!func) {
    return 9;
  } else {
    return func(9);
  }}
  
  function plus(y) {return function (x) {return x + y}}
  function minus(y) {return function (x) {return x - y}}
  function times(y) {return function (x) {return x * y}}
  function dividedBy(y) {return function (x) {return Math.floor(x / y)}}
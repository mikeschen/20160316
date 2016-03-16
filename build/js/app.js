(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
exports.Google = function() {
};

exports.Google.prototype.initMap = function() {
  var map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: -12.397, lng: 134.655},
    zoom: 8
  });

  var infoWindow = new google.maps.InfoWindow({map: map});

  // Try HTML5 geolocation.
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
      var pos = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
      };

      infoWindow.setPosition(pos);
      infoWindow.setContent('Location found.');
      map.setCenter(pos);
    }, function() {
      handleLocationError(true, infoWindow, map.getCenter());
    });
  } else {
    // Browser doesn't support Geolocation
    handleLocationError(false, infoWindow, map.getCenter());
  }
}

exports.Google.prototype.bicycle = function() {
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 14,
    center: {lat: 42.3726399, lng: -71.1096528}
  });

  var infoWindow = new google.maps.InfoWindow({map: map});

  // Try HTML5 geolocation.
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
      var pos = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
      };

      infoWindow.setPosition(pos);
      infoWindow.setContent('Location found.');
      map.setCenter(pos);
    }, function() {
      handleLocationError(true, infoWindow, map.getCenter());
    });
  } else {
    // Browser doesn't support Geolocation
    handleLocationError(false, infoWindow, map.getCenter());
  }

  var bikeLayer = new google.maps.BicyclingLayer();
  bikeLayer.setMap(map);
}

},{}],2:[function(require,module,exports){
var Google = require('./../js/google.js').Google;

$(document).ready(function() {
  var newGoogle = new Google();
  $('#locateUser').click(function() {
    newGoogle.initMap();
  });
  $('#locateLocal').click(function() {
    newGoogle.bicycle();
  });
});

},{"./../js/google.js":1}]},{},[2]);

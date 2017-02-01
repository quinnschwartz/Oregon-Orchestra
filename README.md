# Orchestra

Web App built using AngularJS 2 with Firebase.

By Quinn Schwartz

## Description

This website will allow the user to view the musicians in an orchestra, filter the musicians based on their section in the orchestra, click on an individual musician and be taken to a separate page to view their details, and add, update and delete musicians.

This project was generated with [angular-cli](https://github.com/angular/angular-cli) version 1.0.0-beta.26.

## Installation/ Setup

* `git clone <repository-url>` this repository
* `cd orchestra`
* `npm install`
* `bower install`
*  Navigate to https://firebase.google.com/ and either sign in or set up an account if you haven't already.  Go to console and create new project.  Click "Add Firebase to your web app" and copy snippet provided.  
* Create a file in 'App' directory named api-keys.ts and copy in your Firebase authentication details and assign them to an exported variable as follows:
  export var masterFirebaseConfig = {
    apiKey: "xxxx",
    authDomain: "xxxx.firebaseapp.com",
    databaseURL: "xxxx",
    storageBucket: "xxxx.appspot.com",
    messagingSenderId: "xxxx"
  };)
* On Firebase site change Rules in Database to the following:
  {
    "rules": {
      ".read": "true",
      ".write": "true"
    }
  }
* Import sample-musicians.json to Database

## Development server
Run `npm install` 
Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## link

https://quinnschwartz.github.io/meal-tracker/

## Legal  

this software is licensed under the MIT license.

Copyright (c) 2017 _Quinn Schwartz

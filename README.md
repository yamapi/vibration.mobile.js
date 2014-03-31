vibration.mobile.js
===================


Most modern mobile devices include vibration hardware, 
which lets software code provide physical feedback to the user by causing the device to shake.
The Vibration API offers Web apps the ability to access this hardware, if it exists, and does nothing if the device doesn't support it.

## Usage

vibration.mobile accepts settings from an object of key/value pairs.

 ```javascript
 // Format:
 $("selector").vibration({
    duration: 3000, //  number of frames per milliseconds at which animations will run (default value 3000)
    loop: 0, // stop loading after x loop (default value 0)
  }
 );
```


Enjoy!

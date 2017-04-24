# Javascripts

Replace the namespace `AppName` with your project's name.

## About Revealing Module Pattern

The revealing module pattern was engineered as a way to ensure that all methods and variables are kept private until they are explicitly exposed; usually through an object literal returned by the closure from which it's defined. 

**Example**

    var MyModule = ( function( window, undefined ) {
      
      function myMethod() {
        alert( 'my method' );
      }
      
      function myOtherMethod() {
        alert( 'my other method' );
      }
      
      // explicitly return public methods when this object is instantiated
      return {
        someMethod : myMethod,
        someOtherMethod : myOtherMethod
      };
      
    } )( window );
    
    //  example usage
    MyModule.myMethod(); // undefined
    MyModule.myOtherMethod(); // undefined
    MyModule.someMethod(); // alerts "my method"
    MyModule.someOtherMethod(); // alerts "my other method"

Reference: [https://carldanley.com/js-revealing-module-pattern/](https://carldanley.com/js-revealing-module-pattern/)
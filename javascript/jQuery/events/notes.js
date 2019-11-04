// 3 key events to use

click() // easy way to add click listener to elements
keypress() // listen for any keypress in any text input
on()

// why use on() ?

in most cases, click() and on("click") will both get the
job done. However, there is one key difference:

* click() only adds listeners for existing elements
* on() will add listeners for all potential future elements 

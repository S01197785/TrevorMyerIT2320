<!DOCTYPE html>
<html lang="en">
<head>
   <meta charset="utf-8"/>
   <style>
   
   </style>
   <title>IT 2320 - Lab 2</title>
   <pre>
   <script>
      "use strict";
	  
	  // set up an array and initialize the first two values
	  var fibArray = [];
	  fibArray[0] = 0;
	  fibArray[1] = 1;
	  
	  // declare a variable for the size of the squence 
	  var fibNum;
	  
	  // prompt user for how many 

	  // check that fibNum >= 3
	  
	  // write the values into the array
	  // You start at 2 because the first two values are already there
	  for (var i=2; i<fibNum; i++) {
	     
	  }
	  
	  // read from the array and print balues to screen
	  // another for loop 
	  
	  // calculate golden ratio and display it
	  //  last number / 2nd last number
   
   </script>
   </pre>
</head>
<body>
   <h2>Trevor Myer - IT 2320 - Lab 2</h2>

</body>







</html>
<html>
<head>
   <meta charset="utf-8"/>
   <title>IT 2320 - Lab 2</title>
   <script>
     function sayHelloJS() { 
        document.getElementById("js").innerHTML = "Hello from JavaScript!"; 
     }
   </script>
</head>
<body onload="sayHelloJS()">
   <h2>Trevor Myer - IT 2320 - Lab 1</h2>
   <h3>Hello from HTML!</h3>
   <h3 id="js"></h3>
</body>
</html>


startNumber = int(raw_input("Enter the start number here "))
endNumber = int(raw_input("Enter the end number here "))

def fib(n):
    if n < 2:
        return n
    return fib(n-2) + fib(n-1)

print map(fib, range(startNumber, endNumber))


var finbNum=0;
while (fibNum<3) {
   // prompt - check - alert - rinse and repeat
}

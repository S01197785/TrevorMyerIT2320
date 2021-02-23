<html >
<head>
    <meta charset="UTF-8">
	<title>Lab 3 - Factorial Function</title> 
	<script>
		"use strict";
		function calcFactorial(myNum) { 
			// calculate the factorial and return that value
			
		}
		function calculate() { 
			// get the number entered into the text box myNum
			
			
			// call the factorial function
			
            // calculate the square of the number
			
			
            // display those values in the proper place in the HTML 
			
		}
		// set up the event for the button 
		// and put the focus on the input field
		window.onload = function() {
		    document.getElementById("goCalculate").onclick = calculate; 
			document.getElementById("myNum").focus();
		}; 
	</script>
</head> 
<body>
	<main>
	    <h2>Trevor Myer - IT 2320 - Lab 3</h2>
		<h3>Enter a Number</h3> 
		<label for="myNum">My Number Is:</label>
		<input type="text" id="myNum"><br>
		
		num = int(input("Enter a number: "))  
factorial = 1  
if num < 0:  
   print("Sorry, factorial does not exist for negative numbers")  
elif num == 0:  
   print("The factorial of 0 is 1")  
else:  
   for i in range(1,num + 1):  
       factorial = factorial*i  
   print("The factorial of",num,"is",factorial)  
		<output type= 1 * 2 * 3 * 4 * 5 * 6 * 7>
		
		<br/>
		<!-- display the squre here -->
		<label for="mySquare">My Number Squared:</label> 
		<input type="text" id="mySquare" disabled><br> 
		<br/>
		<!-- display the factorial here -->
		<label for="myFactorial">My Factorial</label> 
		<input type="text" id="myFactorial" disabled><br> 
		<br/>
		<input type="button" id="goCalculate" value="GO"><br> 
	</main> 
</body>  
</html>

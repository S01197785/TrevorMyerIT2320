
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

//
//    Document   : Lab2FibonacciSeq
//     Created on: Mar 31, 2021, 5: 49: 59 PM
//     Author: trevor myer
//
//<script>              
        // set up an array and initialize the first two values
        var fibArray = [];
        fibArray[0] = 0;
        fibArray[1] = 1;
                       
        // declare a variable for the size of the squence
        var fibNum;

//var x = window.confirm('Are you sure you are ok?');
//if (x) {
//    window.alert('Good!');
//} else {
//    window.alert('Too bad');
//}
//var attempt = window.prompt("Mobile browsers are not currently supported. If you are a developer, enter the access key.")
//var fibNum = new Windows.UI.Popups.MessageDialog("Hello World!");

                       
        // prompt user for how many
        //fibNum = 10;
        fibNum = prompt("Enter the number of values:");

        if (fibNum == null || fibNum == ""  || fibNum < 3)
           {
           document.write("&emsp; Invalid input.");
           }
        else
           {

            document.write("&emsp; You entered " + fibNum + "<BR>");

            // check that fibNum >= 3

            // write the values into the array
            // You start at 2 because the first two values are already there
            for (var i = 2; i < fibNum; i++)
               {
               fibArray[i] = fibArray[i - 1] + fibArray[i - 2];
               }
                    
            // read from the array and print balues to screen
            // another for loop
            for (var i = 0; i < fibNum; i++)
                {
                document.write("&emsp; " + fibArray[i] + "<BR>");
                }
 
            // calculate golden ratio and display it
            //  last number / 2nd last number
            document.write("&emsp; Golden Ratio calculation for the last values is " + fibArray[fibNum-1] / fibArray[fibNum-2] ) + "<BR>";
            document.write("&emsp; The Golden Ratio is 1.6180339.  How close did the sequence get");
  
         }                  
  //  </script>

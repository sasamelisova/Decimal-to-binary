//Setting variables to get the label inputs
let decimalInput = document.getElementById("decimal-input");
let binaryOutputLabel = document.getElementById("binary-output");

//Creating function for converting decimal number to binary with decimal number as an input
function decimalToBinary(decimalInput) {
    //Sets the variable binary Output as empty string
    let binaryOutput = "";
    
    //Iteration while the input value is greater than 0
    while (decimalInput > 0) {
        // Devides by 2 and gets the remainder
        let remainder = decimalInput % 2;
        // Saves the remainder in binaryOutput variable
        binaryOutput = remainder + binaryOutput;
        decimalInput = Math.floor(decimalInput / 2);
    }
    return binaryOutput;
}
//Puts the output of decimalToBinary function into the binary ouput field
decimalInput.addEventListener("input", () => {
    binaryOutputLabel.value = decimalToBinary(decimalInput.value) //calling the function
  });


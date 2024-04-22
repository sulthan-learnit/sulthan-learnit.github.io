function convertToFar() {
    var celsius = parseFloat(document.getElementById("celsiusInput").value);
    var fahrenheit = (celsius * 9/5) + 32;
    document.getElementById("resultfarenheit").innerHTML = celsius + " Celsius = " + fahrenheit.toFixed(2) + " Fahrenheit";
}

function convertToCel() {
    var fahrenheit = parseFloat(document.getElementById("fahrenheitInput").value);
    var celsius = (fahrenheit - 32) * 5/9;
    document.getElementById("resultcelcius").innerHTML = fahrenheit + " Fahrenheit = " + celsius.toFixed(2) + " Celsius";
}
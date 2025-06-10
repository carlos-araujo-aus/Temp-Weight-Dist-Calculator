function temperature(tempCelsius) {
    var tempCelsius = document.getElementById("celsius").value;
    var tempFahrenheit = (tempCelsius * 1.8) + 32;
    document.getElementById("fahrenheit").value = tempFahrenheit;
}

function weight(weightKilograms) {
    var weightKilograms = document.getElementById("kilo").value;
    var weightPounds = weightKilograms * 2.20462;
    document.getElementById("pounds").value = weightPounds;
}

function distance(distanceKilometers) {
    var distanceKilometers = document.getElementById("km").value;
    var distanceMiles = distanceKilometers / 1.60934;
    document.getElementById("miles").value = distanceMiles;
}


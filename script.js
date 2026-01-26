function convertLength(source) {
    const inches = document.getElementById('inches');
    const feet = document.getElementById('feet');
    const mm = document.getElementById('mm');
    const meters = document.getElementById('meters');

    let val = parseFloat(document.getElementById(source).value);
    
    if (isNaN(val)) {
        if (source === 'inches') { feet.value = ''; mm.value = ''; meters.value = ''; }
        if (source === 'feet') { inches.value = ''; mm.value = ''; meters.value = ''; }
        if (source === 'mm') { inches.value = ''; feet.value = ''; meters.value = ''; }
        if (source === 'meters') { inches.value = ''; feet.value = ''; mm.value = ''; }
        return;
    }

    // Convert everything to millimeters first as base
    let valInMm = 0;
    
    if (source === 'inches') valInMm = val * 25.4;
    else if (source === 'feet') valInMm = val * 304.8;
    else if (source === 'meters') valInMm = val * 1000;
    else valInMm = val; // already mm

    // Update other fields
    if (source !== 'inches') inches.value = (valInMm / 25.4).toFixed(4).replace(/\.?0+$/, '');
    if (source !== 'feet') feet.value = (valInMm / 304.8).toFixed(4).replace(/\.?0+$/, '');
    if (source !== 'mm') mm.value = valInMm.toFixed(4).replace(/\.?0+$/, '');
    if (source !== 'meters') meters.value = (valInMm / 1000).toFixed(4).replace(/\.?0+$/, '');
}

function convertWeight(source) {
    const lbs = document.getElementById('lbs');
    const oz = document.getElementById('oz');
    const kg = document.getElementById('kg');
    const grams = document.getElementById('grams');

    let val = parseFloat(document.getElementById(source).value);

    if (isNaN(val)) {
        if (source === 'lbs') { oz.value = ''; kg.value = ''; grams.value = ''; }
        if (source === 'oz') { lbs.value = ''; kg.value = ''; grams.value = ''; }
        if (source === 'kg') { lbs.value = ''; oz.value = ''; grams.value = ''; }
        if (source === 'grams') { lbs.value = ''; oz.value = ''; kg.value = ''; }
        return;
    }

    // Base unit: Grams
    let valInGrams = 0;

    if (source === 'lbs') valInGrams = val * 453.59237;
    else if (source === 'oz') valInGrams = val * 28.34952;
    else if (source === 'kg') valInGrams = val * 1000;
    else valInGrams = val;

    if (source !== 'lbs') lbs.value = (valInGrams / 453.59237).toFixed(4).replace(/\.?0+$/, '');
    if (source !== 'oz') oz.value = (valInGrams / 28.34952).toFixed(4).replace(/\.?0+$/, '');
    if (source !== 'kg') kg.value = (valInGrams / 1000).toFixed(4).replace(/\.?0+$/, '');
    if (source !== 'grams') grams.value = valInGrams.toFixed(4).replace(/\.?0+$/, '');
}

function convertVolume(source) {
    const gallons = document.getElementById('gallons');
    const liters = document.getElementById('liters');

    let val = parseFloat(document.getElementById(source).value);

    if (isNaN(val)) {
        if (source === 'gallons') liters.value = '';
        if (source === 'liters') gallons.value = '';
        return;
    }

    // Base unit: Liters
    if (source === 'gallons') liters.value = (val * 3.78541).toFixed(4).replace(/\.?0+$/, '');
    if (source === 'liters') gallons.value = (val / 3.78541).toFixed(4).replace(/\.?0+$/, '');
}

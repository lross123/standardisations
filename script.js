function formatVal(num) {
    if (isNaN(num)) return '';
    // Avoid scientific notation for small numbers if possible, or use standard fixed
    return parseFloat(num.toFixed(7)).toString();
}

function convertLength(source) {
    const ids = ['mm', 'cm', 'meters', 'km', 'inches', 'feet'];
    const inputs = {};
    ids.forEach(id => inputs[id] = document.getElementById(id));

    let val = parseFloat(inputs[source].value);

    if (isNaN(val)) {
        ids.forEach(id => { if (id !== source) inputs[id].value = ''; });
        return;
    }

    // Base unit: Meters
    let valInMeters = 0;

    if (source === 'mm') valInMeters = val / 1000;
    else if (source === 'cm') valInMeters = val / 100;
    else if (source === 'meters') valInMeters = val;
    else if (source === 'km') valInMeters = val * 1000;
    else if (source === 'inches') valInMeters = val * 0.0254;
    else if (source === 'feet') valInMeters = val * 0.3048;

    if (source !== 'mm') inputs.mm.value = formatVal(valInMeters * 1000);
    if (source !== 'cm') inputs.cm.value = formatVal(valInMeters * 100);
    if (source !== 'meters') inputs.meters.value = formatVal(valInMeters);
    if (source !== 'km') inputs.km.value = formatVal(valInMeters / 1000);
    if (source !== 'inches') inputs.inches.value = formatVal(valInMeters / 0.0254);
    if (source !== 'feet') inputs.feet.value = formatVal(valInMeters / 0.3048);
}

function convertArea(source) {
    const ids = ['sqmm', 'sqm', 'sqft'];
    const inputs = {};
    ids.forEach(id => inputs[id] = document.getElementById(id));

    let val = parseFloat(inputs[source].value);

    if (isNaN(val)) {
        ids.forEach(id => { if (id !== source) inputs[id].value = ''; });
        return;
    }

    // Base unit: Square Meters
    let valInSqm = 0;

    if (source === 'sqmm') valInSqm = val / 1000000;
    else if (source === 'sqm') valInSqm = val;
    else if (source === 'sqft') valInSqm = val * 0.09290304;

    if (source !== 'sqmm') inputs.sqmm.value = formatVal(valInSqm * 1000000);
    if (source !== 'sqm') inputs.sqm.value = formatVal(valInSqm);
    if (source !== 'sqft') inputs.sqft.value = formatVal(valInSqm / 0.09290304);
}

function convertVolume(source) {
    const ids = ['ml', 'liters', 'cm3', 'm3', 'ft3', 'us_gal', 'uk_gal'];
    const inputs = {};
    ids.forEach(id => inputs[id] = document.getElementById(id));

    let val = parseFloat(inputs[source].value);

    if (isNaN(val)) {
        ids.forEach(id => { if (id !== source) inputs[id].value = ''; });
        return;
    }

    // Base unit: Liters
    let valInLiters = 0;

    if (source === 'ml') valInLiters = val / 1000;
    else if (source === 'liters') valInLiters = val;
    else if (source === 'cm3') valInLiters = val / 1000;
    else if (source === 'm3') valInLiters = val * 1000;
    else if (source === 'ft3') valInLiters = val * 28.316846592;
    else if (source === 'us_gal') valInLiters = val * 3.785411784;
    else if (source === 'uk_gal') valInLiters = val * 4.54609;

    if (source !== 'ml') inputs.ml.value = formatVal(valInLiters * 1000);
    if (source !== 'liters') inputs.liters.value = formatVal(valInLiters);
    if (source !== 'cm3') inputs.cm3.value = formatVal(valInLiters * 1000);
    if (source !== 'm3') inputs.m3.value = formatVal(valInLiters / 1000);
    if (source !== 'ft3') inputs.ft3.value = formatVal(valInLiters / 28.316846592);
    if (source !== 'us_gal') inputs.us_gal.value = formatVal(valInLiters / 3.785411784);
    if (source !== 'uk_gal') inputs.uk_gal.value = formatVal(valInLiters / 4.54609);
}

function convertMass(source) {
    const ids = ['grams', 'kg', 'tonnes', 'oz', 'lbs'];
    const inputs = {};
    ids.forEach(id => inputs[id] = document.getElementById(id));

    let val = parseFloat(inputs[source].value);

    if (isNaN(val)) {
        ids.forEach(id => { if (id !== source) inputs[id].value = ''; });
        return;
    }

    // Base unit: Kilograms
    let valInKg = 0;

    if (source === 'grams') valInKg = val / 1000;
    else if (source === 'kg') valInKg = val;
    else if (source === 'tonnes') valInKg = val * 1000;
    else if (source === 'oz') valInKg = val * 0.028349523125;
    else if (source === 'lbs') valInKg = val * 0.45359237;

    if (source !== 'grams') inputs.grams.value = formatVal(valInKg * 1000);
    if (source !== 'kg') inputs.kg.value = formatVal(valInKg);
    if (source !== 'tonnes') inputs.tonnes.value = formatVal(valInKg / 1000);
    if (source !== 'oz') inputs.oz.value = formatVal(valInKg / 0.028349523125);
    if (source !== 'lbs') inputs.lbs.value = formatVal(valInKg / 0.45359237);
}

// --- New Conversions ---

function convertForce(source) {
    const ids = ['newtons', 'kilonewtons', 'lbf'];
    const inputs = {};
    ids.forEach(id => inputs[id] = document.getElementById(id));

    let val = parseFloat(inputs[source].value);

    if (isNaN(val)) {
        ids.forEach(id => { if (id !== source) inputs[id].value = ''; });
        return;
    }

    // Base unit: Newtons
    let valInNewtons = 0;

    if (source === 'newtons') valInNewtons = val;
    else if (source === 'kilonewtons') valInNewtons = val * 1000;
    else if (source === 'lbf') valInNewtons = val * 4.4482216153;

    if (source !== 'newtons') inputs.newtons.value = formatVal(valInNewtons);
    if (source !== 'kilonewtons') inputs.kilonewtons.value = formatVal(valInNewtons / 1000);
    if (source !== 'lbf') inputs.lbf.value = formatVal(valInNewtons / 4.4482216153);
}

function convertPressure(source) {
    const ids = ['pascals', 'kpa', 'bar', 'psi', 'atm'];
    const inputs = {};
    ids.forEach(id => inputs[id] = document.getElementById(id));

    let val = parseFloat(inputs[source].value);

    if (isNaN(val)) {
        ids.forEach(id => { if (id !== source) inputs[id].value = ''; });
        return;
    }

    // Base unit: Pascals (Pa)
    let valInPa = 0;

    if (source === 'pascals') valInPa = val;
    else if (source === 'kpa') valInPa = val * 1000;
    else if (source === 'bar') valInPa = val * 100000;
    else if (source === 'psi') valInPa = val * 6894.75729;
    else if (source === 'atm') valInPa = val * 101325;

    if (source !== 'pascals') inputs.pascals.value = formatVal(valInPa);
    if (source !== 'kpa') inputs.kpa.value = formatVal(valInPa / 1000);
    if (source !== 'bar') inputs.bar.value = formatVal(valInPa / 100000);
    if (source !== 'psi') inputs.psi.value = formatVal(valInPa / 6894.75729);
    if (source !== 'atm') inputs.atm.value = formatVal(valInPa / 101325);
}

function convertEnergy(source) {
    const ids = ['joules', 'kj', 'kwh', 'btu'];
    const inputs = {};
    ids.forEach(id => inputs[id] = document.getElementById(id));

    let val = parseFloat(inputs[source].value);

    if (isNaN(val)) {
        ids.forEach(id => { if (id !== source) inputs[id].value = ''; });
        return;
    }

    // Base unit: Joules
    let valInJoules = 0;

    if (source === 'joules') valInJoules = val;
    else if (source === 'kj') valInJoules = val * 1000;
    else if (source === 'kwh') valInJoules = val * 3600000;
    else if (source === 'btu') valInJoules = val * 1055.05585;

    if (source !== 'joules') inputs.joules.value = formatVal(valInJoules);
    if (source !== 'kj') inputs.kj.value = formatVal(valInJoules / 1000);
    if (source !== 'kwh') inputs.kwh.value = formatVal(valInJoules / 3600000);
    if (source !== 'btu') inputs.btu.value = formatVal(valInJoules / 1055.05585);
}

function convertPower(source) {
    const ids = ['watts', 'kw', 'hp'];
    const inputs = {};
    ids.forEach(id => inputs[id] = document.getElementById(id));

    let val = parseFloat(inputs[source].value);

    if (isNaN(val)) {
        ids.forEach(id => { if (id !== source) inputs[id].value = ''; });
        return;
    }

    // Base unit: Watts
    let valInWatts = 0;

    if (source === 'watts') valInWatts = val;
    else if (source === 'kw') valInWatts = val * 1000;
    else if (source === 'hp') valInWatts = val * 745.699872;

    if (source !== 'watts') inputs.watts.value = formatVal(valInWatts);
    if (source !== 'kw') inputs.kw.value = formatVal(valInWatts / 1000);
    if (source !== 'hp') inputs.hp.value = formatVal(valInWatts / 745.699872);
}

function convertSpeed(source) {
    const ids = ['mps', 'kmh', 'mph'];
    const inputs = {};
    ids.forEach(id => inputs[id] = document.getElementById(id));

    let val = parseFloat(inputs[source].value);

    if (isNaN(val)) {
        ids.forEach(id => { if (id !== source) inputs[id].value = ''; });
        return;
    }

    // Base unit: Meters per second (m/s)
    let valInMps = 0;

    if (source === 'mps') valInMps = val;
    else if (source === 'kmh') valInMps = val / 3.6;
    else if (source === 'mph') valInMps = val * 0.44704;

    if (source !== 'mps') inputs.mps.value = formatVal(valInMps);
    if (source !== 'kmh') inputs.kmh.value = formatVal(valInMps * 3.6);
    if (source !== 'mph') inputs.mph.value = formatVal(valInMps / 0.44704);
}

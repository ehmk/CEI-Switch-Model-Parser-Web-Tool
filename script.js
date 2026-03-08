const OFFICIAL_SERIES = {
    "B1": "SPDT, 50 Ohms Impedance, Miniature (SMA)", "B10": "SPDT, 50 Ohms Impedance, Miniature (SMA)",
    "B12": "SPDT, 50 Ohms Impedance, Miniature (SMA)", "B2": "SPDT, 50 Ohms Impedance, Miniature (SMA)",
    "B3": "SPDT, 50 Ohms Impedance, Miniature (SMA)", "B40": "SPDT, 50 Ohms Impedance, Miniature (2.92 mm DC-40 GHz)",
    "B5": "SPDT, 50 Ohms Impedance, High Power, Full Size, Type (N)", "B6": "SPDT, 50 Ohms Impedance, High Power, Full Size, Unused Port Terminated, Type (N)",
    "B9": "SPDT, 50 Ohms Impedance, Very High Power, Full Size, Type (SC)", "B7": "SPDT, 50 Ohms Impedance, Unused Port Terminated, (SMA)",
    "B70": "SPDT, 50 Ohms Impedance, Unused Port Externally Terminated, (SMA)", "B80": "SPDT, 50 Ohms Impedance, Unused Port Externally Terminated, (2.92 mm DC-40 GHz)",
    "B77": "DP3T, 50 Ohms Impedance, 5 Port (SMA)", "B88": "DP3T, 50 Ohms Impedance, 5 Port (2.92 mm DC-40 GHz)",
    "L1": "DPDT, 50 Ohms Impedance, Miniature, With Bracket (SMA)", "L10": "DPDT, 50 Ohms Impedance, Miniature, Without Bracket (SMA)",
    "L40": "DPDT, 50 Ohms Impedance, Miniature, With Bracket (2.92 mm DC-40 GHz)", "L2": "DPDT, 50 Ohms Impedance, High Power, Full Size, Type (N)",
    "L20": "DPDT, 50 Ohms Impedance, High Power, Full Size, Type (TNC)", "XC": "Custom Order"
};

const PROFILES = {
    'F': "SP3T - SP6T, Miniature, (SMA) (Momentary (Normally Open))",
    'H': "SP3T - SP6T, Miniature, (SMA) (Latching, Failsafe, Momentary)",
    'H30': "SP3T - SP6T, (2.92 mm DC-40 GHz) (Latching, Failsafe, Momentary)",
    'G': "SP3T - SP6T, Miniature, With Bracket (SMA) (Latching, Failsafe, Momentary)",
    'P': "SP3T - SP6T, Unused Ports Terminated, (SMA) (Latching, Failsafe, Momentary)",
    'C': "SP3T - SP6T, External Ports Terminated (SMA) (Latching, Failsafe, Momentary)",
    'Q': "SP3T - SP6T, Unused Ports Terminated, With Bracket, (SMA) (Latching, Failsafe, Momentary)",
    'U': "SP3T - SP6T, High Power, Full Size, Type (N) (Latching, Failsafe, Momentary)",
    'W': "SP3T - SP6T, Very High Power, Full Size, Type (SC) (Latching, Failsafe, Momentary)",
    'J': "SP7T - SP8T, Miniature, (SMA) (Momentary (Normally Open))",
    'K': "SP7T - SP8T, Miniature, (SMA) (Latching, Failsafe, Momentary)",
    'N': "SP7T - SP8T, Miniature, (SMA) (Latching, Failsafe, Momentary)",
    'O': "SP7T - SP8T, Unused Ports Terminated, (SMA) (Latching, Failsafe, Momentary)",
    'M': "SP7T - SP8T, Unused Ports Terminated, (SMA) (Latching, Failsafe, Momentary)",
    'S': "SP9T - SP12T, (SMA) (Latching, Failsafe, Momentary)",
    'T': "SP9T - SP12T, Unused Ports Terminated (SMA) (Latching, Failsafe, Momentary)"
};

const ACTUATORS = {'F':"Failsafe",'G':"Failsafe w/ suppression diode",'H':"Failsafe w/ indicator",'J':"Failsafe w/ suppression diode & indicator",'L':"Latching",'M':"Latching w/ suppression diode",'N':"Latching w/ indicator",'P':"Latching w/ suppression diode & indicator",'R':"Momentary",'S':"Momentary w/ suppression diode",'T':"Momentary w/ indicator",'U':"Momentary w/ suppression diode & indicator",'Y':"Other (Specify)"};
const FREQ = {'1':"DC - 13.0 GHz",'2':"DC - 2.0 GHz",'3':"DC - 12.4 GHz",'4':"DC - 4.0 GHz",'5':"DC - 18.0 GHz",'6':"DC - 6.0 GHz",'7':"DC - 26.5 GHz",'8':"DC - 20.0 GHz",'9':"DC - 15.0 GHz",'A':"DC - 40.0 GHz"};
const VOLT = {'1':"10-14 Vdc",'2':"13-17 Vdc",'3':"22-26 Vdc",'4':"26-30 Vdc",'5':"Other",'0':"Not required"};
const POL = {'1':"Positive (+) common",'2':"Negative (-) common",'0':"Not required"};
const INTERFACE = {'1':"Solder terminal (Top)",'2':"Solder terminal (Side)",'3':"Conn MS3112E (Top)",'4':"Conn MS3112E (Side)",'5':"D'Sub (Top - 2 row)",'6':"D'Sub (Side - 2 row)",'7':"D'Sub (Top - 3 row)",'8':"Microminiature D'Sub",'9':"D'Sub (15 pin - 3 row)"};
const LOGIC = {'1':"Cut off power circuit",'2':"TTL Logic",'3':"Cut off power & TTL",'4':"BCD TTL Decoder",'5':"Cut off & BCD TTL",'0':"None"};
const IM = {'7':"Low PIM (-110 dBc)",'8':"Superior PIM (-160 dBc)",'9':"Ultra Low PIM (-130 dBc)",'0':"Standard"};
const SPECIAL = {"/P":"High temp/power connector","/MS":"Ext temp (-54 to +90 C)","/MSP":"High temp/power + Ext temp"};

const input = document.getElementById('modelInput');
const output = document.getElementById('output-box');
const status = document.getElementById('copy-status');

// Detect typing and pasting automatically
input.addEventListener('input', function () {
    const raw = input.value.trim().toUpperCase();
    
    // Auto-trigger if it looks like a full part number (Hyphen + 6 digits)
    if (raw.includes('-')) {
        const parts = raw.split('-');
        if (parts[1] && parts[1].length >= 6) {
            decode();
        }
    }
});

// Backup: Allow manual 'Enter' key press
input.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        decode();
    }
});

output.addEventListener('click', function() {
    navigator.clipboard.writeText(output.innerText).then(() => {
        status.innerText = "COPIED TO CLIPBOARD!";
        setTimeout(() => { status.innerText = "Click box to copy again"; }, 2000);
    });
});

function decode() {
    const raw = input.value.trim().toUpperCase();
    if (!raw) return;

    const parts = raw.split('-');
    const mainMatch = parts[0].match(/^([A-Z]\d+)([A-Z])/);
    
    if (!mainMatch || parts.length < 2) {
        // We silent the alert for the 'input' listener to avoid popups while typing
        return;
    }

    const [_, ser, act] = mainMatch;
    const pb = parts[1];
    const suffix = parts[2] ? `/${parts[2]}` : "None";

    let seriesDesc = OFFICIAL_SERIES[ser] || "Unknown Series";
    if (ser.startsWith('H') && parseInt(ser.slice(1)) >= 30) seriesDesc = PROFILES['H30'];
    else if (!OFFICIAL_SERIES[ser]) seriesDesc = PROFILES[ser[0]] || "Unknown Series";

    const res = [
        `SPECIFICATIONS: ${raw}`,
        `----------------------------------------------------------------------`,
        `1. Series Model [${ser}]:`.padEnd(32) + seriesDesc,
        `2. Actuator Type [${act}]:`.padEnd(32) + (ACTUATORS[act] || "Invalid"),
        `3. Frequency Band [${pb[0]}]:`.padEnd(32) + (FREQ[pb[0]] || "Invalid"),
        `4. Operating Voltage [${pb[1]}]:`.padEnd(32) + (VOLT[pb[1]] || "Invalid"),
        `5. Common Polarity [${pb[2]}]:`.padEnd(32) + (POL[pb[2]] || "Invalid"),
        `6. Power Interface [${pb[3]}]:`.padEnd(32) + (INTERFACE[pb[3]] || "Invalid"),
        `7. Options [${pb[4]}]:`.padEnd(32) + (LOGIC[pb[4]] || "Invalid"),
        `8. Intermodulation [${pb[5]}]:`.padEnd(32) + (IM[pb[5]] || "Invalid"),
        `9. Special Option [${suffix}]:`.padEnd(32) + (SPECIAL[suffix] || suffix),
        `----------------------------------------------------------------------`
    ].join('\n');

    output.innerText = res;
    output.style.display = 'block';
    status.innerText = "Click box to copy results";
    input.value = '';
}
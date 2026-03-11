const OFFICIAL_SERIES = { "B1": "SPDT (SMA)", "B10": "SPDT (SMA)", "B12": "SPDT (SMA)", "B2": "SPDT (SMA)", "B3": "SPDT (SMA)", "B40": "SPDT (2.92mm 40GHz)", "B5": "SPDT (N)", "B6": "SPDT (N) Terminated", "B9": "SPDT (SC)", "B7": "SPDT (SMA) Terminated", "B70": "SPDT (SMA) Ext Term", "B80": "SPDT (40GHz) Ext Term", "B77": "DP3T (SMA)", "B88": "DP3T (40GHz)", "L1": "DPDT (SMA) w/ Brk", "L10": "DPDT (SMA) no Brk", "L40": "DPDT (40GHz)", "L2": "DPDT (N)", "L20": "DPDT (TNC)", "XC": "Custom Order" };
const PROFILES = { 'F': "SP3T-6T (SMA) Norm Open", 'H': "SP3T-6T (SMA) Latch/Fail", 'H30': "SP3T-6T (40GHz) Latch/Fail", 'G': "SP3T-6T (SMA) w/ Brk", 'P': "SP3T-6T (SMA) Terminated", 'C': "SP3T-6T (SMA) Ext Term", 'Q': "SP3T-6T (SMA) Term/Brk", 'U': "SP3T-6T (N) High Power", 'W': "SP3T-6T (SC) High Power", 'J': "SP7T-8T (SMA) Norm Open", 'K': "SP7T-8T (SMA) Latch/Fail", 'N': "SP7T-8T (SMA) Latch/Fail", 'O': "SP7T-8T (SMA) Terminated", 'M': "SP7T-8T (SMA) Terminated", 'S': "SP9T-12T (SMA)", 'T': "SP9T-12T (SMA) Terminated" };
const CAVITY_MAP = { "B1": "B1", "B2": "B2", "B12": "B1", "B10": "B10", "B3": "B3", "B40": "B1 40 GHz", "B5": "B5", "B6": "B6 (Term)", "B9": "B9", "B7": "B7 (Term)", "B70": "B70", "B80": "B70 40 GHz", "B77": "B70", "L1": "L1", "L10": "L1", "L40": "L1 40 GHz", "L2": "L2", "L20": "L2", "F": "F", "H": "H", "J": "J", "H30": "H 40 GHz", "H40": "H 40 GHz", "H50": "H 40 GHz", "H60": "H 40 GHz", "G": "G", "P": "P (Term)", "C": "C", "C30": "C 40 GHz", "C40": "C 40 GHz", "C50": "C 40 GHz", "C60": "C 40 GHz", "Q": "Q", "U": "U", "W": "W", "K": "K", "N": "O", "O": "O (Term)", "M": "M (Term)", "S": "S", "T": "T", "XC": "XCF" };
const CONNECTOR_MAP = { "B1": "SMA", "B10": "SMA", "B12": "SMA", "B2": "SMA", "B3": "SMA", "B7": "SMA", "B70": "SMA", "B77": "SMA", "L1": "SMA", "L10": "SMA", "F": "SMA", "H": "SMA", "G": "SMA", "P": "SMA", "C": "SMA", "Q": "SMA", "J": "SMA", "K": "SMA", "N": "SMA", "O": "SMA", "M": "SMA", "S": "SMA", "T": "SMA", "B40": "2.92 mm (40 GHz)", "B80": "2.92 mm (40 GHz)", "B88": "2.92 mm (40 GHz)", "L40": "2.92 mm (40 GHz)", "H30": "2.92 mm (40 GHz)", "H40": "2.92 mm (40 GHz)", "H50": "2.92 mm (40 GHz)", "H60": "2.92 mm (40 GHz)", "C30": "2.92 mm (40 GHz)", "C40": "2.92 mm (40 GHz)", "C50": "2.92 mm (40 GHz)", "C60": "2.92 mm (40 GHz)", "B5": "N-Type", "B6": "N-Type", "L2": "N-Type", "U": "N-Type", "B9": "SC-Type", "W": "SC-Type", "L20": "TNC", "XC": "Special (Verify)" };
const ACTUATORS = {'F':"Failsafe",'G':"Failsafe/Diode",'H':"Failsafe/Ind",'J':"Failsafe/Diode/Ind",'L':"Latching",'M':"Latching/Diode",'N':"Latching/Ind",'P':"Latching/Diode/Ind",'R':"Momentary",'S':"Momentary/Diode",'T':"Momentary/Ind",'U':"Momentary/Diode/Ind",'Y':"Other"};
const FREQ = {'1':"13.0 GHz",'2':"2.0 GHz",'3':"12.4 GHz",'4':"4.0 GHz",'5':"18.0 GHz",'6':"6.0 GHz",'7':"26.5 GHz",'8':"20.0 GHz",'9':"15.0 GHz",'A':"40.0 GHz"};
const VOLT = {'1':"10-14 Vdc",'2':"13-17 Vdc",'3':"22-26 Vdc",'4':"26-30 Vdc",'5':"Other",'0':"N/A"};
const POL = {'1':"Pos (+)",'2':"Neg (-)",'0':"N/A"};
const INTERFACE = {'1':"Solder (Top)",'2':"Solder (Side)",'3':"MS3112E (Top)",'4':"MS3112E (Side)",'5':"D-Sub (Top)",'6':"D-Sub (Side)",'7':"D-Sub (3 Row)",'8':"Micro D-Sub",'9':"15-pin D-Sub"};
const LOGIC = {'1':"Cut off",'2':"TTL",'3':"Cut off/TTL",'4':"BCD TTL",'5':"Cut off/BCD",'0':"None"};
const IM = {'7':"Low (-110)",'8':"Superior (-160)",'9':"Ultra (-130)",'0':"Standard"};
const SPECIAL = {"/P":"High Temp","/MS":"Ext Temp","/MSP":"High/Ext Temp"};

// ... [Keep constants at the top] ...

function decode() {
    const input = document.getElementById('modelInput');
    const raw = input.value.trim().toUpperCase();
    if (!raw) return;

    const parts = raw.split('-');
    const mainMatch = parts[0].match(/^([A-Z]\d*)([A-Z])/);
    if (!mainMatch || parts.length < 2) return;

    const [_, ser, act] = mainMatch;
    const pb = parts[1];
    const suffix = parts[2] ? `/${parts[2]}` : "None";

    let seriesDesc = OFFICIAL_SERIES[ser] || (ser.startsWith('H') && parseInt(ser.slice(1)) >= 30 ? PROFILES['H30'] : PROFILES[ser[0]] || "Unknown");

    const imCode = pb[5];
    const freqCode = pb[0];
    const coating = (imCode === '8' || imCode === '9') ? "SIL" : "NIC";
    let connector = CONNECTOR_MAP[ser] || CONNECTOR_MAP[ser[0]] || "SMA";
    let shell = "NIC";
    if (connector === "SMA") { if (freqCode === '7' || ['7', '8', '9'].includes(imCode)) shell = "GLD"; }
    else if (connector === "N-Type") { shell = (imCode === '8' || imCode === '9') ? "SIL" : "NIC"; }
    const probe = (suffix.includes("/MS")) ? "NGLD" : "GLD";
    const contactPrep = (coating === "SIL" || suffix.includes("/MS")) ? "POLISHED" : "NONE";

    document.getElementById('display-area').style.display = 'block';
    const badge = document.getElementById('model-display');
    badge.innerText = raw;
    // Badge copies the full Part Number
    badge.onclick = () => copyText(raw, badge);

    const electricalSpecs = [
        { label: "Series",    code: ser,   val: seriesDesc },
        { label: "Actuator",  code: act,   val: ACTUATORS[act] || "Invalid" },
        { label: "Frequency", code: pb[0], val: FREQ[freqCode] || "Invalid" },
        { label: "Voltage",   code: pb[1], val: VOLT[pb[1]] || "Invalid" },
        { label: "Common",    code: pb[2], val: POL[pb[2]] || "Invalid" },
        { label: "Interface", code: pb[3], val: INTERFACE[pb[3]] || "Invalid" },
        { label: "Options",   code: pb[4], val: LOGIC[pb[4]] || "Invalid" },
        { label: "PIM Level", code: pb[5], val: IM[imCode] || "Invalid" },
        { label: "Special",   code: suffix, val: SPECIAL[suffix] || suffix }
    ];

    document.getElementById('spec-list').innerHTML = electricalSpecs.map(s => `
        <div class="copyable-row" onclick="copyText('${s.val}', this)">
            <span class="label-text">${s.label}</span>
            <span class="code-badge">${s.code}</span>
            <span class="val-text electrical-val">${s.val}</span>
        </div>
    `).join('');

    const fmt = (v) => (v === "SIL" || v === "POLISHED") ? `<span class="highlight-red">${v}</span>` : v;
    const cavityVal = CAVITY_MAP[ser] || CAVITY_MAP[ser[0]] || "Standard";
    const prepTrigger = (suffix.includes("/MS")) ? suffix : (coating === "SIL" ? pb[5] : "---");

    const mechSpecs = [
        { label: "CAVITY",  code: ser,    val: cavityVal, disp: cavityVal },
        { label: "COATING", code: pb[5],  val: coating, disp: fmt(coating) },
        { label: "CONN",    code: ser[0], val: connector, disp: connector },
        { label: "SHELL",   code: pb[0],  val: shell, disp: shell },
        { label: "PROBE",   code: suffix, val: probe, disp: probe },
        { label: "PREP",    code: prepTrigger, val: contactPrep, disp: fmt(contactPrep) }
    ];

    document.getElementById('cavity-output').innerHTML = mechSpecs.map(s => `
        <div class="copyable-row" onclick="copyText('${s.val}', this)">
            <span class="label-text">${s.label}</span>
            <span class="code-badge">${s.code}</span>
            <span class="val-text">${s.disp}</span>
        </div>
    `).join('');

    input.value = '';
}

// Fixed copy function to take the clean value
function copyText(valToCopy, element) {
    // Ensure we are copying the raw string, not the HTML spans
    const tempDiv = document.createElement("div");
    tempDiv.innerHTML = valToCopy;
    const cleanText = tempDiv.textContent || tempDiv.innerText || "";

    navigator.clipboard.writeText(cleanText).then(() => {
        const originalBg = element.style.backgroundColor;
        element.style.backgroundColor = "rgba(0, 255, 136, 0.2)"; // Subtle green flash
        setTimeout(() => {
            element.style.backgroundColor = originalBg;
        }, 200);
    });
}

// Enter Key Support
document.getElementById("modelInput").addEventListener("keypress", (e) => {
    if (e.key === "Enter") decode();
});
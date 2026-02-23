// 8.1.1 Handle missing input element safely
const input = document.getElementById("inputField");
const log = document.getElementById("log");

if (!input || !log) {
    console.error("Required elements not found.");
}

// Store references once (Performance optimization)
const keyValue = document.getElementById("keyValue");
const keyCode = document.getElementById("keyCode");
const eventType = document.getElementById("eventType");
const shift = document.getElementById("shift");
const ctrl = document.getElementById("ctrl");
const alt = document.getElementById("alt");
const focusStatus = document.getElementById("focusStatus");

// 4.1.3 Focus Status
input.addEventListener("focus", () => {
    focusStatus.textContent = "Focused";
    focusStatus.style.color = "green";
});

input.addEventListener("blur", () => {
    focusStatus.textContent = "Not Focused";
    focusStatus.style.color = "red";
});

// 4.2 Key Detection
function showInfo(event, type) {
    if (!event) return; // 8.1.2 Prevent undefined errors

    keyValue.textContent = event.key || "N/A";
    keyCode.textContent = event.code || "N/A";
    eventType.textContent = type;

    // 4.4 Modifier Key Detection
    shift.textContent = event.shiftKey || false;
    ctrl.textContent = event.ctrlKey || false;
    alt.textContent = event.altKey || false;

    addLog(type, event.key);
}

input.addEventListener("keydown", e => showInfo(e, "keydown"));
input.addEventListener("keyup", e => showInfo(e, "keyup"));

// 4.5 Event Log
function addLog(type, key) {
    if (log.children.length > 30) {
        log.removeChild(log.firstChild); // 7.3.2 Prevent memory issue
    }

    const p = document.createElement("p");
    p.textContent = `${type} : ${key}`;
    p.className = type;
    log.appendChild(p);
}

// Clear Log
function clearLog() {
    log.innerHTML = "";
}
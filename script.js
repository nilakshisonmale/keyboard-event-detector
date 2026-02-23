const input = document.getElementById("inputField");
const log = document.getElementById("log");

const keyValue = document.getElementById("keyValue");
const keyCode = document.getElementById("keyCode");
const eventType = document.getElementById("eventType");
const shift = document.getElementById("shift");
const ctrl = document.getElementById("ctrl");
const alt = document.getElementById("alt");
const focusStatus = document.getElementById("focusStatus");

/* Focus Detection */
input.addEventListener("focus", () => {
    focusStatus.textContent = "Focused";
    focusStatus.style.color = "green";
});

input.addEventListener("blur", () => {
    focusStatus.textContent = "Not Focused";
    focusStatus.style.color = "red";
});

/* Key Detection */
function showInfo(event, type) {
    if (!event) return;

    /* Fix for Mobile "Unidentified" */
    let key = event.key;
    if (!key || key === "Unidentified") {
        key = input.value.slice(-1) || "N/A";
    }

    keyValue.textContent = key;
    keyCode.textContent = event.code || "N/A";
    eventType.textContent = type;

    shift.textContent = event.shiftKey;
    ctrl.textContent = event.ctrlKey;
    alt.textContent = event.altKey;

    addLog(type, key);
}

input.addEventListener("keydown", e => showInfo(e, "keydown"));
input.addEventListener("keyup", e => showInfo(e, "keyup"));

/* Log Handling */
function addLog(type, key) {
    if (log.children.length > 30) {
        log.removeChild(log.firstChild);
    }

    const p = document.createElement("p");
    p.textContent = `${type} : ${key}`;
    p.className = type;
    log.appendChild(p);

    log.scrollTop = log.scrollHeight;
}

function clearLog() {
    log.innerHTML = "";
}
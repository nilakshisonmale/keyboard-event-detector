const input = document.getElementById("inputField");
const log = document.getElementById("log");

function showInfo(event, type) {
    if (!event) return;

    document.getElementById("keyValue").textContent = event.key || "N/A";
    document.getElementById("keyCode").textContent = event.code || "N/A";
    document.getElementById("eventType").textContent = type;

    document.getElementById("shift").textContent = event.shiftKey;
    document.getElementById("ctrl").textContent = event.ctrlKey;
    document.getElementById("alt").textContent = event.altKey;

    addLog(type, event.key);
}

// 4.2 Key Detection
input.addEventListener("keydown", e => showInfo(e, "keydown"));
input.addEventListener("keyup", e => showInfo(e, "keyup"));

// 4.5 Event Log
function addLog(type, key) {
    if (log.children.length > 30) {
        log.removeChild(log.firstChild); // prevent memory issue
    }
    const p = document.createElement("p");
    p.textContent = `${type} : ${key}`;
    p.className = type;
    log.appendChild(p);
}

function clearLog() {
    log.innerHTML = "";
}

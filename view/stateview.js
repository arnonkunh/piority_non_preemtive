//stateView
var time = 0;
function updatetime() {
    var Clock = document.getElementById("clock");
    time++;
    Clock.textContent = time;
}
function updatememory(m) {
    var memory = document.getElementById("memory");
    memory.value = m;
} 
function updatecpu() {
    var cpu = document.getElementById("cpu");
    cpu.textContent = jrunning;
}
function updateio() {
    var cpu = document.getElementById("io");
    cpu.textContent = jwiat;
}

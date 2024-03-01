// PCBModel
let process_name;
let arrival_time;
let priority;
let burst_time;
let wraiting_time;
let status_process; 
let memory;
let runningt;
let respondt;
let iostatus_process; 

class PCB {
    constructor(pn, at, pr, bt, wt, s, m,rut,ret,ios) {
        this.process_name = pn;
        this.arrival_time = at;
        this.priority = pr;
        this.burst_time = bt;
        this.wraiting_time = wt;
        this.status_process = s;
        this.memory = m;
        this.runningt = rut;
        this.respondt = ret;
        this.iostatus_process = ios;
    }

    getProcess_name() {
        return this.process_name;
    }

    setProcess_name(newprocessname) {
        this.process_name = newprocessname;
    }

    getArrival_time() {
        return this.arrival_time;
    }

    setArrival_time(newArrivalTime) {
        this.arrival_time = newArrivalTime;
    }

    getPriority() {
        return this.priority;
    }

    setPriority(newPriority) {
        this.priority = newPriority;
    }

    getBurst_time() {
        return this.burst_time;
    }

    setBurst_time(newBurstTime) {
        this.burst_time = newBurstTime;
    }

    getWraiting_time() {
        return this.wraiting_time;
    }

    setWraiting_time(newWraitingTime) {
        this.wraiting_time = newWraitingTime;
    }

    getStatus_process() {
        return this.status_process;
    }

    setStatus_process(newStatusProcess) {
        this.status_process = newStatusProcess;
    }

    getMemory() {
        return this.memory;
    }

    setMemory(newMemory) {
        this.memory = newMemory;
    }
    getrunningt() {
        return this.runningt;
    }
    setrunningt(newrunningt) {
        this.runningt = newrunningt;
    }
    getrespondt() {
        return this.respondt;
    }
    setrespondt(respondt) {
        this.respondt = respondt;
    }
    getiostatus_process() {
        return this.iostatus_process;
    }
    setiostatus_process(iostatus) {
        this.iostatus_process = iostatus;
    }
}

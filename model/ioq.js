var ioq

class ioQ {
    constructor() {
        this.ioq = []; 
    }

    getioq() {
        return this.ioq;
    }

    put(process) {
        this.ioq.push(process);
    }
    pop() {
        this.ioq.shift();
    }
}
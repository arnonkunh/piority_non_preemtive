// jobqModel
var Jobq

class JobQ {
    constructor() {
        this.Jobq = [];
    }

    getJobq() {
        return this.Jobq;
    }

    addjq(pn, at, pr, bt, wt, s, m,rut,ret) {
        this.Jobq.push(new PCB(pn, at, pr, bt, wt, s, m,rut,ret," "));
    }
}

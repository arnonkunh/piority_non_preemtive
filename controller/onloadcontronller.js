var jq;
var readtq;
var ioqObj;

document.addEventListener("DOMContentLoaded", function () {
    jq = new JobQ();
    readtq = new readtQ(); 
    ioqObj = new ioQ();
    function incrementTime() {
        console.log(jq);
        readq()
        ioq()
        jq.getJobq().forEach(function (process) {
            if (process.getStatus_process() === "New") {
                process.setStatus_process("Ready");
            }
            if (process.getStatus_process() === "Ready") {
                process.setWraiting_time(process.getWraiting_time() + 1);
            }
            if (process.getStatus_process() === "Running") {
                process.setBurst_time(process.getBurst_time() + 1);
            }
        });
        updatecpu();
        updateio();
        updatejq(jq);
        updatetime();
       
    }
    var intervalId = setInterval(incrementTime, 1000);
});
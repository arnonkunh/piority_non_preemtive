let jwiat;
let iov;  


function ioq() {
    
    ioqObj.getioq().forEach(function(process, index) {
        if (index === 0) {
            jwiat = process.getProcess_name().toString();
            process.setiostatus_process("Running");
        } else {
            process.setiostatus_process("Waiting");
        }
        
        if (process.getStatus_process() === "Waiting" && process.getiostatus_process() === "Running") {
            process.setrunningt(process.getrunningt() + 1);
        } else if (process.getStatus_process() === "Waiting" && process.getiostatus_process() === "Waiting") {
            process.setrespondt(process.getrespondt() + 1);
        }
    });

    if(jq.getJobq().filter(job => job.getStatus_process() === "Waiting").length == 0 ){
        jwiat = "";
    }

    iov = ioqObj.getioq();
    updateioq(iov);
        
    console.log(iov);
    console.log(iov.length);
}

function useio() {
    if (jq && jq !== null && jq.getJobq) {
        jq.getJobq().forEach(function(process) {
            if (process.status_process === "Running") {
                process.setStatus_process("Waiting");
                console.log("Status Wait:", process);
                ioqObj.put(process);
            }
        });
    }
}

function closeio() {
    if (ioqObj && ioqObj !== null && ioqObj.getioq) {
        ioqObj.getioq().forEach(function(process, index) {
            if (index === 0) {
                ioqObj.pop();
                process.setiostatus_process("success");
                process.setStatus_process("Ready");             
            }
        });
    }
}

document.querySelector("#use").addEventListener("click", useio);
document.querySelector("#close").addEventListener("click", closeio);

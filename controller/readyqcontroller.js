var jrunning;
let r
let sortedReadtq
    function readq() {
        if (typeof jq !== "" && jq !== null) {
           
           
            readtq.setreadtq(jq.getJobq().filter(job => job.getStatus_process() === "Ready")); 
            
            sortedReadtq = readtq.getreadtq().slice().sort((a, b) => a.getPriority() - b.getPriority());

            r = jq.getJobq().filter(job => job.getStatus_process() === "Running").length;

            if (sortedReadtq.length > 0 && r<1) {

                let firstJob = sortedReadtq.shift();
                jrunning = firstJob.getProcess_name().toString();

                if (firstJob.getStatus_process() === "Ready" ) {
                    firstJob.setStatus_process("Running");
                }
                
            } else {
                if(r==0){
                    jrunning =""
                }
                
            }
            console.log(sortedReadtq);
            updaterq(sortedReadtq);
        } else {
            console.error("jq is not defined or null.");
        }
        
    }




var memorysize;
let n_process = 0;
    
    function reset() {
        Swal.fire({
            title: "Are you sure?",
            text: "Do you want to Reset?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, Reset!"
        }).then((result) => {
            if (result.isConfirmed) {
                location.reload();
            }
        });
    }

    function addProcess() {
        memorysize =0;

        var at = document.getElementById("clock").textContent;
        var processName = "Process " + (n_process + 1);
        var p = Math.floor(Math.random() * 10) + 1;

        jq.addjq(processName, at, p, 0, 0, 'New', 10, 0, 0);
        n_process++;
        
        jq.getJobq().forEach(function (process) {
            memorysize += process.getMemory();
        });

        updatejq(jq);
        updatememory(memorysize);

        console.log(memorysize);
    }

    function terminateProcesses() {
        memorysize = 0;

        jq.Jobq = jq.getJobq().filter(function (process) {
            return process.getStatus_process() !== "Running";
        });
        jq.getJobq().forEach(function (process) {
            memorysize += process.getMemory();
        });

        updatejq(jq);
        updatememory(memorysize);
        updatecpu();
        console.log(memorysize);

    }

    document.querySelector("#add").addEventListener("click", addProcess);
    document.querySelector("#terminate").addEventListener("click", terminateProcesses);
    document.querySelector("#reset").addEventListener("click", reset);

    


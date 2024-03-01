//jobqView.js
function updaterq(readyqInstance) {
    updaterq(readyqInstance);
    console.log(readyqInstance.getJobq());
}

function updaterq(readyqInstance) {
    var tbody = document.querySelector("#t_readyq tbody");

    // Clear existing rows
    tbody.innerHTML = "";

    // Iterate over processes and add rows
    readyqInstance.forEach(function (process) {
        if(process.getStatus_process()!=="Running"){
            var newRow = tbody.insertRow();
            var cell1 = newRow.insertCell(0);
            var cell2 = newRow.insertCell(1);
            var cell3 = newRow.insertCell(2);
       
            cell1.textContent = process.getProcess_name();
            cell2.textContent = process.getPriority();
            cell3.textContent = process.getWraiting_time(); 
        }
       
    });

    // Log an error if Jobq is empty
    if (readyqInstance.length === 0) {
        console.error("readyq is empty.");
    }
}
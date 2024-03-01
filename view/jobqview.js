//jobqView.js
function updatejq(jobqInstance) {
    updatejq(jobqInstance);
    console.log(jobqInstance.getJobq());
}

function updatejq(jobqInstance) {
    var tbody = document.querySelector("#t_jobq tbody");

    // Clear existing rows
    tbody.innerHTML = "";

    // Iterate over processes and add rows
    jobqInstance.getJobq().forEach(function (process) {
        var newRow = tbody.insertRow();
        var cell1 = newRow.insertCell(0);
        var cell2 = newRow.insertCell(1);
        var cell3 = newRow.insertCell(2);
        var cell4 = newRow.insertCell(3);
        var cell5 = newRow.insertCell(4);
        var cell6 = newRow.insertCell(5);

        cell1.textContent = process.getProcess_name();
        cell2.textContent = process.getArrival_time();
        cell3.textContent = process.getPriority();
        cell4.textContent = process.getBurst_time();
        cell5.textContent = process.getWraiting_time();
        cell6.textContent = process.getStatus_process();
        if (process.getStatus_process() === "Ready") {
            // Set the background color to yellow
            cell6.style.backgroundColor = "Green";
        }
        if (process.getStatus_process() === "Running") {
            // Set the background color to yellow
            cell6.style.backgroundColor = "yellow";
        }
        if (process.getStatus_process() === "Waiting") {
            // Set the background color to yellow
            cell6.style.backgroundColor = "Blue";
        }
    });

    // Log an error if Jobq is empty
    if (jobqInstance.getJobq().length === 0) {
        console.error("Jobq is empty.");
    }
}
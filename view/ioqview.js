function updateioq(ioqInstance) {
    updateioq(ioqInstance);
    console.log(ioqInstance.getJobq());
}

function updateioq(ioqInstance) {
    var tbody = document.querySelector("#t_io tbody");

    // Clear existing rows
    tbody.innerHTML = "";

    // Iterate over processes and add rows
    ioqInstance.forEach(function (process) {
            var newRow = tbody.insertRow();
            var cell1 = newRow.insertCell(0);
            var cell2 = newRow.insertCell(1);
            var cell3 = newRow.insertCell(2);
            var cell4 = newRow.insertCell(3);

            cell1.textContent = process.getProcess_name();
            cell2.textContent = process.getrunningt();
            cell3.textContent = process.getrespondt(); 
            cell4.textContent = process.getiostatus_process(); 
            if (process.getiostatus_process() === "Running") {
                // Set the background color to yellow
                cell4.style.backgroundColor = "yellow";
            }
            if (process.getiostatus_process() === "Waiting") {
                // Set the background color to yellow
                cell4.style.backgroundColor = "Blue";
            }
       
    });

    // Log an error if Jobq is empty
    if (ioqInstance.length === 0) {
        console.error("ioq is empty.");
    }
}
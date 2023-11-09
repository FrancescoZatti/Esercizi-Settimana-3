
let addTask = document.querySelector('form');

addTask.addEventListener('click', function(e) {
    e.preventDefault();
    let inputTask = document.querySelector('form input[name="task"]');
    let testoTask = inputTask.value;
    if (testoTask.trim() !== "") {
        let task = document.createElement("li");
        task.innerText = testoTask;
        document.querySelector("#listArea").appendChild(task);
        task.addEventListener('click', function() {
            if (task.style.textDecoration === "line-through") {
                task.style.textDecoration = "none";
            } else {
                task.style.textDecoration = "line-through";
            }
            });
        let deleteButton = document.createElement("button");
        deleteButton.innerText = "Cancella Task";
        deleteButton.addEventListener('click', function() {
            task.parentNode.removeChild(task);
        });

        task.appendChild(deleteButton);

        /*let checkTask = document.createElement("input");
        checkTask.type = "checkbox";
        checkTask.addEventListener('change', function() {
            if (checkTask.checked) {
                task.style.textDecoration = "line-through";
            } else {
                task.style.textDecoration = "none";
            }
        });

        task.appendChild(checkTask);*/

        document.querySelector('#listArea').appendChild(task);

        inputTask.value = "";
    }
    
});
let btn = document.querySelector("#b");
let input = document.querySelector("input");
let box = document.querySelector(".box");

btn.addEventListener("click", function() {
    
    //Creating a div for every new element
    let task = document.createElement("div");
    task.classList.add("block");

    let value = input.value;
    let item = document.createElement("p");
    item.innerText = value;
    item.style.display = "inline-block";

    //Creating a div to hold "Done" and "Remove" button
    let check = document.createElement("div");

    //Adding a Remove button
    let removeBtn = document.createElement("button");
    removeBtn.innerHTML = '<i class="fa-solid fa-xmark"></i>';
    removeBtn.style.display = "inline-block";
    removeBtn.classList.add("remove");
    removeBtn.addEventListener("click", function() {
        task.remove();
    })

    //Adding a Done button
    let doneBtn = document.createElement("button");
    doneBtn.innerHTML = '<i class="fa-solid fa-check"></i>';
    doneBtn.style.display = "inline-block";
    doneBtn.classList.add("done");

    doneBtn.addEventListener("click", () => {
        task.style.backgroundColor = "rgb(0, 255, 0)";
    })

    //Appending two buttons in the "check" div
    check.append(doneBtn);
    check.append(removeBtn);

    //Adding the "check" div to the task
    task.append(item);
    task.append(check);
    box.appendChild(task);

    //Resetting the input
    input.value = "";
});
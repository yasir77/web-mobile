// Function for adding Task
function addTask(){
    var inputTask = document.getElementById("input-task");
    var li = document.createElement('li');
    var liP = document.createElement("p");
    var liPText = document.createTextNode(inputTask.value);
    liP.appendChild(liPText);
    liP.setAttribute('class','task-value col-6 col-md-6');
    li.appendChild(liP);
    li.setAttribute('class','task');
    document.getElementById("taskList").appendChild(li);

    // Edit button
    var editBtn = document.createElement('button');
    var editBtnText = document.createTextNode("Edit");
    editBtn.appendChild(editBtnText);
    editBtn.setAttribute('class','edit-btn btn btn-info col-3 col-md-3');
    editBtn.setAttribute("onclick","editItem(this)");
    li.appendChild(editBtn);

    // delete button
    var delBtn = document.createElement('button');
    var delBtnText = document.createTextNode("Delete");
    delBtn.appendChild(delBtnText);
    delBtn.setAttribute('class','delete-btn btn btn-danger col-3 col-md-3');
    delBtn.setAttribute("onclick","deleteItem(this)");
    li.appendChild(delBtn);
}

// function for updating item
function editItem(element){
   var parent = element.parentNode;
   var updatedVal = prompt("Enter Value",parent.firstChild.childNodes[0].nodeValue);
    parent.firstChild.childNodes[0].nodeValue = updatedVal;
}

// function for deleting individual Item
function deleteItem(element){
    element.parentNode.remove();
}

// function for deleting all item
function delAll(){
    document.getElementById("taskList").innerHTML = '';
}
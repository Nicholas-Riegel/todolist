// add event listeners to btns;

document.getElementById('enter').addEventListener('click', setItem);
document.getElementById('clearAll').addEventListener('click', clearAll);

// function: set new divs and content;

function setItem(){
    
    let newDiv = document.createElement('div');
    newDiv.setAttribute('class', 'newDivs');

    let newP = document.createElement('p');
    newP.textContent = document.getElementById('input').value;
    
    let btnDone = document.createElement('div');
    btnDone.textContent = "Done";
    btnDone.setAttribute('class', 'btnDone');
    btnDone.addEventListener('click', strikethrough)

    let btnDelete = document.createElement('div');
    btnDelete.textContent = "Delete";
    btnDelete.setAttribute('class', 'btnDelete');
    btnDelete.addEventListener('click', deleteRow);

    newDiv.appendChild(newP);
    newDiv.appendChild(btnDone);
    newDiv.appendChild(btnDelete);
    document.getElementById('listBody').appendChild(newDiv);
    
    document.getElementById('input').value = '';
}

// function: clear all;

function clearAll(){
    let listBody = document.getElementById('listBody');
    while (listBody.childNodes[0]){
        listBody.removeChild(listBody.childNodes[0]);
    }
}

// function delete row

function deleteRow(x){
    x.currentTarget.parentNode.parentNode.removeChild(x.currentTarget.parentNode)
}


function strikethrough(x){
    if (x.currentTarget.parentNode.firstChild.style.textDecoration === "line-through"){
        x.currentTarget.parentNode.firstChild.style.textDecoration = 'none';
    }
    else {
        x.currentTarget.parentNode.firstChild.style.textDecoration = 'line-through';
    }
}
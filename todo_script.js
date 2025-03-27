const inputBox=document.getElementById("input-box");
const listContainer=document.getElementById("list-container");

function addTask(){
    if(inputBox.value===''){
        alert("You must write something")
    }
    else{
        let li=document.createElement("li");
        li.innerHTML=inputBox.value;
        listContainer.appendChild(li);
        inputBox.value = ' '; // Clear the input box after adding the task
        Savedata();
        let span=document.createElement("span");
        span.innerHTML="\u00d7";  /*Unicode character for a multiplication sign (×),*/
        li.appendChild(span);
    }
}

listContainer.addEventListener("click",function(e)
{
    if(e.target.tagName==="LI"){
        e.target.classList.toggle("checked");
        Savedata();
    }
    else if(e.target.tagName==="SPAN"){
       e.target.parentElement.remove();
       Savedata();
    }
},false);
/*--Toggle Checkmark:
If the clicked target (e.target) is an <li>, the checked class is toggled for that item using classList.toggle("checked").
The Savedata() function is called to save the updated state.

-- Remove Task:
If the clicked target is a <span> (the close button), its parent element (the <li> it belongs to) is removed using e.target.parentElement.remove().
The Savedata() function is called again to save the updated list.*/

function Savedata(){
    localStorage.setItem("Data",listContainer.innerHTML);
}
function showList(){
    listContainer.innerHTML=localStorage.getItem("Data");
}
showList();
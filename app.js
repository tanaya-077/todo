const inp = document.querySelector("input");
const addBtn = document.querySelector("#addBtn");
const ul = document.querySelector("ul");



addBtn.addEventListener("click",()=>{
    const listItems = document.createElement("li");
    listItems.innerText = inp.value;

    
    const delBtn = document.createElement("button");
    delBtn.innerHTML = '<i class="fa-regular fa-trash-can"></i>';
    delBtn.style.marginLeft = "10px";

    delBtn.addEventListener("click", () => {
        ul.removeChild(listItems); 
    });
    listItems.appendChild(delBtn);
    ul.appendChild(listItems);
    inp.value = "";
});



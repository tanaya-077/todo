const inp = document.querySelector("input");
const addBtn = document.querySelector("#addBtn");
const ul = document.querySelector("ul");



addBtn.addEventListener("click",()=>{
    if (inp.value.trim() === "") return;
    const listItems = document.createElement("li");
    // listItems.innerText = inp.value;
    // console.log(inp.value)
    

    const todoText = document.createElement("span");
    todoText.innerText = inp.value;
    listItems.appendChild(todoText);

    const edibtn = document.createElement("button");
    edibtn.innerText ="Edit"
    edibtn.classList.add("editclass");
    edibtn.addEventListener("click",()=>{
        // const editInput  = prompt();
        // listItems.innerText = editInput
        // console.log(editInput)

        const editInput = document.createElement("input");
        editInput.style.marginLeft = "10px";

        editInput.value= todoText.innerText;
        console.log(editInput);
        listItems.replaceChild(editInput, todoText);
        editInput.addEventListener("keypress", (e) => {
            if (e.key === "Enter") {
                todoText.innerText = editInput.value;
                listItems.replaceChild(todoText, editInput);
            }
        });
   
    })
    const delBtn = document.createElement("button");
    delBtn.innerHTML = '<i class="fa-regular fa-trash-can"></i>';
    delBtn.style.marginLeft = "10px";

    delBtn.addEventListener("click", () => {
        ul.removeChild(listItems); 
    });


    listItems.appendChild(edibtn)
    listItems.appendChild(delBtn);
    ul.appendChild(listItems);
    inp.value = "";
});



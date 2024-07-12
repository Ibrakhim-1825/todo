let adForm = document.querySelector(".form")
let adInput = document.querySelector(".input")
let adList = document.querySelector(".list")
let allCount = document.querySelector(".All-count")
let Complated =document.querySelector(".Complated-count")
let Uncomplated = document.querySelector(".Uncomplated-count")
let wrapper = document.querySelector(".wrapper")
let modal = document.querySelector(".modal")



let todos = []

adForm.addEventListener("submit" , (e) =>{
   e.preventDefault()

   const data = {
    id: todos.length + 1,
    value: e.target[0].value,
    isComplated: false
   }
   todos.push(data)
   renderTodos(todos , adList)
   e.target.reset()
   
})

const renderTodos = (arr , list ) =>{
    list.innerHTML = "";

    arr.forEach((item , i )=> {
        let adItem = document.createElement("li")

        adItem.className= `flex items-center relative justify-between ${item.isComplated ? "before:w-[60%] before:h-[2px] before:bg-black before:absulte  before:top-0 before:bottom-0 before:my-auto opacity-50" : "," } `
        adItem.innerHTML = `
         <div >
                <span class="font-bold text-[20px] etxt-slate-500">${i + 1}.</span>
                <span class="font-bold text-[22px] ">${item.value}</span>
            </div>
            <div class="flex items-center gap-5">
                <input onclick ={changeCheckBox(${item.id})} type="checkbox" class="form-checkbox">
                <button onclick ={updateTodo(${item.id})} class="hover:opacity-50 duration-300 bg-green-400 rounded-lg p-2 text-white font-bold">Update</button>
                <button onclick = "todoDeleteClick(${item.id})" class="hover:opacity-50 duration-300 bg-red-400 rounded-lg p-2 text-white font-bold">Delete</button>
            </div>
        `
        list.appendChild(adItem)
    });
    allCount.textContent = todos.length
    Complated.textContent = todos.filter(item => item.isComplated == true).length
    Uncomplated.textContent = todos.filter(item => item.isComplated == false).length
}


let todoDeleteClick = (id) =>{
 let findIndex = todos.findIndex(item => item.id ==id)
 todos.splice(findIndex ,1)
 renderTodos(todos , adList)
}

let changeCheckBox =(id) =>{
    let findedObj = todos.find(item => item.id == id)
    findedObj.isComplated =!findedObj.isComplated
    renderTodos(findedObj , adList)
    window.localStorage.setItem("todos" , JSON.stringify(todos))
}

let updateTodo =()=>{
 wrapper .classList.add("!top-0")
 modal.classList.add("!scale-100")
 const updateObj = todos.find(item => item.id == id)
 modal.innerHTML = `
 <div class = "p-5 flex items-center">
    <input value="${updateObj.value}" class = "update-value py-3 w-[75%] pl-5 border-[1.5px] border-slate-500 rounded-lg outline-none focus: shadow-lg focus:shadow-blue-500" placeholder="update todo" type="text" name="update-todo"/>
    <button onclick ={updateTodoBtnClick(${id})} class= " bg-blue-400 w-[25%] p-2.5 font-semibold text-white rounded-lg text-[20px]">
     </button>
 </div>
 `

 
}

function updateTodoBtnClick(id){
    const updateObj = todos.find(item => item.id == id)
    let newValue = document.querySelector(".update-value").value
    updateObj.value = newValue
    wrapper.classList.remove("!top-0")
    modal.classList.remove("!scale-100")
    renderTodos(todos , adList)
    window.localStorage.setItem("todos" , JSON.stringify(todos))
}

wrapper.addEventListener("click" , (e) => {
    if(e.target.value == "wrapper"){
        wrapper.classList.remove("!top-0")
    modal.classList.remove("!scale-100")

    }

})
 


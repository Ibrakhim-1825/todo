let adForm = document.querySelector(".form")
let adInput = document.querySelector(".input")
let adList = document.querySelector(".list")
let allCount = document.querySelector(".All-count")
let Complated =document.querySelector(".Completed-count")
let Uncomplated = document.querySelector(".Uncomplated-count")

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
    list.innerHTML = ""
    arr.forEach((item , i )=> {
        let adItem = document.createElement("li")

        adItem.className= "flex items-center justify-between gap-3"
        adItem.innerHTML = `
         <div >
                <span class="font-bold text-[20px] etxt-slate-500">${i + 1}.</span>
                <span class="font-bold text-[22px] ">${item.value}</span>
            </div>
            <div class="flex items-center gap-5">
                <input onclick = "changeChekcBox(${item.id})" type="checkbox" class="form-checkbox">
                <button class="hover:opacity-50 duration-300 bg-green-400 rounded-lg p-2 text-white font-bold">Update</button>
                <button onclick = "todoDeleteClick(${item.id})" class="hover:opacity-50 duration-300 bg-red-400 rounded-lg p-2 text-white font-bold">Delete</button>
            </div>
        `
        list.appendChild(adItem)
    });
    allCount.textContent = todos.length
}


let todoDeleteClick = (id) =>{
 let findIndex = todos.findIndex(item => item.id ==id)
 todos.splice(findIndex ,1)
 renderTodos(todos , adList)

}

let changeChekcBox =(id) =>{
    let findedObj = todos.find(item => item.id == id)
    findedObj.isComplated = !findedObj.isComplated
    renderTodos(findedObj , adList)
}
todoDeleteClick()

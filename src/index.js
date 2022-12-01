document.addEventListener("DOMContentLoaded", () => {
  let form = document.querySelector("form")
  form.addEventListener("submit", (e)=>{
  e.preventDefault()
  handleTasks(e.target.newt.value)
  form.reset()
  }) // your code here
});

function handleTasks(todo) {
  let list = document.querySelector("#tasks")
  let li = document.createElement('li')
  list.appendChild(li).textContent = `${todo} `
  console.log(li)
  let btn = document.createElement('button')
  li.appendChild(btn).textContent = "X "
  btn.addEventListener('click', (e)=>{
    e.target.parentNode.remove()
  })
  let selct = document.createElement('select')
  li.appendChild(selct)
  let optV = document.createElement('option')
  selct.appendChild(optV).textContent = "High"
  
}
document.addEventListener("DOMContentLoaded", () => {
  // your code here
  document.querySelector("form").addEventListener('submit',(e)=>{
    e.preventDefault();
    buildToDo(e.target.querySelector('#new-task-description').value);
    e.target.reset();
  })
});
function buildToDo(todo){
  let p = document.createElement('p')
  let btn= document.createElement('button')
  btn.addEventListener('click',handleDelete)
  btn.textContent='x'
  p.textContent=` ${todo} `
  p.appendChild(btn)
  document.querySelector('#tasks').appendChild(p)
}
function handleDelete(e){
  e.target.parentNode.remove()
}
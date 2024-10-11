document.addEventListener("DOMContentLoaded", () => {
  // your code here
const form = document.querySelector('#create-task-form');
  form.onsubmit = (e) => {
  e.preventDefault();
  const todo = document.getElementById('new-task-description').value;
  buildToDo(todo);
  form.reset();
};
});



const buildToDo = (todo) => {
  const li = document.createElement('li');
  const btn = document.createElement('button');
  btn.textContent = 'x';
  btn.addEventListener('click', handleDelete);
  li.textContent = todo;
  li.appendChild(btn);
  console.log(li);
  document.querySelector('#tasks').appendChild(li);
};

const handleDelete = (e) => {
  e.target.parentNode.remove();
};
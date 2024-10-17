document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector('#create-task-form');
  form.addEventListener('submit', handleFormSubmit);
});

const handleFormSubmit = (e) => {
  e.preventDefault();
  const todo = document.getElementById('new-task-description').value.trim();
  if (todo) {
    buildToDo(todo);
  }
  e.target.reset();
};

const buildToDo = (todo) => {
  const li = document.createElement('li');
  const btnDelete = createButton('x', handleDelete);
  const btnEdit = createButton('edit', handleEdit);

  li.textContent = `${todo} `;
  li.appendChild(btnEdit);
  li.appendChild(btnDelete);

  document.querySelector('#tasks').appendChild(li);
};

const createButton = (text, eventHandler) => {
  const button = document.createElement('button');
  button.textContent = text;
  button.addEventListener('click', eventHandler);
  return button;
};

const handleDelete = (e) => {
  e.target.parentNode.remove();
};

const handleEdit = (e) => {
  const li = e.target.parentNode;
  const todo = li.firstChild.textContent.trim();
  li.innerHTML = '';

  const input = document.createElement('input');
  input.type = 'text';
  input.value = todo;

  const btnSave = createButton('save', () => handleSave(li, input.value));
  li.appendChild(input);
  li.appendChild(btnSave);
};

const handleSave = (li, newValue) => {
  li.innerHTML = `${newValue} `;
  const btnEdit = createButton('edit', handleEdit);
  const btnDelete = createButton('x', handleDelete);

  li.appendChild(btnEdit);
  li.appendChild(btnDelete);
};

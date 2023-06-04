const storage = new Foodstorage('ivan');

function populateSection(sectionName) {
  const element = document.getElementById(sectionName);
  const dataStorage = storage.getAll(sectionName);

  for (const item of dataStorage) {
    const li = document.createElement('li');
    const name = document.createElement('a');
    const del = document.createElement('a');
    del.setAttribute('itemId', item.id);
    del.classList.add('deleteItem')
    del.innerHTML = 'X';

    name.innerHTML = item.name;
    name.href = '';
    li.appendChild(name);
    li.appendChild(del);
    element.appendChild(li);
  }
}

// Ad

populateSection('breakfast');
populateSection('lunch');
populateSection('dinner');

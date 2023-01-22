let input = document.querySelector('#favchap');

let button = document.querySelector('button');

let list = document.querySelector('#list');

button.addEventListener('click', () => {
    const myItem = input.value;
    input.value != '';

    const listItem = document.createElement('li');
    const deleteButton = document.createElement('button');
    const listText = document.createElement('span');

    listItem.appendChild(listText);
    listText.textContent = myItem;
    listItem.appendChild(deleteButton);
    deleteButton.textContent = "❌";
    list.appendChild(listItem);

        deleteButton.addEventListener('click', () => {
        list.removeChild(listItem);
        })
    input.focus();
    input.value = '';
})

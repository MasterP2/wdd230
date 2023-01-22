// existing variable declarations referencing DOM elements
let input = document.querySelector('#favchap');
let button = document.querySelector('button');
let list = document.querySelector('#list');


// add this array declaration and assignment statement
let chaptersArray = getChapterList() || [];

chaptersArray.forEach(chapter => {
    displayList(chapter);
  });

button.addEventListener('click', () => {
    // const myItem = input.value;
    // input.value != '';
    if (input.value != '') {
        displayList(input.value);
        chaptersArray.push(input.value);
        setChapterList();
        input.value = '';
        input.focus();
      }
    // });

    function displayList(item) {
        let li = document.createElement('li');
        let deletebutton = document.createElement('button');
        li.textContent = item; // note the use of the item parameter and then delete this comment
        deletebutton.textContent = '❌';
        deletebutton.classList.add('delete'); // this references the CSS rule .delete{width:fit-content;} to size the delete button
        li.append(deletebutton);
        list.append(li);
        deletebutton.addEventListener('click', function () {
          list.removeChild(li);
          deleteChapter(li.textContent); // note this new function that is needed to remove the chapter from the array and localStorage.
          input.focus();
        });
      }

    function setChapterList() {
        localStorage.setItem('myFavBOMList', JSON.stringify(chaptersArray));
        }  

    
    function getChapterList() {
    return JSON.parse(localStorage.getItem('myFavBOMList'));
    }

    chapter = chapter.slice(0, chapter.length - 1); // this slices off the last character
    
    chaptersArray = chaptersArray.filter((item) => item !== chapter);

    function deleteChapter(chapter) {
        chapter = chapter.slice(0, chapter.length - 1);
        chaptersArray = chaptersArray.filter(item => item !== chapter);
        setChapterList();
      }

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

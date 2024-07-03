
const myMessage = document.querySelector('.myMessage');
const theMessageButton = document.querySelector('.theMessageButton');
const clearMessageButton = document.querySelector('.clearMessageButton');
const inputBox = document.querySelector('.theInputValue');
const fruitInput = document.querySelector('.theInputFruit');
const addFruitButton = document.querySelector('.addFruitButton');

theMessageButton.addEventListener('click', function () {
    if (inputBox.value.trim().length > 0) {
        myMessage.innerText = inputBox.value;
    }
});

clearMessageButton.addEventListener('click', function () {
    myMessage.innerText = '';
    inputBox.value = '';
});

myMessage.addEventListener('click', function () {
    myMessage.classList.toggle('darkmode');
});

const fruits = ['Apples', 'Pears', 'Oranges', 'Grapes', 'Bananas'];
const fruitList = document.querySelector(".fruits");

fruits.forEach(fruit => {
    const li = document.createElement('li');
    li.innerText = fruit;
    fruitList.appendChild(li);
});

addFruitButton.addEventListener('click', function () {
    const newFruit = fruitInput.value.trim();
    if (newFruit.length > 0) {
        const li = document.createElement('li');
        li.innerText = newFruit;
        fruitList.appendChild(li);
        fruitInput.value = '';
    }
});

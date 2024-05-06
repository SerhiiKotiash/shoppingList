const itemForm = document.getElementById('item-form');
const itemInput = document.getElementById('item-input');
const itemList = document.getElementById('item-list');

function addItem(e){
e.preventDefault();

const itemValue = itemInput.value;

if(itemValue === ''){
    alert('Type your text');
    return;
}
// add Li
const li = document.createElement('li');
li.appendChild(document.createTextNode(itemValue));
// add button to li
const button = buttons('remove-item btn-link text-red');
li.appendChild(button);
itemList.appendChild(li);

itemInput.value = '';

}

function buttons(classes){
const button = document.createElement('button');
button.className = classes;
// add icon to buttons
const icon = icons('fa-solid fa-xmark');
button.appendChild(icon);
return button;
}
function icons(classes){
    const icon = document.createElement('i');
    icon.className = classes;
    return icon;
}


// Event Listeners
itemForm.addEventListener('submit', addItem);
window.onload = function(){
	initShoppingList();
}

function initShoppingList(){
	let form = document.getElementById("item-form");
	form.addEventListener("submit", () =>{
		handleItemForForm(event, form);
	})
}

function handleItemForForm(event, formRef){
	//backward compatibility with older browsers
	if (event.preventDefault) {
		event.preventDefault();
	}

	addItemToShoppingList();
	formRef.reset();

	return false;
}

function handleDeleteItem(elementId){
	let element = document.getElementById("button"+elementId);
	element.addEventListener("click", () =>{
		deleteListItem(elementId);
	})
}

function addItemToShoppingList(){
	let itemName = document.getElementById("item-name");
	let itemAmount = document.getElementById("item-amount");
	let id = createRandomInt(1,999);
	let itemHtml = createListItemHtml(itemName.value, itemAmount.value, id);
	let itemListRef = document.getElementById("shopping-list");
	itemListRef.insertAdjacentHTML("afterend", itemHtml);
	handleDeleteItem(id);
}

function deleteListItem(elementId){
	let item = document.getElementById("item"+elementId);
	item.parentNode.removeChild(item);
}

function createListItemHtml(itemName, itemAmount, elementId){
	return `<li id="item${elementId}"> ${itemName} - ${itemAmount}
				<button type="button" id="button${elementId}">Delete Item</button>
				</li>`;
}

function createRandomInt(min, max){
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min)) + min;
}

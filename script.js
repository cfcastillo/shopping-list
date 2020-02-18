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
	if (event.preventDefault()) {
		event.preventDefault();
	}

	addItemToShoppingList();
	return false;
}

function addItemToShoppingList(){
	let itemName = document.getElementById("item-name");
	let itemAmount = document.getElementById("item-amount");
	let itemHtml = createListItemHtml(itemName.value, itemAmount.value);
	let itemListRef = document.getElementById("shopping-list");
	itemListRef.insertAdjacentHTML("afterend", itemHtml);
}

function createListItemHtml(itemName, itemAmount){
	return `<li> ${itemName} - ${itemAmount}</li>`;
}
let itemNameInput = document.getElementById('itemName');
let itemPriceInput = document.getElementById('itemPrice');
let buyBtn = document.getElementById('buyBtn');
let sellBtn = document.getElementById('sellBtn'); 
let balanceDisplay = document.getElementById('balance');
let historyList = document.getElementById('history');

let balance = 0;
function updateBalanceDisplay() {
    balanceDisplay.textContent = balance.toFixed(2);

    if (balance < 0) {
        balanceDisplay.style.color = 'white';
    } else {
        balanceDisplay.style.color = 'white';
        balanceDisplay.style.backgroundColor = 'transparent';
    }
}

buyBtn.addEventListener('click', () => {
    const itemName = itemNameInput.value.trim();
    const itemPrice = parseFloat(itemPriceInput.value.trim());

    if (!itemName || isNaN(itemPrice) || itemPrice <= 0) {
        alert('Please enter a valid item name and price.');
        return;
    }

    balance -= itemPrice;
    updateBalanceDisplay();

    const historyItem = document.createElement('li');
    historyItem.textContent = `Bought "${itemName}" for $${itemPrice.toFixed(2)}. Current balance is: $${balance.toFixed(2)}`;
    historyItem.style.color = balance < 0 ? 'red' : 'white';
    historyList.appendChild(historyItem);

    itemNameInput.value = '';
    itemPriceInput.value = '';
});

sellBtn.addEventListener('click', () => {
    const itemName = itemNameInput.value.trim();
    const itemPrice = parseFloat(itemPriceInput.value.trim());

    if (!itemName || isNaN(itemPrice) || itemPrice <= 0) {
        alert('Please enter a valid item name and price.');
        return;
    }

    balance += itemPrice;
    updateBalanceDisplay();

    const historyItem = document.createElement('li');
    historyItem.textContent = `Sold "${itemName}" for $${itemPrice.toFixed(2)}. Current balance is: $${balance.toFixed(2)}`;
    historyItem.style.color = 'green';
    historyList.appendChild(historyItem);

    itemNameInput.value = '';
    itemPriceInput.value = '';
});

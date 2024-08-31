document.addEventListener('DOMContentLoaded', () => {
    const transactionForm = document.getElementById('transaction-form');
    const transactionsTableBody = document.querySelector('#transactions tbody');

    // Handle form submission
    transactionForm.addEventListener('submit', (event) => {
        event.preventDefault();

        // Get form values
        const date = document.getElementById('date').value;
        const name = document.getElementById('name').value;
        const amount = document.getElementById('amount').value;
        const status = document.getElementById('status').value;

        // Add new row to the transactions table
        const newRow = transactionsTableBody.insertRow();
        newRow.innerHTML = `
            <td>${date}</td>
            <td>${name}</td>
            <td>${amount}</td>
            <td>${status}</td>
        `;

        // Clear form
        transactionForm.reset();
    });
});

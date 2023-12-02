document.addEventListener('DOMContentLoaded', function () {
    // Retrieve orders from local storage
    var orders = JSON.parse(localStorage.getItem('orders')) || [];

    // Display order summary
    var orderSummary = document.getElementById('orderSummary');

    if (orders.length === 0) {
        orderSummary.innerHTML = '<p>No orders yet.</p>';
    } else {
        orderSummary.innerHTML = '<h2>Order Summary</h2>';

        for (var i = 0; i < orders.length; i++) {
            orderSummary.innerHTML += `
                <p><strong>Name:</strong> ${orders[i].name}</p>
                <p><strong>Email:</strong> ${orders[i].email}</p>
                <p><strong>Number:</strong> ${orders[i].number}</p>
                <p><strong>Quantity:</strong> ${orders[i].quantity}</p>
                <p><strong>Food:</strong> ${orders[i].food}</p>
                <p><strong>Address:</strong> ${orders[i].address}</p>
                <hr>
            `;
        }
    }
});

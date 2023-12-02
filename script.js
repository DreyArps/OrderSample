function submitOrder() {
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var number = document.getElementById('number').value;
    var quantity = document.getElementById('quantity').value;
    var food = document.getElementById('food').value;
    var address = document.getElementById('address').value;

    var orderData = {
        name: name,
        email: email,
        number: number,
        quantity: quantity,
        food: food,
        address: address
    };

    // Send order data to the server
    sendOrderToServer(orderData);
}

// function sendOrderToServer(orderData) {
//     fetch('your-server-endpoint', {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(orderData),
//     })
//     .then(response => response.json())
//     .then(data => {
//         if (data.success) {
//             alert('Order submitted successfully!');
//             // Optionally, you can redirect the user to a confirmation page
//             window.location.href = 'confirmation.html';
//         } else {
//             alert('Failed to submit order. Please try again.');
//         }
//     })
//     .catch((error) => {
//         console.error('Error:', error);
//         alert('Failed to submit order. Please try again.');
//     });
// }


function sendOrderToServer(orderData) {
    fetch('http://localhost:3000/submit-order', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(orderData),
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            alert('Order submitted successfully!');
            // Optionally, you can redirect the user to a confirmation page
            window.location.href = 'confirmation.html';
        } else {
            alert('Failed to submit order. Please try again.');
        }
    })
    .catch((error) => {
        console.error('Error:', error);
        alert('Failed to submit order. Please try again.');
    });
}
document.getElementById('calculate').addEventListener('click', function() {
    // Get input values
    const amount = parseFloat(document.getElementById('amount').value);
    const interestRate = parseFloat(document.getElementById('interest').value) / 100 / 12;
    const years = parseFloat(document.getElementById('years').value);
    const totalPayments = years * 12;

    // Calculate monthly payment
    const x = Math.pow(1 + interestRate, totalPayments);
    const monthlyPayment = (amount * x * interestRate) / (x - 1);
    
    if (isFinite(monthlyPayment)) {
        // Calculate total payment and total interest
        const totalPayment = monthlyPayment * totalPayments;
        const totalInterest = totalPayment - amount;

        // Display results
        document.getElementById('monthly-payment').textContent = `Monthly Payment: $${monthlyPayment.toFixed(2)}`;
        document.getElementById('total-payment').textContent = `Total Payment: $${totalPayment.toFixed(2)}`;
        document.getElementById('total-interest').textContent = `Total Interest: $${totalInterest.toFixed(2)}`;

        document.getElementById('results').classList.remove('hidden');
    } else {
        alert('Please check your inputs');
    }
});

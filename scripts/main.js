document.getElementById('checkout-form').addEventListener('submit', async (e) => {
  e.preventDefault();

  const productId = document.getElementById('product').value;
  const robloxUsername = document.getElementById('robloxUsername').value;
  const discordUserId = document.getElementById('discordUserId').value;

  try {
    const response = await fetch('https://shop.rankaroo.solutions/create-checkout-session', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ productId, robloxUsername, discordUserId })
    });

    const data = await response.json();

    if (data.url) {
      window.location.href = data.url; // Redirect to Stripe Checkout
    } else {
      alert('Error creating checkout session.');
    }
  } catch (error) {
    console.error('Error:', error);
    alert('An error occurred. Please try again.');
  }
});

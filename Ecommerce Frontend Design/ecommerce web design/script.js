function search() {
  const category = document.getElementById("category").value;
  const query = document.getElementById("searchBar").value.trim();

  if (query) {
    alert(`Searching for "${query}" in category "${category}"`);
    // You can replace this with actual search logic or redirection
  } else {
    alert("Please enter a search query.");
  }
}

// Future: Add JS to handle cart, messages, profile, etc.
document.querySelectorAll('.tabs button').forEach(button => {
    button.addEventListener('click', function() {
        alert(`Tab ${this.textContent} clicked`);
    });
});

document.querySelector('.promo button').addEventListener('click', function() {
    alert('Shop now clicked');
});
document.querySelectorAll('.cart-item button, .saved-item button').forEach(button => {
    button.addEventListener('click', function() {
        const action = this.textContent.toLowerCase();
        const item = this.parentElement.querySelector('p').textContent;
        alert(`${action === 'remove' ? 'Removed' : 'Saved'} ${item}`);
    });
});

document.querySelector('.cart-actions button').addEventListener('click', function() {
    if (confirm('Are you sure you want to remove all items?')) {
        document.querySelectorAll('.cart-item').forEach(item => item.remove());
        alert('All items removed!');
    }
});

document.querySelector('.total-section button').addEventListener('click', function() {
    alert('Proceeding to checkout!');
});

document.querySelector('.coupon-section button').addEventListener('click', function() {
    const coupon = document.querySelector('.coupon-section input').value;
    alert(`Coupon ${coupon} applied!`);
});

document.querySelector('.promo button').addEventListener('click', function() {
    alert('Shop now clicked!');
});
document.querySelectorAll('.product-item a').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        alert(`Viewing details for ${this.nextElementSibling.textContent}`);
    });
});

document.querySelectorAll('.filter-group button').forEach(button => {
    button.addEventListener('click', function() {
        const min = this.parentElement.querySelector('input[placeholder="Min"]').value;
        const max = this.parentElement.querySelector('input[placeholder="Max"]').value;
        alert(`Filter applied: Min $${min}, Max $${max}`);
    });
});

document.querySelector('.subscribe button').addEventListener('click', function() {
    const email = document.querySelector('.subscribe input').value;
    if (email) alert(`Subscribed with email: ${email}`);
    else alert('Please enter an email!');
});

document.querySelectorAll('.pagination button').forEach(button => {
    button.addEventListener('click', function() {
        alert(`Page ${this.textContent} selected`);
    });
});
document.querySelectorAll('.filter-group button').forEach(button => {
    button.addEventListener('click', function() {
        alert('Filters cleared!');
    });
});

document.querySelector('.subscribe button').addEventListener('click', function() {
    const email = document.querySelector('.subscribe input').value;
    if (email) alert(`Subscribed with email: ${email}`);
    else alert('Please enter an email!');
});

document.querySelectorAll('.pagination button').forEach(button => {
    button.addEventListener('click', function() {
        alert(`Page ${this.textContent} selected`);
    });
});
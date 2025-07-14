
// Mobile menu toggle
document.getElementById('mobile-menu-button').addEventListener('click', function() {
    const menu = document.getElementById('mobile-menu');
    menu.classList.toggle('hidden');
});

// Menu tab functionality
const menuTabs = document.querySelectorAll('.menu-tab');
const dishCards = document.querySelectorAll('.dish-card');

menuTabs.forEach(tab => {
    tab.addEventListener('click', function() {
        // Remove active class from all tabs
        menuTabs.forEach(t => t.classList.remove('active'));
        
        // Add active class to clicked tab
        this.classList.add('active');
        
        const category = this.getAttribute('data-category');
        
        // Show/hide dishes based on category
        dishCards.forEach(card => {
            if (category === 'all' || card.getAttribute('data-category') === category) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    });
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        // Close mobile menu if open
        const mobileMenu = document.getElementById('mobile-menu');
        if (!mobileMenu.classList.contains('hidden')) {
            mobileMenu.classList.add('hidden');
        }
        
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            // Calculate the scroll position, accounting for fixed header
            const headerHeight = document.querySelector('nav').offsetHeight;
            const targetPosition = targetElement.offsetTop - headerHeight;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Form submission
const reservationForm = document.querySelector('.reservation-form');
if (reservationForm) {
    reservationForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form values
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const phone = document.getElementById('phone').value;
        const guests = document.getElementById('guests').value;
        const date = document.getElementById('date').value;
        const time = document.getElementById('time').value;
        const requests = document.getElementById('special-requests').value;
        
        // Here you would typically send this data to your server
        // For demo purposes, we'll just show an alert
        alert(`Thank you, ${name}! Your reservation request has been received. We'll contact you shortly to confirm.`);
        
        // Reset form
        reservationForm.reset();
    });
}

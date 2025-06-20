
// Navigation functionality
document.addEventListener('DOMContentLoaded', function() {
    const navToggle = document.getElementById('navToggle');
    const navMenu = document.getElementById('navMenu');
    const navLinks = document.querySelectorAll('.nav-link');

    // Mobile menu toggle
    navToggle.addEventListener('click', function() {
        navMenu.classList.toggle('active');
    });

    // Close mobile menu when clicking on links
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navMenu.classList.remove('active');
        });
    });

    // Smooth scrolling for navigation links
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const offsetTop = targetSection.offsetTop - 80; // Account for fixed header
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Header background change on scroll
    window.addEventListener('scroll', function() {
        const header = document.querySelector('.header');
        if (window.scrollY > 100) {
            header.style.background = 'rgba(255, 255, 255, 0.98)';
        } else {
            header.style.background = 'rgba(255, 255, 255, 0.95)';
        }
    });

    // Initialize gallery
    initializeGallery();

    // Initialize forms
    initializeForms();

    // Add fade-in animation to sections on scroll
    observeElements();
});

// Utility functions
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        const offsetTop = section.offsetTop - 80;
        window.scrollTo({
            top: offsetTop,
            behavior: 'smooth'
        });
    }
}

function callPhone() {
    window.location.href = 'tel:+14072196915';
}

// Gallery functionality
function initializeGallery() {
    const galleryGrid = document.getElementById('galleryGrid');
    
    const galleryImages = [
        {
            src: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop',
            alt: 'Car exterior detailing service'
        },
        {
            src: 'https://images.unsplash.com/photo-1542362567-b07e54358753?w=400&h=300&fit=crop',
            alt: 'Car interior cleaning'
        },
        {
            src: 'https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?w=400&h=300&fit=crop',
            alt: 'Luxury car detailing'
        },
        {
            src: 'https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=400&h=300&fit=crop',
            alt: 'Professional car wash'
        },
        {
            src: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=400&h=300&fit=crop',
            alt: 'Mobile detailing service'
        },
        {
            src: 'https://images.unsplash.com/photo-1545558014-8692077e9b5c?w=400&h=300&fit=crop',
            alt: 'Car waxing and polishing'
        }
    ];

    galleryImages.forEach(image => {
        const galleryItem = document.createElement('div');
        galleryItem.className = 'gallery-item';
        galleryItem.innerHTML = `<img src="${image.src}" alt="${image.alt}" loading="lazy">`;
        
        // Add click handler for image modal (optional enhancement)
        galleryItem.addEventListener('click', function() {
            openImageModal(image.src, image.alt);
        });
        
        galleryGrid.appendChild(galleryItem);
    });
}

// Simple image modal
function openImageModal(src, alt) {
    const modal = document.createElement('div');
    modal.className = 'image-modal';
    modal.innerHTML = `
        <div class="modal-content">
            <span class="modal-close">&times;</span>
            <img src="${src}" alt="${alt}">
        </div>
    `;
    
    // Add modal styles
    modal.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.8);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 2000;
        animation: fadeIn 0.3s ease;
    `;
    
    const modalContent = modal.querySelector('.modal-content');
    modalContent.style.cssText = `
        position: relative;
        max-width: 90%;
        max-height: 90%;
    `;
    
    const modalClose = modal.querySelector('.modal-close');
    modalClose.style.cssText = `
        position: absolute;
        top: -40px;
        right: 0;
        color: white;
        font-size: 2rem;
        cursor: pointer;
        background: none;
        border: none;
    `;
    
    const modalImg = modal.querySelector('img');
    modalImg.style.cssText = `
        width: 100%;
        height: auto;
        border-radius: 0.5rem;
    `;
    
    document.body.appendChild(modal);
    document.body.style.overflow = 'hidden';
    
    // Close modal handlers
    modalClose.addEventListener('click', closeModal);
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            closeModal();
        }
    });
    
    function closeModal() {
        document.body.removeChild(modal);
        document.body.style.overflow = 'auto';
    }
    
    // Close on escape key
    document.addEventListener('keydown', function handleEscape(e) {
        if (e.key === 'Escape') {
            closeModal();
            document.removeEventListener('keydown', handleEscape);
        }
    });
}

// Form handling
function initializeForms() {
    // Contact form
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            handleContactForm(this);
        });
    }
    
    // Booking form
    const bookingForm = document.getElementById('bookingForm');
    if (bookingForm) {
        bookingForm.addEventListener('submit', function(e) {
            e.preventDefault();
            handleBookingForm(this);
        });
    }
    
    // Set minimum date to today for booking
    const bookDate = document.getElementById('bookDate');
    if (bookDate) {
        const today = new Date().toISOString().split('T')[0];
        bookDate.setAttribute('min', today);
    }
}

function handleContactForm(form) {
    const formData = new FormData(form);
    const data = Object.fromEntries(formData);
    
    // Here you would typically send the data to your server
    console.log('Contact form data:', data);
    
    // Show success message
    showNotification('Thank you for your message! We\'ll get back to you soon.', 'success');
    
    // Reset form
    form.reset();
}

function handleBookingForm(form) {
    const formData = new FormData(form);
    const data = Object.fromEntries(formData);
    
    // Validate required fields
    const requiredFields = ['name', 'email', 'phone', 'date', 'service', 'vehicleType', 'address'];
    const missingFields = requiredFields.filter(field => !data[field]);
    
    if (missingFields.length > 0) {
        showNotification('Please fill in all required fields.', 'error');
        return;
    }
    
    // Here you would typically send the data to your server
    console.log('Booking form data:', data);
    
    // Show success message
    showNotification('Your booking request has been submitted! We\'ll contact you soon to confirm your appointment.', 'success');
    
    // Reset form
    form.reset();
}

// Notification system
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;
    
    // Styles
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: ${type === 'success' ? '#10b981' : type === 'error' ? '#ef4444' : '#3b82f6'};
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 0.5rem;
        box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
        z-index: 1000;
        animation: slideIn 0.3s ease;
        max-width: 400px;
        word-wrap: break-word;
    `;
    
    document.body.appendChild(notification);
    
    // Auto remove after 5 seconds
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => {
            if (document.body.contains(notification)) {
                document.body.removeChild(notification);
            }
        }, 300);
    }, 5000);
}

// Intersection Observer for animations
function observeElements() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
            }
        });
    }, observerOptions);
    
    // Observe sections
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        observer.observe(section);
    });
    
    // Observe cards and other elements
    const cards = document.querySelectorAll('.service-item, .ceramic-card, .addon-card, .gallery-item');
    cards.forEach(card => {
        observer.observe(card);
    });
}

// Add CSS animations
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from {
            transform: translateX(100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOut {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(100%);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// Service interaction handlers
document.addEventListener('click', function(e) {
    // Handle service buttons
    if (e.target.matches('.btn') && e.target.textContent.includes('Request Quote')) {
        showQuoteModal();
    }
    
    if (e.target.matches('.btn') && e.target.textContent.includes('Choose This Option')) {
        const car = e.target.closest('.ceramic-card');
        const service = car.querySelector('h4').textContent;
        showBookingModal(service);
    }
    
    if (e.target.matches('.btn') && e.target.textContent.includes('Add to Service')) {
        const addon = e.target.closest('.addon-card');
        const serviceName = addon.querySelector('h4').textContent;
        const servicePrice = addon.querySelector('.addon-price').textContent;
        addToCart(serviceName, servicePrice);
    }
});

function showQuoteModal() {
    showNotification('Please call us at (407) 219-6915 or use the booking form for a personalized quote!', 'info');
}

function showBookingModal(service) {
    scrollToSection('book');
    // Pre-select the service in the booking form
    setTimeout(() => {
        const serviceSelect = document.getElementById('bookService');
        if (serviceSelect) {
            const options = serviceSelect.options;
            for (let i = 0; i < options.length; i++) {
                if (options[i].text.includes(service.split('-')[0])) {
                    serviceSelect.selectedIndex = i;
                    break;
                }
            }
        }
    }, 500);
}

function addToCart(serviceName, servicePrice) {
    showNotification(`${serviceName} (${servicePrice}) has been noted. Please mention this when booking!`, 'success');
}

// Phone number click handler
document.addEventListener('click', function(e) {
    if (e.target.matches('a[href^="tel:"]') || e.target.closest('a[href^="tel:"]')) {
        // Phone links will work automatically
        console.log('Phone number clicked');
    }
});

// Email click handler
document.addEventListener('click', function(e) {
    if (e.target.matches('a[href^="mailto:"]') || e.target.closest('a[href^="mailto:"]')) {
        // Email links will work automatically
        console.log('Email clicked');
    }
});

// Add loading states for forms
function addLoadingState(button) {
    const originalText = button.textContent;
    button.textContent = 'Sending...';
    button.disabled = true;
    
    setTimeout(() => {
        button.textContent = originalText;
        button.disabled = false;
    }, 2000);
}

// Handle form submissions with loading states
document.addEventListener('submit', function(e) {
    if (e.target.matches('#contactForm, #bookingForm')) {
        const submitButton = e.target.querySelector('button[type="submit"]');
        if (submitButton) {
            addLoadingState(submitButton);
        }
    }
});

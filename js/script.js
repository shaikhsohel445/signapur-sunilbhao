// Mobile Navigation Toggle
const navToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('navMenu');

if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });
}

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
    if (navMenu && navMenu.classList.contains('active')) {
        if (!navToggle.contains(e.target) && !navMenu.contains(e.target)) {
            navMenu.classList.remove('active');
        }
    }
});

// Smooth Scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Gallery Lightbox Functionality
const galleryImages = [
    {
        src: 'https://images.unsplash.com/photo-1501630834273-4b5604d2ee31?w=1200&h=800&fit=crop',
        caption: 'गाव दृश्य'
    },
    {
        src: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1200&h=800&fit=crop',
        caption: 'शेती'
    },
    {
        src: 'https://images.unsplash.com/photo-1496307042754-b4aa456c4a2d?w=1200&h=800&fit=crop',
        caption: 'ग्रामसभा बैठक'
    },
    {
        src: 'https://images.unsplash.com/photo-1581090700227-1b1a1a09a5f7?w=1200&h=800&fit=crop',
        caption: 'स्वच्छता अभियान'
    },
    {
        src: 'https://images.unsplash.com/photo-1581091215367-59ab6e92f373?w=1200&h=800&fit=crop',
        caption: 'ग्रामपंचायत कार्यालय'
    },
    {
        src: 'https://images.unsplash.com/photo-1516979187457-637abb4f9353?w=1200&h=800&fit=crop',
        caption: 'शाळा'
    },
    {
        src: 'https://images.unsplash.com/photo-1509099863731-ef4bff19e808?w=1200&h=800&fit=crop',
        caption: 'आरोग्य शिबीर'
    },
    {
        src: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1200&h=800&fit=crop',
        caption: 'महिला स्वसहाय्य गट'
    },
    {
        src: 'https://images.unsplash.com/photo-1464207687429-7505649dae38?w=1200&h=800&fit=crop',
        caption: 'रस्ते बांधकाम'
    },
    {
        src: 'https://images.unsplash.com/photo-1593113598332-cd288d649433?w=1200&h=800&fit=crop',
        caption: 'पाणी पुरवठा'
    },
    {
        src: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=1200&h=800&fit=crop',
        caption: 'सांस्कृतिक कार्यक्रम'
    },
    {
        src: 'https://images.unsplash.com/photo-1509099836639-18ba1795216d?w=1200&h=800&fit=crop',
        caption: 'वृक्षारोपण'
    }
];

let currentImageIndex = 0;

function openLightbox(index) {
    currentImageIndex = index;
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const lightboxCaption = document.getElementById('lightbox-caption');
    
    if (lightbox && lightboxImg && lightboxCaption) {
        lightboxImg.src = galleryImages[index].src;
        lightboxCaption.textContent = galleryImages[index].caption;
        lightbox.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
}

function closeLightbox() {
    const lightbox = document.getElementById('lightbox');
    if (lightbox) {
        lightbox.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
}

function changeImage(direction) {
    currentImageIndex += direction;
    
    if (currentImageIndex < 0) {
        currentImageIndex = galleryImages.length - 1;
    } else if (currentImageIndex >= galleryImages.length) {
        currentImageIndex = 0;
    }
    
    const lightboxImg = document.getElementById('lightbox-img');
    const lightboxCaption = document.getElementById('lightbox-caption');
    
    if (lightboxImg && lightboxCaption) {
        lightboxImg.src = galleryImages[currentImageIndex].src;
        lightboxCaption.textContent = galleryImages[currentImageIndex].caption;
    }
}

// Keyboard navigation for lightbox
document.addEventListener('keydown', (e) => {
    const lightbox = document.getElementById('lightbox');
    if (lightbox && lightbox.classList.contains('active')) {
        if (e.key === 'Escape') {
            closeLightbox();
        } else if (e.key === 'ArrowLeft') {
            changeImage(-1);
        } else if (e.key === 'ArrowRight') {
            changeImage(1);
        }
    }
});

// Contact Form Submission
const contactForm = document.getElementById('contactForm');

if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Get form values
        const name = document.getElementById('name').value;
        const mobile = document.getElementById('mobile').value;
        const email = document.getElementById('email').value;
        const complaintType = document.getElementById('complaint-type').value;
        const message = document.getElementById('message').value;
        
        // Simple validation
        if (!name || !mobile || !complaintType || !message) {
            alert('कृपया सर्व आवश्यक माहिती भरा');
            return;
        }
        
        // Show success message
        alert('आपली तक्रार यशस्वीरित्या नोंद झाली आहे. आम्ही लवकरच आपल्याशी संपर्क साधू. धन्यवाद!');
        
        // Reset form
        contactForm.reset();
    });
}

// Navbar scroll effect
let lastScroll = 0;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
        navbar.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.15)';
    } else {
        navbar.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
    }
    
    lastScroll = currentScroll;
});

// Add animation on scroll for cards
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all cards for animation
document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.link-card, .service-card, .news-card, .scheme-card, .team-card, .gallery-item');
    
    cards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        observer.observe(card);
    });
});

// Form file input custom styling
const fileInput = document.getElementById('photo');
if (fileInput) {
    fileInput.addEventListener('change', (e) => {
        const fileName = e.target.files[0]?.name;
        if (fileName) {
            console.log('[v0] File selected:', fileName);
        }
    });
}
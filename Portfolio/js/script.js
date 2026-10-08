/**
 * CINEMATIC VINTAGE PORTFOLIO
 * JavaScript for interactive elements and smooth animations
 */

// ===================================
// SMOOTH SCROLL WITH OFFSET
// ===================================
document.addEventListener('DOMContentLoaded', function() {
    
    // Smooth scroll for navigation links
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const navHeight = document.querySelector('.nav').offsetHeight;
                const targetPosition = targetSection.offsetTop - navHeight - 20;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // ===================================
    // ACTIVE NAVIGATION HIGHLIGHT
    // ===================================
    const sections = document.querySelectorAll('.section');
    const nav = document.querySelector('.nav');
    
    window.addEventListener('scroll', function() {
        // Add shadow to nav on scroll
        if (window.scrollY > 50) {
            nav.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.1)';
        } else {
            nav.style.boxShadow = 'none';
        }
        
        // Highlight active section in navigation
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            if (window.scrollY >= (sectionTop - 200)) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });
    
    // ===================================
    // SCROLL REVEAL ANIMATIONS
    // ===================================
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Elements to animate on scroll
    const animateElements = document.querySelectorAll(
        '.timeline-item, .skill-card, .about-text, .contact-content'
    );
    
    animateElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
    
    // ===================================
    // TYPEWRITER EFFECT CONTROL
    // ===================================
    const typewriterElement = document.querySelector('.typewriter');
    
    if (typewriterElement) {
        // Reset typewriter animation on page load
        typewriterElement.style.animation = 'none';
        
        setTimeout(() => {
            typewriterElement.style.animation = 'typing 2.5s steps(40, end), blink-caret 0.75s step-end infinite';
        }, 100);
    }
    
    // ===================================
    // TIMELINE ITEM COUNTER
    // ===================================
    const timelineItems = document.querySelectorAll('.timeline-item');
    
    timelineItems.forEach((item, index) => {
        // Add subtle delay to timeline animations
        item.style.transitionDelay = `${index * 0.1}s`;
    });
    
    // ===================================
    // BUTTON RIPPLE EFFECT
    // ===================================
    const buttons = document.querySelectorAll('.btn');
    
    buttons.forEach(button => {
        button.addEventListener('click', function(e) {
            const ripple = document.createElement('span');
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;
            
            ripple.style.width = ripple.style.height = size + 'px';
            ripple.style.left = x + 'px';
            ripple.style.top = y + 'px';
            ripple.classList.add('ripple-effect');
            
            this.appendChild(ripple);
            
            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    });
    
    // ===================================
    // PARALLAX EFFECT ON HERO
    // ===================================
    const hero = document.querySelector('.hero');
    
    window.addEventListener('scroll', function() {
        const scrolled = window.scrollY;
        if (hero && scrolled < window.innerHeight) {
            hero.style.transform = `translateY(${scrolled * 0.5}px)`;
            hero.style.opacity = 1 - (scrolled / window.innerHeight) * 0.5;
        }
    });
    
    // ===================================
    // ENHANCED FILM GRAIN RANDOMIZATION
    // ===================================
    const filmGrain = document.querySelector('.film-grain');
    
    setInterval(() => {
        const randomOpacity = 0.1 + Math.random() * 0.1;
        filmGrain.style.opacity = randomOpacity;
    }, 100);
    
    // ===================================
    // SKILL CARD HOVER SOUND (OPTIONAL)
    // ===================================
    const skillCards = document.querySelectorAll('.skill-card');
    
    skillCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transition = 'all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)';
        });
    });
    
    // ===================================
    // CONTACT LINK CLIPBOARD COPY
    // ===================================
    const emailLink = document.querySelector('a[href^="mailto:"]');
    
    if (emailLink) {
        emailLink.addEventListener('contextmenu', function(e) {
            e.preventDefault();
            const email = this.textContent.trim();
            
            navigator.clipboard.writeText(email).then(() => {
                showNotification('Email copied to clipboard!');
            });
        });
    }
    
    // ===================================
    // NOTIFICATION HELPER
    // ===================================
    function showNotification(message) {
        const notification = document.createElement('div');
        notification.textContent = message;
        notification.style.cssText = `
            position: fixed;
            bottom: 30px;
            right: 30px;
            background-color: #c67b5c;
            color: #f4efe7;
            padding: 1rem 2rem;
            border-radius: 4px;
            font-family: 'Courier New', monospace;
            font-size: 0.9rem;
            z-index: 10000;
            animation: slideInUp 0.3s ease;
            box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
        `;
        
        document.body.appendChild(notification);
        
        setTimeout(() => {
            notification.style.animation = 'slideOutDown 0.3s ease';
            setTimeout(() => {
                notification.remove();
            }, 300);
        }, 2000);
    }
    
    // ===================================
    // EASTER EGG: KONAMI CODE
    // ===================================
    const konamiCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];
    let konamiIndex = 0;
    
    document.addEventListener('keydown', function(e) {
        if (e.key === konamiCode[konamiIndex]) {
            konamiIndex++;
            if (konamiIndex === konamiCode.length) {
                activateVintageMode();
                konamiIndex = 0;
            }
        } else {
            konamiIndex = 0;
        }
    });
    
    function activateVintageMode() {
        document.body.style.filter = 'sepia(1) contrast(1.2)';
        showNotification('🎬 Ultra Vintage Mode Activated!');
        
        setTimeout(() => {
            document.body.style.filter = 'none';
        }, 5000);
    }
    
    // ===================================
    // LOADING ANIMATION COMPLETE
    // ===================================
    document.body.classList.add('loaded');
    
    console.log('%c🎬 Portfolio Loaded Successfully', 'color: #c67b5c; font-size: 16px; font-family: Courier New;');
    console.log('%cDesigned with Cinematic Vintage aesthetics', 'color: #8b7355; font-size: 12px;');
});

// ===================================
// CSS ANIMATIONS (Inject into DOM)
// ===================================
const styleSheet = document.createElement('style');
styleSheet.textContent = `
    .ripple-effect {
        position: absolute;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.5);
        transform: scale(0);
        animation: ripple 0.6s ease-out;
        pointer-events: none;
    }
    
    @keyframes ripple {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
    
    @keyframes slideInUp {
        from {
            transform: translateY(100px);
            opacity: 0;
        }
        to {
            transform: translateY(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOutDown {
        from {
            transform: translateY(0);
            opacity: 1;
        }
        to {
            transform: translateY(100px);
            opacity: 0;
        }
    }
    
    .nav-link.active {
        color: #c67b5c;
    }
    
    .nav-link.active::after {
        width: 100%;
    }
`;

document.head.appendChild(styleSheet);

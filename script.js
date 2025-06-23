// Scroll to top functionality
document.addEventListener('DOMContentLoaded', function() {
  const scrollToTopBtn = document.getElementById('scroll-to-top');
  
  // Show/hide scroll to top button
  window.addEventListener('scroll', function() {
    if (window.pageYOffset > 300) {
      scrollToTopBtn.classList.add('show');
    } else {
      scrollToTopBtn.classList.remove('show');
    }
  });
  
  // Scroll to top when button is clicked
  scrollToTopBtn.addEventListener('click', function() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
  
  // Smooth scrolling for navigation links
  const navLinks = document.querySelectorAll('nav a[href^="#"]');
  navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href');
      const targetSection = document.querySelector(targetId);
      if (targetSection) {
        targetSection.scrollIntoView({
          behavior: 'smooth'
        });
      }
    });
  });
  
  // Contact form handling
  const contactForm = document.getElementById('contact-form');
  const formMessage = document.getElementById('form-message');
  
  contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get form data
    const formData = new FormData(this);
    const name = formData.get('name');
    const email = formData.get('email');
    const phone = formData.get('phone');
    const message = formData.get('message');
    
    // Simple validation
    if (!name || !email || !phone || !message) {
      formMessage.textContent = 'Please fill in all fields.';
      formMessage.style.color = '#ff6a3d';
      return;
    }
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      formMessage.textContent = 'Please enter a valid email address.';
      formMessage.style.color = '#ff6a3d';
      return;
    }
    
    // Phone validation
    const phoneRegex = /^[\d\-\+\s]{7,}$/;
    if (!phoneRegex.test(phone)) {
      formMessage.textContent = 'Please enter a valid phone number.';
      formMessage.style.color = '#ff6a3d';
      return;
    }
    
    // Success message
    formMessage.textContent = 'Thank you! Your message has been sent successfully.';
    formMessage.style.color = '#4CAF50';
    
    // Reset form
    contactForm.reset();
    
    // Clear success message after 5 seconds
    setTimeout(() => {
      formMessage.textContent = '';
    }, 5000);
  });
});

// Add staggered animation delays to navigation items
document.addEventListener('DOMContentLoaded', function() {
    // Add animation delays to navigation items
    const navItems = document.querySelectorAll('nav a');
    navItems.forEach((item, index) => {
        item.style.setProperty('--i', index);
    });

    // Add animation delays to skills items
    const skillsItems = document.querySelectorAll('.skills-list li');
    skillsItems.forEach((item, index) => {
        item.style.setProperty('--i', index);
    });

    // Add animation delays to experience items
    const experienceItems = document.querySelectorAll('.experience-item');
    experienceItems.forEach((item, index) => {
        item.style.setProperty('--i', index);
    });

    // Add animation delays to project items
    const projectItems = document.querySelectorAll('.project');
    projectItems.forEach((item, index) => {
        item.style.setProperty('--i', index);
    });

    // Add animation delays to certification items
    const certificationItems = document.querySelectorAll('.certification-item');
    certificationItems.forEach((item, index) => {
        item.style.setProperty('--i', index);
    });

    // Add animation delays to form elements
    const formInputs = document.querySelectorAll('form input, form textarea');
    formInputs.forEach((input, index) => {
        input.style.setProperty('--i', index);
    });

    // Add animation delays to certification list items
    const certificationListItems = document.querySelectorAll('.certification-ul li');
    certificationListItems.forEach((item, index) => {
        item.style.setProperty('--i', index);
    });

    // Text animation functions
    function animateText(element, type = 'reveal') {
        if (type === 'typewriter') {
            element.classList.add('animate-text');
        } else if (type === 'reveal') {
            element.classList.add('reveal-text');
        } else if (type === 'slide') {
            element.classList.add('slide-in-text');
        }
    }

    // Animate section headings with typewriter effect
    function animateSectionHeadings() {
        const headings = document.querySelectorAll('.about-section h2, .skills-section h2, .experience-section h2, .projects-section h2, .contact-section h2, .certifications-section h2');
        
        headings.forEach((heading, index) => {
            setTimeout(() => {
                const originalText = heading.textContent;
                heading.textContent = '';
                heading.style.borderRight = '3px solid #ff6a3d';
                
                let i = 0;
                const typeWriter = () => {
                    if (i < originalText.length) {
                        heading.textContent += originalText.charAt(i);
                        i++;
                        setTimeout(typeWriter, 100);
                    } else {
                        heading.style.borderRight = 'none';
                    }
                };
                typeWriter();
            }, index * 500 + 1000);
        });
    }

    // Animate about section text
    function animateAboutText() {
        const aboutParagraphs = document.querySelectorAll('.about-section > p');
        aboutParagraphs.forEach((p, index) => {
            setTimeout(() => {
                animateText(p, 'reveal');
            }, index * 300 + 1500);
        });
    }

    // Animate skills section
    function animateSkillsSection() {
        const skillsHeaders = document.querySelectorAll('.skills-section h3');
        skillsHeaders.forEach((header, index) => {
            setTimeout(() => {
                animateText(header, 'reveal');
            }, index * 200 + 1000);
        });
    }

    // Animate experience and project items
    function animateExperienceAndProjects() {
        const experienceElements = document.querySelectorAll('.experience-item h3, .experience-item h4, .experience-item span, .project h3, .project span');
        const projectElements = document.querySelectorAll('.project p, .experience-item p');
        const listElements = document.querySelectorAll('.experience-item ul li, .project p:last-child');

        experienceElements.forEach((el, index) => {
            setTimeout(() => {
                animateText(el, 'reveal');
            }, index * 150 + 800);
        });

        projectElements.forEach((el, index) => {
            setTimeout(() => {
                animateText(el, 'reveal');
            }, index * 200 + 1000);
        });

        listElements.forEach((el, index) => {
            setTimeout(() => {
                animateText(el, 'reveal');
            }, index * 100 + 1200);
        });
    }

    // Animate certifications
    function animateCertifications() {
        const certItems = document.querySelectorAll('.certification-ul li');
        certItems.forEach((item, index) => {
            setTimeout(() => {
                animateText(item, 'reveal');
            }, index * 150 + 800);
        });
    }

    // Animate contact form
    function animateContactForm() {
        const formInputs = document.querySelectorAll('form input, form textarea');
        const formButton = document.querySelector('form button');

        formInputs.forEach((input, index) => {
            setTimeout(() => {
                animateText(input, 'slide');
            }, index * 100 + 600);
        });

        setTimeout(() => {
            animateText(formButton, 'reveal');
        }, 1200);
    }

    // Intersection Observer for triggering animations
    const observerOptions = {
        threshold: 0.2,
        rootMargin: '0px 0px -100px 0px'
    };

    const sectionObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const section = entry.target;
                
                // Trigger different animations based on section
                if (section.classList.contains('about-section')) {
                    animateAboutText();
                } else if (section.classList.contains('skills-section')) {
                    animateSkillsSection();
                } else if (section.classList.contains('experience-section') || section.classList.contains('projects-section')) {
                    animateExperienceAndProjects();
                } else if (section.classList.contains('certifications-section')) {
                    animateCertifications();
                } else if (section.classList.contains('contact-section')) {
                    animateContactForm();
                }
                
                // Unobserve after animation is triggered
                sectionObserver.unobserve(section);
            }
        });
    }, observerOptions);

    // Observe all sections
    const sections = document.querySelectorAll('.about-section, .skills-section, .experience-section, .projects-section, .contact-section, .certifications-section');
    sections.forEach(section => {
        sectionObserver.observe(section);
    });

    // Enhanced scroll to top functionality
    const scrollToTopBtn = document.getElementById('scroll-to-top');
    
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            scrollToTopBtn.classList.add('show');
        } else {
            scrollToTopBtn.classList.remove('show');
        }
    });

    scrollToTopBtn.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // Theme toggle functionality
    const themeToggleBtn = document.getElementById('theme-toggle');
    const body = document.body;

    themeToggleBtn.addEventListener('click', function() {
        body.classList.toggle('dark-mode');
        
        // Save theme preference
        const isDarkMode = body.classList.contains('dark-mode');
        localStorage.setItem('darkMode', isDarkMode);
    });

    // Load saved theme preference
    const savedDarkMode = localStorage.getItem('darkMode');
    if (savedDarkMode === 'true') {
        body.classList.add('dark-mode');
    }

    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('nav a[href^="#"]');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Contact form handling
    const contactForm = document.getElementById('contact-form');
    const formMessage = document.getElementById('form-message');

    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(this);
            const name = formData.get('name');
            const email = formData.get('email');
            const phone = formData.get('phone');
            const message = formData.get('message');

            // Simple validation
            if (!name || !email || !phone || !message) {
                formMessage.textContent = 'Please fill in all fields.';
                formMessage.style.color = '#ff6a3d';
                return;
            }

            // Simulate form submission
            formMessage.textContent = 'Thank you for your message! I will get back to you soon.';
            formMessage.style.color = '#00d4ff';
            
            // Reset form
            this.reset();
            
            // Clear message after 5 seconds
            setTimeout(() => {
                formMessage.textContent = '';
            }, 5000);
        });
    }

    // Add hover effects to profile photo
    const profilePhoto = document.querySelector('.profile-circle');
    if (profilePhoto) {
        profilePhoto.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.05)';
            this.style.boxShadow = '0 12px 40px rgba(0, 0, 0, 0.4)';
        });

        profilePhoto.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
            this.style.boxShadow = '0 8px 32px rgba(0, 0, 0, 0.3)';
        });
    }

    // Initialize animations
    setTimeout(() => {
        animateSectionHeadings();
    }, 1000);
});

// Only one project box expands at a time on desktop
// function setupProjectBoxDesktopExclusiveExpand() {
//   if (window.innerWidth >= 1025) {
//     const boxes = document.querySelectorAll('.project-box');
//     boxes.forEach(box => {
//       box.addEventListener('mouseenter', function() {
//         boxes.forEach(b => b.classList.remove('active'));
//         this.classList.add('active');
//       });
//       box.addEventListener('mouseleave', function() {
//         this.classList.remove('active');
//       });
//     });
//   }
// }

// window.addEventListener('DOMContentLoaded', setupProjectBoxDesktopExclusiveExpand);
// window.addEventListener('resize', setupProjectBoxDesktopExclusiveExpand); 
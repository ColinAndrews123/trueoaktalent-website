// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
  
  // Scroll animations
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => { 
      if (entry.isIntersecting) { 
        entry.target.classList.add('visible'); 
      } 
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.reveal, .problem-card, .candidate-card, .step, .role-card, .why-item, .faq-item').forEach(el => { 
    observer.observe(el); 
  });

  // FAQ Accordion functionality
  document.querySelectorAll('.faq-q').forEach(question => {
    question.addEventListener('click', function() {
      const faqItem = this.parentElement;
      const answer = faqItem.querySelector('.faq-a');
      const isOpen = faqItem.classList.contains('open');
      
      // Close all other FAQs
      document.querySelectorAll('.faq-item').forEach(item => {
        item.classList.remove('open');
        item.querySelector('.faq-a').style.maxHeight = null;
      });
      
      // Open the clicked one if it wasn't already open
      if (!isOpen) {
        faqItem.classList.add('open');
        answer.style.maxHeight = answer.scrollHeight + 'px';
      }
    });
  });

  // Mobile Menu Toggle
  const hamburger = document.querySelector('.nav-hamburger');
  const navLinks = document.querySelector('.nav-links');

  if (hamburger && navLinks) {
    hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('active');
      navLinks.classList.toggle('active');
    });

    // Close the menu when a link is clicked
    const links = navLinks.querySelectorAll('a');
    links.forEach(link => {
      link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navLinks.classList.remove('active');
      });
    });
  } else {
  }
});

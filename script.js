document.addEventListener('DOMContentLoaded', function() {
  // Mobile menu toggle
  const menuToggle = document.getElementById('menu-toggle');
  const mobileMenu = document.getElementById('mobile-menu');

  if (menuToggle && mobileMenu) {
    menuToggle.addEventListener('click', function() {
      mobileMenu.classList.toggle('hidden');
      console.log('Mobile menu toggled');
    });
  }

  // Testimonials carousel for mobile
  function initCarousel() {
    console.log("Initializing carousel...");

    const carouselInner = document.getElementById('carousel-inner');
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');
    const dots = document.querySelectorAll('.carousel-dot');
    const slides = document.querySelectorAll('.testimonial-slide');

    if (!carouselInner || !prevBtn || !nextBtn || dots.length === 0 || slides.length === 0) {
      console.error("Carousel elements not found:", {
        carouselInner: !!carouselInner,
        prevBtn: !!prevBtn,
        nextBtn: !!nextBtn,
        dots: dots.length,
        slides: slides.length
      });
      return;
    }

    console.log("Carousel elements found, setting up...");

    let currentSlide = 0;
    const slideCount = slides.length;

    // Function to update carousel position
    function updateCarousel() {
      // Each slide should move exactly 100% of the container width
      const translateValue = -(currentSlide * 100) + '%';
      console.log(`Moving to slide ${currentSlide}, translateX(${translateValue})`);

      carouselInner.style.transform = `translateX(${translateValue})`;

      // Update dots
      dots.forEach((dot, index) => {
        if (index === currentSlide) {
          dot.classList.add('opacity-100');
          dot.classList.remove('opacity-50');
        } else {
          dot.classList.add('opacity-50');
          dot.classList.remove('opacity-100');
        }
      });
    }

    // Event listeners for next and previous buttons
    nextBtn.addEventListener('click', function(e) {
      e.preventDefault();
      currentSlide = (currentSlide + 1) % slideCount;
      updateCarousel();
      console.log("Next button clicked, now at slide", currentSlide);
    });

    prevBtn.addEventListener('click', function(e) {
      e.preventDefault();
      currentSlide = (currentSlide - 1 + slideCount) % slideCount;
      updateCarousel();
      console.log("Previous button clicked, now at slide", currentSlide);
    });

    // Click on dots to navigate to specific slide
    dots.forEach((dot, index) => {
      dot.addEventListener('click', function(e) {
        e.preventDefault();
        currentSlide = parseInt(dot.getAttribute('data-index') || index);
        updateCarousel();
        console.log("Dot clicked, now at slide", currentSlide);
      });
    });

    // Initialize carousel
    updateCarousel();

    // Auto-advance the carousel every 5 seconds
    let autoplayInterval = setInterval(function() {
      currentSlide = (currentSlide + 1) % slideCount;
      updateCarousel();
    }, 5000);

    // Pause autoplay when user interacts with carousel
    const carouselContainer = carouselInner.parentElement;
    carouselContainer.addEventListener('mouseenter', () => {
      clearInterval(autoplayInterval);
    });

    carouselContainer.addEventListener('mouseleave', () => {
      autoplayInterval = setInterval(function() {
        currentSlide = (currentSlide + 1) % slideCount;
        updateCarousel();
      }, 5000);
    });

    console.log("Carousel initialization complete");
  }

  // Initialize carousel
  initCarousel();

  // About Text Click - Scroll to section
  const aboutText = document.getElementById("aboutText");
  const mobileAboutText = document.getElementById("mobileAboutText");

  function scrollToAbout() {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  }

  if (aboutText) {
    aboutText.addEventListener("click", function(e) {
      e.preventDefault();
      scrollToAbout();
    });
  }

  if (mobileAboutText) {
    mobileAboutText.addEventListener("click", function(e) {
      e.preventDefault();
      scrollToAbout();
      // Close mobile menu after clicking
      if (mobileMenu) {
        mobileMenu.classList.add('hidden');
      }
    });
  }

  // Update cart count in the navigation
  updateCartCount();
});

// Function to update cart count in the navigation
function updateCartCount() {
  const cart = JSON.parse(localStorage.getItem('cart') || '[]');
  const count = cart.length;

  // Create or update cart count badge for desktop
  const cartLink = document.getElementById('cartText');
  if (cartLink) {
    let badge = cartLink.querySelector('.cart-count');
    if (!badge) {
      badge = document.createElement('span');
      badge.className = 'cart-count absolute -top-2 -right-2 bg-[#870000] text-white text-xs rounded-full w-5 h-5 flex items-center justify-center';
      cartLink.style.position = 'relative';
      cartLink.appendChild(badge);
    }

    if (count > 0) {
      badge.textContent = count;
      badge.classList.remove('hidden');
    } else {
      badge.classList.add('hidden');
    }
  }

  // Create or update cart count badge for mobile
  const mobileCartLink = document.getElementById('mobileCartText');
  if (mobileCartLink) {
    let mobileBadge = mobileCartLink.querySelector('.cart-count');
    if (!mobileBadge) {
      mobileBadge = document.createElement('span');
      mobileBadge.className = 'cart-count absolute -top-2 -right-2 bg-[#870000] text-white text-xs rounded-full w-5 h-5 flex items-center justify-center';
      mobileCartLink.style.position = 'relative';
      mobileCartLink.appendChild(mobileBadge);
    }

    if (count > 0) {
      mobileBadge.textContent = count;
      mobileBadge.classList.remove('hidden');
    } else {
      mobileBadge.classList.add('hidden');
    }
  }
}
// Wait for the window to load and then handle the preloader
window.addEventListener("load", () => {
  setTimeout(() => {
    const preloader = document.querySelector(".preloader");
    const content = document.querySelector(".content");

    // Fade out the preloader and fade in the content
    preloader.style.opacity = "0";
    content.classList.add("show");

    // Hide the preloader completely after fade out
    setTimeout(() => {
      preloader.style.display = "none";
    }, 1000); // Match this timeout with the fade-out duration
  }, 4000); // Delay of 4000 milliseconds (4 seconds)
});

// Hamburger menu functionality
const hamburgerBtn = document.getElementById("hamburger-btn");
const mobileMenu = document.getElementById("mobile-menu");
const closeBtn = document.getElementById("close-btn");
const mobileCta = document.getElementById("mobileCta");

// Function to close the mobile menu
function closeMenu() {
  mobileMenu.style.display = "none";
  hamburgerBtn.style.display = "block"; // Show hamburger icon when menu is closed
  closeBtn.style.display = "none"; // Hide close button when menu is closed
}

// Function to open/close the mobile menu
function openMenu() {
  mobileMenu.style.display =
    mobileMenu.style.display === "block" ? "none" : "block";
  hamburgerBtn.style.display = "none"; // Hide hamburger icon when menu is open
  closeBtn.style.display = "block"; // Show close button when menu is open
}

// Event listeners for menu buttons
document.querySelectorAll(".closeMenu").forEach((element) => {
  element.addEventListener("click", closeMenu);
});
hamburgerBtn.addEventListener("click", openMenu);
closeBtn.addEventListener("click", closeMenu);
mobileCta.addEventListener("click", closeMenu);

// Slick carousel initialization
$(document).ready(function () {
  $(".suno-kahaniyan-originals-parent").slick({
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 4,
    slidesToScroll: 1,
    dots: false,
    nav: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });
});

// Fade-in text animation on scroll
document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll('[id^="section-"]'); // Select sections by id starting with 'section-'

  // Function to wrap each word in a span
  const wrapWordsInSpans = (element) => {
    const words = element.innerText.split(" ");
    element.innerHTML = words.map((word) => `<span>${word}</span>`).join(" ");
  };

  // Initialize fade-in-text elements
  const initializeFadeInTexts = (section) => {
    const fadeInElements = section.querySelectorAll(".fade-in-text");
    fadeInElements.forEach((element) => wrapWordsInSpans(element));
  };

  // Animate words in each fade-in-text element
  const animateWords = (spans, initialDelay = 0, wordDelay = 150) => {
    spans.forEach((span, index) => {
      setTimeout(() => {
        span.classList.add("word-visible");
      }, initialDelay + index * wordDelay);
    });
  };

  // Animate all fade-in-text elements within a section
  const animateSection = (section) => {
    const fadeInElements = section.querySelectorAll(".fade-in-text");
    let globalDelay = 0; // Global delay for the entire section

    fadeInElements.forEach((fadeInElement) => {
      const spans = fadeInElement.querySelectorAll("span");
      const totalAnimationTime = spans.length * 150; // Calculate total time for current element's words

      // Animate current fade-in-text's words with globalDelay
      animateWords(spans, globalDelay);

      // Increase globalDelay for the next fade-in-text element
      globalDelay += totalAnimationTime + 500; // Add 500ms gap between fade-in-text elements
    });
  };

  // Intersection Observer options
  const sectionObserverOptions = {
    threshold: 0.2, // 20% visibility to start the animation
  };

  const sectionObserverCallback = (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const section = entry.target;

        // Initialize and animate the section's fade-in-text elements
        initializeFadeInTexts(section);
        animateSection(section);

        // Stop observing once the section has been animated
        observer.unobserve(section);
      }
    });
  };

  const sectionObserver = new IntersectionObserver(
    sectionObserverCallback,
    sectionObserverOptions
  );

  // Observe each section by its id
  sections.forEach((section) => {
    sectionObserver.observe(section); // Start observing each section
  });
});

// Cryptoknights parent content update
const data = {
  1: { imgSrc: "./public/Cryptoknights.jpeg", text: "CryptoKnights" },
  2: { imgSrc: "./public/deblock.jpeg", text: "DeBlock" },
  3: { imgSrc: "./public/group.svg", text: "RampX" },
  4: { imgSrc: "./public/Enjinstarter.jpeg", text: "Enjinstarter" },
};

document.querySelectorAll(".cryptoknights-parent h1").forEach((h1) => {
  h1.addEventListener("click", function () {
    // Remove 'active' class from all h1 elements
    document
      .querySelectorAll(".cryptoknights-parent h1")
      .forEach((el) => el.classList.remove("active"));

    // Add 'active' class to the clicked h1 element
    this.classList.add("active");

    // Get the id from the clicked h1 element
    const id = this.getAttribute("data-id");
    const itemData = data[id];

    // Update the img src and text content
    document
      .querySelector(".ellipse-parent .group-icon")
      .setAttribute("src", itemData.imgSrc);
    document.querySelector(".ellipse-parent .rampx").textContent =
      itemData.text;
  });
});

// Set default selection
const defaultId = "3";
const defaultH1 = document.querySelector(
  `.cryptoknights-parent h1[data-id="${defaultId}"]`
);
if (defaultH1) {
  defaultH1.classList.add("active");
}

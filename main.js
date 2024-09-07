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
    }, 3000); // Match this timeout with the fade-out duration
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

// Displacement image for the filter
var displacementImage = "https://picsum.photos/200/300?grayscale";
console.log("Displacement image source:", displacementImage);

// Apply the displacement filter to each image with class 'distortion'
function applyDisplacementFilter() {
    console.log("Applying displacement filter to images with class 'distortion'...");
    var distortionImages = document.querySelectorAll('.distortion');
    console.log("Found images:", distortionImages);

    distortionImages.forEach(function(image) {
        // Ensure the image is fully loaded before processing
        if (image.complete) {
            initializeCanvas(image);
        } else {
            image.addEventListener('load', function() {
                initializeCanvas(image);
            });
        }
    });
}

function initializeCanvas(image) {
    console.log("Processing image:", image.src);

    // Create a new PixiJS renderer and stage for each image
    var renderer = new PIXI.Renderer({
        width: image.offsetWidth,
        height: image.offsetHeight,
        transparent: true,
        view: document.createElement('canvas') // Create a new canvas element
    });

    // Position the canvas over the image
    var rect = image.getBoundingClientRect();
    renderer.view.style.position = 'absolute';
    renderer.view.style.top = `${rect.top + window.scrollY}px`; // Adjust for page scroll
    renderer.view.style.left = `${rect.left + window.scrollX}px`; // Adjust for page scroll
    renderer.view.style.width = `${image.offsetWidth}px`;
    renderer.view.style.height = `${image.offsetHeight}px`;
    document.body.appendChild(renderer.view);

    var stage = new PIXI.Container();

    // Create and configure the displacement sprite and filter
    var displacementSprite = PIXI.Sprite.from(displacementImage);
    var displacementFilter = new PIXI.filters.DisplacementFilter(displacementSprite);
    displacementSprite.texture.baseTexture.wrapMode = PIXI.WRAP_MODES.REPEAT;
    displacementSprite.scale.set(30); // Adjust scale for desired intensity
    stage.addChild(displacementSprite);

    // Create and add the Pixi sprite for the image
    var texture = PIXI.Texture.from(image.src);
    var sprite = new PIXI.Sprite(texture);
    sprite.anchor.set(0.5);
    sprite.width = image.offsetWidth;
    sprite.height = image.offsetHeight;
    sprite.x = renderer.width / 2;
    sprite.y = renderer.height / 2;
    sprite.filters = [displacementFilter];
    stage.addChild(sprite);

    console.log("Added sprite with displacement filter:", sprite);

    // Continuous displacement effect animation
    var ticker = new PIXI.Ticker();
    ticker.add(function(delta) {
        // Increase the movement speed for more intense distortion
        displacementSprite.x += 10 * delta;  // Horizontal movement
        displacementSprite.y += 3 * delta;   // Vertical movement

        // Animate the displacement filter scale for continuous effect
        var scale = Math.sin(Date.now() / 500) * 30 + 30; // Sine wave effect for scale
        displacementFilter.scale.set(scale, scale);

        // Log the current displacement scale
        console.log("Displacement filter scale:", displacementFilter.scale.x, displacementFilter.scale.y);

        renderer.render(stage);
        requestAnimationFrame(animate);

    });
    animate();

    // ticker.start();
    console.log("Ticker started for continuous animation");

    // Resize event to adjust renderer size
    window.addEventListener('resize', function() {
        // Update the canvas size and position to match the image's size and position
        var rect = image.getBoundingClientRect();
        renderer.resize(image.offsetWidth, image.offsetHeight);
        renderer.view.style.width = `${image.offsetWidth}px`;
        renderer.view.style.height = `${image.offsetHeight}px`;
        renderer.view.style.top = `${rect.top + window.scrollY}px`; // Adjust for page scroll
        renderer.view.style.left = `${rect.left + window.scrollX}px`; // Adjust for page scroll
        console.log("Window resized. Renderer size adjusted to:", image.offsetWidth, image.offsetHeight);
    });
}

// Call the function to apply the filter
applyDisplacementFilter();

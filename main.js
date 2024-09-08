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
const header = document.getElementsByClassName("logo")[0];


// Function to close the mobile menu
function closeMenu() {
  mobileMenu.style.display = "none";
  hamburgerBtn.style.display = "block"; // Show hamburger icon when menu is closed
  closeBtn.style.display = "none"; // Hide close button when menu is closed
  header.style.borderBottomRightRadius = 'var(--br-5xl)';
    header.style.borderBottomLeftRadius = 'var(--br-5xl)';
}

// Function to open/close the mobile menu
function openMenu() {
    header.style.borderBottomRightRadius = 0;
    header.style.borderBottomLeftRadius = 0;
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

document.addEventListener("DOMContentLoaded", () => {
    const fadeInTextElements = document.querySelectorAll('.fade-in-text');
    const triggerPercentage = 0.5; // Percentage of the element in view to trigger animation (0.5 = 50%)
    const wordAnimationDelay = 100; // Time delay between words (300ms here)

    // Split text into individual words, wrapping each word in a span
    fadeInTextElements.forEach(element => {
        const textContent = element.innerText;
        const words = textContent.split(" ");
        
        // Clear the original text content
        element.innerHTML = '';

        // Wrap each word in a span and append it back to the paragraph
        words.forEach((word, index) => {
            const wordSpan = document.createElement('span');
            wordSpan.textContent = word + ' ';
            element.appendChild(wordSpan);
        });
    });

    // Create a new IntersectionObserver to track when elements come into view
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: triggerPercentage // Trigger when 50% of the element is in view
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const element = entry.target;
                const wordSpans = element.querySelectorAll('span');

                // Animate words one by one
                wordSpans.forEach((wordSpan, index) => {
                    setTimeout(() => {
                        wordSpan.classList.add('fade-in-word');
                    }, index * wordAnimationDelay); // Apply delay for each word
                });

                // Stop observing the element once the animation has started
                observer.unobserve(element);
            }
        });
    }, observerOptions);

    // Observe all the fade-in-text elements
    fadeInTextElements.forEach(element => {
        observer.observe(element);
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
const defaultId = "1";
const defaultH1 = document.querySelector(
  `.cryptoknights-parent h1[data-id="${defaultId}"]`
);
if (defaultH1) {
  defaultH1.classList.add("active");
}

 // Function to update content based on id
 function updateContent(id) {
    // Remove 'active' class from all h1 elements
    document.querySelectorAll('.cryptoknights-parent h1').forEach(el => el.classList.remove('active'));

    // Add 'active' class to the current h1 element
    const selectedH1 = document.querySelector(`.cryptoknights-parent h1[data-id="${id}"]`);
    if (selectedH1) {
        selectedH1.classList.add('active');
    }

    // Update the img src and text content
    const itemData = data[id];
    document.querySelector('.ellipse-parent .group-icon').setAttribute('src', itemData.imgSrc);
    document.querySelector('.ellipse-parent .rampx').textContent = itemData.text;
}

// Set default selection
let currentId = 1; // Start with id 1 by default
updateContent(currentId);

// Automatically change every 2.5 seconds
setInterval(() => {
    currentId++;
    if (currentId > 4) currentId = 1; // Loop back to 1 if it exceeds the number of items
    updateContent(currentId);
}, 2500); // Change every 2500 milliseconds (2.5 seconds)

// Allow manual clicks to override the automatic change
document.querySelectorAll('.cryptoknights-parent h1').forEach(h1 => {
    h1.addEventListener('click', function() {
        // Set the current id to the clicked element's id
        currentId = parseInt(this.getAttribute('data-id'), 10);
        updateContent(currentId);
    });
});

// Displacement image for the filter
var displacementImage = "https://picsum.photos/200/300?grayscale";

// Apply the displacement filter to each image with class 'distortion'
function applyDisplacementFilter() {
    var distortionImages = document.querySelectorAll('.distortion');

    var topAdjustment = 0;
    distortionImages.forEach(function(image) {
        if (image.classList.contains('t-16px')) {
            topAdjustment = -16;
        }
        if (image.classList.contains('t-m-p-16px')) {
            if (screen.width < 1450) {
                topAdjustment = 16;
            }
        }

        // Ensure the image is fully loaded before processing
        if (image.complete) {
            initializeCanvas(image, topAdjustment);
        } else {
            image.addEventListener('load', function() {
                initializeCanvas(image, topAdjustment);
            });
        }
    });
}

function initializeCanvas(image, topAdjustment) {
    // Create a container for the image and canvas
    var container = image.parentElement;
    var canvas = document.createElement('canvas');

    // Insert the canvas into the container
    container.appendChild(canvas);

    // Create a new PixiJS renderer and stage for each image
    var renderer = new PIXI.Renderer({
        width: image.offsetWidth,
        height: image.offsetHeight,
        transparent: true,
        view: canvas
    });

    // Adjust the canvas size and position to match the image
    renderer.view.style.position = 'absolute';
    renderer.view.style.top = 0;
    renderer.view.style.left = 0;
    renderer.view.style.width = '100%';
    renderer.view.style.height = '100%';

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

    // Continuous displacement effect animation
    var ticker = new PIXI.Ticker();
    ticker.add(function(delta) {
        displacementSprite.x += 10 * delta;  // Horizontal movement
        displacementSprite.y += 3 * delta;   // Vertical movement

        // Animate the displacement filter scale for continuous effect
        var scale = Math.sin(Date.now() / 500) * 30 + 30;
        displacementFilter.scale.set(scale, scale);

        renderer.render(stage);
    });
    ticker.start();

    // Resize event to adjust renderer size
    window.addEventListener('resize', function() {
        renderer.resize(image.offsetWidth, image.offsetHeight);
        sprite.width = image.offsetWidth;
        sprite.height = image.offsetHeight;
    });
}

// Call the function to apply the filter
applyDisplacementFilter();


// // Displacement image for the filter
// var displacementImage = "https://picsum.photos/200/300?grayscale";
// console.log("Displacement image source:", displacementImage);

// // Apply the displacement filter to each image with class 'distortion'
// function applyDisplacementFilter() {
//     // console.log("Applying displacement filter to images with class 'distortion'...");
//     var distortionImages = document.querySelectorAll('.distortion');
//     // console.log("Found images:", distortionImages);

//     var topAdjustment = 0;
//     distortionImages.forEach(function(image) {
//         if (image.classList.contains('t-16px')) {
//             topAdjustment = -16;
//         }
//         if (image.classList.contains('t-m-p-16px')) {
//             console.log(screen.width)
//             if(screen.width<1450){
//                 topAdjustment = 16;
//                 console.log(image)
//         console.log(topAdjustment)
//             }
//         }
        
//         // Ensure the image is fully loaded before processing
//         if (image.complete) {
//             initializeCanvas(image, topAdjustment);
//         } else {
//             image.addEventListener('load', function() {
//                 initializeCanvas(image, topAdjustment);
//             });
//         }
//     });
// }

// function initializeCanvas(image, topAdjustment) {
//     // console.log("Processing image:", image.src);

//     // Create a new PixiJS renderer and stage for each image
//     var renderer = new PIXI.Renderer({
//         width: image.offsetWidth,
//         height: image.offsetHeight,
//         transparent: true,
//         view: document.createElement('canvas') // Create a new canvas element
//     });

//     // Position the canvas over the image
//     var rect = image.getBoundingClientRect();
//     renderer.view.style.position = 'absolute';
//     renderer.view.style.top = `${rect.top + window.scrollY + topAdjustment}px`; // Adjust for page scroll
//     renderer.view.style.left = `${rect.left + window.scrollX}px`; // Adjust for page scroll
//     renderer.view.style.width = `${image.offsetWidth}px`;
//     renderer.view.style.height = `${image.offsetHeight}px`;
//     document.body.appendChild(renderer.view);

//     var stage = new PIXI.Container();

//     // Create and configure the displacement sprite and filter
//     var displacementSprite = PIXI.Sprite.from(displacementImage);
//     var displacementFilter = new PIXI.filters.DisplacementFilter(displacementSprite);
//     displacementSprite.texture.baseTexture.wrapMode = PIXI.WRAP_MODES.REPEAT;
//     displacementSprite.scale.set(30); // Adjust scale for desired intensity
//     stage.addChild(displacementSprite);

//     // Create and add the Pixi sprite for the image
//     var texture = PIXI.Texture.from(image.src);
//     var sprite = new PIXI.Sprite(texture);
//     sprite.anchor.set(0.5);
//     sprite.width = image.offsetWidth;
//     sprite.height = image.offsetHeight;
//     sprite.x = renderer.width / 2;
//     sprite.y = renderer.height / 2;
//     sprite.filters = [displacementFilter];
//     stage.addChild(sprite);

//     // console.log("Added sprite with displacement filter:", sprite);

//     // Continuous displacement effect animation
//     var ticker = new PIXI.Ticker();
//     ticker.add(function(delta) {
//         // Increase the movement speed for more intense distortion
//         displacementSprite.x += 10 * delta;  // Horizontal movement
//         displacementSprite.y += 3 * delta;   // Vertical movement

//         // Animate the displacement filter scale for continuous effect
//         var scale = Math.sin(Date.now() / 500) * 30 + 30; // Sine wave effect for scale
//         displacementFilter.scale.set(scale, scale);

//         // Log the current displacement scale
//         // console.log("Displacement filter scale:", displacementFilter.scale.x, displacementFilter.scale.y);

//         renderer.render(stage);
//     });
//     ticker.start();
//     // console.log("Ticker started for continuous animation");

//     // Resize event to adjust renderer size
//     window.addEventListener('resize', function() {
//         // Update the canvas size and position to match the image's size and position
//         // var rect = image.getBoundingClientRect();
//         // renderer.resize(image.offsetWidth, image.offsetHeight);
//         // renderer.view.style.width = `${image.offsetWidth}px`;
//         // renderer.view.style.height = `${image.offsetHeight}px`;
//         // renderer.view.style.top = `${rect.top + window.scrollY}px`; // Adjust for page scroll
//         // renderer.view.style.left = `${rect.left + window.scrollX}px`; // Adjust for page scroll
//         // console.log("Window resized. Renderer size adjusted to:", image.offsetWidth, image.offsetHeight);
//     });
// }

// // Call the function to apply the filter
// applyDisplacementFilter();

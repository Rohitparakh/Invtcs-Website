// Wait for the window to load and then handle the preloader
window.addEventListener("load", () => {
  setTimeout(() => {
    const preloader = document.querySelector(".preloader");
    const content = document.querySelector(".content");
    const body = document.querySelector("body");

    // Fade out the preloader and fade in the content
    body.style.overflow = "auto";
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

// document.addEventListener("DOMContentLoaded", () => {
//     const fadeInTextElements = document.querySelectorAll('.fade-in-text');
//     const triggerPercentage = 0.5; // Percentage of the element in view to trigger animation (0.5 = 50%)
//     const wordAnimationDelay = 100; // Time delay between words (300ms here)

//     // Split text into individual words, wrapping each word in a span
//     fadeInTextElements.forEach(element => {
//         const textContent = element.innerText;
//         const words = textContent.split(" ");
        
//         // Clear the original text content
//         element.innerHTML = '';

//         // Wrap each word in a span and append it back to the paragraph
//         words.forEach((word, index) => {
//             const wordSpan = document.createElement('span');
//             wordSpan.textContent = word + ' ';
//             element.appendChild(wordSpan);
//         });
//     });

//     // Create a new IntersectionObserver to track when elements come into view
//     const observerOptions = {
//         root: null,
//         rootMargin: '0px',
//         threshold: triggerPercentage // Trigger when 50% of the element is in view
//     };

//     const observer = new IntersectionObserver((entries, observer) => {
//         entries.forEach(entry => {
//             if (entry.isIntersecting) {
//                 const element = entry.target;
//                 const wordSpans = element.querySelectorAll('span');

//                 // Animate words one by one
//                 wordSpans.forEach((wordSpan, index) => {
//                     setTimeout(() => {
//                         wordSpan.classList.add('fade-in-word');
//                     }, index * wordAnimationDelay); // Apply delay for each word
//                 });

//                 // Stop observing the element once the animation has started
//                 observer.unobserve(element);
//             }
//         });
//     }, observerOptions);

//     // Observe all the fade-in-text elements
//     fadeInTextElements.forEach(element => {
//         observer.observe(element);
//     });
// });

// // Configuration variables
// const ANIMATION_SPEED = 0.5; // Speed in seconds per line
// const PERCENT_IN_VIEW = 0.5; // Percentage of the element that must be in view to start animation

// // Function to split text into lines based on natural word wrapping
// function splitTextIntoLines(element) {
//     console.log("Starting to split text into lines for element:", element);

//     const lines = [];
//     const words = element.textContent.split(' ');

//     // Create a clone of the element to measure line breaks
//     const clone = element.cloneNode(true);
//     clone.style.visibility = 'hidden';
//     clone.style.position = 'absolute';
//     clone.style.whiteSpace = 'normal';
//     clone.style.width = `${element.clientWidth}px`;
//     document.body.appendChild(clone);

//     // Reset the text content in the clone and start adding words one by one
//     clone.textContent = '';

//     let currentLine = '';

//     words.forEach((word, index) => {
//         clone.textContent = currentLine ? currentLine + ' ' + word : word;
        
//         // If the text in the clone exceeds the width, push the previous line
//         if (clone.scrollHeight > element.scrollHeight) {
//             lines.push(currentLine); // Store the current line
//             currentLine = word; // Start a new line
//         } else {
//             currentLine = clone.textContent; // Continue adding to the current line
//         }
//     });

//     // Add the last line
//     if (currentLine) {
//         lines.push(currentLine);
//     }

//     document.body.removeChild(clone); // Remove the clone after processing
//     console.log("Final lines array:", lines);
//     return lines;
// }

// // Function to apply fade-in animation line by line
// function applyFadeInAnimation(lines, container) {
//     container.innerHTML = ''; // Clear original text
//     console.log("Cleared original container content.");

//     lines.forEach((line, index) => {
//         const lineDiv = document.createElement('div');
//         lineDiv.textContent = line;
//         lineDiv.classList.add('fade-in-line');
//         lineDiv.style.opacity = '0'; // Initially invisible
//         lineDiv.style.transition = `opacity ${ANIMATION_SPEED}s ease ${index * ANIMATION_SPEED}s`; // Delay each line fade-in

//         console.log(`Adding line [${index}] with delay ${index * ANIMATION_SPEED}s:`, line);
//         container.appendChild(lineDiv);
//     });

//     // Trigger the animation when the element is in view
//     const observer = new IntersectionObserver(entries => {
//         entries.forEach(entry => {
//             console.log("IntersectionObserver triggered. Entry:", entry);
//             if (entry.isIntersecting) {
//                 const ratio = entry.intersectionRatio;
//                 console.log("Intersection ratio:", ratio);

//                 if (ratio >= PERCENT_IN_VIEW) {
//                     console.log("Element is sufficiently in view, starting animation...");
//                     const lineElements = entry.target.querySelectorAll('.fade-in-line');
//                     lineElements.forEach((line, lineIndex) => {
//                         setTimeout(() => {
//                             console.log(`Fading in line [${lineIndex}]:`, line.textContent);
//                             line.style.opacity = '1'; // Make line visible
//                         }, lineIndex * ANIMATION_SPEED * 1000); // Delay each line fade-in
//                     });
//                 }
//             }
//         });
//     }, { threshold: [PERCENT_IN_VIEW] });

//     observer.observe(container);
// }

// // Example usage:
// document.addEventListener("DOMContentLoaded", () => {
//     const paragraph = document.querySelector('.fade-in-text');
//     console.log("Found paragraph element:", paragraph);

//     if (paragraph) {
//         const lines = splitTextIntoLines(paragraph);
//         console.log("Lines after splitting:", lines);

//         applyFadeInAnimation(lines, paragraph);
//     } else {
//         console.log("No paragraph element found.");
//     }
// });


// Configuration variables
const ANIMATION_SPEED = 0.5; // Speed in seconds per line
const PERCENT_IN_VIEW = 0.5; // Percentage of the element that must be in view to start animation

// Function to split text into lines based on natural word wrapping
function splitTextIntoLines(element) {
    console.log("Starting to split text into lines for element:", element);

    const lines = [];
    const words = element.textContent.split(' ');

    // Create a clone of the element to measure line breaks
    const clone = element.cloneNode(true);
    clone.style.visibility = 'hidden';
    clone.style.position = 'absolute';
    clone.style.whiteSpace = 'normal';
    clone.style.width = `${element.clientWidth}px`;
    document.body.appendChild(clone);

    // Reset the text content in the clone and start adding words one by one
    clone.textContent = '';

    let currentLine = '';

    words.forEach((word, index) => {
        clone.textContent = currentLine ? currentLine + ' ' + word : word;
        
        // If the text in the clone exceeds the width, push the previous line
        if (clone.scrollHeight > element.scrollHeight) {
            lines.push(currentLine); // Store the current line
            currentLine = word; // Start a new line
        } else {
            currentLine = clone.textContent; // Continue adding to the current line
        }
    });

    // Add the last line
    if (currentLine) {
        lines.push(currentLine);
    }

    document.body.removeChild(clone); // Remove the clone after processing
    console.log("Final lines array:", lines);
    return lines;
}

// Function to apply fade-in animation line by line
function applyFadeInAnimation(lines, container) {
    container.innerHTML = ''; // Clear original text
    console.log("Cleared original container content.");

    lines.forEach((line, index) => {
        const lineDiv = document.createElement('div');
        lineDiv.textContent = line;
        lineDiv.classList.add('fade-in-line');
        lineDiv.style.opacity = '0'; // Initially invisible
        lineDiv.style.transition = `opacity ${ANIMATION_SPEED}s ease ${index * ANIMATION_SPEED}s`; // Delay each line fade-in

        console.log(`Adding line [${index}] with delay ${index * ANIMATION_SPEED}s:`, line);
        container.appendChild(lineDiv);
    });

    // Trigger the animation when the element is in view
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            console.log("IntersectionObserver triggered. Entry:", entry);
            if (entry.isIntersecting) {
                const ratio = entry.intersectionRatio;
                console.log("Intersection ratio:", ratio);

                if (ratio >= PERCENT_IN_VIEW) {
                    console.log("Element is sufficiently in view, starting animation...");
                    const lineElements = entry.target.querySelectorAll('.fade-in-line');
                    lineElements.forEach((line, lineIndex) => {
                        setTimeout(() => {
                            console.log(`Fading in line [${lineIndex}]:`, line.textContent);
                            line.style.opacity = '1'; // Make line visible
                        }, lineIndex * ANIMATION_SPEED * 1000); // Delay each line fade-in
                    });
                }
            }
        });
    }, { threshold: [PERCENT_IN_VIEW] });

    observer.observe(container);
}

// Example usage
document.addEventListener("DOMContentLoaded", () => {
    const paragraph = document.querySelector('.fade-in-text');
    console.log("Found paragraph element:", paragraph);

    if (paragraph) {
        const lines = splitTextIntoLines(paragraph);
        console.log("Lines after splitting:", lines);

        applyFadeInAnimation(lines, paragraph);
    } else {
        console.log("No paragraph element found.");
    }
});















// Cryptoknights parent content update
const data = {
  1: { imgSrc: "./public/Cryptoknights.jpeg", text: "CryptoKnights" },
  2: { imgSrc: "./public/deblock.jpeg", text: "DeBlock" },
  3: { imgSrc: "./public/group.svg", text: "RampX" },
  // 4: { imgSrc: "./public/Enjinstarter.jpeg", text: "Enjinstarter" },
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
    // var distortionImages = document.querySelectorAll('.distortion, .hover-distortion');

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

// // Apply the displacement filter to each image with class 'distortion'
// function applyDisplacementFilter() {
//     var distortionImages = document.querySelectorAll('.distortion, .hover-distortion');

//     distortionImages.forEach(function(image) {
//         // Determine if we need to apply hover-specific logic
//         if (image.classList.contains('hover-distortion')) {
//             // Initialize the hover effect
//             setupHoverEffect(image);
//         } else {
//             // Apply the effect directly
//             initializeCanvas(image, 0);
//         }
//     });
// }

// function initializeCanvas(image, topAdjustment) {
//     // Create a container for the image and canvas
//     var container = image.parentElement;
//     var canvas = document.createElement('canvas');

//     // Insert the canvas into the container
//     container.appendChild(canvas);

//     // Create a new PixiJS renderer and stage for each image
//     var renderer = new PIXI.Renderer({
//         width: image.offsetWidth,
//         height: image.offsetHeight,
//         transparent: true,
//         view: canvas
//     });

//     // Adjust the canvas size and position to match the image
//     renderer.view.style.position = 'absolute';
//     renderer.view.style.top = 0;
//     renderer.view.style.left = 0;
//     renderer.view.style.width = '100%';
//     renderer.view.style.height = '100%';

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

//     // Continuous displacement effect animation
//     var ticker = new PIXI.Ticker();
//     ticker.add(function(delta) {
//         displacementSprite.x += 10 * delta;  // Horizontal movement
//         displacementSprite.y += 3 * delta;   // Vertical movement

//         // Animate the displacement filter scale for continuous effect
//         var scale = Math.sin(Date.now() / 500) * 30 + 30;
//         displacementFilter.scale.set(scale, scale);

//         renderer.render(stage);
//     });
//     ticker.start();

//     // Resize event to adjust renderer size
//     window.addEventListener('resize', function() {
//         renderer.resize(image.offsetWidth, image.offsetHeight);
//         sprite.width = image.offsetWidth;
//         sprite.height = image.offsetHeight;
//     });

//     // Return the ticker for controlling its start/stop
//     return ticker;
// }

// function setupHoverEffect(image) {
//     var ticker;

//     image.addEventListener('mouseenter', function() {
//         // Start the distortion effect on hover
//         if (!ticker) {
//             ticker = initializeCanvas(image, 0);
//         }
//     });

//     image.addEventListener('mouseleave', function() {
//         // Stop the distortion effect when hover ends
//         if (ticker) {
//             ticker.stop();
//             ticker = null;
//         }
//     });
// }

// // Call the function to apply the filter
// applyDisplacementFilter();

  // Wait for the window to load
  window.addEventListener('load', () => {
    setTimeout(() => {
        const preloader = document.querySelector('.preloader');
        const content = document.querySelector('.content');
        
        // Fade out preloader and fade in content
        preloader.style.opacity = '0';
        content.classList.add('show');
        
        // Hide preloader completely after fade out
        setTimeout(() => {
            preloader.style.display = 'none';
        }, 1000); // Match this timeout with the fade-out duration
    }, 4000); // Delay of 4000 milliseconds (4 seconds)
});


const hamburgerBtn = document.getElementById('hamburger-btn');
const mobileMenu = document.getElementById('mobile-menu');
const closeBtn = document.getElementById('close-btn');
const mobileCta = document.getElementById('mobileCta');

// Function to close the menu
function closeMenu() {
    mobileMenu.style.display = 'none';
    hamburgerBtn.style.display = 'block'; // Show hamburger icon when menu is closed
    closeBtn.style.display = 'none'; // Hide close button when menu is closed
  }

  function openMenu(){
    mobileMenu.style.display = mobileMenu.style.display === 'block' ? 'none' : 'block';    
    hamburgerBtn.style.display = 'none'; // Hide hamburger icon when menu is open
    closeBtn.style.display = 'block'; // Show close button when menu is open
  }

  // Close menu when clicking any element with class 'closeMenu'
document.querySelectorAll('.closeMenu').forEach(element => {
    element.addEventListener('click', closeMenu);
  });

hamburgerBtn.addEventListener('click', openMenu);
 
  closeBtn.addEventListener('click', closeMenu);
  mobileCta.addEventListener('click', closeMenu);


$(document).ready(function(){
    $('.suno-kahaniyan-originals-parent').slick({
        infinite: true,
        autoplay: true,
        autoplaySpeed: 2000,
        slidesToShow: 4,
        slidesToScroll: 1,
        dots:false,
        nav:false,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
    });
  });


// document.addEventListener("DOMContentLoaded", () => {
//     const sections = document.querySelectorAll('[id^="section-"]'); // Select sections by id starting with 'section-'

//     // Function to wrap each word in a span
//     const wrapWordsInSpans = (element) => {
//         const words = element.innerText.split(' ');
//         element.innerHTML = words.map(word => `<span>${word}</span>`).join(' ');
//     };

//     // Wrap each word in a span for every fade-in-text element
//     const initializeFadeInTexts = (section) => {
//         const fadeInElements = section.querySelectorAll('.fade-in-text');
//         fadeInElements.forEach(element => wrapWordsInSpans(element));
//     };

//     // Helper function to animate words in each fade-in-text element with a delay
//     const animateWords = (spans, initialDelay = 0, wordDelay = 150) => {
//         spans.forEach((span, index) => {
//             setTimeout(() => {
//                 span.classList.add('word-visible');
//             }, initialDelay + index * wordDelay);
//         });
//     };

//     // Function to animate all fade-in-text elements within a section one by one
//     const animateSection = (section) => {
//         const fadeInElements = section.querySelectorAll('.fade-in-text');
//         let globalDelay = 0; // Global delay for the entire section

//         fadeInElements.forEach(fadeInElement => {
//             const spans = fadeInElement.querySelectorAll('span');
//             const totalAnimationTime = spans.length * 150; // Calculate total time for current element's words

//             // Animate current fade-in-text's words with globalDelay
//             animateWords(spans, globalDelay);

//             // Increase globalDelay for the next fade-in-text element
//             globalDelay += totalAnimationTime + 500; // Add 500ms gap between fade-in-text elements
//         });
//     };

//     // Intersection Observer options
//     const options = {
//         threshold: 0.1 // 10% visibility to start the animation
//     };

//     const callback = (entries, observer) => {
//         entries.forEach(entry => {
//             if (entry.isIntersecting) {
//                 const section = entry.target;

//                 // Initialize all fade-in-text elements inside the section
//                 initializeFadeInTexts(section);

//                 // Start animating the section's fade-in-text elements
//                 animateSection(section);

//                 // Stop observing once the section has been animated
//                 observer.unobserve(section);
//             }
//         });
//     };

//     const observer = new IntersectionObserver(callback, options);

//     // Observe each section by its id (e.g., section-1, section-2)
//     sections.forEach(section => {
//         observer.observe(section); // Start observing each section
//     });
// });

document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll('[id^="section-"]'); // Select sections by id starting with 'section-'

    // Function to wrap each word in a span
    const wrapWordsInSpans = (element) => {
        const words = element.innerText.split(' ');
        element.innerHTML = words.map(word => `<span>${word}</span>`).join(' ');
    };

    // Wrap each word in a span for every fade-in-text element
    const initializeFadeInTexts = (section) => {
        const fadeInElements = section.querySelectorAll('.fade-in-text');
        fadeInElements.forEach(element => wrapWordsInSpans(element));
    };

    // Helper function to animate words in each fade-in-text element with a delay
    const animateWords = (spans, initialDelay = 0, wordDelay = 150) => {
        spans.forEach((span, index) => {
            setTimeout(() => {
                span.classList.add('word-visible');
            }, initialDelay + index * wordDelay);
        });
    };

    // Function to animate all fade-in-text elements within a section one by one
    const animateSection = (section) => {
        const fadeInElements = section.querySelectorAll('.fade-in-text');
        let globalDelay = 0; // Global delay for the entire section

        fadeInElements.forEach(fadeInElement => {
            const spans = fadeInElement.querySelectorAll('span');
            const totalAnimationTime = spans.length * 150; // Calculate total time for current element's words

            // Animate current fade-in-text's words with globalDelay
            animateWords(spans, globalDelay);

            // Increase globalDelay for the next fade-in-text element
            globalDelay += totalAnimationTime + 500; // Add 500ms gap between fade-in-text elements
        });
    };

    // Intersection Observer options
    const sectionObserverOptions = {
        threshold: 0.2 // 10% visibility to start the animation
    };

    const sectionObserverCallback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const section = entry.target;

                // Initialize all fade-in-text elements inside the section
                initializeFadeInTexts(section);

                // Start animating the section's fade-in-text elements
                animateSection(section);

                // Stop observing once the section has been animated
                observer.unobserve(section);
            }
        });
    };

    const sectionObserver = new IntersectionObserver(sectionObserverCallback, sectionObserverOptions);

    // Observe each section by its id (e.g., section-1, section-2)
    sections.forEach(section => {
        sectionObserver.observe(section); // Start observing each section
    });
});


  // Data object
  const data = {
    1: { imgSrc: './public/Cryptoknights.jpeg', text: 'CryptoKnights' },
    2: { imgSrc: './public/deblock.jpeg', text: 'DeBlock' },
    3: { imgSrc: './public/group.svg', text: 'RampX' },
    4: { imgSrc: './public/Enjinstarter.jpeg', text: 'Enjinstarter' }
};

document.querySelectorAll('.cryptoknights-parent h1').forEach(h1 => {
    h1.addEventListener('click', function() {
        // Remove 'active' class from all h1 elements
        document.querySelectorAll('.cryptoknights-parent h1').forEach(el => el.classList.remove('active'));

        // Add 'active' class to the clicked h1 element
        this.classList.add('active');

        // Get the id from the clicked h1 element
        const id = this.getAttribute('data-id');
        const itemData = data[id];

        // Update the img src and text content
        document.querySelector('.ellipse-parent .group-icon').setAttribute('src', itemData.imgSrc);
        document.querySelector('.ellipse-parent .rampx').textContent = itemData.text;
    });
});

  // Set default selection
  const defaultId = "3";
  const defaultH1 = document.querySelector(`.cryptoknights-parent h1[data-id="${defaultId}"]`);
  if (defaultH1) {
      defaultH1.classList.add('active');
      updateContent(defaultId);
  }


document.addEventListener("DOMContentLoaded", function() {
  console.log("DOM fully loaded and parsed");

  // Select all images with classes starting with "distortion-"
  const images = document.querySelectorAll('[class^="distortion-"]');
  console.log("Found images:", images);

  // Loop through each image element
  images.forEach((image, index) => {
    console.log(`Processing image ${index + 1}:`, image);

    // const img = image.querySelector('img');
    const img = image;
    console.log(`Image source: ${img.src}`);

    // Extract intensity from class name
    const intensityClass = image.className.match(/\d+/)[0];
    const intensity = intensityClass / 100;
    console.log(`Intensity extracted from class (${intensityClass}%):`, intensity);

    const width = image.offsetWidth;
    const height = image.offsetHeight;
    console.log(`Image dimensions: width=${width}, height=${height}`);

    // Create the renderer
    const renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setSize(width, height);
    image.appendChild(renderer.domElement);
    console.log("WebGLRenderer created and appended to image container");

    // Create the scene and camera
    const scene = new THREE.Scene();
    const camera = new THREE.OrthographicCamera(
      width / -2,
      width / 2,
      height / 2,
      height / -2,
      1,
      1000
    );
    camera.position.z = 1;
    console.log("Scene and OrthographicCamera created");

    // Load the texture from the image source
    const loader = new THREE.TextureLoader();
    const texture = loader.load(
      img.src,
      function() {
        console.log(`Texture loaded for image: ${img.src}`);
        img.style.visibility = 'hidden'; // Hide the original image only after the texture is loaded
      },
      undefined,  // onProgress callback
      function (err) {
        console.error("Texture loading error:", err);
      }
    );

    // Set uniforms for the shader
    const uniforms = {
      u_time: { type: "f", value: 1.0 },
      u_intensity: { type: "f", value: intensity },
      u_texture: { type: "t", value: texture },
    };
    console.log("Uniforms for shader created:", uniforms);

    // Create the shader material
    const material = new THREE.ShaderMaterial({
      uniforms: uniforms,
      vertexShader: `
        varying vec2 vUv;
        void main() {
          vUv = uv;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        uniform float u_time;
        uniform float u_intensity;
        uniform sampler2D u_texture;
        varying vec2 vUv;

        float random(vec2 p) {
          return fract(sin(dot(p, vec2(12.9898,78.233))) * 43758.5453);
        }

        float noise(vec2 p) {
          vec2 i = floor(p);
          vec2 f = fract(p);
          vec2 u = f*f*(3.0-2.0*f);
          return mix(mix(random(i), random(i + vec2(1.0, 0.0)), u.x),
                     mix(random(i + vec2(0.0, 1.0)), random(i + vec2(1.0, 1.0)), u.x), u.y);
        }

        void main() {
          vec2 uv = vUv;
          uv.y += noise(uv + u_time * 0.1) * u_intensity * 0.1;
          uv.x += noise(uv + u_time * 0.1) * u_intensity * 0.1;

          gl_FragColor = texture2D(u_texture, uv);
        }
      `,
      transparent: true,
    });
    console.log("Shader material created");

    // Create the geometry and mesh
    const geometry = new THREE.PlaneGeometry(width, height);
    const mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);
    console.log("Mesh created and added to scene");

    // Animation function
    function animate() {
      requestAnimationFrame(animate);
      
      // Update time uniform for animation
      uniforms.u_time.value += 0.05;
    //   console.log("Animating: u_time =", uniforms.u_time.value);
      
      // Render the scene
      renderer.render(scene, camera);
    }

    console.log("Starting animation loop");
    animate();
  });
});


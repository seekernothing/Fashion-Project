function startAnimation() {
    const video = document.querySelector('#right video');
    const rightSection = document.querySelector('#right');
    const mainContent = document.querySelector('#main');
  
    // Get the final dimensions of the right section
    const finalRect = rightSection.getBoundingClientRect();
    const finalWidth = finalRect.width;
    const finalHeight = finalRect.height;
  
    // Set initial states
    gsap.set(mainContent, { opacity: 0 });
    gsap.set(rightSection, { 
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      padding: 0,
      zIndex: 1000
    });
    gsap.set(video, { 
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    });
  
    // Create the animation timeline
    const tl = gsap.timeline({ defaults: { ease: 'power2.inOut' } });
  
    tl.to(mainContent, { opacity: 1, duration: 0.5 })
      .to(rightSection, { 
        duration: 1.5,
        width: finalWidth,
        height: finalHeight,
        top: finalRect.top,
        left: finalRect.left,
        padding: '40px 150px 40px 40px',
        onComplete: () => {
          // Reset styles to ensure proper layout
          rightSection.style.position = '';
          rightSection.style.top = '';
          rightSection.style.left = '';
          rightSection.style.width = '';
          rightSection.style.height = '';
          rightSection.style.zIndex = '';
          video.style.width = '100%';
          video.style.height = '100%';
        }
      })
      .to(video, { 
        borderRadius: '2px',
        duration: 1.5,
        width: '100%',
        height: '100%',
      }, '<');
  }
  
  // Wait for the DOM to be fully loaded, then start the animation after a short delay
  document.addEventListener('DOMContentLoaded', () => {
    // Ensure all resources (including the video) are loaded before starting the animation
    window.addEventListener('load', () => {
      setTimeout(startAnimation, 100);
    });
  });
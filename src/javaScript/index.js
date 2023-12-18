// home page
function checkVideoSupport() {
  const video = document.getElementById('intro-video');
  if (!video.canPlayType) {
    const link = document.createElement('a');
    link.href = 'resource/video_intoro.mp4';
    link.textContent = 'Click here to watch the video';
    video.parentNode.replaceChild(link, video);
  }
}

// aboute me show more and less
function showMessage() { // define a function that shows an alert message
  alert("Hello, I am Biniyam Assefa!");
}
function showMore(id) {
  let p = document.getElementById(id);
  let btn = event.target;
  if (p.style.display === "none") {
    p.style.display = "block";
    btn.textContent = "Show less";
  } else {
    p.style.display = "none";
    btn.textContent = "Show more";
  }
}
// travel

const tourImages = document.querySelectorAll('.toure-img');
  tourImages.forEach(image => {
    image.addEventListener('click', () => {
      alert(`Clicked on ${image.alt}`);
    });
  });

// voluntary activity
function playPause() {
  const video = document.getElementById("myVideo");
  if (video.paused) {
    video.play();
  } else {
    video.pause();
  }
}
// contact item
function copyPhoneNumber(number) {
  const el = document.createElement('textarea');
  el.value = number;
  document.body.appendChild(el);
  el.select();
  document.execCommand('copy');
  document.body.removeChild(el);
  alert(`Copied ${number} to clipboard!`);
}

// for footer
let year = new Date().getFullYear();
  let copy = document.getElementById("copy");
  copy.textContent = `Copyright © ${year} Biniyam. All rights reserved`;
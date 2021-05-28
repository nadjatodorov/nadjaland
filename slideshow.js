function showSlides(el, n, add = 0) {
  let e = document.getElementById(el);
  let slides = [];
  let dots = [];
  let slideIndexEl = null;
  let container = null;
  let container2 = null;

  for (let i = 0; i < e.childNodes.length; i++) {
    if (e.childNodes[i] == null) { continue; }
    if (e.childNodes[i].className == null) { continue; }
    if (e.childNodes[i].className == "slideshow-index") { slideIndexEl = e.childNodes[i]; }
    if (e.childNodes[i].className == "slideshow-container") { container = e.childNodes[i]; }
    if (e.childNodes[i].className == "slideshow-container2") { container2 = e.childNodes[i]; }
  }

  for (let i = 0; i < container.childNodes.length; i++) {
    if (container.childNodes[i] == null) { continue; }
    if (container.childNodes[i].className == null) { continue; }
    if (container.childNodes[i].className.includes("mySlides")) { slides.push(container.childNodes[i]); }
    
  }

  for (let i = 0; i < container2.childNodes.length; i++) {
    if (container2.childNodes[i] == null) { continue; }
    if (container2.childNodes[i].className == null) { continue; }
    if (container2.childNodes[i].className.includes("dot")) { dots.push(container2.childNodes[i]); }
  }


  let slideIndex = n;
  if (slideIndex == 0) {
    slideIndex = parseInt(slideIndexEl.innerHTML) + add;
  }

  let i;
  if (slideIndex > slides.length) { slideIndex = 1;  }
  if (slideIndex < 1) { slideIndex = slides.length; }

  slideIndexEl.innerHTML = String(slideIndex);

  for (i = 0; i < slides.length; i++) { slides[i].style.display = "none"; }
  for (i = 0; i < dots.length; i++) { dots[i].className = dots[i].className.replace(" active", ""); }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";


  console.log(slideIndex);
} 
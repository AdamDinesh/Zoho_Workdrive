// sticky navigation bar

let run = true;
window.addEventListener("scroll", () => {
  let header = document.getElementById("sticky-navbar");
  let rocket = document.querySelector(".office-img-rocket");
  let stroke = document.querySelector(".stroke");
  let gallery = document.querySelector(".grid-anim-box");
  let curScroll = window.pageYOffset;
  // console.log(curScroll);
  if (curScroll >= 100) {
    header.style.display = "block";

    if (curScroll >= 1620 && curScroll <= 2450) {
      rocket.style.display = "block";
      stroke.style.display = "block";
    } else if (curScroll >= 3120 && curScroll <= 4265 && run) {
      document.querySelector(".rating-show").style.display = "block";
      // console.log("sss");
      startNumber();
      run = false;
    } else if (curScroll >= 4180 && curScroll <= 5180) {
      let displayList = document.querySelectorAll(".suite");
      for (let i = 0; i < displayList.length; i++) {
        displayList[i].classList.add("in-view");
      }
    } else if (curScroll >= 5220 && curScroll <= 6200) {
      gallery.style.display = "block";
    }
  } else {
    header.style.display = "none";
  }
});

///////////////////////////
//features section

const featuresBtn = document.querySelectorAll(".features-btn");

const featImg1 = document.querySelector(".feat-img-1");
const featImg2 = document.querySelector(".feat-img-2");
const featImg3 = document.querySelector(".feat-img-3");

// console.log(featuresBtn);
for (let i = 0; i < featuresBtn.length; i++) {
  featuresBtn[i].addEventListener("click", () => {
    //img
    featImg1.classList.remove("feat-img-active");
    featImg2.classList.remove("feat-img-active");
    featImg3.classList.remove("feat-img-active");
    document
      .querySelector(`.feat-img-${i + 1}`)
      .classList.add("feat-img-active");
    //btn

    featuresBtn[0].classList.remove("features-btn-active");
    featuresBtn[1].classList.remove("features-btn-active");
    featuresBtn[2].classList.remove("features-btn-active");
    featuresBtn[i].classList.add("features-btn-active");
  });
}

/////////////////////////////////////////
//Number running..
function startNumber() {
  let i = 0;
  let arr = [];
  let st;
  let rating44 = document.getElementById("rating-44");
  let rating48 = document.getElementById("rating-48");
  let rating1 = document.getElementById("rating-45-1");
  let rating2 = document.getElementById("rating-45-2");
  let rating3 = document.getElementById("rating-45-3");

  for (let i = 0.2; i < 4.9; i = i + 0.2) {
    arr.push(i.toFixed(1));
  }
  // console.log(arr);

  st = setInterval(doRunNumber, 70);

  function doRunNumber() {
    if (i == arr.length - 1) {
      clearInterval(st);
    } else if (i < arr.length - 2) {
      rating1.innerHTML = arr[i];
      rating2.innerHTML = arr[i];
      rating3.innerHTML = arr[i];
      rating44.innerHTML = arr[i];

      if (arr[i] >= 4.4) {
        rating1.innerHTML = 4.5;
        rating2.innerHTML = 4.5;
        rating3.innerHTML = 4.5;
      }
    }
    // console.log(arr[i]);
    document.getElementById("rating-48").innerHTML = arr[i];

    i++;
  }
  document.getElementById("rating-48").innerHTML = 4.8;
}
startNumber();

///////////////////////////////
// Carousel slider.....

let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides((slideIndex += n));
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  const slide1 = document.getElementById("slide-1");
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  slide1.classList.remove("slide-active");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" dot-active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " dot-active";
}

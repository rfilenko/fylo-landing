// scroll header
const header = document.querySelector("header");
const sectionOne = document.querySelector(".intro");

const faders = document.querySelectorAll(".fade-in");
const sliders = document.querySelectorAll(".slide-in");

let offset, rMargin, sectionOneOptions;
if (window.innerWidth < 475) { //mobile
  offset = "-700px"
} else {
  offset = "-850px";
}
rMargin = `${offset} 0px 0px 0px`;
sectionOneOptions = {
  rootMargin: rMargin
};

const sectionOneObserver = new IntersectionObserver(function (entries, sectionOneObserver) {
  entries.forEach(entry => {
    if (!entry.isIntersecting) {
      header.classList.add("header-scrolled");
    } else {
      header.classList.remove("header-scrolled");
    }
  });
}, sectionOneOptions);

sectionOneObserver.observe(sectionOne);

//fade-in icons, images slide-in
const appearOptions = {
  threshold: 0,
  rootMargin: "0px 0px -150px 0px"
};
const appearOnScroll = new IntersectionObserver(function (
  entries,
  appearOnScroll
) {
  entries.forEach(entry => {
    if (!entry.isIntersecting) {
      return
    } else {
      entry.target.classList.add("appear");
      appearOnScroll.unobserve(entry.target);
    }
  });
},
  appearOptions);

//only on mobile
if (window.outerWidth < 475) {
  faders.forEach(fader => {
    appearOnScroll.observe(fader);
  });
  sliders.forEach(slider => {
    appearOnScroll.observe(slider);
  });
} else {
  faders.forEach(fader => {
    fader.classList.add("appear");
  });
  sliders.forEach(slider => {
    slider.classList.add("appear");
  });

}
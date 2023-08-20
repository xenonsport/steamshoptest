// Find page

// const filterBox = document.querySelectorAll(".box");

// document.querySelector(".filter__nav").addEventListener("click", event => {
//   if (event.target.tagName !== "LI") return false;
  
//   let filterClass = event.target.dataset["f"];

//   filterBox.forEach(elem => {
//     elem.classList.remove("hide");
//     if (!elem.classList.contains(filterClass) && filterClass != 'all') {
//       elem.classList.add("hide");
//     }
//   });
// });

// document.querySelector("#search").oninput = function () {
//   let val = this.value.trim();
//   let searchItems = document.querySelectorAll(".search");
//   if (val != "") {
//     searchItems.forEach(function (elem) {
//       if (elem.innerText.search(RegExp(val, "gi")) == -1) {
//         elem.parentElement.classList.add("hidden");
//       } else {
//         elem.parentElement.classList.remove("hidden");
//       }
//     });
//   } else {
//     searchItems.forEach(function (elem) {
//       elem.parentElement.classList.remove("hidden");
//     });
//   }
// };

// Smoth scroll

const smoothLinks = document.querySelectorAll('a[href^="#"]');

for (let smoothLink of smoothLinks) {
    smoothLink.addEventListener('click', function (e) {
        e.preventDefault();
        const id = smoothLink.getAttribute('href');

        document.querySelector(id).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
};

// Small header after scroll

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.querySelector(".header__nav").classList.add("header--small");
  } else {
    document.querySelector(".header__nav").classList.remove("header--small");
  }
}

// Section visibility

// Чтоб работал нужно добавить класс .section к нужной секции.

// const allSections = document.querySelectorAll('.section');

// const appearanceSection = function (entries, observer) {
//   const entry = entries[0];
//   // console.log(entry);
//   if (!entry.isIntersecting) return;
//   entry.target.classList.remove('section--hidden');
//   observer.unobserve(entry.target);
// };

// const sectionObserver = new IntersectionObserver(appearanceSection, {
//   root: null,
//   threshold: 0.1,
// });

// allSections.forEach(function (section) {
//   sectionObserver.observe(section);
//   section.classList.add('section--hidden');
// });

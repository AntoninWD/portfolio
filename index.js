"use strict";

// modal window
const burgerBtn = document.querySelector(".burger-container");
const modal = document.querySelector(".modal");
const modalClose = document.querySelector(".modal__close");
const overlay = document.querySelector(".overlay");
//
burgerBtn.addEventListener("click", function () {
  modal.classList.remove("hide");
  overlay.classList.remove("hide");
});
const hide = function () {
  modal.classList.add("hide");
  overlay.classList.add("hide");
};
modalClose.addEventListener("click", hide);
overlay.addEventListener("click", hide);

//About section
const before = document.querySelector(".before");
const now = document.querySelector(".now");
const future = document.querySelector(".future");
const container = document.querySelector(".about__container");
//
before.addEventListener("click", function () {
  container.innerHTML = ` <div  class="about__item">
  <img class="about__item--img" src="img/html.png" alt="">
  <p>HTML</p>
</div>
<div class="about__item">
  <img class="about__item--img" src="img/css-3.png" alt="">
  <p>CSS</p>
</div>

<div class="about__item">
  <img class="about__item--img" src="img/sass.png" alt="">
  <p>SASS</p>
</div>

<div class="about__item">
  <img class="about__item--img" src="img/javascript.png" alt="">
  <p>JavaScript</p>
</div>`;

  now.classList.remove("about__head--active");
  future.classList.remove("about__head--active");
  before.classList.add("about__head--active");
});

now.addEventListener("click", function () {
  container.innerHTML = ` 
   <div class="about__item">
     <img class="about__item--img" src="img/atom.png" alt="">
     <p>React</p>
   </div>
                               
   <div class="about__item">
    <img class="about__item--img" src="img/git.png" alt="">
    <p>Git</p>
   </div>`;
  now.classList.add("about__head--active");
  future.classList.remove("about__head--active");
  before.classList.remove("about__head--active");
});

future.addEventListener("click", function () {
  container.innerHTML = ` 

<div class="about__item">
  <img class="about__item--img" src="img/wordpress.png" alt="">
  <p>WP</p>
</div>
<div class="about__item">
  <img class="about__item--img" src="img/typescript.png" alt="">
  <p>TypeScript</p>
</div>
<div class="about__item">
  <img class="about__item--img" src="img/nodejs.png" alt="">
  <p>Node</p>
</div>

<div class="about__item">
  <img class="about__item--img mongo" src="img/mongo2.png" alt="">
  <p>MongoDB</p>
</div> `;
  now.classList.remove("about__head--active");
  future.classList.add("about__head--active");
  before.classList.remove("about__head--active");
});

// Site links
const home = document.querySelectorAll(".home-nav");
const about = document.querySelectorAll(".about-nav");
const project = document.querySelectorAll(".project-nav");
const contact = document.querySelectorAll(".contact-nav");
const homeContainer = document.querySelector(".header");
const aboutContainer = document.querySelector(".about");
const projectContainer = document.querySelector(".project");
const contactContainer = document.querySelector(".contact");
//
const link = function (anchor, container) {
  anchor.forEach((btn) =>
    btn.addEventListener("click", function (e) {
      e.preventDefault();
      hide();
      container.scrollIntoView({ behavior: "smooth" });
    })
  );
};

link(home, homeContainer);
link(about, aboutContainer);
link(project, projectContainer);
link(contact, contactContainer);

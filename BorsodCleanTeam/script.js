const btn = document.getElementById('menu-btn')
const nav = document.getElementById('menu')

btn.addEventListener('click', () => {
  btn.classList.toggle('open')
  nav.classList.toggle('flex')
  nav.classList.toggle('hidden')
})

const fooldal = document.getElementById('fooldal')
fooldal.addEventListener('click', () => {
  btn.classList.toggle('open')
  nav.classList.toggle('flex')
  nav.classList.toggle('hidden')
})
const szolg = document.getElementById('szolg')
szolg.addEventListener('click', () => {
  btn.classList.toggle('open')
  nav.classList.toggle('flex')
  nav.classList.toggle('hidden')
})
const rolunk = document.getElementById('rolunk')
rolunk.addEventListener('click', () => {
  btn.classList.toggle('open')
  nav.classList.toggle('flex')
  nav.classList.toggle('hidden')
})
const ref = document.getElementById('ref')
ref.addEventListener('click', () => {
  btn.classList.toggle('open')
  nav.classList.toggle('flex')
  nav.classList.toggle('hidden')
})
const kapcs = document.getElementById('kapcs')
kapcs.addEventListener('click', () => {
  btn.classList.toggle('open')
  nav.classList.toggle('flex')
  nav.classList.toggle('hidden')
})
const fb = document.getElementById('fb')
fb.addEventListener('click', () => {
  btn.classList.toggle('open')
  nav.classList.toggle('flex')
  nav.classList.toggle('hidden')
})
const tel = document.getElementById('tel')
tel.addEventListener('click', () => {
  btn.classList.toggle('open')
  nav.classList.toggle('flex')
  nav.classList.toggle('hidden')
})


const companyButton = document.getElementById('companyBtn');
const personalButton = document.getElementById('personalBtn');

companyButton.addEventListener("click", function() {
  let company = document.getElementById("company").classList.remove("hidden");
  let personal = document.getElementById("personal").classList.add("hidden");

  personalButton.classList.remove("active");
  companyButton.classList.add("active");
})

personalButton.addEventListener("click", function() {
  let personal = document.getElementById("personal").classList.remove("hidden");
  let company = document.getElementById("company").classList.add("hidden");

  companyButton.classList.remove("active");
  personalButton.classList.add("active");
})

const swiper = new Swiper('.swiper', {
  // Optional parameters
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

if (screen.width > 790) {
  document.getElementById("fullscrVer").classList.remove("hidden");
  document.getElementById("mobileVer").classList.add("hidden");
}
else {
  document.getElementById("mobileVer").classList.remove("hidden");
  document.getElementById("fullscrVer").classList.add("hidden");
}

const logo = document.getElementById('logo');
logo.addEventListener('click', () => {
  window.location.reload();
})

function refresh() {
  window.location.reload();
}
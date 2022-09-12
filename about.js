const partners = [
  {
    name: 'Mozilla',
    icon: 'fa-brands fa-firefox',
  },
  {
    name: 'Google',
    icon: 'fa-brands fa-google',
  },
  {
    name: 'Blogs',
    icon: 'fa-solid fa-blog',
  },
  {
    name: 'Behance',
    icon: 'fa-brands fa-behance',
  },
  {
    name: 'Airbnb',
    icon: 'fa-brands fa-airbnb',
  },
];

// for data
const partnerDiv = document.querySelector('#partners-div');

// for functions
const menu = document.getElementById('menu');
const navModal = document.getElementById('nav-modal');
const close = document.getElementById('close');

// call this to Disable
function disableScroll() {
  const xPos = window.scrollX;
  const yPos = window.scrollY;
  window.onscroll = () => {
    window.scroll(yPos, xPos);
  };
}

// call this to Enable
function enableScroll() {
  window.onscroll = '';
}

partners.forEach((partner) => {
  partnerDiv.innerHTML += `
      <div>
        <i class="${partner.icon} text-[2rem]"></i>
        <p class="mt-3 text-[1.5rem]">${partner.name}</p>
      </div>
    `;
});

menu.addEventListener('click', () => {
  navModal.style.left = 0;
  disableScroll();
});

close.addEventListener('click', () => {
  navModal.style.left = '-100vw';
  enableScroll();
});

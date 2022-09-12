const programmes = [
  {
    title: 'Lecture',
    icon: './assets/icons/lecture.png',
    desc: 'Listen to the speakers from various countries about the messages of sharing and opening.',
  },
  {
    title: 'CC Exhibition',
    icon: './assets/icons/exhibition.png',
    desc: 'Appreciate various creations applying CC license of artists, organized from Art Center Nabi.',
  },
  {
    title: 'Forum',
    icon: './assets/icons/forum.png',
    desc: 'Have a time to share your thoughts and opinions with experts for each topic.',
  },
  {
    title: 'Workshop',
    icon: './assets/icons/workshop.png',
    desc: 'Try creating your own work using open source license rather than just watching.',
  },
  {
    title: 'CC Ignite',
    icon: './assets/icons/ignite.png',
    desc: 'Get opportunities to network with CC affiliates around the world, also after the summit.',
  },
];

const speakers = [
  {
    name: 'Yochai Benkler',
    img: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80',
    title:
      'Berkman Professor of Entrepreneurial Legal Studies, Harvard Law School',
    biography:
      'Benkler studies commons-based peer production, the Internet, and the law. He is the author of The Wealth of Networks: How Social Production Transforms Markets and Freedom (Yale University Press, 2006).',
  },
  {
    name: 'Kilnam Chon',
    img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80',
    title: '',
    biography:
      'Kilnam Chon helped bring the internet to Asia and is an outspoken advocate for the open web and digital commons. In 2012, he was inducted into the inaugural class of the Internet Society’s Internet Hall of Fame. He is currently the CEO of the Internet Society.',
  },
  {
    name: 'SohYeong Noh',
    img: 'https://images.unsplash.com/photo-1548142813-c348350df52b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=778&q=80',
    title:
      'Director of Art Center Nabi, Seoul, Korea and Board Member of Creative Commons Korea',
    biography:
      'As the main venue for new media art production in Korea, Nabi promotes cross-discliplinary collaboration and understanding among science technology, humanities, and the arts.',
  },
  {
    name: 'Julia Leda',
    img: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1061&q=80',
    title:
      'President of Young Pirates of Europe, Member of the European Parliament',
    biography:
      'European ingetration, political democracy, and participation of youth through online as her major condemn, Redia’s report outlines the need for a new European political culture, based on the principles of openness, transparency, and participation.',
  },
  {
    name: 'Lila Tretikov',
    img: 'https://images.unsplash.com/photo-1526413232644-8a40f03cc03b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80',
    title:
      'Executive Director of Creative Commons, Former Executive Director of the Wikimedia Foundation',
    biography:
      'Lila Tretikov is the Executive Director of Creative Commons, a nonprofit organization that enables the sharing and use of creativity and knowledge through free legal tools. She is also a member of the Board of Directors of the Open Technology Institute at New America.',
  },
  {
    name: 'Ryan Merkley',
    img: 'https://images.unsplash.com/photo-1566753323558-f4e0952af115?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1621&q=80',
    title: 'CEO of Creative Commons, ex COO of the Mozilla Foundation',
    biography:
      'Ryan had been leading open source and open data projects for over 15 years. He is the co-founder of the Open Source Initiative, the Open Source Hardware Association, and the Open Data Institute.',
  },
];

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
const programmeDiv = document.querySelector('#programmes');
const speakerDiv = document.querySelector('#speakers');
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

programmes.forEach((programme) => {
  programmeDiv.innerHTML += `
    <div class="grid grid-cols-12 gap-6 md:gap-4 items-center bg-gray-600/50 px-4 py-6 md:px-6 md:py-8 md:text-center">
      <div class="col-span-3 md:col-span-12 flex items-center justify-center">
        <img class="w-20 h-20" src=${programme.icon} alt=${programme.title}></img>
      </div>
      <div class="col-span-9 md:col-span-12">
        <h3 class="text-[2rem] text-[#EC5242] font-bold">
        ${programme.title}
        </h3>
        <p class="mt-3 text-[1.5rem] text-gray-300">
          ${programme.desc}
        </p>
      </div>
    </div>
  `;
});

speakers.forEach((speaker) => {
  speakerDiv.innerHTML += `
    <div class="grid grid-cols-5 justify-center gap-6">
      <div class="col-span-2 w-52 h-52 md:w-64 md:h-64 xl:w-72 xl:h-72  relative">
        <div class="absolute top-0 left-0">
          <img
            class="w-28 h-28 md:w-40 md:h-40 object-cover"
            src="./assets/images/Profile Background.svg"
            alt="background"
          />
        </div>
        <div class="absolute bottom-0 right-0">
          <img
            class="w-44 h-44 md:w-52 md:h-52 xl:w-64 xl:h-64 object-cover"
            src=${speaker.img}
            alt=${speaker.name}
          />
        </div>
      </div>
      <div class="col-span-3">
        <h3 class="text-[1.5rem] text-[#272A31] font-bold">
          ${speaker.name}
        </h3>
        <p class="mt-2 text-[1.2rem] text-[#EC5242] italic leading-snug">
          ${speaker.title}
        </p>
        <div class="mt-4 mb-8 w-8 border-t-2 border-gray-300"></div>
        <p class="text-[1.2rem] text-[#272A31]">
          ${speaker.biography}
        </p>
      </div>
    </div>
  `;
});

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

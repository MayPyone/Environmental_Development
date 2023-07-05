const mainmenu = document.querySelector('.mainMenu');
const closemenu = document.querySelector('.closeMenu1');
const openmenu = document.querySelector('.openMenu');
const menuitems = document.querySelectorAll('nav .mainMenu li a');

function show() {
  mainmenu.style.display = 'block';
  mainmenu.style.paddingTop = '80px';
  mainmenu.style.top = '0';
  mainmenu.style.marginBottom = '40px';
  closemenu.style.display = 'inline';
  closemenu.style.paddingLeft = '15%';
}

function close() {
  mainmenu.style.top = '-180%';
  mainmenu.style.display = 'flex';
  mainmenu.style.paddingTop = '5px';
  closemenu.style.display = 'none';
}

openmenu.addEventListener('click', show);
closemenu.addEventListener('click', close);

menuitems.forEach((item) => {
  item.addEventListener('click', () => {
    close();
  });
});

const speakers = [
  {
    name: 'Yochai Benkler',
    image: "<img src='images/sone.png' alt=''/>",
    occupation: 'Berkman Professor of Entrepreneurial Legal Studies at Harvard Law School',
    description: 'Benkler studies commons-based peer production, and published his seminal book, The Wealth of Networks in 2006',
  },
  {
    name: 'SohYeong Noh',
    image: "<img src='images/stwo.png' alt=''/>",
    occupation: 'Director of Art Centre Nabi and a board member of CC Korea',
    description: 'As the main venue for new media art production in Korea, Nabi promotes cross-disciplinary collaboration and understanding among science technology, humanities, and the arts.',
  },
  {
    name: 'Lila tretikov',
    image: "<img src='images/sthree.png' alt=''/>",
    occupation: 'Executive Director of the Wikimedia Foundation',
    description: 'Lila Tretikov is the Executive of the Wikimedia Foundation, the nonprofit organization that operates Wikipedia. Wikipedia is freely available in 290 languag-es and used by nearly half a billion people around the world every month.',
  },
  {
    name: 'Kilnam Chon',
    image: "<img src='images/sfour.png' alt=''/>",
    occupation: '',
    description: 'Kilnam Chon helped bring the internet to Asia and is an outspoken advocate for the open web and digital com-mons. In 2012. he was inducted into the inaugural class of the Internet Society’s (ISOC) Internet Hall of Fame',
  },
  {
    name: 'Julia Leda',
    image: '<img src="images/sfive.png" alt=""/>',
    occupation: 'President of Young Pirates of Europe',
    description: 'European ingetration, political democracy and participation of youth through online as her major condern, Reda’s report outlining potential changes to EU copyright law was approved by the Parliament in July',
  },
  {
    name: 'Ryan Merkley',
    image: '<img src= "images/ssix.png" alt= ""/>',
    occupation: 'CEO of Creativve Commons, ex COO of the Mozilla Foundation',
    description: 'Ryan had been leading open-source projects at the Mozilla Foundation such as the open-source move-ment',
  },
];

const speakergroup = document.querySelector('.group');
const main = document.createElement('section');
main.className = 'main';
const maincontainer = document.createElement('div');
const container = document.createElement('div');
const container2 = document.createElement('div');
container2.className = 'container2';
container.className = 'container';
maincontainer.className = 'maincontainer';

function speaker() {
  maincontainer.innerHTML = '<h2 class= "title">Featur<u>ed Sp</u>eakers</h2>';
  for (let i = 0; i < speakers.length; i += 1) {
    container.innerHTML += `${'<span class= "myinner">'
   + '<div class = "myimage">'}${speakers[i].image}</div>`
   + '<div class = "pic">'
   + `<h2>${speakers[i].name}</h2>`
   + `<p>${speakers[i].occupation}</p>`
   + '<div class= "myborder"></div>'
   + `<p class= "p2">${speakers[i].description}</p>`
   + '</div>'
   + '</span>';
  }

  for (let i = 0; i < 2; i += 1) {
    container2.innerHTML += `${'<span class = "myinner">'
   + '<div class= "myimage">'}${speakers[i].image}</div>`
   + '<div class="pic">'
   + `<h2>${speakers[i].name}</h2>`
   + `<p>${speakers[i].occupation}</p>`
   + '<div class= "myborder"></div>'
   + `<p class= "p2">${speakers[i].description}</p>`
   + '</div>'
   + '</span>';
  }
  container2.innerHTML += "<button class='more'>MORE <img src='images/down.png' alt=''/></button>";
  maincontainer.append(container2);
  maincontainer.append(container);
  main.append(maincontainer);
  speakergroup.append(main);
}
speaker();
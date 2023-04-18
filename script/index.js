const hamburger = document.querySelector('.nav-toggle');
const navigator = document.querySelectorAll('.nav-list > a');
const navigation = document.querySelector('.navigation');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navigation.classList.toggle('onOpen');
});

navigator.forEach((links) => {
  links.addEventListener('click', () => {
    navigation.classList.remove('onOpen');
    hamburger.classList.remove('active');
  });
});

const PguestArray = [
  {
    id: 'guest0',
    image: './images/wizkid.jpeg',
    title: 'Wizkid',
    about: 'Wizkid is a Nigerian singer who gained international recognition for his contribution to the global popularization of Afrobeats music.',
    about1: 'He has won numerous awards for his music and collaborations with other artists, including the Grammy Awards.',
  },

  {
    id: 'guest1',
    image: './images/yemi-alade.jpeg',
    title: 'Yemi Alade',
    about: 'Yemi Alade is a Nigerian Afropop singer and songwriter known for her energetic and vibrant music style.',
    about1: 'She has won several awards for her music, including the MTV African Music Awards for Best Female and Best Performer.',
  },

  {
    id: 'guest2',
    image: './images/rema.jpeg',
    title: 'Rema',
    about: 'Rema is a Nigerian singer who gained popularity for his unique blend of Afrobeat and trap music.',
    about1: 'He was signed to Mavin Records, in 2019 and has released several chart-topping singles and an EP.',
  },

  {
    id: 'guest3',
    image: './images/davido.jpeg',
    title: 'Davido',
    about: 'Davido is a Nigerian singer, songwriter, and record producer.',
    about1: 'He has become one of the biggest Afrobeats artists in the world, winning numerous awards for his music and philanthropic endeavors.',
  },

  {
    id: 'guest4',
    image: './images/burna-boy.jpeg',
    title: 'Burna Boy',
    about: 'Burna Boy is a Nigerian singer and songwriter known for his fusion of Afrobeat, reggae, and dancehall music.',
    about1: 'He has won several awards, including the BET Awards for Best International Act and a Grammy Award for Best Global Music Album, and has collaborated with various international artists.',
  },

  {
    id: 'guest5',
    image: './images/cavemen.jpeg',
    title: 'Cavemen',
    about: 'Cavemen is a Nigerian musical duo made up of two brothers, Kingsley and Benjamin Okorie, who specialize in highlife and alternative music.',
    about1: 'They have gained popularity for their unique sound and live performances, and have been recognized for their contribution to the resurgence of highlife music in Nigeria.',
  }];

const sect3 = document.querySelector('.speak');

const speakers = document.createElement('div');
speakers.classList.add('prog');
const h3 = document.createElement('h3');
h3.classList.add('pro-1');
h3.textContent = 'Featured Speakers';
speakers.appendChild(h3);
sect3.appendChild(speakers);

PguestArray.forEach((guest) => {
  const guestdiv = document.querySelector('.guestscontainer');
  const guests = document.createElement('div');
  guests.classList.add('guests');
  const firstDiv = document.createElement('div');
  firstDiv.classList.add('firstDiv');
  const pic = document.createElement('img');
  pic.src = guest.image;
  pic.classList.add('imgs-2');
  const secHand = document.createElement('div');
  secHand.classList.add('secHand');
  const nme = document.createElement('div');
  nme.setAttribute('id', 'secHand');
  nme.textContent = guest.title;
  const redText = document.createElement('h3');
  redText.classList.add('redText');
  redText.textContent = guest.about;
  const blackText = document.createElement('div');
  blackText.classList.add('blackText');
  blackText.textContent = guest.about1;

  secHand.appendChild(nme);
  secHand.appendChild(redText);
  secHand.appendChild(blackText);
  firstDiv.appendChild(pic);
  firstDiv.appendChild(secHand);
  guests.appendChild(firstDiv);
  guestdiv.appendChild(guests);
  sect3.appendChild(guestdiv);
});

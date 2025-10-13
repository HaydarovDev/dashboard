import Etherium from '../assets/images/icons/Etherium';
import avatar from '../assets/images/avatar1.jpg';
import avatar1 from '../assets/images/avatar2.jpg';
import avatar2 from '../assets/images/avatar3.jpg';
import avatar3 from '../assets/images/avatar4.jpg';
import avatar4 from '../assets/images/avatar5.jpg';
import avatar5 from '../assets/images/avatar6.jpg';
import type { NftDetails } from '../types/iconTypes';

import nft from '../assets/images/nft.png';
import nft1 from '../assets/images/nft1.jpg';
import nft2 from '../assets/images/nft2.jpg';
import nft3 from '../assets/images/nft3.png';
import nft4 from '../assets/images/nft4.png';

export const viewer_list = [
  {
    id: 1,
    img: avatar,
    userName: 'Alex Ca.',
    Name: 'Alexy',
    list_icon: Etherium,
    list_price: '8,456',
    benefit: +23.11,
  },
  {
    id: 2,
    img: avatar1,
    userName: 'Juliya S.',
    Name: 'JuliyaS',
    list_icon: Etherium,
    list_price: '5,327',
    benefit: -32.01,
  },
  {
    id: 3,
    img: avatar2,
    userName: 'Juliya S.',
    Name: 'JuliyaS',
    list_icon: Etherium,
    list_price: '5,327',
    benefit: -32.01,
  },
];

export const bestSellers = [
  {
    id: Math.random() * 100,
    avatar: avatar,
    userName: 'Alex Ca.',
    userMail: '@Alexy',
  },
  {
    id: Math.random() * 100,
    avatar: avatar1,
    userName: 'Juliya Sa.',
    userMail: '@JuliyaS',
  },
  {
    id: Math.random() * 100,
    avatar: avatar2,
    userName: 'Juliya Sa.',
    userMail: '@JuliyaS',
  },
  {
    id: Math.random() * 100,
    avatar: avatar3,
    userName: 'Trevor Pu.',
    userMail: '@TrevorP',
  },
  {
    id: Math.random() * 100,
    avatar: avatar4,
    userName: 'Juliya Sa.',
    userMail: '@JuliyaS',
  },
  {
    id: Math.random() * 100,
    avatar: avatar5,
    userName: 'Trevor Pu.',
    userMail: '@TrevorP',
  },
];

export const data: NftDetails[] = [
  {
    id: 1,
    img: nft,
    title: 'Sun-Glass',
    description: 'Current bid',
    price: 1.75,
  },
  {
    id: 2,
    img: nft2,
    title: 'Sun-Glass',
    description: 'Current bid',
    price: 1.75,
  },
  {
    id: 3,
    img: nft3,
    title: 'Sun-Glass',
    description: 'Current bid',
    price: 1.75,
  },
  {
    id: 4,
    img: nft4,
    title: 'NuEvey',
    description: 'Current bid',
    price: 1.25,
  },
  {
    id: 5,
    img: nft1,
    title: 'NuEvey',
    description: 'Current bid',
    price: 1.25,
  },
  {
    id: 6,
    img: nft,
    title: 'Sun-Glass',
    description: 'Current bid',
    price: 1.75,
  },
  {
    id: 7,
    img: nft2,
    title: 'Sun-Glass',
    description: 'Current bid',
    price: 1.75,
  },
  {
    id: 8,
    img: nft3,
    title: 'Sun-Glass',
    description: 'Current bid',
    price: 1.75,
  },
  {
    id: 9,
    img: nft4,
    title: 'NuEvey',
    description: 'Current bid',
    price: 1.25,
  },
  {
    id: 10,
    img: nft1,
    title: 'NuEvey',
    description: 'Current bid',
    price: 1.25,
  },
];

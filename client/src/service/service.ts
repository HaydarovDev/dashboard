import Etherium from '../assets/images/icons/Etherium';
import avatar from '../assets/images/avatar1.jpg';
import avatar1 from '../assets/images/avatar2.jpg';
import avatar2 from '../assets/images/avatar3.jpg';
import avatar3 from '../assets/images/avatar4.jpg';
import avatar4 from '../assets/images/avatar5.jpg';
import avatar5 from '../assets/images/avatar6.jpg';
import type { Currency, NftDetails, User } from '../types/iconTypes';

import nft from '../assets/images/nft.png';
import nft1 from '../assets/images/nft1.jpg';
import nft2 from '../assets/images/nft2.jpg';
import nft3 from '../assets/images/nft3.png';
import nft4 from '../assets/images/nft4.png';

import flag1 from '../assets/images/euro.png';
import flag2 from '../assets/images/unitedkingdom.png';
import flag3 from '../assets/images/usa.png';

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
    id: 1,
    avatar: avatar,
    userName: 'Alex Ca.',
    userMail: '@Alexy',
  },
  {
    id: 2,
    avatar: avatar1,
    userName: 'Juliya Sa.',
    userMail: '@JuliyaS',
  },
  {
    id: 3,
    avatar: avatar2,
    userName: 'Juliya Sa.',
    userMail: '@JuliyaS',
  },
  {
    id: 4,
    avatar: avatar3,
    userName: 'Trevor Pu.',
    userMail: '@TrevorP',
  },
  {
    id: 5,
    avatar: avatar4,
    userName: 'Juliya Sa.',
    userMail: '@JuliyaS',
  },
  {
    id: 6,
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
    about:
      'A collection of 10,000 utility-enabled PFPs that feature a richly diverse and unique pool of rarity-powered traits.',
    owner: '0xA12F3D9C',
    creator: '0xB76C5A01',
    endin: '2025-10-20',
  },
  {
    id: 2,
    img: nft2,
    title: 'Sun-Glass',
    description: 'Current bid',
    price: 1.75,
    about:
      'A collection of 10,000 utility-enabled PFPs that feature a richly diverse and unique pool of rarity-powered traits.',
    owner: '0xF9D3A87B',
    creator: '0xB76C5A01',
    endin: '2025-10-20',
  },
  {
    id: 3,
    img: nft3,
    title: 'Sun-Glass',
    description: 'Current bid',
    price: 1.75,
    about:
      'A collection of 10,000 utility-enabled PFPs that feature a richly diverse and unique pool of rarity-powered traits.',
    owner: '0xCC4E1F23',
    creator: '0xB76C5A01',
    endin: '2025-10-20',
  },
  {
    id: 4,
    img: nft4,
    title: 'NuEvey',
    description: 'Current bid',
    price: 1.25,
    about:
      'A collection of 10,000 utility-enabled PFPs that feature a richly diverse and unique pool of rarity-powered traits.',
    owner: '0x7B8A34E5',
    creator: '0xD19E8F42',
    endin: '2025-10-20',
  },
  {
    id: 5,
    img: nft1,
    title: 'NuEvey',
    description: 'Current bid',
    price: 1.25,
    about:
      'A collection of 10,000 utility-enabled PFPs that feature a richly diverse and unique pool of rarity-powered traits.',
    owner: '0xF123AB44',
    creator: '0xD19E8F42',
    endin: '2025-10-20',
  },
  {
    id: 6,
    img: nft,
    title: 'Sun-Glass',
    description: 'Current bid',
    price: 1.75,
    about:
      'A collection of 10,000 utility-enabled PFPs that feature a richly diverse and unique pool of rarity-powered traits.',
    owner: '0x6A9BEE72',
    creator: '0xB76C5A01',
    endin: '2025-10-20',
  },
  {
    id: 7,
    img: nft2,
    title: 'Sun-Glass',
    description: 'Current bid',
    price: 1.75,
    about:
      'A collection of 10,000 utility-enabled PFPs that feature a richly diverse and unique pool of rarity-powered traits.',
    owner: '0x91C8AF12',
    creator: '0xB76C5A01',
    endin: '2025-10-20',
  },
  {
    id: 8,
    img: nft3,
    title: 'Sun-Glass',
    description: 'Current bid',
    price: 1.75,
    about:
      'A collection of 10,000 utility-enabled PFPs that feature a richly diverse and unique pool of rarity-powered traits.',
    owner: '0x8A99CD67',
    creator: '0xB76C5A01',
    endin: '2025-10-20',
  },
  {
    id: 9,
    img: nft4,
    title: 'NuEvey',
    description: 'Current bid',
    price: 1.25,
    about:
      'A collection of 10,000 utility-enabled PFPs that feature a richly diverse and unique pool of rarity-powered traits.',
    owner: '0x44B1E88F',
    creator: '0xD19E8F42',
    endin: '2025-10-20',
  },
  {
    id: 10,
    img: nft1,
    title: 'NuEvey',
    description: 'Current bid',
    price: 1.25,
    about:
      'A collection of 10,000 utility-enabled PFPs that feature a richly diverse and unique pool of rarity-powered traits.',
    owner: '0xA781C22B',
    creator: '0xD19E8F42',
    endin: '2025-10-20',
  },
];

export const users: User[] = [
  {
    id: 1,
    image: '',
    username: 'Justin Hammer',
  },
  {
    id: 2,
    image: '',
    username: 'Layla Grum',
  },
  {
    id: 3,
    image: '',
    username: 'John Cares',
  },
  {
    id: 4,
    image: '',
    username: 'Sam Smith',
  },
];

export const currencies: Currency[] = [
  {
    id: 1,
    code: 'USD',
    name: 'US Dollar',
    amount: 56476.0,
    formatted: '56,476.00',
    flag: flag1,
  },
  {
    id: 2,
    code: 'EUR',
    name: 'Euro',
    amount: 49973.67,
    formatted: '49,973.67',
    flag: flag2,
  },
  {
    id: 3,
    code: 'GBP',
    name: 'British Pound',
    amount: 45098.56,
    formatted: '45,098.56',
    flag: flag3,
  },
];

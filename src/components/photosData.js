const BASE = import.meta.env.BASE_URL.endsWith('/')
  ? import.meta.env.BASE_URL
  : `${import.meta.env.BASE_URL}/`;

export const getPhotoUrl = (filename) => `${BASE}photos/${filename}`;

export const PHOTOS = [
  {
    id: 'intro-solo',
    src: getPhotoUrl('2J2A7207.jpg'),
    alt: 'Anna portrait by temple stone pillar',
    caption: 'Quiet moments & timeless memories',
    category: 'solo'
  },
  {
    id: 'appreciation-solo',
    src: getPhotoUrl('2J2A7217.jpg'),
    alt: 'Anna smiling at camera',
    caption: 'Glad you were born, man.',
    category: 'solo'
  },
  {
    id: 'bond-sibling',
    src: getPhotoUrl('2J2A8069.jpg'),
    alt: 'Anna and sister together',
    caption: 'Some bonds just find their way back.',
    category: 'sibling'
  },
  {
    id: 'family-laugh',
    src: getPhotoUrl('2J2A7222.jpg'),
    alt: 'Anna sharing a laugh with family',
    caption: 'The best laughs and shared warmth',
    category: 'family'
  },
  {
    id: 'tradition-solo',
    src: getPhotoUrl('2J2A7309.jpg'),
    alt: 'Anna in traditional ceremonial veshti',
    caption: 'Grace, peace, and tradition',
    category: 'solo'
  },
  {
    id: 'family-portrait-four',
    src: getPhotoUrl('2J2A8072.jpg'),
    alt: 'Family portrait together',
    caption: 'Family at the heart of everything',
    category: 'family'
  },
  {
    id: 'parents-portrait',
    src: getPhotoUrl('2J2A8086.jpg'),
    alt: 'Anna with father and mother',
    caption: 'Cherished blessings and togetherness',
    category: 'family'
  },
  {
    id: 'family-full-ceremony',
    src: getPhotoUrl('2J2A8036.jpg'),
    alt: 'Full family traditional ceremony',
    caption: 'Celebrations that stay with us',
    category: 'group'
  }
];

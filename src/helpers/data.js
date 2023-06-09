export const getShoesForCategory = async (
  category
) => {
  // This method simulates a database request.
  // For realism, we'll wait about 2 seconds.
  await delay(Math.random() * 2000 + 500);

  if (!category) {
    return SHOES;
  }

  return SHOES.filter((shoe) =>
    shoe.categories.includes(
      category.toLowerCase()
    )
  );
};

const delay = (ms) =>
  new Promise((resolve) =>
    setTimeout(resolve, ms)
  );

const SHOES = [
  {
    slug: 'af1',
    name: 'Nike Air Force 1 ‘07',
    imageSrc: '/assets/af1.webp',
    price: 14500,
    salePrice: null,
    releaseDate:
      Date.now() - 1000 * 60 * 60 * 24 * 120,
    numOfColors: 2,
    categories: [
      'basketball',
      'skateboarding',
      'lifestyle',
      'bestsellers',
    ],
  },
  {
    slug: 'tech-challenge',
    name: 'NikeCourt Tech Challenge 20',
    imageSrc: '/assets/tech-challenge.jpg',
    price: 16500,
    salePrice: null,
    // 1 hour ago! 🔥
    releaseDate: Date.now() - 1000 * 60 * 60 * 1,
    numOfColors: 2,
    categories: ['basketball', 'training'],
  },
  {
    slug: 'metcon-5',
    name: 'Nike Metcon 5 AMP',
    imageSrc: '/assets/metcon-5.jpg',
    price: 16500,
    salePrice: null,
    releaseDate:
      Date.now() - 1000 * 60 * 60 * 24 * 2,
    numOfColors: 1,
    categories: ['running', 'bestsellers'],
  },
  {
    slug: 'phantom',
    name: 'Nike Phantom Vision',
    imageSrc: '/assets/phantom.jpg',
    price: 16500,
    salePrice: null,
    releaseDate:
      Date.now() - 1000 * 60 * 60 * 24 * 4,
    numOfColors: 4,
    categories: ['training  ', 'running'],
  },
  {
    slug: 'pegasus',
    name: 'Nike Air Zoom Pegasus',
    imageSrc: '/assets/pegasus.jpg',
    price: 16500,
    salePrice: null,
    releaseDate:
      Date.now() - 1000 * 60 * 60 * 24 * 16,
    numOfColors: 1,
    categories: ['bestsellers', 'skateboarding'],
  },
  {
    slug: 'joyride',
    name: 'Nike Joyride Dual Run',
    imageSrc: '/assets/joyride.jpg',
    price: 17000,
    salePrice: null,
    releaseDate:
      Date.now() - 1000 * 60 * 60 * 24 * 40,
    numOfColors: 2,
    categories: [
      'running',
      'basketball',
      'bestsellers',
    ],
  },
  {
    slug: 'legend-academy',
    name: 'Nike Tiempo Legend 8',
    imageSrc: '/assets/legend-academy.jpg',
    price: 16500,
    salePrice: 12500,
    releaseDate:
      Date.now() - 1000 * 60 * 60 * 24 * 50,
    numOfColors: 8,
    categories: ['lifestyle', 'training'],
  },
  {
    slug: 'react-infinity',
    name: 'Nike React Infinity Pro',
    imageSrc: '/assets/react-infinity.jpg',
    price: 16000,
    salePrice: 14500,
    releaseDate:
      Date.now() - 1000 * 60 * 60 * 24 * 75,
    numOfColors: 1,
    categories: [
      'bestsellers',
      'running',
      'training',
    ],
  },
  {
    slug: 'phantom-flyknit',
    name: 'Nike React Phantom Run Flyknit 2',
    imageSrc: '/assets/phantom-flyknit.jpg',
    price: 18500,
    salePrice: 16000,
    releaseDate:
      Date.now() - 1000 * 60 * 60 * 24 * 100,
    numOfColors: 4,
    categories: [
      'running',
      'training',
      'lifestyle',
    ],
  },
  {
    slug: 'lebron',
    name: 'LeBron 17',
    imageSrc: '/assets/lebron.jpg',
    price: 26000,
    salePrice: null,
    releaseDate:
      Date.now() - 1000 * 60 * 60 * 24 * 120,
    numOfColors: 1,
    categories: ['basketball', 'skateboarding'],
  },
  {
    slug: 'flyease',
    name: 'Nike Go FlyEase',
    imageSrc: '/assets/flyease.webp',
    price: 16500,
    salePrice: null,
    releaseDate:
      Date.now() - 1000 * 60 * 60 * 24 * 5,
    numOfColors: 2,
    categories: [
      'training',
      'running',
      'lifestyle',
    ],
  },
  {
    slug: 'air-jordan-low',
    name: 'Air Jordan 1 Low',
    imageSrc: '/assets/air-jordan-low.webp',
    price: 14500,
    salePrice: null,
    releaseDate:
      Date.now() - 1000 * 60 * 60 * 24 * 15,
    numOfColors: 1,
    categories: [
      'training',
      'lifestyle',
      'basketball',
      'skateboarding',
    ],
  },
  {
    slug: 'air-jordan-mid',
    name: 'Air Jordan 1 Mid',
    imageSrc: '/assets/air-jordan-mid.webp',
    price: 16500,
    salePrice: null,
    releaseDate:
      Date.now() - 1000 * 60 * 60 * 24 * 15,
    numOfColors: 1,
    categories: [
      'training',
      'lifestyle',
      'basketball',
    ],
  },
  {
    slug: 'air-force-1-shadow',
    name: 'Nike Air Force 1 Shadow',
    imageSrc: '/assets/air-force-1-shadow.webp',
    price: 17000,
    salePrice: null,
    releaseDate:
      Date.now() - 1000 * 60 * 60 * 24 * 2,
    numOfColors: 2,
    categories: [
      'bestsellers',
      'running',
      'skateboarding',
    ],
  },
  {
    slug: 'nike-free-metcon-5',
    name: 'Nike Free Metcon 5',
    imageSrc: '/assets/nike-free-metcon-5.webp',
    price: 16000,
    salePrice: null,
    releaseDate:
      Date.now() - 1000 * 60 * 60 * 24 * 30,
    numOfColors: 5,
    categories: [
      'lifestyle',
      'running',
      'training',
    ],
  },
];

export default SHOES;

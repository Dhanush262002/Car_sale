
import { Vehicle, VehicleType, Testimonial } from './types';

export const MOCK_VEHICLES: Vehicle[] = [
  // CARS
  {
    id: 'car-1',
    name: 'Toyota Fortuner Legender',
    type: VehicleType.CAR,
    price: 4500000,
    images: [
      'https://images.unsplash.com/photo-1626847037657-fd34d2eb3b52?q=80&w=1000',
      'https://images.unsplash.com/photo-1533473359331-0135ef1bcfb0?q=80&w=1000',
      'https://images.unsplash.com/photo-1494905998402-395d579af979?q=80&w=1000'
    ],
    year: 2023,
    mileage: 12000,
    fuel: 'Diesel',
    transmission: 'Automatic',
    color: 'White',
    owners: 1,
    featured: true,
    description: "The King of SUVs. This Fortuner Legender 4x4 comes with a powerful 2.8L Diesel engine, dual-tone leather interiors, wireless charging, and commanding road presence. Meticulously maintained by a single owner."
  },
  {
    id: 'car-2',
    name: 'BMW 5 Series 530i',
    type: VehicleType.CAR,
    price: 5800000,
    images: [
      'https://images.unsplash.com/photo-1555215695-3004980adade?q=80&w=1000',
      'https://images.unsplash.com/photo-1580273916550-e323be2ae537?q=80&w=1000',
      'https://images.unsplash.com/photo-1556189250-72ba954e9664?q=80&w=1000'
    ],
    year: 2022,
    mileage: 18000,
    fuel: 'Petrol',
    transmission: 'Automatic',
    color: 'Blue',
    owners: 1,
    featured: true,
    description: "Experience sheer driving pleasure. This 5 Series M Sport features gesture control, laser lights, Harman Kardon sound system, and a silky smooth petrol engine. Company serviced with full history."
  },
  {
    id: 'car-3',
    name: 'Mahindra Thar LX Hard Top',
    type: VehicleType.CAR,
    price: 1650000,
    images: [
      'https://images.unsplash.com/photo-1669288647496-e175402a7b62?q=80&w=1000',
      'https://images.unsplash.com/photo-1619682817481-e994891cd1f5?q=80&w=1000',
      'https://images.unsplash.com/photo-1533473359331-0135ef1bcfb0?q=80&w=1000'
    ],
    year: 2023,
    mileage: 8000,
    fuel: 'Diesel',
    transmission: 'Automatic',
    color: 'Red',
    owners: 1,
    featured: false,
    description: "Go anywhere in style. The iconic Thar with 4x4 capability, convertible hard top option, and rugged interiors. Perfect for weekend getaways and off-road adventures."
  },
  {
    id: 'car-4',
    name: 'Mercedes-Benz C-Class',
    type: VehicleType.CAR,
    price: 4200000,
    images: [
      'https://images.unsplash.com/photo-1617788138017-80ad40651399?q=80&w=1000',
      'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?q=80&w=1000',
      'https://images.unsplash.com/photo-1563720223185-11003d516935?q=80&w=1000'
    ],
    year: 2021,
    mileage: 25000,
    fuel: 'Diesel',
    transmission: 'Automatic',
    color: 'Silver',
    owners: 2,
    featured: false,
    description: "Luxury meets comfort. C220d Progressive edition with panoramic sunroof, ambient lighting (64 colors), and active brake assist. Recently serviced with new tyres."
  },
  {
    id: 'car-5',
    name: 'Hyundai Creta SX(O)',
    type: VehicleType.CAR,
    price: 1800000,
    images: [
      'https://images.unsplash.com/photo-1615764835848-15c2d3a35d94?q=80&w=1000',
      'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?q=80&w=1000',
      'https://images.unsplash.com/photo-1582211993206-a67dd3f12674?q=80&w=1000'
    ],
    year: 2023,
    mileage: 5000,
    fuel: 'Petrol',
    transmission: 'Automatic',
    color: 'Black',
    owners: 1,
    featured: true,
    description: "Top model Creta with ADAS features, Bose sound system, ventilated seats, and panoramic sunroof. Practically brand new condition."
  },

  // BIKES
  {
    id: 'bike-1',
    name: 'Royal Enfield Continental GT 650',
    type: VehicleType.BIKE,
    price: 340000,
    images: [
      'https://images.unsplash.com/photo-1622185135505-2d795043906a?q=80&w=1000',
      'https://images.unsplash.com/photo-1558981403-c5f9899a28bc?q=80&w=1000',
      'https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?q=80&w=1000'
    ],
    year: 2022,
    mileage: 4500,
    fuel: 'Petrol',
    transmission: 'Manual',
    color: 'Chrome',
    owners: 1,
    featured: true,
    description: "The ultimate cafe racer. Mr. Clean edition with chrome tank. Fitted with AEW exhaust, bar-end mirrors, and sump guard. Sounds aggressive and rides smooth."
  },
  {
    id: 'bike-2',
    name: 'Kawasaki Ninja ZX-10R',
    type: VehicleType.BIKE,
    price: 1550000,
    images: [
      'https://images.unsplash.com/photo-1599819811279-d5ad9cccf838?q=80&w=1000',
      'https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?q=80&w=1000',
      'https://images.unsplash.com/photo-1615172282427-9a5752d358cd?q=80&w=1000'
    ],
    year: 2023,
    mileage: 2000,
    fuel: 'Petrol',
    transmission: 'Manual',
    color: 'Green',
    owners: 1,
    featured: true,
    description: "Track weapon. 998cc inline-four screamer. Comes with KQS (Kawasaki Quick Shifter), Launch Control, and Cornering Management Function. Never tracked, only highway ridden."
  },
  {
    id: 'bike-3',
    name: 'Triumph Tiger 900 Rally Pro',
    type: VehicleType.BIKE,
    price: 1400000,
    images: [
      'https://images.unsplash.com/photo-1591637333184-19aa84b3e01f?q=80&w=1000',
      'https://images.unsplash.com/photo-1558981248-f9d2d09c258d?q=80&w=1000',
      'https://images.unsplash.com/photo-1525160354320-54e6eb12336e?q=80&w=1000'
    ],
    year: 2021,
    mileage: 15000,
    fuel: 'Petrol',
    transmission: 'Manual',
    color: 'White',
    owners: 1,
    featured: false,
    description: "Adventure ready. Top spec Rally Pro model with heated seats, shift assist, and off-road pro mode. Includes full luggage panniers and top box."
  },
  {
    id: 'bike-4',
    name: 'Harley Davidson Iron 883',
    type: VehicleType.BIKE,
    price: 850000,
    images: [
      'https://images.unsplash.com/photo-1558981806-ec527fa84f3d?q=80&w=1000',
      'https://images.unsplash.com/photo-1615172282427-9a5752d358cd?q=80&w=1000',
      'https://images.unsplash.com/photo-1525160354320-54e6eb12336e?q=80&w=1000'
    ],
    year: 2019,
    mileage: 9500,
    fuel: 'Petrol',
    transmission: 'Manual',
    color: 'Black',
    owners: 2,
    featured: false,
    description: "American muscle on two wheels. Matte black finish, Screamin' Eagle intake, and Vance & Hines Shortshots. A head-turner on every signal."
  },
  {
    id: 'bike-5',
    name: 'KTM 390 Duke',
    type: VehicleType.BIKE,
    price: 280000,
    images: [
      'https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?q=80&w=1000',
      'https://images.unsplash.com/photo-1599819811279-d5ad9cccf838?q=80&w=1000',
      'https://images.unsplash.com/photo-1558981403-c5f9899a28bc?q=80&w=1000'
    ],
    year: 2023,
    mileage: 3000,
    fuel: 'Petrol',
    transmission: 'Manual',
    color: 'Orange',
    owners: 1,
    featured: false,
    description: "Corner rocket. The gen-3 Duke with adjustable suspension, launch control, and track mode. Perfect condition, under warranty."
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    name: "Rajesh Kumar",
    role: "Business Owner",
    content: "Sree Thanya Cars helped me find my dream Fortuner. The process was transparent and the 'Lakh' pricing format made it easy to understand values immediately.",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200"
  },
  {
    id: 2,
    name: "Priya Sharma",
    role: "Software Engineer",
    content: "Bought my first luxury car here. The 7-day return policy gave me peace of mind, but I fell in love with the BMW instantly!",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200"
  },
  {
    id: 3,
    name: "Arun Vijay",
    role: "Bike Enthusiast",
    content: "The selection of premium bikes is unmatched. Found a mint condition Harley Iron 883. Highly recommended!",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200"
  }
];

export const FAQS = [
  {
    question: "How does the 7-day return policy work?",
    answer: "If you are not satisfied with your vehicle, you can return it within 7 days for a full refund, no questions asked, provided it hasn't been driven more than 500km."
  },
  {
    question: "Do you offer financing options?",
    answer: "Yes, we partner with major banks like HDFC, ICICI, and SBI to offer competitive interest rates starting at 8.9% APR for qualified buyers."
  },
  {
    question: "Are the vehicles inspected?",
    answer: "Every vehicle undergoes a rigorous 140-point inspection by certified mechanics before being listed on our platform."
  }
];

export const BLOG_POSTS = [
  {
    id: 1,
    title: "The Future of Electric Vehicles in India",
    summary: "Explore how EVs are changing the automotive landscape with increased range and charging infrastructure growth.",
    image: "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?q=80&w=1000",
    category: "Technology",
    date: "Mar 15, 2024"
  },
  {
    id: 2,
    title: "Top 5 Maintenance Tips for Summer",
    summary: "Get your car ready for the heat with these essential maintenance checks to prevent breakdowns.",
    image: "https://images.unsplash.com/photo-1487754180451-c456f719a1fc?q=80&w=1000",
    category: "Maintenance",
    date: "Apr 02, 2024"
  },
  {
    id: 3,
    title: "Buying vs Leasing: What's Right for You?",
    summary: "A comprehensive guide to understanding the financial pros and cons of buying versus leasing a new car.",
    image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=1000",
    category: "Finance",
    date: "Apr 10, 2024"
  }
];

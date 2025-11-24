import { Vehicle, VehicleType, Testimonial, BlogPost } from './types';

export const MOCK_VEHICLES: Vehicle[] = [
  {
    id: '1',
    name: 'Tesla Model 3 Performance',
    type: VehicleType.CAR,
    price: 45000,
    images: [
      'https://images.unsplash.com/photo-1560958089-b8a1929cea89?q=80&w=1000',
      'https://images.unsplash.com/photo-1536700503339-1e4b06520771?q=80&w=1000',
      'https://images.unsplash.com/photo-1561580125-028ee3bd62eb?q=80&w=1000',
      'https://images.unsplash.com/photo-1571127236794-81c0bbfe1ce3?q=80&w=1000',
      'https://images.unsplash.com/photo-1494905998402-395d579af979?q=80&w=1000'
    ],
    year: 2022,
    mileage: 12000,
    fuel: 'Electric',
    transmission: 'Automatic',
    color: 'Red',
    owners: 1,
    featured: true,
    description: "Experience the thrill of electric performance. This Model 3 features a dual-motor AWD system, accelerating from 0-60 mph in just 3.1 seconds. Comes with Full Self-Driving capability hardware, premium white interior, and 20-inch Übertaurbine Wheels."
  },
  {
    id: '2',
    name: 'Ford Mustang GT',
    type: VehicleType.CAR,
    price: 38000,
    images: [
      'https://images.unsplash.com/photo-1584345604476-8ec5e12e42dd?q=80&w=1000',
      'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?q=80&w=1000',
      'https://images.unsplash.com/photo-1533473359331-0135ef1bcfb0?q=80&w=1000',
      'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=1000'
    ],
    year: 2020,
    mileage: 25000,
    fuel: 'Petrol',
    transmission: 'Manual',
    color: 'Black',
    owners: 2,
    featured: true,
    description: "The American muscle icon. 5.0L V8 engine delivering raw power and an unmistakable roar. Features leather Recaro seats, Brembo brakes, and the Performance Pack Level 2."
  },
  {
    id: '3',
    name: 'Yamaha R1',
    type: VehicleType.BIKE,
    price: 18000,
    images: [
      'https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?q=80&w=1000',
      'https://images.unsplash.com/photo-1599819811279-d5ad9cccf838?q=80&w=1000',
      'https://images.unsplash.com/photo-1558981403-c5f9899a28bc?q=80&w=1000',
      'https://images.unsplash.com/photo-1622185135505-2d795043906a?q=80&w=1000'
    ],
    year: 2023,
    mileage: 1500,
    fuel: 'Petrol',
    transmission: 'Manual',
    color: 'Blue',
    owners: 1,
    featured: true,
    description: "Born from MotoGP. The R1 features a crossplane crankshaft engine, comprehensive electronic rider aids, and track-ready suspension. Meticulously maintained and never dropped."
  },
  {
    id: '4',
    name: 'Mercedes-Benz Sprinter',
    type: VehicleType.VAN,
    price: 55000,
    images: [
      'https://images.unsplash.com/photo-1626084214247-b371131fa432?q=80&w=1000',
      'https://images.unsplash.com/photo-1559416523-140ddc3d238c?q=80&w=1000',
      'https://images.unsplash.com/photo-1520031441872-26514dd970c3?q=80&w=1000',
      'https://images.unsplash.com/photo-1616455579100-2ceaa4eb2d37?q=80&w=1000'
    ],
    year: 2021,
    mileage: 40000,
    fuel: 'Diesel',
    transmission: 'Automatic',
    color: 'White',
    owners: 1,
    description: "The ultimate utility vehicle. High roof, extended wheelbase version perfect for camper conversion or logistics. Features 360-degree camera, heated seats, and advanced tow assist."
  },
  {
    id: '5',
    name: 'Honda Civic Type R',
    type: VehicleType.CAR,
    price: 42000,
    images: [
      'https://images.unsplash.com/photo-1605816988088-774f34dcc42a?q=80&w=1000',
      'https://images.unsplash.com/photo-1606152421811-aa6633cc4210?q=80&w=1000',
      'https://images.unsplash.com/photo-1503376763036-066120622c74?q=80&w=1000',
      'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?q=80&w=1000'
    ],
    year: 2023,
    mileage: 5000,
    fuel: 'Petrol',
    transmission: 'Manual',
    color: 'White',
    owners: 1,
    description: "The fastest FWD car on the market. Precise handling, aggressive aerodynamics, and a 6-speed manual gearbox that is a joy to use. Comes with championship white paint."
  },
  {
    id: '6',
    name: 'Harley Davidson Iron 883',
    type: VehicleType.BIKE,
    price: 12000,
    images: [
      'https://images.unsplash.com/photo-1558981806-ec527fa84f3d?q=80&w=1000',
      'https://images.unsplash.com/photo-1615172282427-9a5752d358cd?q=80&w=1000',
      'https://images.unsplash.com/photo-1525160354320-54e6eb12336e?q=80&w=1000',
      'https://images.unsplash.com/photo-1591637333184-19aa84b3e01f?q=80&w=1000'
    ],
    year: 2019,
    mileage: 8000,
    fuel: 'Petrol',
    transmission: 'Manual',
    color: 'Black',
    owners: 2,
    description: "Raw, blacked-out, stripped-down custom style. This Iron 883 features upgraded Vance & Hines exhaust, custom grips, and a comfortable solo seat."
  },
  {
    id: '7',
    name: 'VW Transporter T6',
    type: VehicleType.VAN,
    price: 32000,
    images: [
      'https://images.unsplash.com/photo-1618331835717-801e976710b2?q=80&w=1000',
      'https://images.unsplash.com/photo-1519806390608-61f894178a9c?q=80&w=1000',
      'https://images.unsplash.com/photo-1625902382588-1a5209da01cd?q=80&w=1000'
    ],
    year: 2018,
    mileage: 60000,
    fuel: 'Diesel',
    transmission: 'Manual',
    color: 'Grey',
    owners: 2,
    description: "Reliable and versatile. Recently serviced with new timing belt. Includes roof rack and ply-lined cargo area. Perfect for tradespeople."
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    name: "Alex Johnson",
    role: "Car Enthusiast",
    content: "The best purchasing experience I've ever had. The AI suggestions were spot on!",
    avatar: "https://picsum.photos/id/1005/100/100"
  },
  {
    id: 2,
    name: "Sarah Williams",
    role: "Daily Commuter",
    content: "Sold my old bike and bought a car in under 24 hours. Incredible speed and service.",
    avatar: "https://picsum.photos/id/1011/100/100"
  },
  {
    id: 3,
    name: "Michael Chen",
    role: "Business Owner",
    content: "Found the perfect van for my logistics business. Highly recommended.",
    avatar: "https://picsum.photos/id/1012/100/100"
  }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 1,
    title: "Top 5 Electric Cars of 2024",
    date: "Oct 15, 2024",
    summary: "A deep dive into the most efficient and powerful EVs hitting the market this year.",
    image: "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?q=80&w=1000",
    category: "Reviews"
  },
  {
    id: 2,
    title: "Maintenance Tips for High Mileage Bikes",
    date: "Oct 12, 2024",
    summary: "Keep your two-wheeler running smooth with these essential maintenance checks.",
    image: "https://images.unsplash.com/photo-1558981403-c5f9899a28bc?q=80&w=1000",
    category: "Maintenance"
  },
  {
    id: 3,
    title: "Why Vans are the New Mobile Offices",
    date: "Oct 08, 2024",
    summary: "Exploring the trend of converting utility vans into comfortable remote workspaces.",
    image: "https://images.unsplash.com/photo-1559416523-140ddc3d238c?q=80&w=1000",
    category: "Lifestyle"
  }
];

export const FAQS = [
  {
    question: "How does the 7-day return policy work?",
    answer: "If you are not satisfied with your vehicle, you can return it within 7 days for a full refund, no questions asked, provided it hasn't been driven more than 500km."
  },
  {
    question: "Do you offer financing options?",
    answer: "Yes, we partner with major banks to offer competitive interest rates starting at 8.9% APR for qualified buyers."
  },
  {
    question: "Are the vehicles inspected?",
    answer: "Every vehicle undergoes a rigorous 140-point inspection by certified mechanics before being listed on our platform."
  }
];
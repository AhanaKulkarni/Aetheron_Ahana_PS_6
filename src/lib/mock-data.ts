// Mock data for industrial purchasing platform

export type UserRole = 'buyer' | 'manufacturer' | 'service_partner' | 'admin';

export interface Machine {
  id: string;
  name: string;
  manufacturer: string;
  category: string;
  image: string;
  basePrice: number;
  specs: {
    capacity: string;
    power: string;
    dimensions: string;
    weight: string;
    voltage: string;
  };
  suitability: {
    spaceRequired: string;
    powerRequired: string;
    industry: string[];
  };
  features: string[];
  verified: boolean;
  trustScore: number;
  leadTime: string;
  warranty: string;
  addOns: AddOn[];
  services: Service[];
}

export interface AddOn {
  id: string;
  name: string;
  price: number;
  description: string;
}

export interface Service {
  id: string;
  name: string;
  price: number;
  description: string;
  duration?: string;
}

export interface SparePart {
  id: string;
  name: string;
  category: string;
  image: string;
  price: number;
  compatibility: string[];
  inStock: boolean;
  deliveryTime: string;
  verified: boolean;
  rating: number;
  reviews: number;
}

export interface RawMaterial {
  id: string;
  name: string;
  grade: string;
  image: string;
  pricePerUnit: number;
  unit: string;
  moq: number;
  available: number;
  deliveryTime: string;
}

export interface Order {
  id: string;
  date: string;
  customer: string;
  items: string[];
  total: number;
  status: 'pending' | 'confirmed' | 'in_production' | 'shipped' | 'delivered';
  paymentStatus: 'pending' | 'advance_paid' | 'milestone_1' | 'completed';
}

export interface Enquiry {
  id: string;
  date: string;
  customer: string;
  product: string;
  message: string;
  status: 'new' | 'quoted' | 'negotiating' | 'closed';
}

export const machines: Machine[] = [
  {
    id: 'cnc-001',
    name: 'Precision CNC Milling Machine',
    manufacturer: 'TechMach Industries',
    category: 'CNC Equipment',
    image: 'https://images.unsplash.com/photo-1666618090858-fbcee636bd3e?w=800',
    basePrice: 2500000,
    specs: {
      capacity: '1000mm x 600mm x 500mm',
      power: '15 kW',
      dimensions: '3000 x 2500 x 2800 mm',
      weight: '4500 kg',
      voltage: '415V, 3-Phase',
    },
    suitability: {
      spaceRequired: '5m x 4m minimum',
      powerRequired: '25 kVA',
      industry: ['Automotive', 'Aerospace', 'Manufacturing'],
    },
    features: [
      'High-precision ball screws',
      'Automatic tool changer (12 tools)',
      'Digital control panel with touch screen',
      'Flood coolant system',
      'Emergency stop mechanism',
    ],
    verified: true,
    trustScore: 4.8,
    leadTime: '45-60 days',
    warranty: '2 years comprehensive',
    addOns: [
      { id: 'ao-1', name: 'Extended Tool Magazine (24 tools)', price: 250000, description: 'Doubles tool capacity' },
      { id: 'ao-2', name: 'Automatic Chip Conveyor', price: 180000, description: 'Automated chip removal' },
      { id: 'ao-3', name: 'Precision Rotary Table', price: 320000, description: '4th axis capability' },
    ],
    services: [
      { id: 's-1', name: 'Installation & Commissioning', price: 80000, description: 'Complete setup by experts' },
      { id: 's-2', name: 'Operator Training (5 days)', price: 50000, description: 'On-site training for operators' },
      { id: 's-3', name: 'AMC - Annual Maintenance', price: 120000, description: 'Yearly maintenance contract' },
    ],
  },
  {
    id: 'lathe-002',
    name: 'Heavy Duty Lathe Machine',
    manufacturer: 'Precision Tools Ltd',
    category: 'Lathe Equipment',
    image: 'https://images.unsplash.com/photo-1647427060118-4911c9821b82?w=800',
    basePrice: 1800000,
    specs: {
      capacity: '1500mm turning length, 400mm swing',
      power: '12 kW',
      dimensions: '4200 x 1800 x 1600 mm',
      weight: '3800 kg',
      voltage: '415V, 3-Phase',
    },
    suitability: {
      spaceRequired: '6m x 3m minimum',
      powerRequired: '20 kVA',
      industry: ['General Manufacturing', 'Metal Fabrication', 'Job Shops'],
    },
    features: [
      'Variable speed control',
      'Hardened bed ways',
      'Quick change tool post',
      'Digital readout system',
      'Splash guard protection',
    ],
    verified: true,
    trustScore: 4.6,
    leadTime: '30-45 days',
    warranty: '18 months comprehensive',
    addOns: [
      { id: 'ao-4', name: 'Steady Rest', price: 45000, description: 'Support for long workpieces' },
      { id: 'ao-5', name: 'Follow Rest', price: 40000, description: 'Moving support system' },
    ],
    services: [
      { id: 's-4', name: 'Installation Service', price: 60000, description: 'Professional installation' },
      { id: 's-5', name: 'Basic Training (3 days)', price: 35000, description: 'Operator training' },
    ],
  },
  {
    id: 'press-003',
    name: 'Hydraulic Press Machine',
    manufacturer: 'HydroForce Systems',
    category: 'Press Equipment',
    image: 'https://images.unsplash.com/photo-1697698532634-ea59b636ccea?w=800',
    basePrice: 3200000,
    specs: {
      capacity: '250 Ton',
      power: '20 kW',
      dimensions: '3500 x 2000 x 4000 mm',
      weight: '12000 kg',
      voltage: '415V, 3-Phase',
    },
    suitability: {
      spaceRequired: '6m x 4m with 5m height',
      powerRequired: '35 kVA',
      industry: ['Automotive', 'Metal Forming', 'Sheet Metal'],
    },
    features: [
      '250-ton pressing capacity',
      'Hydraulic power pack',
      'Programmable stroke control',
      'Safety light curtains',
      'Emergency stop',
    ],
    verified: true,
    trustScore: 4.9,
    leadTime: '60-90 days',
    warranty: '3 years on hydraulics',
    addOns: [
      { id: 'ao-6', name: 'Custom Die Set', price: 480000, description: 'Tailored pressing dies' },
      { id: 'ao-7', name: 'Material Feeding System', price: 350000, description: 'Automated material feed' },
    ],
    services: [
      { id: 's-6', name: 'Installation & Setup', price: 120000, description: 'Complete commissioning' },
      { id: 's-7', name: 'Advanced Training (7 days)', price: 75000, description: 'Comprehensive training' },
      { id: 's-8', name: 'Premium AMC', price: 180000, description: 'Quarterly maintenance' },
    ],
  },
];

export const spareParts: SparePart[] = [
  {
    id: 'sp-001',
    name: 'CNC Ball Screw Assembly',
    category: 'Motion Components',
    image: 'https://images.unsplash.com/photo-1767739791246-9f832345f8f1?w=400',
    price: 85000,
    compatibility: ['CNC Milling', 'CNC Lathe', 'Machining Centers'],
    inStock: true,
    deliveryTime: '3-5 days',
    verified: true,
    rating: 4.7,
    reviews: 142,
  },
  {
    id: 'sp-002',
    name: 'Hydraulic Pump Unit',
    category: 'Hydraulic Systems',
    image: 'https://images.unsplash.com/photo-1767739791246-9f832345f8f1?w=400',
    price: 125000,
    compatibility: ['Hydraulic Press', 'Bending Machine', 'Shearing Machine'],
    inStock: true,
    deliveryTime: '5-7 days',
    verified: true,
    rating: 4.9,
    reviews: 98,
  },
  {
    id: 'sp-003',
    name: 'Spindle Motor Assembly',
    category: 'Motors & Drives',
    image: 'https://images.unsplash.com/photo-1767739791246-9f832345f8f1?w=400',
    price: 195000,
    compatibility: ['CNC Milling', 'Machining Centers'],
    inStock: false,
    deliveryTime: '10-15 days',
    verified: true,
    rating: 4.8,
    reviews: 67,
  },
  {
    id: 'sp-004',
    name: 'Tool Holder Set (12pcs)',
    category: 'Tooling',
    image: 'https://images.unsplash.com/photo-1767739791246-9f832345f8f1?w=400',
    price: 28000,
    compatibility: ['CNC Lathe', 'Lathe Machine'],
    inStock: true,
    deliveryTime: '2-3 days',
    verified: true,
    rating: 4.5,
    reviews: 234,
  },
];

export const rawMaterials: RawMaterial[] = [
  {
    id: 'rm-001',
    name: 'Steel Plates',
    grade: 'IS 2062 Grade A',
    image: 'https://images.unsplash.com/photo-1697698532634-ea59b636ccea?w=400',
    pricePerUnit: 65,
    unit: 'kg',
    moq: 1000,
    available: 50000,
    deliveryTime: '7-10 days',
  },
  {
    id: 'rm-002',
    name: 'Aluminum Rods',
    grade: '6061-T6',
    image: 'https://images.unsplash.com/photo-1697698532634-ea59b636ccea?w=400',
    pricePerUnit: 280,
    unit: 'kg',
    moq: 500,
    available: 15000,
    deliveryTime: '5-7 days',
  },
  {
    id: 'rm-003',
    name: 'Copper Sheets',
    grade: 'C11000',
    image: 'https://images.unsplash.com/photo-1697698532634-ea59b636ccea?w=400',
    pricePerUnit: 720,
    unit: 'kg',
    moq: 250,
    available: 8000,
    deliveryTime: '10-14 days',
  },
];

export const sampleOrders: Order[] = [
  {
    id: 'ORD-2024-001',
    date: '2024-01-15',
    customer: 'ABC Manufacturing Ltd',
    items: ['Precision CNC Milling Machine', 'Installation Service'],
    total: 2580000,
    status: 'in_production',
    paymentStatus: 'advance_paid',
  },
  {
    id: 'ORD-2024-002',
    date: '2024-01-18',
    customer: 'XYZ Industries',
    items: ['Heavy Duty Lathe Machine'],
    total: 1800000,
    status: 'confirmed',
    paymentStatus: 'advance_paid',
  },
];

export const sampleEnquiries: Enquiry[] = [
  {
    id: 'ENQ-2024-045',
    date: '2024-01-20',
    customer: 'PQR Engineering Works',
    product: 'Hydraulic Press Machine',
    message: 'Need quotation for 250-ton hydraulic press with custom dies',
    status: 'new',
  },
  {
    id: 'ENQ-2024-046',
    date: '2024-01-21',
    customer: 'LMN Tools & Dies',
    product: 'CNC Milling Machine',
    message: 'Interested in CNC with extended tool magazine',
    status: 'quoted',
  },
];

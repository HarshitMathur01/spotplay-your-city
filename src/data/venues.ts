import venueCricket from "@/assets/venue-cricket.jpg";
import venueFootball from "@/assets/venue-football.jpg";
import venueBadminton from "@/assets/venue-badminton.jpg";
import venueNets from "@/assets/venue-nets.jpg";

export type Sport = "Cricket" | "Football" | "Badminton" | "Box Cricket";
export type City = "Dhanbad" | "Jamshedpur" | "Ranchi" | "Patna" | "Bokaro" | "Bhubaneswar";

export const CITIES: { name: City; venues: number }[] = [
  { name: "Dhanbad", venues: 84 },
  { name: "Jamshedpur", venues: 112 },
  { name: "Ranchi", venues: 138 },
  { name: "Patna", venues: 96 },
  { name: "Bokaro", venues: 47 },
  { name: "Bhubaneswar", venues: 73 },
];

export const SPORTS: Sport[] = ["Cricket", "Football", "Badminton", "Box Cricket"];

export interface Venue {
  id: string;
  name: string;
  city: City;
  area: string;
  sports: Sport[];
  pricePerHour: number;
  rating: number;
  reviews: number;
  image: string;
  availableNow: boolean;
  amenities: string[];
}

export const VENUES: Venue[] = [
  {
    id: "v1",
    name: "Greenfield Box Cricket Arena",
    city: "Dhanbad",
    area: "Bank More",
    sports: ["Box Cricket", "Cricket"],
    pricePerHour: 800,
    rating: 4.8,
    reviews: 234,
    image: venueCricket,
    availableNow: true,
    amenities: ["Floodlights", "Parking", "Changing Room", "Drinking Water", "Washroom"],
  },
  {
    id: "v2",
    name: "Steel City Turf",
    city: "Jamshedpur",
    area: "Sakchi",
    sports: ["Football"],
    pricePerHour: 1200,
    rating: 4.7,
    reviews: 412,
    image: venueFootball,
    availableNow: true,
    amenities: ["Floodlights", "Parking", "Cafeteria", "Washroom", "First Aid"],
  },
  {
    id: "v3",
    name: "Smash Badminton Academy",
    city: "Ranchi",
    area: "Lalpur",
    sports: ["Badminton"],
    pricePerHour: 450,
    rating: 4.9,
    reviews: 587,
    image: venueBadminton,
    availableNow: false,
    amenities: ["AC", "Wooden Court", "Coach Available", "Parking", "Pro Shop"],
  },
  {
    id: "v4",
    name: "Patna Sports Complex",
    city: "Patna",
    area: "Boring Road",
    sports: ["Cricket", "Football"],
    pricePerHour: 1000,
    rating: 4.6,
    reviews: 198,
    image: venueNets,
    availableNow: true,
    amenities: ["Floodlights", "Parking", "Changing Room", "Cafeteria"],
  },
  {
    id: "v5",
    name: "Goalkeepers Arena",
    city: "Ranchi",
    area: "Doranda",
    sports: ["Football", "Box Cricket"],
    pricePerHour: 950,
    rating: 4.5,
    reviews: 156,
    image: venueFootball,
    availableNow: true,
    amenities: ["Floodlights", "Parking", "Washroom"],
  },
  {
    id: "v6",
    name: "Pro Cricket Nets",
    city: "Jamshedpur",
    area: "Bistupur",
    sports: ["Cricket"],
    pricePerHour: 600,
    rating: 4.7,
    reviews: 312,
    image: venueNets,
    availableNow: false,
    amenities: ["Floodlights", "Bowling Machine", "Coach", "Parking"],
  },
];

export interface FlashDeal {
  venueId: string;
  venueName: string;
  city: City;
  area: string;
  sport: Sport;
  image: string;
  originalPrice: number;
  discountedPrice: number;
  slot: string;
  endsAt: number; // ms timestamp
}

const now = Date.now();
export const FLASH_DEALS: FlashDeal[] = [
  {
    venueId: "v1",
    venueName: "Greenfield Box Cricket",
    city: "Dhanbad",
    area: "Bank More",
    sport: "Box Cricket",
    image: venueCricket,
    originalPrice: 800,
    discountedPrice: 499,
    slot: "Today 9:00 PM",
    endsAt: now + 1000 * 60 * 60 * 3 + 1000 * 60 * 42,
  },
  {
    venueId: "v2",
    venueName: "Steel City Turf",
    city: "Jamshedpur",
    area: "Sakchi",
    sport: "Football",
    image: venueFootball,
    originalPrice: 1200,
    discountedPrice: 749,
    slot: "Today 10:00 PM",
    endsAt: now + 1000 * 60 * 60 * 5 + 1000 * 60 * 18,
  },
  {
    venueId: "v3",
    venueName: "Smash Academy",
    city: "Ranchi",
    area: "Lalpur",
    sport: "Badminton",
    image: venueBadminton,
    originalPrice: 450,
    discountedPrice: 249,
    slot: "Tonight 8:00 PM",
    endsAt: now + 1000 * 60 * 60 * 2 + 1000 * 60 * 7,
  },
  {
    venueId: "v4",
    venueName: "Patna Sports Complex",
    city: "Patna",
    area: "Boring Road",
    sport: "Cricket",
    image: venueNets,
    originalPrice: 1000,
    discountedPrice: 599,
    slot: "Today 11:00 PM",
    endsAt: now + 1000 * 60 * 60 * 6 + 1000 * 60 * 33,
  },
  {
    venueId: "v5",
    venueName: "Goalkeepers Arena",
    city: "Ranchi",
    area: "Doranda",
    sport: "Football",
    image: venueFootball,
    originalPrice: 950,
    discountedPrice: 549,
    slot: "Tomorrow 6:00 AM",
    endsAt: now + 1000 * 60 * 60 * 4,
  },
];

import toyotaCorolla from "../assets/cars/Toyota-Corolla.jpg";
import hondaCivic from "../assets/cars/Honda-Civic.jpg";
import KiaSportage from "../assets/cars/Kia-Sportage.jpg";
import MgHs from "../assets/cars/MG-HS.jpeg";
import SuzukiALto from "../assets/cars/Suzuki-Alto.jpg";
import NissaNote from "../assets/cars/Nissan-Note.jpeg";
import hyundaiElantra from "../assets/cars/Hyundai-Elantra.jpg";

/* Customers */
import customer1 from "../assets/customers/avatar13.jpg";
import customer2 from "../assets/customers/avatar14.jpg";
import customer3 from "../assets/customers/avatar8.jpg";

export const cars = [
  {
    id: 1,
    name: "Toyota Corolla",
    type: "Sedan",
    year: 2021,
    image: toyotaCorolla,
    seats: 5,
    fuel: "Petrol",
    transmission: "Automatic",
    location: "Karachi",
    dailyRent: 160,
    available: "Available",
  },
  {
    id: 2,
    name: "Honda Civic",
    type: "Sedan",
    year: 2022,
    image: hondaCivic,
    seats: 5,
    fuel: "Hybrid",
    transmission: "Manual",
    location: "Lahore",
    dailyRent: 130,
    available: "Available",
  },
  {
    id: 3,
    name: "Kia Sportage",
    type: "SUV",
    year: 2023,
    image: KiaSportage,
    seats: 7,
    fuel: "Diesel",
    transmission: "Automatic",
    location: "Islamabad",
    dailyRent: 300,
    available: "Available",
  },
  {
    id: 4,
    name: "Hyundai Elantra",
    type: "Sedan",
    year: 2021,
    image: hyundaiElantra,
    seats: 5,
    fuel: "Petrol",
    transmission: "Automatic",
    location: "Faisalabad",
    dailyRent: 300,
    available: "Available",
  },
  {
    id: 5,
    name: "Suzuki Alto",
    type: "Hatchback",
    year: 2020,
    image: SuzukiALto,
    seats: 4,
    fuel: "Petrol",
    transmission: "Manual",
    location: "Multan",
    dailyRent: 100,
    available: "Available",
  },
  {
    id: 6,
    name: "MG HS",
    type: "SUV",
    year: 2023,
    image: MgHs,
    seats: 5,
    fuel: "Hybrid",
    transmission: "Automatic",
    location: "Peshawar",
    dailyRent: 130,
    available: "Not Available",
  },
  {
    id: 7,
    name: "Nissan Note",
    type: "Hatchback",
    year: 2019,
    image: NissaNote,
    seats: 5,
    fuel: "Hybrid",
    transmission: "Automatic",
    location: "Rawalpindi",
    dailyRent: 250,
    available: "Available",
  },
];

export const testimonials = [
  {
    id: 1,
    name: "Ali Khan",
    city: "Lahore",
    rating: 5,
    text: "Vrooomly made my trip so smooth! The car was in excellent condition and the booking process was effortless. Highly recommended!",
    avatar: customer1,
  },
  {
    id: 2,
    name: "Sarah Ahmed",
    city: "Karachi",
    rating: 4,
    text: "Great service and clean vehicles. I just wish there were more pickup locations, but overall a very good experience.",
    avatar: customer2,
  },
  {
    id: 3,
    name: "Usman Raza",
    city: "Islamabad",
    rating: 5,
    text: "Fantastic platform! I loved how quick the reservation was and the support team was super helpful when I had questions.",
    avatar: customer3,
  },
];

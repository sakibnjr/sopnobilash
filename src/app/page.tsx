"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";
import {
  Search,
  User,
  ShoppingCart,
  ArrowRight,
  ArrowUp,
  Leaf,
  Truck,
  ShieldCheck,
  Check,
  X,
  Plus,
  Minus,
  Menu,
  Sun,
  Droplets,
  Sprout,
  Scissors,
  Star,
  ChevronDown,
  Phone,
  MapPin,
  Clock,
  Send,
  Sparkles,
  CheckCircle2,
  PackageCheck,
  ExternalLink,
  Users,
  MessageCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";

const GOOGLE_MAPS_SHARE_URL = "https://share.google/KYsUA89T0ilh7GdqD";
const GOOGLE_MAPS_EMBED_URL =
  "https://www.google.com/maps?q=%E0%A6%B8%E0%A7%8D%E0%A6%AC%E0%A6%AA%E0%A7%8D%E0%A6%A8+%E0%A6%AC%E0%A6%BF%E0%A6%B2%E0%A6%BE%E0%A6%B8+%E0%A6%A8%E0%A6%BE%E0%A6%B0%E0%A7%8D%E0%A6%B8%E0%A6%BE%E0%A6%B0%E0%A6%BF+Swapna+Bilas+Nursery&output=embed";
const FACEBOOK_PAGE_URL =
  "https://www.facebook.com/p/%E0%A6%B8%E0%A7%8D%E0%A6%AC%E0%A6%AA%E0%A7%8D%E0%A6%A8-%E0%A6%AC%E0%A6%BF%E0%A6%B2%E0%A6%BE%E0%A6%B8-%E0%A6%A8%E0%A6%BE%E0%A6%B0%E0%A7%8D%E0%A6%B8%E0%A6%BE%E0%A6%B0%E0%A6%BF-100082633088405/";
const WHATSAPP_URL = "https://wa.me/8801880803067";

/**
 * Shared container class so Navbar, Hero, Feature Strip, Categories,
 * Why Choose Us, Popular Plants, Garden Guide, Order Steps, Testimonials,
 * FAQ, Order CTA, Contact Form, Map Section, and Footer all align to the exact same left/right bounds.
 */
const CONTAINER_CLASS = "w-full max-w-[1480px] mx-auto px-4 sm:px-8 lg:px-12";

interface CategoryItem {
  id: string;
  name: string;
  count: string;
  image: string;
}

interface PlantProduct {
  id: string;
  name: string;
  price: number;
  priceDisplay: string;
  image: string;
  category: string;
  tag?: string;
}

const CATEGORIES: CategoryItem[] = [
  {
    id: "bougainvillea",
    name: "বাগান বিলাস",
    count: "৪৫+ প্রজাতি",
    image: "/assets/categories/bougainvillea-full.webp",
  },
  {
    id: "flower",
    name: "ফুলের গাছ",
    count: "৬০+ প্রজাতি",
    image: "/assets/categories/hibiscus-full.webp",
  },
  {
    id: "fruit",
    name: "ফল গাছ",
    count: "৩০+ প্রজাতি",
    image: "/assets/categories/mango-full.webp",
  },
  {
    id: "ornamental",
    name: "সাজসজ্জার গাছ",
    count: "৫০+ প্রজাতি",
    image: "/assets/categories/houseplant-full.webp",
  },
  {
    id: "indoor",
    name: "ইনডোর প্ল্যান্ট",
    count: "২৫+ প্রজাতি",
    image: "/assets/categories/snakeplant-full.webp",
  },
  {
    id: "seedling",
    name: "চারা ও কাটিং",
    count: "২০+ প্রজাতি",
    image: "/assets/categories/seedling-full.webp",
  },
];

const POPULAR_PLANTS: PlantProduct[] = [
  {
    id: "bg-magenta",
    name: "বাগান বিলাস (গোলাপি)",
    price: 350,
    priceDisplay: "৳ 350",
    image: "/assets/varients/magenta.webp",
    category: "bougainvillea",
    tag: "বেস্টসেলার",
  },
  {
    id: "bg-white",
    name: "বাগান বিলাস (সাদা)",
    price: 350,
    priceDisplay: "৳ 350",
    image: "/assets/varients/white.webp",
    category: "bougainvillea",
    tag: "জনপ্রিয়",
  },
  {
    id: "bg-orange",
    name: "বাগান বিলাস (কমলা)",
    price: 380,
    priceDisplay: "৳ 380",
    image: "/assets/varients/orange.webp",
    category: "bougainvillea",
    tag: "বিরল রঙ",
  },
  {
    id: "bg-variegated",
    name: "বাগান বিলাস (ভ্যারিগেটেড)",
    price: 450,
    priceDisplay: "৳ 450",
    image: "/assets/varients/pink-white.webp",
    category: "bougainvillea",
    tag: "প্রিমিয়াম",
  },
  {
    id: "bg-yellow",
    name: "বাগান বিলাস (হলুদ)",
    price: 390,
    priceDisplay: "৳ 390",
    image: "/assets/varients/yellow.webp",
    category: "bougainvillea",
  },
  {
    id: "bg-scarlet-red",
    name: "বাগান বিলাস (উজ্জ্বল লাল)",
    price: 400,
    priceDisplay: "৳ 400",
    image: "/assets/varients/scarlet-red.webp",
    category: "bougainvillea",
  },
  {
    id: "bg-violet",
    name: "বাগান বিলাস (বেগুনি)",
    price: 380,
    priceDisplay: "৳ 380",
    image: "/assets/varients/violet.webp",
    category: "bougainvillea",
  },
  {
    id: "bg-peach",
    name: "বাগান বিলাস (পিচ)",
    price: 420,
    priceDisplay: "৳ 420",
    image: "/assets/varients/peach.webp",
    category: "bougainvillea",
  },
  {
    id: "bg-white-magenta",
    name: "বাগান বিলাস (সাদা-ম্যাজেন্টা)",
    price: 450,
    priceDisplay: "৳ 450",
    image: "/assets/varients/white-magenta.webp",
    category: "bougainvillea",
  },
  {
    id: "bg-coral-orange",
    name: "বাগান বিলাস (কোরাল কমলা)",
    price: 390,
    priceDisplay: "৳ 390",
    image: "/assets/varients/coral-orange.webp",
    category: "bougainvillea",
  },
  {
    id: "bg-crimson-red",
    name: "বাগান বিলাস (গাঢ় লাল)",
    price: 400,
    priceDisplay: "৳ 400",
    image: "/assets/varients/crimson-red.webp",
    category: "bougainvillea",
  },
  {
    id: "bg-blush-pink",
    name: "বাগান বিলাস (ব্লাশ পিঙ্ক)",
    price: 360,
    priceDisplay: "৳ 360",
    image: "/assets/varients/blush-pink.webp",
    category: "bougainvillea",
  },
  {
    id: "bg-fuchsia",
    name: "বাগান বিলাস (ফুশিয়া)",
    price: 370,
    priceDisplay: "৳ 370",
    image: "/assets/varients/fuchsia.webp",
    category: "bougainvillea",
  },
  {
    id: "bg-light-pink",
    name: "বাগান বিলাস (হালকা গোলাপি)",
    price: 350,
    priceDisplay: "৳ 350",
    image: "/assets/varients/light-pink.webp",
    category: "bougainvillea",
  },
  {
    id: "bg-purple-pink",
    name: "বাগান বিলাস (পার্পল পিঙ্ক)",
    price: 380,
    priceDisplay: "৳ 380",
    image: "/assets/varients/purple-pink.webp",
    category: "bougainvillea",
  },
  {
    id: "bg-rose-pink",
    name: "বাগান বিলাস (রোজ পিঙ্ক)",
    price: 370,
    priceDisplay: "৳ 370",
    image: "/assets/varients/rose-pink.webp",
    category: "bougainvillea",
  },
];

const NurseryPlantIllustration = () => (
  <svg
    viewBox="0 0 52 52"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="w-11 h-11 sm:w-12 sm:h-12 shrink-0 drop-shadow-xs"
    aria-hidden="true"
  >
    {/* Soft Badge Background */}
    <rect width="52" height="52" rx="14" fill="#EAF5E5" />
    <circle cx="26" cy="26" r="21" stroke="#D1E8C5" strokeWidth="1" strokeDasharray="3 3" />
    {/* Sunlight Aura */}
    <circle cx="36" cy="14" r="5" fill="#FEF08A" opacity="0.75" />
    <path d="M36 7V9M43 14H41M41 9L39.5 10.5M41 19L39.5 17.5" stroke="#F59E0B" strokeWidth="1.4" strokeLinecap="round" />
    {/* Terracotta Planter */}
    <path d="M17 31L19.2 41.5C19.4 42.4 20.2 43 21.1 43H30.9C31.8 43 32.6 42.4 32.8 41.5L35 31H17Z" fill="#EA580C" />
    <path d="M15 28.5H37C37.8 28.5 38.5 29.2 38.5 30C38.5 30.8 37.8 31.5 37 31.5H15C14.2 31.5 13.5 30.8 13.5 30C13.5 29.2 14.2 28.5 15 28.5Z" fill="#C2410C" />
    {/* Soil */}
    <ellipse cx="26" cy="30" rx="9" ry="2.2" fill="#78350F" opacity="0.8" />
    {/* Stem */}
    <path d="M26 29V17" stroke="#2D6A4F" strokeWidth="2.8" strokeLinecap="round" />
    {/* Left Leaf */}
    <path d="M26 23C19 23 16 19 16 14C21 14 24.5 17.5 26 23Z" fill="#52B788" />
    <path d="M26 23C21 21 18.5 18 18 15" stroke="#D8F3DC" strokeWidth="1" strokeLinecap="round" />
    {/* Right Leaf */}
    <path d="M26 19C32 19 35 15 35 10C30 10 27 13.5 26 19Z" fill="#2D6A4F" />
    <path d="M26 19C30 17 32 14 33 11" stroke="#95D5B2" strokeWidth="1" strokeLinecap="round" />
    {/* Fresh Sparkle */}
    <circle cx="14" cy="20" r="1.5" fill="#40916C" />
  </svg>
);

const RareFlowerIllustration = () => (
  <svg
    viewBox="0 0 52 52"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="w-11 h-11 sm:w-12 sm:h-12 shrink-0 drop-shadow-xs"
    aria-hidden="true"
  >
    {/* Soft Badge Background */}
    <rect width="52" height="52" rx="14" fill="#FDF2F8" />
    <circle cx="26" cy="26" r="21" stroke="#FBCFE8" strokeWidth="1" strokeDasharray="3 3" />
    {/* Flower Stem */}
    <path d="M26 43C26 36 28 31 30 25" stroke="#2D6A4F" strokeWidth="2.5" strokeLinecap="round" />
    <path d="M28 35C23 35 20 33 20 30C24 30 27 32 28 35Z" fill="#52B788" />
    {/* Blooming Multi-petal Exotic Flower */}
    <ellipse cx="26" cy="15" rx="6" ry="7.5" fill="#E11D48" />
    <ellipse cx="26" cy="15.5" rx="3.5" ry="5" fill="#FB7185" opacity="0.6" />
    <ellipse cx="17" cy="20" rx="7.5" ry="6" fill="#F43F5E" transform="rotate(-15 17 20)" />
    <ellipse cx="35" cy="20" rx="7.5" ry="6" fill="#E11D48" transform="rotate(15 35 20)" />
    <ellipse cx="20" cy="28" rx="6.5" ry="5.5" fill="#BE123C" transform="rotate(25 20 28)" />
    <ellipse cx="32" cy="28" rx="6.5" ry="5.5" fill="#F43F5E" transform="rotate(-25 32 28)" />
    {/* Golden Center */}
    <circle cx="26" cy="22" r="5" fill="#FDE047" />
    <circle cx="26" cy="22" r="3" fill="#F59E0B" />
    {/* Sparkle for Rare */}
    <path d="M40 10L41 13L44 14L41 15L40 18L39 15L36 14L39 13Z" fill="#F59E0B" />
    <circle cx="12" cy="14" r="1.5" fill="#FB7185" />
  </svg>
);

const SafeDeliveryIllustration = () => (
  <svg
    viewBox="0 0 52 52"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="w-11 h-11 sm:w-12 sm:h-12 shrink-0 drop-shadow-xs"
    aria-hidden="true"
  >
    {/* Soft Badge Background */}
    <rect width="52" height="52" rx="14" fill="#FEF3C7" />
    <circle cx="26" cy="26" r="21" stroke="#FDE68A" strokeWidth="1" strokeDasharray="3 3" />
    {/* Isometric Delivery Box */}
    <path d="M14 24L26 17.5L38 24L26 30.5L14 24Z" fill="#FBBF24" />
    <path d="M14 24L26 30.5V42L14 35.5V24Z" fill="#D97706" />
    <path d="M26 30.5L38 24V35.5L26 42V30.5Z" fill="#B45309" />
    {/* Tape Line */}
    <path d="M26 17.5L26 30.5" stroke="#78350F" strokeWidth="1.6" strokeDasharray="2.5 1.5" />
    {/* Safe Plant emerging */}
    <path d="M26 22V12" stroke="#2D6A4F" strokeWidth="2.4" strokeLinecap="round" />
    <path d="M26 15C21 15 19 12 19 9C23 9 25 11 26 15Z" fill="#4ADE80" />
    <path d="M26 12C31 12 33 9 33 6C29 6 27 8 26 12Z" fill="#15803D" />
    {/* Verified Shield Badge */}
    <circle cx="39" cy="36" r="8" fill="#10B981" />
    <path d="M35.5 36L38 38.5L42.5 33.5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const GardenCareIllustration = () => (
  <svg
    viewBox="0 0 52 52"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="w-11 h-11 sm:w-12 sm:h-12 shrink-0 drop-shadow-xs"
    aria-hidden="true"
  >
    {/* Soft Badge Background */}
    <rect width="52" height="52" rx="14" fill="#E0F2FE" />
    <circle cx="26" cy="26" r="21" stroke="#BAE6FD" strokeWidth="1" strokeDasharray="3 3" />
    {/* Expert Speech Bubble */}
    <path
      d="M13 14C13 10.7 15.7 8 19 8H33C36.3 8 39 10.7 39 14V25C39 28.3 36.3 31 33 31H24L18 36V31H19C15.7 31 13 28.3 13 25V14Z"
      fill="#0284C7"
    />
    {/* Plant Care Icon inside bubble */}
    <path d="M26 25V16" stroke="#E0F2FE" strokeWidth="2.2" strokeLinecap="round" />
    <path d="M26 21C22 21 20 18.5 20 15C23.5 15 25.5 17.5 26 21Z" fill="#86EFAC" />
    <path d="M26 18C30 18 32 15.5 32 12C28.5 12 26.5 14.5 26 18Z" fill="#BBF7D0" />
    {/* Care Heart Badge */}
    <circle cx="16" cy="38" r="7" fill="#F43F5E" />
    <path
      d="M16 35.5C14.8 34.2 12.8 35 12.8 36.6C12.8 38.2 15.2 39.8 16 40.4C16.8 39.8 19.2 38.2 19.2 36.6C19.2 35 17.2 34.2 16 35.5Z"
      fill="white"
    />
    {/* Water Droplet */}
    <path
      d="M38 34C38 32.2 40 29.5 40 29.5C40 29.5 42 32.2 42 34C42 35.1 41.1 36 40 36C38.9 36 38 35.1 38 34Z"
      fill="#38BDF8"
    />
  </svg>
);

const WHY_CHOOSE_ITEMS = [
  {
    id: "nursery",
    title: "নিজস্ব নার্সারিতে পরিচর্যা করা গাছ",
    desc: "সুস্থ-সবল শিকড় ও গুণগত মান নিশ্চিত চারা",
    Artwork: NurseryPlantIllustration,
  },
  {
    id: "varieties",
    title: "বিভিন্ন বিরল ও জনপ্রিয় প্রজাতির সংগ্রহ",
    desc: "বাগান বিলাসসহ দেশি-বিদেশি আকর্ষণীয় ভ্যারিয়েন্ট",
    Artwork: RareFlowerIllustration,
  },
  {
    id: "delivery",
    title: "সারা বাংলাদেশে নিরাপদ ডেলিভারি",
    desc: "গাছের কোনো ক্ষতি না হওয়ার বিশেষ প্যাকিং",
    Artwork: SafeDeliveryIllustration,
  },
  {
    id: "guidance",
    title: "বাগান পরিচর্যা নিয়ে পরামর্শ ও সহায়তা",
    desc: "মাটি তৈরি ও নিয়মিত পরিচর্যায় অভিজ্ঞ পরামর্শ",
    Artwork: GardenCareIllustration,
  },
];

const GARDEN_GUIDES = [
  {
    id: "sunlight",
    badge: "রোদ ও আলো",
    title: "পর্যাপ্ত সূর্যালোক নিশ্চিত করুন",
    description:
      "বাগান বিলাস ও ফুলের গাছে প্রতিদিন অন্তত ৫–৬ ঘণ্টা সরাসরি রোদ প্রয়োজন। পর্যাপ্ত রোদে ফুলের রঙ উজ্জ্বল হয় এবং বছরজুড়ে প্রচুর ফুল ফোটে।",
    tip: "ছাদ বা দক্ষিণমুখী বারান্দা সবচেয়ে উপযুক্ত",
    icon: Sun,
  },
  {
    id: "watering",
    badge: "পানি ব্যবস্থাপনা",
    title: "পরিমিত ও সঠিক নিয়মে পানি দিন",
    description:
      "টবের মাটির উপরের ১–২ ইঞ্চি শুকালে তবেই পানি দিন। অতিরিক্ত পানি বা গোড়ায় পানি জমে থাকলে শিকড় ক্ষতিগ্রস্ত হতে পারে এবং ফুল কম আসে।",
    tip: "সকাল ৭–৯টার মধ্যে পানি দেওয়া উত্তম",
    icon: Droplets,
  },
  {
    id: "fertilizer",
    badge: "মাটি ও পুষ্টি",
    title: "জৈব সার ও সুষম খাবার প্রয়োগ",
    description:
      "মাসে অন্তত একবার ভার্মি কম্পোস্ট, হাড়ের গুঁড়া এবং পটাশ সমৃদ্ধ জৈব সার প্রয়োগ করলে গাছের নতুন কুঁড়ি ও শাখা-প্রশাখা দ্রুত বৃদ্ধি পায়।",
    tip: "প্রতি ৩০ দিনে একবার জৈব সার দিন",
    icon: Sprout,
  },
  {
    id: "pruning",
    badge: "ডাল ছাঁটাই",
    title: "মৌসুমি ছাঁটাই ও আকৃতি প্রদান",
    description:
      "ফুল ঝরে যাওয়ার পর লম্বা ও দুর্বল ডালের আগা হালকা ছেঁটে দিন। এতে গাছ ঝোপালো হয় এবং পরবর্তী মৌসুমে দ্বিগুণ পরিমাণ ফুল আসে।",
    tip: "ফুল শেষ হলে হালকা প্রুনিং করুন",
    icon: Scissors,
  },
];

const ORDER_STEPS = [
  {
    step: "০১",
    title: "পছন্দের গাছ নির্বাচন",
    description:
      "আমাদের সমৃদ্ধ কালেকশন থেকে আপনার পছন্দের বাগান বিলাস, ফুল বা ইনডোর গাছ কার্টে যোগ করুন।",
    icon: Sparkles,
  },
  {
    step: "০২",
    title: "হোয়াটসঅ্যাপ বা ফোনে কনফার্মেশন",
    description:
      "অর্ডার করার পর আমাদের নম্বর (01880-803067 / 01625-409484) থেকে কল বা মেসেজে গাছের রিয়েল ছবি দেখানো হয়।",
    icon: Phone,
  },
  {
    step: "০৩",
    title: "নিরাপদ ভেন্টিলেটেড প্যাকেজিং",
    description:
      "জয়পুরহাট সদর নার্সারি থেকে শিকড়ের আর্দ্রতা ও ডালপালা অক্ষুণ্ণ রেখে বিশেষ বক্সে যত্নসহকারে প্যাক করা হয়।",
    icon: PackageCheck,
  },
  {
    step: "০৪",
    title: "সারা বাংলাদেশে কুরিয়ার ডেলিভারি",
    description:
      "দেশের ৬৪ জেলায় দ্রুততম কুরিয়ার সার্ভিসের মাধ্যমে ২–৪ কার্যদিবসের মধ্যে সুস্থ ও সতেজ গাছ পৌঁছে যাবে আপনার ঠিকানায়।",
    icon: Truck,
  },
];

const TESTIMONIALS = [
  {
    id: "rev-1",
    name: "তানজিলা রহমান",
    location: "ধানমন্ডি, ঢাকা",
    plant: "বাগান বিলাস (ভ্যারিগেটেড ও গোলাপি)",
    rating: 5,
    comment:
      "“জয়পুরহাটের স্বপ্ন বিলাস নার্সারি থেকে কুরিয়ারে ৩টি বাগান বিলাস নিয়েছিলাম। প্যাকেজিং এত চমৎকার ছিল যে একটি পাতাও ঝরেনি। এক মাসের মধ্যেই আমার পুরো বারান্দা ফুলে ভরে গেছে!”",
  },
  {
    id: "rev-2",
    name: "মাহমুদুল হাসান",
    location: "খুলশী, চট্টগ্রাম",
    plant: "বাগান বিলাস (কমলা) ও আম্রপালি চারা",
    rating: 5,
    comment:
      "“ফেসবুক পেজে তাদের ৭ হাজারের বেশি ফলোয়ারের রিভিউ দেখে অর্ডার করেছিলাম। ভেন্টিলেটেড বক্সিং দেখে মুগ্ধ হয়েছি—গাছগুলো একদম নার্সারির মতোই সতেজ পেয়েছি।”",
  },
  {
    id: "rev-3",
    name: "নুসরাত জাহান",
    location: "রাজশাহী সদর",
    plant: "ইনডোর প্ল্যান্ট ও বাগান বিলাস (সাদা)",
    rating: 5,
    comment:
      "“একজন তরুণ উদ্যোক্তা ও শখের বাগানি হিসেবে ভাইয়ার ব্যবহার এবং গাছের মান অসাধারণ। টবের মাটি তৈরি ও সার দেওয়ার নিয়ম সম্পর্কেও ফোনে দারুণ গাইড করেছেন।”",
  },
];

const FAQS = [
  {
    question: "স্বপ্ন বিলাস নার্সারি কোথায় অবস্থিত? সরাসরি এসে কি গাছ কেনা যাবে?",
    answer:
      "আমাদের নার্সারি জয়পুরহাট সদর (জয়পুরহাট - হিলি হাইওয়ে সংলগ্ন, গুগল ম্যাপ প্লাস কোড: 428H+6CR)-এ অবস্থিত। আপনি যেকোনো দিন সরাসরি নার্সারিতে এসে আপনার পছন্দের বাগান বিলাস, ফুল ও ফলের চারা দেখে সংগ্রহ করতে পারবেন।",
  },
  {
    question: "জয়পুরহাট থেকে কুরিয়ারে গাছ পাঠালে গাছ কি সতেজ ও অক্ষত থাকে?",
    answer:
      "হ্যাঁ, শতভাগ সতেজ থাকে। আমরা ময়েশ্চারাইজড রুটিং মিডিয়া ও বিশেষ ভেন্টিলেটেড শক্ত কার্টন বক্সে গাছ প্যাক করি, যাতে ৪–৫ দিন পর্যন্ত গাছের পাতা ও শিকড় একদম সতেজ থাকে।",
  },
  {
    question: "কীভাবে অর্ডার করব এবং যোগাযোগের নম্বর কী?",
    answer:
      "ওয়েবসাইট থেকে কার্টে যোগ করে অর্ডার করতে পারেন, অথবা সরাসরি আমাদের অফিশিয়াল ফেসবুক পেজ (স্বপ্ন বিলাস নার্সারি | Joypur) কিংবা মোবাইল/হোয়াটসঅ্যাপ নম্বরে (01880-803067, 01625-409484) কল বা মেসেজ করে অর্ডার করতে পারেন।",
  },
  {
    question: "ডেলিভারির সময় কোনো গাছ ক্ষতিগ্রস্ত হলে কি রিপ্লেসমেন্ট পাওয়া যাবে?",
    answer:
      "অবশ্যই! আমাদের রয়েছে ১০০% নিরাপদ ডেলিভারি গ্যারান্টি। আনবক্সিং করার সময় কোনো গাছ ভাঙা বা ক্ষতিগ্রস্ত অবস্থায় পেলে ভিডিও বা ছবি পাঠালে আমরা নতুন গাছ পাঠিয়ে দেবো।",
  },
  {
    question: "গাছ হাতে পাওয়ার পর প্রথম কাজ কী হবে?",
    answer:
      "গাছের বক্স খুলে প্রথমে ছায়াযুক্ত ও বাতাস চলাচল করে এমন স্থানে ২৪ ঘণ্টা রাখুন এবং গোড়ায় সামান্য পানি দিন। ২–৩ দিন পর ধীরে ধীরে রোদে দিন এবং প্রয়োজনে বড় টবে প্রতিস্থাপন করুন।",
  },
];

const NAV_LINKS = [
  { label: "হোম", href: "#home" },
  { label: "গাছের কালেকশন", href: "#categories" },
  { label: "বাগান গাইড", href: "#garden-guide" },
  { label: "আমাদের সম্পর্কে", href: "#why-us" },
  { label: "যোগাযোগ", href: "#contact" },
];

function SectionHeader({
  title,
  subtitle,
}: {
  title: string;
  subtitle: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, margin: "-40px" }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="text-center flex flex-col items-center"
    >
      <div className="inline-flex items-center gap-3.5 sm:gap-5">
        {/* Left inward-pointing green arrow (───▸) */}
        <svg
          width="46"
          height="16"
          viewBox="0 0 46 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="hidden sm:block text-[#3A6B1F] shrink-0"
          aria-hidden="true"
        >
          <line
            x1="2"
            y1="8"
            x2="36"
            y2="8"
            stroke="currentColor"
            strokeWidth="2.2"
            strokeLinecap="round"
          />
          <path
            d="M34 3L42 8L34 13V3Z"
            fill="currentColor"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinejoin="round"
          />
        </svg>

        <h2 className="text-[24px] min-[380px]:text-[26px] sm:text-[32px] lg:text-[35px] font-bold text-[#132A13] tracking-tight leading-snug">
          {title}
        </h2>

        {/* Right inward-pointing green arrow (◂───) */}
        <svg
          width="46"
          height="16"
          viewBox="0 0 46 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="hidden sm:block text-[#3A6B1F] shrink-0"
          aria-hidden="true"
        >
          <line
            x1="44"
            y1="8"
            x2="10"
            y2="8"
            stroke="currentColor"
            strokeWidth="2.2"
            strokeLinecap="round"
          />
          <path
            d="M12 3L4 8L12 13V3Z"
            fill="currentColor"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinejoin="round"
          />
        </svg>
      </div>
      <p className="text-[#4B5563] text-[14px] sm:text-[16.5px] mt-1.5 px-2 sm:px-0">
        {subtitle}
      </p>
    </motion.div>
  );
}

export default function HomePage() {
  const [selectedCategory, setSelectedCategory] =
    useState<string>("bougainvillea");
  const [showAllPlants, setShowAllPlants] = useState<boolean>(false);
  const [activeNav, setActiveNav] = useState<string>("হোম");
  const [cart, setCart] = useState<Record<string, number>>({});
  const [isCartOpen, setIsCartOpen] = useState<boolean>(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
  const [addedToast, setAddedToast] = useState<string | null>(null);
  // All FAQs closed by default (-1)
  const [openFaqIndex, setOpenFaqIndex] = useState<number>(-1);
  const [contactSubmitted, setContactSubmitted] = useState<boolean>(false);
  const [contactForm, setContactForm] = useState({
    name: "",
    phone: "",
    plantType: "বাগান বিলাস কালেকশন",
    message: "",
  });
  const [scrollProgress, setScrollProgress] = useState<number>(0);
  const [showBackToTop, setShowBackToTop] = useState<boolean>(false);

  // Track window scroll progress for Circular Back to Top indicator
  useEffect(() => {
    const handleScroll = () => {
      const totalScroll =
        document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        const progress = (window.scrollY / totalScroll) * 100;
        setScrollProgress(Math.min(100, Math.max(0, progress)));
      }
      setShowBackToTop(window.scrollY > 280);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu or cart drawer is open
  useEffect(() => {
    if (isMobileMenuOpen || isCartOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen, isCartOpen]);

  // Scroll-spy: keep the active nav item in sync with the section in view
  useEffect(() => {
    const map: Record<string, string> = {
      home: "হোম",
      categories: "গাছের কালেকশন",
      "garden-guide": "বাগান গাইড",
      "why-us": "আমাদের সম্পর্কে",
      contact: "যোগাযোগ",
    };
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && map[entry.target.id]) {
            setActiveNav(map[entry.target.id]);
          }
        });
      },
      { rootMargin: "-35% 0px -60% 0px" }
    );
    Object.keys(map).forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const totalCartItems = Object.values(cart).reduce((sum, q) => sum + q, 0);
  const totalCartPrice = POPULAR_PLANTS.reduce(
    (sum, plant) => sum + (cart[plant.id] || 0) * plant.price,
    0
  );

  const handleAddToCart = (plant: PlantProduct) => {
    setCart((prev) => ({
      ...prev,
      [plant.id]: (prev[plant.id] || 0) + 1,
    }));
    setAddedToast(`“${plant.name}” কার্টে যোগ করা হয়েছে!`);
    setTimeout(() => {
      setAddedToast(null);
    }, 2400);
  };

  const updateCartQty = (id: string, delta: number) => {
    setCart((prev) => {
      const nextQty = (prev[id] || 0) + delta;
      if (nextQty <= 0) {
        const copy = { ...prev };
        delete copy[id];
        return copy;
      }
      return { ...prev, [id]: nextQty };
    });
  };

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setContactSubmitted(true);
    setAddedToast(
      "আপনার বার্তা সফলভাবে পাঠানো হয়েছে! আমরা শীঘ্রই যোগাযোগ করব।"
    );
    setContactForm({
      name: "",
      phone: "",
      plantType: "বাগান বিলাস কালেকশন",
      message: "",
    });
    setTimeout(() => {
      setAddedToast(null);
      setContactSubmitted(false);
    }, 3500);
  };

  return (
    <div id="home" className="min-h-screen bg-[#FAFBF8] text-[#132A13]">
      {/* 1. Sticky Top Navbar */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-xs border-b border-gray-200/70">
        <div
          className={`${CONTAINER_CLASS} h-[62px] sm:h-[78px] flex items-center justify-between`}
        >
          {/* Logo */}
          <a
            href="#home"
            className="flex items-center shrink-0 focus:outline-none"
          >
            <Image
              src="/assets/logo.webp"
              alt="স্বপ্ন বিলাস নার্সারি - Swapna Bilas Nursery"
              width={195}
              height={80}
              className="h-[40px] sm:h-[54px] w-auto object-contain"
              priority
            />
          </a>

          {/* Center Navigation Links */}
          <nav className="hidden md:flex items-center gap-8 lg:gap-10 h-full">
            {NAV_LINKS.map((item) => {
              const isActive = activeNav === item.label;
              return (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setActiveNav(item.label)}
                  className={`relative h-full inline-flex items-center text-[16px] lg:text-[17px] transition-colors ${
                    isActive
                      ? "text-[#3A6B1F] font-semibold"
                      : "text-[#1F2937] hover:text-[#3A6B1F] font-medium"
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-[3.5px] bg-[#3A6B1F] rounded-t-full" />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Right Action Icons */}
          <div className="flex items-center gap-5 sm:gap-6">
            <button
              type="button"
              aria-label="অনুসন্ধান করুন"
              onClick={() => {
                document
                  .getElementById("popular-plants")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
              className="text-[#1F2937] hover:text-[#3A6B1F] transition-colors p-1.5 cursor-pointer"
            >
              <Search className="w-[21px] h-[21px] stroke-[2]" />
            </button>

            <a
              href={FACEBOOK_PAGE_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="অফিশিয়াল ফেসবুক পেজ"
              className="text-[#1F2937] hover:text-[#3A6B1F] transition-colors p-1.5"
            >
              <User className="w-[21px] h-[21px] stroke-[2]" />
            </a>

            <button
              type="button"
              aria-label="কার্ট দেখুন"
              onClick={() => setIsCartOpen(true)}
              className="relative text-[#1F2937] hover:text-[#3A6B1F] transition-colors p-1.5 cursor-pointer"
            >
              <ShoppingCart className="w-[21px] h-[21px] stroke-[2]" />
              <span className="absolute -top-0.5 -right-1 bg-[#3A6B1F] text-white text-[11px] font-bold min-w-[18px] h-[18px] px-1 rounded-full flex items-center justify-center leading-none">
                {totalCartItems}
              </span>
            </button>

            <button
              type="button"
              aria-label="মেনু"
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-navigation-drawer"
              onClick={() => setIsMobileMenuOpen((open) => !open)}
              className="md:hidden text-[#1F2937] hover:text-[#3A6B1F] p-1.5 cursor-pointer rounded-lg hover:bg-gray-100/60 transition-colors"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>

      </header>

      {/* Keep the drawer outside the blurred sticky header so its fixed layer
          covers the viewport on mobile browsers. */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={() => setIsMobileMenuOpen(false)}
            className="fixed inset-0 z-[60] flex justify-end bg-black/50 backdrop-blur-2xs md:hidden"
          >
            <motion.div
              id="mobile-navigation-drawer"
              role="dialog"
              aria-modal="true"
              aria-label="মোবাইল নেভিগেশন"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 320 }}
              onClick={(e) => e.stopPropagation()}
              className="w-[84vw] max-w-[340px] bg-white h-full shadow-2xl flex flex-col justify-between p-5 overflow-y-auto"
            >
              {/* Drawer Top Header */}
              <div>
                <div className="flex items-center justify-between pb-4 border-b border-gray-100">
                  <a
                    href="#home"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="flex items-center shrink-0"
                  >
                    <Image
                      src="/assets/logo.webp"
                      alt="স্বপ্ন বিলাস নার্সারি"
                      width={140}
                      height={55}
                      className="h-9 w-auto object-contain"
                    />
                  </a>
                  <button
                    type="button"
                    aria-label="মেনু বন্ধ করুন"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="p-1.5 rounded-xl text-gray-500 hover:text-[#132A13] hover:bg-[#EFF5EC] transition-colors cursor-pointer"
                  >
                    <X className="w-5 h-5 stroke-[2.2]" />
                  </button>
                </div>

                {/* Navigation Links */}
                <nav className="mt-5 space-y-1.5">
                  {NAV_LINKS.map((item) => {
                    const isActive = activeNav === item.label;
                    return (
                      <a
                        key={item.label}
                        href={item.href}
                        onClick={() => {
                          setActiveNav(item.label);
                          setIsMobileMenuOpen(false);
                        }}
                        className={`flex items-center justify-between py-3 px-3.5 rounded-xl text-[16px] transition-all ${
                          isActive
                            ? "bg-[#EFF5EC] text-[#3A6B1F] font-bold shadow-2xs"
                            : "text-[#1F2937] hover:bg-[#F8FAF7] hover:text-[#3A6B1F] font-medium"
                        }`}
                      >
                        <span>{item.label}</span>
                        {isActive && (
                          <span className="w-2 h-2 rounded-full bg-[#3A6B1F]" />
                        )}
                      </a>
                    );
                  })}
                </nav>
              </div>

              {/* Drawer Bottom Actions & Contacts */}
              <div className="pt-6 border-t border-gray-100 space-y-2.5">
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl bg-[#25D366] text-white font-semibold text-[14px] shadow-2xs hover:bg-[#20BA5A] transition-colors"
                >
                  <MessageCircle className="w-4 h-4 fill-current" />
                  <span>হোয়াটসঅ্যাপে মেসেজ পাঠান</span>
                </a>

                <a
                  href="tel:01880803067"
                  className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl border border-[#3A6B1F]/30 text-[#255C16] font-semibold text-[14px] hover:bg-[#EFF5EC] transition-colors"
                >
                  <Phone className="w-4 h-4 text-[#3A6B1F]" />
                  <span>কল: ০১৮৮০-৮০৩০৬৭</span>
                </a>

                <p className="text-center text-[12px] text-gray-400 pt-1">
                  জয়পুরহাট সদর • সারা দেশে নিরাপদ ডেলিভারি
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Content */}
      <main>
        {/* 2. Hero Section */}
        <section
          className={`${CONTAINER_CLASS} flex flex-col pt-3 sm:pt-4 lg:pt-6`}
        >
          <div className="relative w-full h-[640px] sm:h-auto rounded-2xl sm:rounded-3xl overflow-hidden bg-[#F5F8F2] flex flex-col justify-between sm:min-h-[520px] md:min-h-[560px] lg:min-h-[600px] xl:min-h-[620px]">
            {/* Background Hero Artwork on Desktop/Tablet */}
            <Image
              src="/assets/hero-bg.webp"
              alt="বাগান বিলাস ফুল ও গাছের সমাহার"
              fill
              priority
              sizes="(max-width: 1480px) 100vw, 1480px"
              className="hidden sm:block object-cover object-[right_bottom] select-none pointer-events-none"
            />

            {/* Foreground Hero Content */}
            <div className="relative z-10 flex flex-col justify-between h-full px-4 sm:px-8 lg:px-12 xl:px-14 pt-6 sm:pt-0 pb-4 sm:pb-0 sm:justify-center sm:gap-16 lg:gap-20 sm:min-h-[520px] md:min-h-[560px] lg:min-h-[600px] xl:min-h-[620px]">
              {/* Mobile: edge-to-edge hero image on top with floating chips (proportional flex height) */}
              <div className="sm:hidden relative -mx-4 -mt-6 h-[clamp(180px,60vw,235px)] rounded-b-[2rem] overflow-hidden">
                <Image
                  src="/assets/Hero.webp"
                  alt="বাগান বিলাস"
                  fill
                  priority
                  sizes="100vw"
                  className="object-cover object-[70%_center]"
                />
                <motion.div
                  initial={{ opacity: 0, scale: 0.8, x: -10 }}
                  animate={{ opacity: 1, scale: 1, x: 0 }}
                  transition={{ delay: 0.25, type: "spring", stiffness: 220 }}
                  className="absolute top-2.5 left-3 inline-flex items-center gap-1.5 rounded-full bg-white/95 backdrop-blur px-2.5 py-1 text-[11.5px] font-bold text-[#132A13] shadow-xs"
                >
                  <Star className="w-3.5 h-3.5 fill-[#F59E0B] text-[#F59E0B]" />
                  <span>৫.০ রেটিং</span>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, scale: 0.8, x: 10 }}
                  animate={{ opacity: 1, scale: 1, x: 0 }}
                  transition={{ delay: 0.25, type: "spring", stiffness: 220 }}
                  className="absolute top-2.5 right-3 inline-flex items-center gap-1.5 rounded-full bg-white/95 backdrop-blur px-2.5 py-1 text-[11.5px] font-bold text-[#132A13] shadow-xs"
                >
                  <Users className="w-3.5 h-3.5 fill-[#2563EB] text-[#2563EB]" />
                  <span>৭,৪৫৫+ ফলোয়ার</span>
                </motion.div>
              </div>

              {/* Text block: overlaps image as a white card on mobile */}
              <motion.div
                initial={{ opacity: 0, y: 22 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, ease: "easeOut" }}
                className="relative z-10 max-w-[560px] md:max-w-[580px] lg:max-w-[620px] xl:max-w-[660px] -mt-7 sm:mt-0 bg-white sm:bg-transparent rounded-2xl sm:rounded-none shadow-md sm:shadow-none p-3.5 min-[380px]:p-4 sm:p-0 shrink-0"
              >
                {/* Top Pill Badge */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.15, type: "spring" }}
                  className="inline-block"
                >
                  <Badge className="bg-[#E7EFE2] text-[#264E16] px-3.5 py-1 min-[380px]:py-1.5 sm:px-4 sm:py-1.5 rounded-full text-[13px] min-[380px]:text-[14px] lg:text-[15px] font-medium gap-1.5 sm:gap-2 shadow-2xs">
                    <Leaf className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#3A6B1F] stroke-[2.2]" />
                    <span>আপনার বাগানে রঙের ছোঁয়া</span>
                  </Badge>
                </motion.div>

                {/* Main 3-Line Heading */}
                <h1 className="mt-2 min-[380px]:mt-2.5 sm:mt-4 text-[22px] min-[380px]:text-[25px] sm:text-[34px] md:text-[38px] lg:text-[44px] xl:text-[48px] font-bold leading-[1.22] tracking-tight">
                  <span className="block text-[#132A13]">বাগান বিলাস সহ</span>
                  <span className="block text-[#132A13]">
                    নানা রকমের সৌন্দর্যময়
                  </span>
                  <span className="block text-[#255C16]">
                    ফুল ও গাছের সমাহার
                  </span>
                </h1>

                {/* Subtitle */}
                <p className="mt-1.5 min-[380px]:mt-2 sm:mt-3 lg:mt-3.5 text-[#374151] text-[12.5px] min-[380px]:text-[13.5px] sm:text-[15.5px] lg:text-[16.5px] xl:text-[17px] leading-[1.6] max-w-[540px]">
                  নিজের ঘর, ছাদ বা বাগানকে আরও সুন্দর করে তুলুন
                  <br className="hidden sm:inline" /> স্বপ্ন বিলাস নার্সারির
                  মানসম্মত গাছের কালেকশনের সাথে।
                </p>

                {/* CTA Buttons */}
                <div className="mt-3 min-[380px]:mt-3.5 sm:mt-6 lg:mt-7 flex flex-col sm:flex-row sm:flex-wrap sm:items-center gap-2.5 sm:gap-3.5">
                  <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }} className="w-full sm:w-auto">
                    <Button
                      onClick={() =>
                        document
                          .getElementById("categories")
                          ?.scrollIntoView({ behavior: "smooth" })
                      }
                      className="w-full sm:w-auto h-10 min-[380px]:h-10.5 sm:h-11 lg:h-12 px-6 lg:px-7 text-[14px] min-[380px]:text-[14.5px] sm:text-[15px] lg:text-[16px] font-medium rounded-full bg-[#3A6B1F] hover:bg-[#2E5718] text-white shadow-xs cursor-pointer"
                    >
                      <span>গাছের কালেকশন দেখুন</span>
                      <ArrowRight className="w-4 h-4 lg:w-5 lg:h-5" />
                    </Button>
                  </motion.div>

                  <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }} className="w-full sm:w-auto">
                    <Button
                      variant="outline"
                      onClick={() =>
                        document
                          .getElementById("why-us")
                          ?.scrollIntoView({ behavior: "smooth" })
                      }
                      className="w-full sm:w-auto h-10 min-[380px]:h-10.5 sm:h-11 lg:h-12 px-6 lg:px-7 text-[14px] min-[380px]:text-[14.5px] sm:text-[15px] lg:text-[16px] font-medium rounded-full border-[#6F9659] bg-white/85 text-[#1F2937] hover:bg-[#EFF5EC] cursor-pointer"
                    >
                      আমাদের সম্পর্কে
                    </Button>
                  </motion.div>
                </div>
              </motion.div>

              {/* Bottom Feature Row inside Hero */}
              <motion.div
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35, duration: 0.5 }}
                className="mt-4 min-[380px]:mt-5 sm:mt-0 pt-2 pb-1 sm:pt-0 sm:pb-0 grid grid-cols-3 gap-1.5 min-[380px]:gap-2 shrink-0 sm:flex sm:flex-wrap sm:items-center sm:gap-7 lg:gap-10 xl:gap-12"
              >
                <motion.div whileHover={{ y: -2 }} className="flex flex-col sm:flex-row items-center text-center sm:text-left gap-1 sm:gap-3 cursor-default">
                  <motion.span whileHover={{ scale: 1.12, rotate: 6 }} className="w-8 h-8 min-[380px]:w-9 min-[380px]:h-9 sm:w-10 sm:h-10 lg:w-11 lg:h-11 rounded-full bg-[#3A6B1F] flex items-center justify-center shrink-0 shadow-sm transition-transform">
                    <Leaf className="w-3.5 h-3.5 min-[380px]:w-4 min-[380px]:h-4 sm:w-5 sm:h-5 fill-white stroke-[#3A6B1F] stroke-[1.6]" />
                  </motion.span>
                  <span className="text-[11px] min-[380px]:text-[12px] leading-tight sm:text-[14px] lg:text-[15px] font-semibold text-[#1F2937]">
                    সুস্থ ও মানসম্মত গাছ
                  </span>
                </motion.div>

                <motion.div whileHover={{ y: -2 }} className="flex flex-col sm:flex-row items-center text-center sm:text-left gap-1 sm:gap-3 cursor-default">
                  <motion.span whileHover={{ scale: 1.12, rotate: -6 }} className="w-8 h-8 min-[380px]:w-9 min-[380px]:h-9 sm:w-10 sm:h-10 lg:w-11 lg:h-11 rounded-full bg-[#F59E0B] flex items-center justify-center shrink-0 shadow-sm transition-transform">
                    <Truck className="w-3.5 h-3.5 min-[380px]:w-4 min-[380px]:h-4 sm:w-5 sm:h-5 fill-white stroke-[#F59E0B] stroke-[1.6]" />
                  </motion.span>
                  <span className="text-[11px] min-[380px]:text-[12px] leading-tight sm:text-[14px] lg:text-[15px] font-semibold text-[#1F2937]">
                    সারা দেশে ডেলিভারি
                  </span>
                </motion.div>

                <motion.div whileHover={{ y: -2 }} className="flex flex-col sm:flex-row items-center text-center sm:text-left gap-1 sm:gap-3 cursor-default">
                  <motion.span whileHover={{ scale: 1.12, rotate: 6 }} className="w-8 h-8 min-[380px]:w-9 min-[380px]:h-9 sm:w-10 sm:h-10 lg:w-11 lg:h-11 rounded-full bg-[#2563EB] flex items-center justify-center shrink-0 shadow-sm transition-transform">
                    <ShieldCheck className="w-3.5 h-3.5 min-[380px]:w-4 min-[380px]:h-4 sm:w-5 sm:h-5 fill-white stroke-[#2563EB] stroke-[1.6]" />
                  </motion.span>
                  <span className="text-[11px] min-[380px]:text-[12px] leading-tight sm:text-[14px] lg:text-[15px] font-semibold text-[#1F2937]">
                    নিরাপদ প্যাকেজিং
                  </span>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* 3. আমাদের গাছের কালেকশন (Categories Section — Full Uncropped Plant Images) */}
        <section
          id="categories"
          className={`${CONTAINER_CLASS} pt-10 lg:pt-14 pb-8`}
        >
          <SectionHeader
            title="আমাদের গাছের কালেকশন"
            subtitle="বিভিন্ন প্রজাতির ফুল, ফল ও শৌখিন গাছের সমৃদ্ধ সংগ্রহ"
          />

          <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 lg:gap-5">
            {CATEGORIES.map((cat, idx) => {
              const isSelected = selectedCategory === cat.id;
              return (
                <motion.button
                  key={cat.id}
                  type="button"
                  initial={{ opacity: 0, y: 22 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false, margin: "-30px" }}
                  transition={{ duration: 0.45, delay: idx * 0.07, ease: "easeOut" }}
                  whileHover={{ y: -6, scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`group rounded-2xl p-3 sm:p-4 text-center transition-all duration-200 flex flex-col items-center justify-between cursor-pointer ${
                    isSelected
                      ? "bg-[#ECF4E7] border border-[#8BB174] shadow-xs"
                      : "bg-[#F6F8F5] border border-[#E6ECE3] hover:border-[#B5CCA6] hover:bg-[#F1F6EE] hover:shadow-xs"
                  }`}
                >
                  <div className="relative w-full h-[130px] sm:h-[165px] lg:h-[175px] flex items-center justify-center p-1">
                    <Image
                      src={cat.image}
                      alt={cat.name}
                      fill
                      sizes="(max-width: 640px) 45vw, (max-width: 1024px) 30vw, 220px"
                      className="object-contain object-center p-1 transition-transform duration-300 group-hover:scale-108"
                    />
                  </div>
                  <div className="mt-3 pb-0.5">
                    <h3 className="text-[17px] lg:text-[18.5px] font-bold text-[#132A13] leading-snug">
                      {cat.name}
                    </h3>
                    <p className="text-[13.5px] lg:text-[14px] text-[#525E50] mt-0.5">
                      {cat.count}
                    </p>
                  </div>
                </motion.button>
              );
            })}
          </div>
        </section>

        {/* 4. কেন স্বপ্ন বিলাস নার্সারি? (Why Choose Us — Zero Top/Bottom/Right Gap on Photo) */}
        <section id="why-us" className={`${CONTAINER_CLASS} py-6`}>
          <div className="w-full rounded-3xl bg-[#EFF5EC] border border-[#DCE7D4] overflow-hidden grid grid-cols-1 lg:grid-cols-12 items-stretch">
            {/* Left Text Content — Centered & Seamless Full Width Cards */}
            <div className="lg:col-span-5 px-2 py-6 sm:px-4 sm:py-8 lg:px-7 lg:py-10 flex flex-col items-start justify-center text-left">
              <div className="flex items-center justify-start gap-2 sm:gap-2.5">
                {/* Left decorative leaf */}
                <motion.svg
                  initial={{ rotate: -25, opacity: 0 }}
                  whileInView={{ rotate: 0, opacity: 1 }}
                  viewport={{ once: false }}
                  transition={{ duration: 0.5 }}
                  viewBox="0 0 24 24"
                  className="w-5 h-5 sm:w-6 sm:h-6 text-[#4A7C29] shrink-0 -scale-x-100"
                  aria-hidden="true"
                >
                  <path
                    d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"
                    fill="currentColor"
                  />
                  <path
                    d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"
                    stroke="#EFF5EC"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                  />
                </motion.svg>

                <h2 className="text-[22px] sm:text-[28px] lg:text-[32px] font-bold text-[#132A13] tracking-tight">
                  কেন স্বপ্ন বিলাস নার্সারি?
                </h2>

                {/* Right decorative leaf */}
                <motion.svg
                  initial={{ rotate: 25, opacity: 0 }}
                  whileInView={{ rotate: 0, opacity: 1 }}
                  viewport={{ once: false }}
                  transition={{ duration: 0.5 }}
                  viewBox="0 0 24 24"
                  className="w-5 h-5 sm:w-6 sm:h-6 text-[#4A7C29] shrink-0"
                  aria-hidden="true"
                >
                  <path
                    d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"
                    fill="currentColor"
                  />
                  <path
                    d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"
                    stroke="#EFF5EC"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                  />
                </motion.svg>
              </div>

              <p className="mt-2 text-[#374151] text-[15px] lg:text-[17px] leading-[1.6] text-left max-w-[420px]">
                মানসম্মত গাছ, যত্নশীল সেবা এবং
                <br />
                বিশ্বস্ত ডেলিভারি—সবকিছু এক জায়গায়।
              </p>

              {/* Seamless Full-Width Feature Items (Border removed, blended into background) */}
              <div className="mt-6 w-full max-w-full space-y-2 sm:space-y-2.5">
                {WHY_CHOOSE_ITEMS.map((item, idx) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, x: -18 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: false, margin: "-20px" }}
                    transition={{ duration: 0.4, delay: idx * 0.08 }}
                    whileHover={{ x: 6, backgroundColor: "rgba(255, 255, 255, 0.7)" }}
                    className="group flex items-center gap-3.5 sm:gap-4 p-2.5 sm:p-3 rounded-2xl bg-white/30 hover:bg-white/60 transition-all duration-200 text-left w-full cursor-default"
                  >
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 3 }}
                      transition={{ type: "spring", stiffness: 350, damping: 15 }}
                    >
                      <item.Artwork />
                    </motion.div>
                    <div className="min-w-0 flex-1">
                      <h3 className="text-[15px] sm:text-[16px] font-bold text-[#132A13] leading-snug">
                        {item.title}
                      </h3>
                      <p className="text-[12.5px] sm:text-[13px] text-[#556553] mt-0.5 leading-snug">
                        {item.desc}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Right Botanical Leaf + Slanted Nursery Photo (Flush Top, Bottom & Right with 0 Gap) */}
            <div className="lg:col-span-7 relative min-h-[260px] sm:min-h-[320px] lg:min-h-[360px] w-full h-full overflow-hidden">
              {/* Decorative 5-Leaf Botanical Stem SVG along the left slant */}
              <motion.svg
                initial={{ opacity: 0, scale: 0.88 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: false }}
                transition={{ duration: 0.7, delay: 0.2 }}
                viewBox="0 0 180 260"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="hidden lg:block absolute left-[2%] bottom-[8%] w-[155px] h-[225px] z-10 pointer-events-none select-none"
                aria-hidden="true"
              >
                {/* Stem */}
                <path
                  d="M150 230C120 190 88 145 55 85"
                  stroke="#9AC96B"
                  strokeWidth="3.5"
                  strokeLinecap="round"
                />
                {/* Top Tip Leaf */}
                <path
                  d="M58 90C30 65 20 32 18 12C45 22 65 52 58 90Z"
                  fill="#9AC96B"
                />
                {/* Left Upper Leaf */}
                <path
                  d="M84 132C50 135 28 122 18 108C42 96 68 108 84 132Z"
                  fill="#9AC96B"
                />
                {/* Right Upper Leaf */}
                <path
                  d="M86 130C82 95 92 68 105 52C116 76 108 108 86 130Z"
                  fill="#9AC96B"
                />
                {/* Left Lower Leaf */}
                <path
                  d="M116 178C86 186 64 178 52 166C72 152 98 158 116 178Z"
                  fill="#9AC96B"
                />
                {/* Right Lower Leaf */}
                <path
                  d="M118 176C116 144 126 118 138 105C148 126 140 156 118 176Z"
                  fill="#9AC96B"
                />
              </motion.svg>

              {/* High-Res Nursery Photo Flush Top/Bottom/Right with Slanted Left Edge on Desktop */}
              <div className="absolute inset-0 w-full h-full lg:[clip-path:polygon(18%_0%,100%_0%,100%_100%,8%_100%)]">
                <Image
                  src="/assets/Why-choose-us.webp"
                  alt="স্বপ্ন বিলাস নার্সারি"
                  fill
                  sizes="(max-width: 1024px) 100vw, 860px"
                  className="object-cover object-center"
                />
              </div>
            </div>
          </div>
        </section>

        {/* 5. জনপ্রিয় গাছসমূহ (Popular Plants Section) */}
        <section
          id="popular-plants"
          className={`${CONTAINER_CLASS} pt-10 lg:pt-12 pb-8`}
        >
          <SectionHeader
            title="জনপ্রিয় গাছসমূহ"
            subtitle="আমাদের গ্রাহকদের সবচেয়ে পছন্দের কিছু গাছ"
          />

          <div className="mt-8 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4 lg:gap-5 items-stretch">
            {(showAllPlants ? POPULAR_PLANTS : POPULAR_PLANTS.slice(0, 4)).map(
              (plant, idx) => (
                <motion.div
                  layout
                  key={plant.id}
                  initial={{ opacity: 0, y: 18, scale: 0.96 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: false, margin: "-20px" }}
                  transition={{ duration: 0.38, delay: (idx % 5) * 0.06 }}
                  whileHover={{ y: -6 }}
                  className="h-full"
                >
                  <Card
                    className="h-full p-2 sm:p-3 lg:p-3.5 rounded-2xl bg-[#F9FAF8] border border-[#E5EAE2] flex flex-col justify-between hover:shadow-md transition-all duration-200 group"
                  >
                    <div className="relative aspect-[3/4] w-full rounded-xl overflow-hidden bg-[#EEF2EB]">
                      <Image
                        src={plant.image}
                        alt={plant.name}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 33vw, 280px"
                        className="object-cover object-center transition-transform duration-300 group-hover:scale-106"
                      />
                    </div>

                    <div className="pt-3.5 pb-1 px-1 flex items-end justify-between gap-2">
                      <div>
                        <h3 className="text-[13.5px] sm:text-[16px] lg:text-[17px] font-bold text-[#132A13] leading-snug">
                          {plant.name}
                        </h3>
                        <p className="text-[15px] sm:text-[17px] lg:text-[18.5px] font-bold text-[#1B3B13] mt-1">
                          {plant.priceDisplay}
                        </p>
                      </div>

                      <motion.button
                        type="button"
                        whileHover={{ scale: 1.15 }}
                        whileTap={{ scale: 0.88 }}
                        transition={{ type: "spring", stiffness: 450, damping: 15 }}
                        aria-label={`${plant.name} কার্টে যোগ করুন`}
                        onClick={() => handleAddToCart(plant)}
                        className="w-9 h-8 lg:w-10 lg:h-9 rounded-lg bg-[#3A6B1F] hover:bg-[#2E5718] text-white flex items-center justify-center shrink-0 shadow-2xs transition-colors cursor-pointer"
                      >
                        <ShoppingCart className="w-4 h-4 lg:w-[18px] lg:h-[18px] stroke-[2.2]" />
                      </motion.button>
                    </div>
                  </Card>
                </motion.div>
              )
            )}

            {/* 5th Card: More Collection CTA Card */}
            <motion.div
              layout
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              whileHover={{ y: -6 }}
              className="col-span-2 md:col-span-1 rounded-2xl bg-[#ECF3E7] border border-[#DCE7D4] p-5 lg:p-6 flex flex-col items-center justify-center text-center min-h-[200px] lg:min-h-[280px]"
            >
              {/* Botanical Double Leaf Icon */}
              <motion.svg
                whileHover={{ rotate: 12, scale: 1.1 }}
                transition={{ type: "spring" }}
                width="42"
                height="42"
                viewBox="0 0 36 36"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="text-[#3A6B1F] mb-3 cursor-pointer"
                aria-hidden="true"
              >
                <path
                  d="M18 29V15"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
                <path
                  d="M18 22C12 22 8 17.5 8 11C14.5 11 18 15.5 18 22Z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M18 18C24 18 28 13.5 28 7C21.5 7 18 11.5 18 18Z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </motion.svg>

              <p className="text-[15px] sm:text-[16.5px] lg:text-[17.5px] font-bold text-[#132A13] leading-[1.35] px-1 text-center">
                {showAllPlants ? (
                  <span>
                    সবগুলো রঙের বাগান বিলাস
                    <br className="hidden sm:inline" /> দেখানো হচ্ছে
                  </span>
                ) : (
                  <span>
                    আরও অনেক গাছের কালেকশন
                    <br className="hidden sm:inline" /> দেখতে ক্লিক করুন
                  </span>
                )}
              </p>

              <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }} className="mt-4 w-full sm:w-auto">
                <Button
                  onClick={() => setShowAllPlants((prev) => !prev)}
                  className="w-full sm:w-auto h-11 sm:h-10 px-5 text-[14.5px] font-medium rounded-full bg-[#3A6B1F] hover:bg-[#2E5718] text-white cursor-pointer"
                >
                  <span>{showAllPlants ? "সংক্ষিপ্ত দেখুন" : "সব গাছ দেখুন"}</span>
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* 6. বাগান পরিচর্যা ও গাইড (Garden Care Guide Section) */}
        <section
          id="garden-guide"
          className={`${CONTAINER_CLASS} pt-10 lg:pt-14 pb-8`}
        >
          <SectionHeader
            title="বাগান পরিচর্যা ও গাইড"
            subtitle="আপনার শখের বাগান বিলাস ও অন্যান্য গাছ সুস্থ, সতেজ এবং ফুলে ভরা রাখার প্রয়োজনীয় টিপস"
          />

          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5">
            {GARDEN_GUIDES.map((guide, idx) => {
              const IconComponent = guide.icon;
              return (
                <motion.div
                  key={guide.id}
                  initial={{ opacity: 0, y: 22 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false, margin: "-30px" }}
                  transition={{ duration: 0.45, delay: idx * 0.08 }}
                  whileHover={{ y: -6 }}
                  className="rounded-2xl bg-[#F6F8F5] border border-[#E4EBE0] hover:border-[#9CC086] hover:bg-[#F0F5EC] p-6 flex flex-col justify-between transition-colors duration-200 group shadow-2xs hover:shadow-xs"
                >
                  <div>
                    <div className="flex items-center justify-between gap-3">
                      <motion.span
                        whileHover={{ rotate: 12, scale: 1.1 }}
                        transition={{ type: "spring" }}
                        className="w-12 h-12 rounded-2xl bg-[#E3EFE0] text-[#3A6B1F] flex items-center justify-center shrink-0 group-hover:bg-[#3A6B1F] group-hover:text-white transition-colors"
                      >
                        <IconComponent className="w-6 h-6 stroke-[2]" />
                      </motion.span>
                      <span className="text-[13px] font-semibold text-[#2E5D1A] bg-[#E7EFE2] px-3 py-1 rounded-full">
                        {guide.badge}
                      </span>
                    </div>

                    <h3 className="mt-5 text-[19px] lg:text-[20px] font-bold text-[#132A13] leading-snug">
                      {guide.title}
                    </h3>
                    <p className="mt-2.5 text-[14.5px] lg:text-[15px] text-[#4B5563] leading-relaxed">
                      {guide.description}
                    </p>
                  </div>

                  <div className="mt-5 pt-3.5 border-t border-[#E2E9DD] flex items-center gap-2 text-[13.5px] font-semibold text-[#3A6B1F]">
                    <CheckCircle2 className="w-4 h-4 shrink-0" />
                    <span>{guide.tip}</span>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </section>

        {/* 7. সহজ ৪টি ধাপে অর্ডার ও ডেলিভারি প্রক্রিয়া (How Ordering Works) */}
        <section className={`${CONTAINER_CLASS} py-8`}>
          <div className="w-full rounded-3xl bg-[#F0F5EC] border border-[#DCE7D4] px-5 sm:px-8 lg:px-12 py-9 lg:py-12 relative overflow-hidden">
            {/* Subtle decorative leaf watermark in corner */}
            <svg
              width="180"
              height="180"
              viewBox="0 0 120 120"
              fill="none"
              className="absolute -right-8 -bottom-8 text-[#9EC67F]/20 pointer-events-none select-none"
              aria-hidden="true"
            >
              <path
                d="M15 105C15 50 55 15 105 15C105 65 70 105 15 105Z"
                fill="currentColor"
              />
            </svg>

            <SectionHeader
              title="সহজ ৪টি ধাপে অর্ডার করুন"
              subtitle="জয়পুরহাট সদর নার্সারি থেকে সরাসরি আপনার বাগানে সুস্থ ও সতেজ গাছ পৌঁছানোর প্রক্রিয়া"
            />

            <div className="mt-9 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6 relative z-10">
              {ORDER_STEPS.map((item, idx) => {
                const StepIcon = item.icon;
                return (
                  <motion.div
                    key={item.step}
                    initial={{ opacity: 0, y: 22 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, margin: "-20px" }}
                    transition={{ duration: 0.45, delay: idx * 0.1 }}
                    whileHover={{ y: -5 }}
                    className="rounded-2xl bg-white/95 border border-[#DFEAD8] p-5 lg:p-6 flex flex-col justify-between shadow-2xs hover:shadow-xs transition-shadow"
                  >
                    <div>
                      <div className="flex items-center justify-between">
                        <motion.span
                          initial={{ scale: 0 }}
                          whileInView={{ scale: 1 }}
                          viewport={{ once: false }}
                          transition={{ type: "spring", delay: idx * 0.1 + 0.15, stiffness: 300 }}
                          className="inline-flex items-center justify-center px-3.5 py-1 rounded-full bg-[#3A6B1F] text-white text-[14px] font-bold shadow-2xs"
                        >
                          ধাপ {item.step}
                        </motion.span>
                        <span className="w-10 h-10 rounded-xl bg-[#ECF4E7] text-[#3A6B1F] flex items-center justify-center">
                          <StepIcon className="w-5 h-5" />
                        </span>
                      </div>

                      <h3 className="mt-4 text-[18px] lg:text-[19px] font-bold text-[#132A13]">
                        {item.title}
                      </h3>
                      <p className="mt-2 text-[14.5px] text-[#4B5563] leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* 8. গ্রাহকদের ভালোবাসা ও মতামত (Customer Testimonials Section) */}
        <section
          id="testimonials"
          className={`${CONTAINER_CLASS} pt-9 lg:pt-12 pb-8`}
        >
          <SectionHeader
            title="গ্রাহকদের ভালোবাসা ও মতামত"
            subtitle="ফেসবুকে ৭,৪৫৫+ ফলোয়ার এবং সারা দেশের হাজারো বাগানপ্রেমীর আস্থার প্রতীক স্বপ্ন বিলাস নার্সারি"
          />

          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-5">
            {TESTIMONIALS.map((rev, idx) => (
              <motion.div
                key={rev.id}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, margin: "-30px" }}
                transition={{ duration: 0.45, delay: idx * 0.1 }}
                whileHover={{ y: -6 }}
                className="h-full"
              >
                <Card
                  className="h-full p-6 rounded-2xl bg-[#F9FAF8] border border-[#E5EAE2] flex flex-col justify-between hover:shadow-md transition-shadow"
                >
                  <div>
                    {/* Stars & Verified Badge */}
                    <div className="flex items-center justify-between gap-2">
                      <div className="flex items-center gap-1 text-[#E59819]">
                        {Array.from({ length: rev.rating }).map((_, i) => (
                          <Star
                            key={i}
                            className="w-4 h-4 fill-[#E59819] text-[#E59819]"
                          />
                        ))}
                      </div>
                      <span className="inline-flex items-center gap-1 text-[12.5px] font-semibold text-[#2E5D1A] bg-[#ECF4E7] px-2.5 py-0.5 rounded-full">
                        <Check className="w-3 h-3 stroke-[2.5]" />
                        যাচাইকৃত ক্রেতা
                      </span>
                    </div>

                    <p className="mt-4 text-[15px] lg:text-[15.5px] text-[#1F2937] leading-[1.7]">
                      {rev.comment}
                    </p>
                  </div>

                  <div className="mt-5 pt-4 border-t border-[#E6ECE2] flex items-center justify-between gap-3">
                    <div>
                      <h4 className="text-[16px] font-bold text-[#132A13]">
                        {rev.name}
                      </h4>
                      <p className="text-[13px] text-[#525E50]">{rev.location}</p>
                    </div>
                    <span className="text-[12.5px] font-medium text-[#3A6B1F] bg-[#EFF5EC] px-3 py-1 rounded-lg text-right">
                      {rev.plant}
                    </span>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </section>

        {/* 9. সচরাচর জিজ্ঞাসিত প্রশ্ন (FAQ Section — All Closed by Default with Smooth Animation) */}
        <section id="faq" className="w-full bg-[#F0F5EC] py-8 lg:py-11">
          <div className={CONTAINER_CLASS}>
            <SectionHeader
              title="সচরাচর জিজ্ঞাসিত প্রশ্ন"
              subtitle="গাছ অর্ডার, ডেলিভারি ও পরিচর্যা সম্পর্কে আপনার মনে থাকা সাধারণ প্রশ্নের উত্তর"
            />

            <div className="mt-8 w-full space-y-3.5">
            {FAQS.map((faq, index) => {
              const isOpen = openFaqIndex === index;
              return (
                <motion.div
                  key={faq.question}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false }}
                  transition={{ duration: 0.35, delay: index * 0.05 }}
                  className={`w-full rounded-2xl border transition-colors duration-200 overflow-hidden ${
                    isOpen
                      ? "bg-[#ECF4E7] border-[#8BB174] shadow-2xs"
                      : "bg-[#F7F9F6] border-[#E4EBE0] hover:border-[#B5CCA6]"
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaqIndex(isOpen ? -1 : index)}
                    className="w-full px-5 sm:px-7 py-4.5 text-left flex items-center justify-between gap-4 cursor-pointer"
                  >
                    <span className="text-[16.5px] sm:text-[18px] font-bold text-[#132A13]">
                      {faq.question}
                    </span>
                    <motion.span
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.25 }}
                      className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${
                        isOpen
                          ? "bg-[#3A6B1F] text-white"
                          : "bg-[#E5EFE0] text-[#3A6B1F]"
                      }`}
                    >
                      <ChevronDown className="w-4 h-4 stroke-[2.5]" />
                    </motion.span>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        key="content"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.28, ease: [0.04, 0.62, 0.23, 0.98] }}
                        className="overflow-hidden"
                      >
                        <div className="px-5 sm:px-7 pb-5 pt-0.5 text-[15px] sm:text-[16px] text-[#374151] leading-relaxed">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
            </div>
          </div>
        </section>

        {/* 10. যোগাযোগ ও বাগান পরামর্শ সেকশন (Standalone Contact Form Section) */}
        <section id="contact" className={`${CONTAINER_CLASS} pt-8 lg:pt-11 pb-8`}>
          <SectionHeader
            title="যোগাযোগ ও বাগান পরামর্শ"
            subtitle="গাছ অর্ডার বা বাগান পরিচর্যা বিষয়ে যেকোনো পরামর্শের জন্য সরাসরি আমাদের সাথে যোগাযোগ করুন"
          />

          <div className="mt-8 w-full rounded-3xl bg-[#F0F5EC] border border-[#DCE7D4] p-4 sm:p-8 lg:p-11">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              {/* Left Column: Authentic Nursery Contact Details */}
              <motion.div
                initial={{ opacity: 0, x: -24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false, margin: "-30px" }}
                transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                className="lg:col-span-5 space-y-4 sm:space-y-5 lg:self-center"
              >
                <h3 className="text-[18px] min-[380px]:text-[19px] sm:text-[22px] font-bold text-[#132A13] leading-snug">
                  স্বপ্ন বিলাস নার্সারি (Swapna Bilas Nursery)
                </h3>
                <p className="text-[#374151] text-[15px] sm:text-[16px] leading-relaxed">
                  <strong>
                    “ছাত্র, শখের বাগানি, উদ্যোক্তা ও অনলাইন সেলার ❤️🥀”
                  </strong>{" "}
                  — জয়পুরহাট সদর থেকে সারা বাংলাদেশে শতভাগ সুস্থ ও মানসম্মত
                  গাছের অনলাইন এবং সরাসরি সরবরাহকারী।
                </p>

                <div className="space-y-3.5 pt-1">
                  {/* Phone & WhatsApp */}
                  <div className="flex items-start gap-3.5">
                    <span className="w-10 h-10 rounded-xl bg-white text-[#3A6B1F] border border-[#DCE7D4] flex items-center justify-center shrink-0">
                      <Phone className="w-5 h-5" />
                    </span>
                    <div>
                      <p className="text-[13.5px] text-[#525E50]">
                        মোবাইল ও হোয়াটসঅ্যাপ (ফেসবুক ও গুগল ম্যাপ)
                      </p>
                      <div className="flex flex-wrap items-center gap-x-3 gap-y-1 mt-0.5">
                        <a
                          href="tel:01880803067"
                          className="text-[16.5px] font-bold text-[#132A13] hover:text-[#3A6B1F] transition-colors"
                        >
                          ০১৮৮০-৮০৩০৬৭
                        </a>
                        <span className="text-gray-400">|</span>
                        <a
                          href="tel:01625409484"
                          className="text-[16.5px] font-bold text-[#132A13] hover:text-[#3A6B1F] transition-colors"
                        >
                          ০১৬২৫-৪০৯৪৮৪
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* Google Maps Location */}
                  <div className="flex items-start gap-3.5">
                    <span className="w-10 h-10 rounded-xl bg-white text-[#3A6B1F] border border-[#DCE7D4] flex items-center justify-center shrink-0">
                      <MapPin className="w-5 h-5" />
                    </span>
                    <div>
                      <p className="text-[13.5px] text-[#525E50]">
                        নার্সারি লোকেশন (Google Maps Plus Code: 428H+6CR)
                      </p>
                      <p className="text-[16px] font-bold text-[#132A13]">
                        জয়পুরহাট - হিলি হাইওয়ে, জয়পুরহাট সদর, জয়পুরহাট
                      </p>
                    </div>
                  </div>

                  {/* Opening Hours */}
                  <div className="flex items-start gap-3.5">
                    <span className="w-10 h-10 rounded-xl bg-white text-[#3A6B1F] border border-[#DCE7D4] flex items-center justify-center shrink-0">
                      <Clock className="w-5 h-5" />
                    </span>
                    <div>
                      <p className="text-[13.5px] text-[#525E50]">
                        সেবার সময়সূচী
                      </p>
                      <p className="text-[16px] font-bold text-[#132A13]">
                        সপ্তাহে ৭ দিন খোলা (২৪ ঘণ্টা অনলাইন ও সরাসরি নার্সারি
                        সেবা)
                      </p>
                    </div>
                  </div>
                </div>

                {/* Direct Action Buttons */}
                <div className="pt-2 flex flex-col sm:flex-row sm:flex-wrap sm:items-center gap-3">
                  <motion.a
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    href={FACEBOOK_PAGE_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex sm:inline-flex w-full sm:w-auto justify-center items-center gap-2 h-11 sm:h-10 px-4 rounded-full bg-[#3A6B1F] hover:bg-[#2E5718] text-white text-[14px] font-semibold shadow-2xs transition-colors"
                  >
                    <span>ফেসবুক পেজ ভিজিট করুন</span>
                    <ExternalLink className="w-3.5 h-3.5 opacity-85" />
                  </motion.a>

                  <motion.a
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex sm:inline-flex w-full sm:w-auto justify-center items-center gap-2 h-11 sm:h-10 px-4 rounded-full bg-white hover:bg-[#EFF5EC] text-[#132A13] border border-[#8BB174] text-[14px] font-semibold transition-colors"
                  >
                    <MessageCircle className="w-4 h-4 text-[#3A6B1F]" />
                    <span>হোয়াটসঅ্যাপ মেসেজ</span>
                  </motion.a>
                </div>
              </motion.div>

              {/* Right Column: Quick Consultation & Order Request Form */}
              <motion.div
                initial={{ opacity: 0, x: 24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false, margin: "-30px" }}
                transition={{ duration: 0.55, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="lg:col-span-7"
              >
                <form
                  onSubmit={handleContactSubmit}
                  className="rounded-2xl bg-white border border-[#E1EBD9] p-4 sm:p-8 shadow-2xs space-y-4"
                >
                  <h3 className="text-[17px] min-[380px]:text-[18px] sm:text-[20px] font-bold text-[#132A13]">
                    দ্রুত কলব্যাক বা পরামর্শের জন্য তথ্য দিন
                  </h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[14px] font-semibold text-[#1F2937] mb-1.5">
                        আপনার নাম *
                      </label>
                      <input
                        type="text"
                        required
                        value={contactForm.name}
                        onChange={(e) =>
                          setContactForm({
                            ...contactForm,
                            name: e.target.value,
                          })
                        }
                        placeholder="যেমন: আরিফুল ইসলাম"
                        className="w-full h-11 px-4 rounded-xl border border-[#D5E2CE] bg-[#FAFBF9] text-[15px] focus:outline-none focus:border-[#3A6B1F]"
                      />
                    </div>

                    <div>
                      <label className="block text-[14px] font-semibold text-[#1F2937] mb-1.5">
                        মোবাইল নম্বর *
                      </label>
                      <input
                        type="tel"
                        required
                        value={contactForm.phone}
                        onChange={(e) =>
                          setContactForm({
                            ...contactForm,
                            phone: e.target.value,
                          })
                        }
                        placeholder="০১৮XX-XXXXXX"
                        className="w-full h-11 px-4 rounded-xl border border-[#D5E2CE] bg-[#FAFBF9] text-[15px] focus:outline-none focus:border-[#3A6B1F]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[14px] font-semibold text-[#1F2937] mb-1.5">
                      পছন্দের গাছের ধরন
                    </label>
                    <select
                      value={contactForm.plantType}
                      onChange={(e) =>
                        setContactForm({
                          ...contactForm,
                          plantType: e.target.value,
                        })
                      }
                      className="w-full h-11 px-4 rounded-xl border border-[#D5E2CE] bg-[#FAFBF9] text-[15px] focus:outline-none focus:border-[#3A6B1F]"
                    >
                      <option value="বাগান বিলাস কালেকশন">
                        বাগান বিলাস (Bougainvillea) কালেকশন
                      </option>
                      <option value="ফুলের গাছ">দেশি ও বিদেশি ফুলের গাছ</option>
                      <option value="ফল গাছ">
                        বারোমাসি ফলের গাছ (ছাদ বাগান)
                      </option>
                      <option value="ইনডোর ও সাজসজ্জার গাছ">
                        ইনডোর ও সাজসজ্জার শৌখিন গাছ
                      </option>
                      <option value="ছাদ বাগান প্যাকেজ">
                        সম্পূর্ণ ছাদ বাগান সেটআপ পরামর্শ
                      </option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-[14px] font-semibold text-[#1F2937] mb-1.5">
                      আপনার বার্তা বা পছন্দের গাছের নাম
                    </label>
                    <textarea
                      rows={3}
                      value={contactForm.message}
                      onChange={(e) =>
                        setContactForm({
                          ...contactForm,
                          message: e.target.value,
                        })
                      }
                      placeholder="আপনার পছন্দের রঙের বাগান বিলাস বা যেকোনো প্রশ্ন এখানে লিখুন..."
                      className="w-full p-3.5 rounded-xl border border-[#D5E2CE] bg-[#FAFBF9] text-[15px] focus:outline-none focus:border-[#3A6B1F]"
                    />
                  </div>

                  <div className="flex flex-col-reverse sm:flex-row sm:flex-wrap sm:items-center justify-between gap-3 sm:gap-4 pt-1">
                    <p className="text-[13px] text-[#525E50]">
                      * সরাসরি কথা বলতে কল করুন:{" "}
                      <a
                        href="tel:01880803067"
                        className="font-bold text-[#3A6B1F] underline"
                      >
                        01880-803067
                      </a>
                    </p>
                    <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                      <Button
                        type="submit"
                        className="w-full sm:w-auto h-12 sm:h-11 px-7 text-[15px] font-semibold rounded-full bg-[#3A6B1F] hover:bg-[#2E5718] text-white cursor-pointer"
                      >
                        <Send className="w-4 h-4" />
                        <span>
                          {contactSubmitted ? "পাঠানো হয়েছে!" : "বার্তা পাঠান"}
                        </span>
                      </Button>
                    </motion.div>
                  </div>
                </form>
              </motion.div>
            </div>
          </div>
        </section>

        {/* 11. গুগল ম্যাপে আমাদের অবস্থান (Separate Standalone Google Map Section) */}
        <section
          id="location-map"
          className={`${CONTAINER_CLASS} pt-6 pb-6`}
        >
          <SectionHeader
            title="গুগল ম্যাপে আমাদের অবস্থান"
            subtitle="428H+6CR স্বপ্ন বিলাস নার্সারি (Swapna Bilas Nursery), জয়পুরহাট - হিলি হাইওয়ে, জয়পুরহাট সদর"
          />

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, margin: "-30px" }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="mt-8 w-full rounded-3xl overflow-hidden border border-[#CFE0C5] bg-white shadow-2xs"
          >
            <div className="px-6 py-4 bg-[#F0F5EC] border-b border-[#DCE7D4] flex flex-wrap items-center justify-between gap-3">
              <div className="flex items-center gap-2.5 text-[15px] sm:text-[16px] font-bold text-[#132A13]">
                <span className="w-8 h-8 rounded-full bg-[#3A6B1F] text-white flex items-center justify-center shrink-0">
                  <MapPin className="w-4 h-4" />
                </span>
                <span>
                  428H+6CR স্বপ্ন বিলাস নার্সারি (Swapna Bilas Nursery),
                  জয়পুরহাট সদর
                </span>
              </div>
              {/* Desktop/Tablet: button in header */}
              <motion.a
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                href={GOOGLE_MAPS_SHARE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:inline-flex justify-center items-center gap-2 h-9 px-4 rounded-full bg-[#3A6B1F] hover:bg-[#2E5718] text-white text-[13.5px] font-semibold transition-colors"
              >
                <span>গুগল ম্যাপ অ্যাপে খুলুন</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </motion.a>
            </div>
            <iframe
              title="স্বপ্ন বিলাস নার্সারি Swapna Bilas Nursery Google Map"
              src={GOOGLE_MAPS_EMBED_URL}
              width="100%"
              height="380"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-[320px] sm:h-[380px] border-0 block"
            />

            {/* Mobile: full-width button right below the map */}
            <div className="sm:hidden p-4 bg-[#F0F5EC] border-t border-[#DCE7D4]">
              <a
                href={GOOGLE_MAPS_SHARE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex w-full justify-center items-center gap-2 h-12 px-4 rounded-full bg-[#3A6B1F] hover:bg-[#2E5718] text-white text-[14px] font-semibold transition-colors"
              >
                <span>গুগল ম্যাপ অ্যাপে খুলুন</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </motion.div>
        </section>

        {/* 12. Bottom Order CTA Banner (Positioned right before Footer across all screen sizes) */}
        <section id="order-cta" className={`${CONTAINER_CLASS} pt-4 pb-12 lg:pb-14`}>
          <motion.div
            initial={{ opacity: 0, scale: 0.97, y: 22 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: false, margin: "-30px" }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="w-full relative rounded-3xl overflow-hidden min-h-[195px] sm:min-h-[220px] lg:min-h-[250px] flex items-center shadow-xs bg-[#14330F]"
          >
            <Image
              src="/assets/cta-banner-bg.webp"
              alt="আপনার স্বপ্নের বাগান গড়তে আজই অর্ডার করুন"
              fill
              sizes="(max-width: 1480px) 100vw, 1384px"
              className="object-cover object-right select-none pointer-events-none"
            />
            <div className="absolute inset-0 bg-[#14330F]/60 sm:hidden" />

            <div className="relative z-10 w-full px-5 sm:px-10 lg:px-14 py-8 max-w-[640px]">
              <h2 className="text-[23px] sm:text-[30px] lg:text-[36px] font-bold text-white leading-[1.26]">
                আপনার স্বপ্নের বাগান গড়তে
                <br />
                আজই অর্ডার করুন
              </h2>
              <p className="mt-2.5 text-white/90 text-[14.5px] sm:text-[16.5px]">
                পছন্দের গাছ বেছে নিন, আমরা পৌঁছে দেবো আপনার দোরগোড়ায়।
              </p>

              <motion.div
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                className="inline-block mt-5 w-full sm:w-auto"
              >
                <Button
                  variant="white"
                  onClick={() => setIsCartOpen(true)}
                  className="w-full sm:w-auto h-12 sm:h-11 px-6 text-[15px] font-semibold rounded-full bg-[#F4F7F0] hover:bg-white text-[#1A3812] shadow-xs cursor-pointer"
                >
                  <ShoppingCart className="w-4 h-4 text-[#3A6B1F] stroke-[2.3]" />
                  <span>এখনই অর্ডার করুন</span>
                </Button>
              </motion.div>
            </div>
          </motion.div>
        </section>
      </main>

      {/* 13. Reorganized Compact Production Footer */}
      <footer className="bg-[#11260E] text-white border-t border-[#23481C] relative overflow-hidden">
        {/* Main Footer Content */}
        <div className={`${CONTAINER_CLASS} py-9 lg:py-12`}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-8 items-start">
            {/* Column 1: Brand Info (Desktop: 4 cols, Mobile: full) */}
            <div className="lg:col-span-4 space-y-3.5">
              <a href="#home" className="inline-block focus:outline-none">
                <Image
                  src="/assets/logo-footer.webp"
                  alt="স্বপ্ন বিলাস নার্সারি"
                  width={210}
                  height={84}
                  className="h-[46px] sm:h-[50px] w-auto object-contain"
                />
              </a>

              <p className="text-[#A5E876] text-[13.5px] sm:text-[14px] font-semibold">
                “ছাত্র, শখের বাগানি, উদ্যোক্তা ও অনলাইন সেলার ❤️🥀”
              </p>

              <p className="text-white/80 text-[14px] leading-relaxed max-w-sm">
                বাগান বিলাসসহ দেশি-বিদেশি নানা প্রজাতির ফুল, ফল ও ইনডোর গাছের
                বিশ্বস্ত প্রতিষ্ঠান। জয়পুরহাট সদর থেকে সমগ্র বাংলাদেশে নিরাপদ
                ডেলিভারি।
              </p>

              {/* 3 Channel Icons in 1 clean horizontal line (Mobile + Desktop) */}
              <div className="pt-1 flex items-center gap-3">
                <a
                  href={FACEBOOK_PAGE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-[#1A3815] hover:bg-[#1877F2] border border-white/15 flex items-center justify-center text-white transition-all hover:scale-105 shadow-2xs"
                  aria-label="Facebook পেজ (7.4K+ ফলোয়ার)"
                  title="Facebook পেজ (7.4K+ ফলোয়ার)"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </a>

                <a
                  href={GOOGLE_MAPS_SHARE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-[#1A3815] hover:bg-[#EA4335] border border-white/15 flex items-center justify-center text-white transition-all hover:scale-105 shadow-2xs"
                  aria-label="Google Maps লোকেশন"
                  title="Google Maps লোকেশন"
                >
                  <MapPin className="w-4 h-4 text-[#FCA5A5]" />
                </a>

                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-[#1A3815] hover:bg-[#25D366] border border-white/15 flex items-center justify-center text-white transition-all hover:scale-105 shadow-2xs"
                  aria-label="WhatsApp মেসেজ"
                  title="WhatsApp মেসেজ"
                >
                  <MessageCircle className="w-4 h-4 text-[#86EFAC]" />
                </a>
              </div>
            </div>

            {/* Column 2 & 3: Compact 2-column layout on mobile, 2 distinct columns on desktop */}
            <div className="lg:col-span-4 grid grid-cols-2 gap-5 sm:gap-6">
              {/* Quick Links */}
              <div className="space-y-3">
                <h4 className="text-[15.5px] font-bold text-[#A5E876]">
                  প্রয়োজনীয় লিংক
                </h4>
                <ul className="space-y-2 text-[14px] text-white/80">
                  <li>
                    <a
                      href="#home"
                      className="hover:text-white transition-colors"
                    >
                      হোম পেজ
                    </a>
                  </li>
                  <li>
                    <a
                      href="#categories"
                      className="hover:text-white transition-colors"
                    >
                      গাছের সংগ্রহ
                    </a>
                  </li>
                  <li>
                    <a
                      href="#popular-plants"
                      className="hover:text-white transition-colors"
                    >
                      জনপ্রিয় গাছ
                    </a>
                  </li>
                  <li>
                    <a
                      href="#garden-guide"
                      className="hover:text-white transition-colors"
                    >
                      বাগান গাইড
                    </a>
                  </li>
                  <li>
                    <a
                      href="#why-us"
                      className="hover:text-white transition-colors"
                    >
                      আমাদের সম্পর্কে
                    </a>
                  </li>
                  <li>
                    <a
                      href="#faq"
                      className="hover:text-white transition-colors"
                    >
                      জিজ্ঞাসিত প্রশ্ন
                    </a>
                  </li>
                </ul>
              </div>

              {/* Plant Categories */}
              <div className="space-y-3">
                <h4 className="text-[15.5px] font-bold text-[#A5E876]">
                  ক্যাটাগরি
                </h4>
                <ul className="space-y-2 text-[14px] text-white/80">
                  {CATEGORIES.map((c) => (
                    <li key={c.id}>
                      <a
                        href="#categories"
                        onClick={() => setSelectedCategory(c.id)}
                        className="hover:text-white transition-colors truncate block"
                      >
                        {c.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Column 4: Contact & Payment (Desktop: 4 cols, Mobile: full) */}
            <div className="lg:col-span-4 space-y-3">
              <h4 className="text-[15.5px] font-bold text-[#A5E876]">
                ঠিকানা ও যোগাযোগ
              </h4>
              <ul className="space-y-2.5 text-[13.5px] sm:text-[14px] text-white/85">
                <li className="flex items-start gap-2.5">
                  <MapPin className="w-4 h-4 text-[#8ED95B] shrink-0 mt-0.5" />
                  <a
                    href={GOOGLE_MAPS_SHARE_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white transition-colors"
                  >
                    জয়পুরহাট - হিলি হাইওয়ে, জয়পুরহাট সদর (428H+6CR)
                  </a>
                </li>
                <li className="flex items-center gap-2.5">
                  <Phone className="w-4 h-4 text-[#8ED95B] shrink-0" />
                  <div className="flex flex-wrap items-center gap-x-2">
                    <a
                      href="tel:01880803067"
                      className="hover:text-white transition-colors font-semibold"
                    >
                      ০১৮৮০-৮০৩০৬৭
                    </a>
                    <span className="text-white/40">|</span>
                    <a
                      href="tel:01625409484"
                      className="hover:text-white transition-colors font-semibold"
                    >
                      ০১৬২৫-৪০৯৪৮৪
                    </a>
                  </div>
                </li>
                <li className="flex items-center gap-2.5">
                  <Clock className="w-4 h-4 text-[#8ED95B] shrink-0" />
                  <span>সপ্তাহে ৭ দিন খোলা (২৪ ঘণ্টা অনলাইন সেবা)</span>
                </li>
              </ul>

              <div className="pt-1.5">
                <p className="text-[12.5px] text-white/60 mb-2">
                  পেমেন্ট মাধ্যম:
                </p>
                <div className="flex flex-wrap items-center gap-1.5">
                  <span className="px-2.5 py-0.5 rounded bg-white/10 text-[12px] font-medium text-white">
                    ক্যাশ অন ডেলিভারি
                  </span>
                  <span className="px-2.5 py-0.5 rounded bg-[#E2136E]/25 border border-[#E2136E]/40 text-[12px] font-medium text-pink-200">
                    বিকাশ
                  </span>
                  <span className="px-2.5 py-0.5 rounded bg-[#F7941D]/25 border border-[#F7941D]/40 text-[12px] font-medium text-orange-200">
                    নগদ
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Copyright Bar */}
        <div className="border-t border-white/10 bg-[#0D1E0A]">
          <div
            className={`${CONTAINER_CLASS} py-3.5 flex flex-col sm:flex-row items-center justify-between gap-2.5 text-[13px] text-white/60 text-center sm:text-left`}
          >
            <p>
              © ২০২৬ স্বপ্ন বিলাস নার্সারি (Swapna Bilas Nursery)। সর্বস্বত্ব
              সংরক্ষিত।
            </p>
            <p className="text-[12px] text-white/40">জয়পুরহাট সদর, জয়পুরহাট</p>
          </div>
        </div>
      </footer>

      {/* Floating Action Buttons: Back to Top (with progress ring) & WhatsApp (with breathing ring animation) */}
      <div className="fixed bottom-7 right-3.5 sm:bottom-8 sm:right-5 z-40 flex flex-col items-end gap-3 pointer-events-none">
        {/* Back to Top with Circular Scroll Progress Ring */}
        <AnimatePresence>
          {showBackToTop && (
            <motion.button
              type="button"
              initial={{ opacity: 0, scale: 0.7, y: 12 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.7, y: 12 }}
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.92 }}
              transition={{ duration: 0.22 }}
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              aria-label="উপরে যান"
              title={`উপরে স্ক্রল করুন (${Math.round(scrollProgress)}%)`}
              className="relative w-12 h-12 sm:w-[50px] sm:h-[50px] rounded-full shadow-md flex items-center justify-center group cursor-pointer pointer-events-auto bg-white"
            >
              {/* Circular SVG Progress Ring */}
              <svg
                className="w-full h-full -rotate-90 select-none pointer-events-none"
                viewBox="0 0 48 48"
              >
                {/* Background Track */}
                <circle
                  cx="24"
                  cy="24"
                  r="20"
                  stroke="#E2EAD9"
                  strokeWidth="3.2"
                  fill="white"
                />
                {/* Progress Stroke */}
                <circle
                  cx="24"
                  cy="24"
                  r="20"
                  stroke="#3A6B1F"
                  strokeWidth="3.2"
                  strokeLinecap="round"
                  fill="none"
                  strokeDasharray={125.66}
                  strokeDashoffset={125.66 - (scrollProgress / 100) * 125.66}
                  className="transition-[stroke-dashoffset] duration-150"
                />
              </svg>
              <ArrowUp className="w-5 h-5 text-[#245214] stroke-[2.8] absolute transition-transform duration-200 group-hover:-translate-y-0.5" />
            </motion.button>
          )}
        </AnimatePresence>

        {/* WhatsApp Floating Button with Gentle Ring Animation */}
        <motion.a
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.94 }}
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="সরাসরি হোয়াটসঅ্যাপে যোগাযোগ করুন"
          title="হোয়াটসঅ্যাপে মেসেজ পাঠান (০১৮৮০-৮০৩০৬৭)"
          className="relative w-12 h-12 sm:w-[50px] sm:h-[50px] rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-lg hover:shadow-xl pointer-events-auto group cursor-pointer"
        >
          {/* Gentle breathing ripple animation (calm, smooth & non-distracting) */}
          <motion.span
            animate={{ scale: [1, 1.45, 1.6], opacity: [0.5, 0.18, 0] }}
            transition={{
              duration: 2.8,
              repeat: Infinity,
              ease: "easeOut",
            }}
            className="absolute inset-0 rounded-full bg-[#25D366] pointer-events-none"
          />
          <motion.span
            animate={{ scale: [1, 1.25, 1.35], opacity: [0.35, 0.1, 0] }}
            transition={{
              duration: 2.8,
              delay: 0.7,
              repeat: Infinity,
              ease: "easeOut",
            }}
            className="absolute inset-0 rounded-full border-2 border-[#25D366] pointer-events-none"
          />

          {/* WhatsApp Icon */}
          <svg
            className="w-6 h-6 sm:w-[26px] sm:h-[26px] fill-current relative z-10 drop-shadow-xs"
            viewBox="0 0 24 24"
          >
            <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
          </svg>

          {/* Desktop Hover Tooltip */}
          <span className="hidden sm:group-hover:flex absolute right-full mr-3 top-1/2 -translate-y-1/2 px-3 py-1.5 rounded-xl bg-[#132A13] text-white text-[12.5px] font-semibold whitespace-nowrap shadow-md items-center gap-1.5 pointer-events-none transition-all">
            হোয়াটসঅ্যাপে মেসেজ দিন
          </span>
        </motion.a>
      </div>

      {/* Toast Notification (Repositioned to not collide with floating action buttons) */}
      <AnimatePresence>
        {addedToast && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 15, scale: 0.9 }}
            transition={{ type: "spring", stiffness: 420, damping: 26 }}
            className="fixed bottom-20 left-4 right-4 sm:left-6 sm:right-auto sm:bottom-6 z-50 bg-[#132A13] text-white px-4 py-3 rounded-xl shadow-lg flex items-center gap-2.5 text-sm font-medium"
          >
            <span className="w-5 h-5 rounded-full bg-[#3A6B1F] flex items-center justify-center shrink-0">
              <Check className="w-3 h-3" />
            </span>
            <span>{addedToast}</span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Interactive Cart Drawer */}
      <AnimatePresence>
        {isCartOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.24 }}
            onClick={() => setIsCartOpen(false)}
            className="fixed inset-0 z-50 flex justify-end bg-black/40 backdrop-blur-2xs"
          >
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 28, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-md bg-white h-full shadow-2xl flex flex-col justify-between p-6"
            >
              <div>
                <div className="flex items-center justify-between pb-4 border-b border-gray-100">
                  <div className="flex items-center gap-2">
                    <ShoppingCart className="w-5 h-5 text-[#3A6B1F]" />
                    <h3 className="text-lg font-bold text-[#132A13]">
                      আপনার অর্ডার কার্ট ({totalCartItems})
                    </h3>
                  </div>
                  <button
                    type="button"
                    onClick={() => setIsCartOpen(false)}
                    className="p-1.5 rounded-lg hover:bg-gray-100 text-gray-500 cursor-pointer"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                {totalCartItems === 0 ? (
                  <div className="py-16 text-center space-y-3">
                    <div className="w-14 h-14 rounded-full bg-[#EFF5EC] text-[#3A6B1F] flex items-center justify-center mx-auto">
                      <ShoppingCart className="w-6 h-6" />
                    </div>
                    <p className="text-base font-semibold text-[#132A13]">
                      আপনার কার্ট বর্তমানে খালি
                    </p>
                    <p className="text-sm text-gray-500">
                      পছন্দের গাছ কার্টে যোগ করতে &ldquo;জনপ্রিয় গাছসমূহ&rdquo;
                      থেকে বেছে নিন।
                    </p>
                  </div>
                ) : (
                  <div className="mt-4 space-y-3 max-h-[60vh] overflow-y-auto pr-1">
                    {POPULAR_PLANTS.filter((p) => cart[p.id]).map((plant) => (
                      <div
                        key={plant.id}
                        className="flex items-center justify-between gap-3 p-3 rounded-xl bg-[#F8FAF6] border border-[#E5ECE0]"
                      >
                        <div className="flex items-center gap-3">
                          <div className="relative w-14 h-12 rounded-lg overflow-hidden shrink-0">
                            <Image
                              src={plant.image}
                              alt={plant.name}
                              fill
                              className="object-cover"
                            />
                          </div>
                          <div>
                            <h4 className="text-sm font-bold text-[#132A13]">
                              {plant.name}
                            </h4>
                            <p className="text-xs font-semibold text-[#3A6B1F]">
                              {plant.priceDisplay} × {cart[plant.id]}
                            </p>
                          </div>
                        </div>

                        <div className="flex items-center gap-2">
                          <button
                            type="button"
                            onClick={() => updateCartQty(plant.id, -1)}
                            className="w-7 h-7 rounded-md bg-white border border-gray-200 flex items-center justify-center hover:bg-gray-50 cursor-pointer"
                          >
                            <Minus className="w-3.5 h-3.5" />
                          </button>
                          <span className="text-sm font-bold w-5 text-center">
                            {cart[plant.id]}
                          </span>
                          <button
                            type="button"
                            onClick={() => updateCartQty(plant.id, 1)}
                            className="w-7 h-7 rounded-md bg-[#3A6B1F] text-white flex items-center justify-center hover:bg-[#2E5718] cursor-pointer"
                          >
                            <Plus className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <div className="pt-4 border-t border-gray-100 space-y-3">
                <div className="flex items-center justify-between text-base font-bold text-[#132A13]">
                  <span>সর্বমোট মূল্য:</span>
                  <span>৳ {totalCartPrice}</span>
                </div>
                <Button
                  className="w-full h-11 rounded-xl bg-[#3A6B1F] hover:bg-[#2E5718] text-white font-semibold cursor-pointer"
                  onClick={() => {
                    setIsCartOpen(false);
                    if (totalCartItems > 0) {
                      setCart({});
                      setAddedToast(
                        "আপনার অর্ডার সফলভাবে গ্রহণ করা হয়েছে! ধন্যবাদ।"
                      );
                      setTimeout(() => setAddedToast(null), 3000);
                    } else {
                      document
                        .getElementById("popular-plants")
                        ?.scrollIntoView({ behavior: "smooth" });
                    }
                  }}
                >
                  অর্ডার সম্পন্ন করুন
                </Button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

import React from "react";

import {
  TwitterLogoIcon,
  InstagramLogoIcon,
  StarIcon,
  HeartIcon,
  Share2Icon,
  HomeIcon,
  CalendarIcon,
  KeyboardIcon,
  MagnifyingGlassIcon,
  GlobeIcon,
  HamburgerMenuIcon,
  PersonIcon,
} from "@radix-ui/react-icons";

function Home() {
  const startDate = "2022-02-19";
  const endDate = "2022-02-26";

  // Generate days for February 2022
  const daysInMonth = 28; // February 2022 has 28 days
  const days = Array.from({ length: daysInMonth }, (_, i) => i + 1);

  // Map weekdays for the calendar
  const weekdays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  // Function to get the weekday of the first day of the month
  const getStartDayOffset = () => {
    const firstDay = new Date("2022-02-01").getDay();
    return firstDay; // Weekday offset (0 for Sunday, 1 for Monday, etc.)
  };

  const startOffset = getStartDayOffset();

  const images = [
    {
      id: 1,
      src: "https://www.france-voyage.com/visuals/props/sweet-melody-beau-duplex-quartier-saint-pierre-183828-7_w200.webp",
      alt: "Living room",
    },
    {
      id: 2,
      src: "https://www.france-voyage.com/visuals/props/sweet-melody-beau-duplex-quartier-saint-pierre-183828-1_w800.webp",
      alt: "Dining area",
    },
    {
      id: 3,
      src: "https://www.france-voyage.com/visuals/props/sweet-melody-beau-duplex-quartier-saint-pierre-183828-4_w600.webp",
      alt: "Kitchen",
    },
    {
      id: 4,
      src: "https://www.france-voyage.com/visuals/props/sweet-melody-beau-duplex-quartier-saint-pierre-183828-3_w600.webp",
      alt: "Bedroom",
    },
    {
      id: 5,
      src: "https://www.france-voyage.com/visuals/props/sweet-melody-beau-duplex-quartier-saint-pierre-183828-5_w600.webp",
      alt: "View from window",
    },
  ];

  const thingsToKnow = {
    houseRules: [
      { icon: <CalendarIcon />, text: "Check-in: After 4:00 PM" },
      { icon: <CalendarIcon />, text: "Checkout: 10:00 AM" },
      { icon: <CalendarIcon />, text: "Self check-in with lockbox" },
      {
        icon: <CalendarIcon />,
        text: "Not suitable for infants (under 2 years)",
      },
      { icon: <CalendarIcon />, text: "No smoking" },
      { icon: <CalendarIcon />, text: "No pets" },
    ],
    healthAndSafety: [
      {
        icon: <CalendarIcon />,
        text: "Committed to Airbnb’s enhanced cleaning process. Show more",
      },
      {
        icon: <CalendarIcon />,
        text: "Airbnb's social-distancing and other COVID-19-related guidelines apply",
      },
      { icon: <CalendarIcon />, text: "Carbon monoxide alarm" },
      { icon: <CalendarIcon />, text: "Smoke alarm" },
      {
        icon: <CalendarIcon />,
        text: "Security Deposit - if you damage the home, you may be charged up to $566",
      },
    ],
    cancellationPolicy: [{ text: "Free cancellation before Feb 14" }],
  };
  const avatarImage =
    "https://static.vecteezy.com/system/resources/thumbnails/004/899/680/small/beautiful-blonde-woman-with-makeup-avatar-for-a-beauty-salon-illustration-in-the-cartoon-style-vector.jpg"; // Replace with the host's profile image
  const reviews = [
    {
      name: "Jose",
      date: "December 2021",
      comment: "Host was very attentive.",
      image: avatarImage,
    },
    {
      name: "Shayna",
      date: "December 2021",
      comment: "Wonderful neighborhood, cozy studio, and great host.",
      image: avatarImage,
    },
    {
      name: "Vladko",
      date: "November 2020",
      comment: "This is an amazing place. Very clean and organized.",
      image: avatarImage,
    },
    {
      name: "Luke",
      date: "December 2021",
      comment: "Nice place to stay!",
      image: avatarImage,
    },
    {
      name: "Josh",
      date: "November 2021",
      comment: "Well designed and fun space with lots of energy.",
      image: avatarImage,
    },
    {
      name: "Jennifer",
      date: "January 2022",
      comment:
        "This is amazing place. It has everything one needs for a monthly business stay. Very clean and organized place. Amazing hospitality affordable price.",
      image: avatarImage,
    },
  ];

  const ratings = [
    { title: "Cleanliness", value: 5.0 },
    { title: "Communication", value: 5.0 },
    { title: "Check-in", value: 5.0 },
    { title: "Accuracy", value: 5.0 },
    { title: "Location", value: 4.9 },
    { title: "Value", value: 4.7 },
  ];

  return (
    <div>
      <div className="px-8 py-8 md:px-20 md:py-16 flex flex-col gap-12 w-full bg-white-50">
        <nav className="flex justify-between items-center px-10 py-5 bg-white shadow-sm">
          {/* Left Section: Logo */}
          <div className="flex items-center">
            <svg
              version="1.0"
              xmlns="http://www.w3.org/2000/svg"
              width="102"
              height="32"
              viewBox="0 0 200 200"
              preserveAspectRatio="xMidYMid meet"
            >
              <g fill="#566777">
                <path d="M0 100 l0 -100 100 0 100 0 0 100 0 100 -100 0 -100 0 0 -100z m26.50 29.85 c2.75 -0.95 14.70 -5.80 18.65 -7.55 2.05 -0.95 2.85 -1.55 2.85 -2.25 0 -1.30 4.65 -3.05 8.10 -3.05 1.75 0 3.60 -0.45 5.85 -1.45 3.70 -1.65 10.05 -4.30 15.20 -6.30 5.85 -2.30 16.95 -5.25 19.70 -5.25 1.95 0 2.65 -0.20 2.65 -0.70 0 -0.95 1.10 -1.30 4.25 -1.30 2.40 0 2.70 0.15 2.90 1.15 0.15 0.65 0.25 0.35 0.30 -0.80 l0.05 -1.95 3.25 0.20 c2.60 0.10 3.25 0 3.40 -0.65 0.20 -0.80 2.65 -1.45 5.75 -1.45 1.40 0 1.60 0.15 1.60 1.30 0 0.70 0.20 1.15 0.50 0.95 0.30 -0.15 0.50 -0.85 0.50 -1.50 0 -1.35 0.85 -1.75 3.75 -1.75 l2.20 0 0.20 3.40 0.15 3.35 0.10 -3.60 0.10 -3.65 3.75 0 3.70 0 0.20 3.65 0.15 3.60 0.10 -4.10 0.10 -4.10 2.15 -0.30 c4.40 -0.65 4.55 -0.55 4.90 4.25 l0.25 4.25 0.10 -4.60 0.10 -4.65 2.40 0 c1.30 0 5.75 -0.30 9.85 -0.70 4.15 -0.40 10.15 -0.90 13.40 -1.10 l5.85 -0.35 0 -1.40 c0 -1.75 1.20 -2.45 4.05 -2.45 2.05 0 2.10 0 1.20 -1 -0.50 -0.55 -1.70 -1.20 -2.60 -1.45 -2.50 -0.70 -18.90 0.45 -33.65 2.30 -3.15 0.40 -6.70 0.85 -7.85 1 l-2.15 0.25 0 -1.80 c0 -1.30 0.25 -1.90 0.90 -2.10 8.05 -2.70 31.60 -12.85 34.65 -14.95 1.60 -1.15 2.80 -3.05 2.20 -3.65 -0.20 -0.25 -8.85 0.75 -14.50 1.65 -2.45 0.40 -6.75 1.10 -9.50 1.50 -9.10 1.45 -25.50 4.85 -35.25 7.25 -3.15 0.80 -6.15 1.50 -6.60 1.60 -0.65 0.10 -0.75 0.35 -0.40 0.90 0.40 0.65 1.15 0.60 5.85 -0.60 7.15 -1.75 13.20 -3.05 23.15 -4.90 4.55 -0.85 9.25 -1.75 10.50 -2 3.35 -0.70 12.70 -2 14.45 -2 1.40 0 1.55 0.15 1.55 1.70 0 1.55 -0.20 1.75 -2.35 2.55 -1.35 0.50 -4.20 1.75 -6.40 2.80 -2.20 1 -5.90 2.55 -8.25 3.35 -2.35 0.85 -5.95 2.20 -8 3.05 -2.05 0.85 -6.45 2.55 -9.75 3.80 -3.30 1.30 -7.90 3.05 -10.25 3.95 -7.15 2.80 -12.65 4.30 -15.75 4.30 l-1.70 0 -0.20 -3.10 -0.15 -3.15 -0.10 3.80 c-0.10 4.20 -0.30 4.45 -3.40 4.45 -0.95 0 -1.70 0.25 -1.70 0.50 0 0.30 -1.25 0.50 -2.75 0.50 -2.50 0 -2.75 -0.10 -2.75 -1.10 0 -0.65 -0.25 -1.50 -0.50 -1.90 -0.35 -0.55 -0.50 -0.15 -0.50 1.50 0 1.25 -0.20 2.50 -0.40 2.80 -0.70 1.05 -2.55 1.70 -4.80 1.70 l-2.25 0 -0.20 -3.35 -0.15 -3.40 -0.10 4.15 c-0.10 3.95 -0.15 4.15 -1.40 4.60 -0.70 0.30 -2.15 0.50 -3.25 0.50 -1.30 0 -1.95 0.20 -1.95 0.70 0 0.40 -1.60 1.25 -3.85 2.05 -2.15 0.75 -4.80 1.75 -5.90 2.25 -1.10 0.50 -4.45 1.85 -7.50 3 -7.45 2.90 -17.35 7.30 -27.10 12.10 -7.75 3.75 -8.15 4.05 -8.15 5.40 l0 1.45 2.15 -0.65 c1.15 -0.35 3.10 -1 4.35 -1.45z m44.85 -32.70 c-0.10 -0.80 -0.20 -0.15 -0.20 1.35 0 1.50 0.10 2.15 0.20 1.40 0.10 -0.80 0.10 -2 0 -2.75z" />
              </g>
              <g fill="#e3d7db">
                <path d="M18.30 133.25 c-0.15 -0.40 -0.15 -1.05 0 -1.40 0.10 -0.35 -0.20 -1.10 -0.80 -1.60 -0.55 -0.50 -1 -1.05 -1 -1.25 0 -0.95 26.20 -13.25 37.25 -17.50 3.05 -1.15 6.40 -2.50 7.50 -3 1.10 -0.50 3.75 -1.50 5.90 -2.25 3.15 -1.15 3.75 -1.50 3.30 -2.05 -0.45 -0.55 -0.30 -0.70 0.95 -0.70 1.05 0 1.60 -0.30 1.75 -0.85 0.20 -0.85 0.25 -0.85 0.30 0 0.05 0.90 1.10 1.05 2.80 0.40 0.55 -0.25 1.50 -0.25 2.15 0 1 0.40 1.10 0.30 1.10 -1.55 0 -1.45 0.20 -2 0.75 -2 0.40 0 0.75 0.35 0.75 0.75 0 1.35 3.20 0.50 4.15 -1.05 0.85 -1.45 1.80 -0.75 2 1.45 0.15 1.80 0.20 1.70 0.25 -0.75 0.10 -2.55 0.25 -2.90 1.10 -2.90 0.55 0 1 0.25 1 0.50 0 0.30 0.55 0.50 1.25 0.50 1.25 0 1.65 -0.70 0.75 -1.25 -1.05 -0.65 -0.45 -1.25 1.25 -1.25 1.20 0 1.75 0.25 1.75 0.75 0 0.40 0.20 0.75 0.45 0.75 1.05 0 2.05 -0.65 2.05 -1.30 0 -0.40 0.35 -0.70 0.75 -0.70 0.60 0 0.75 0.90 0.75 5.25 l0 5.25 -1.40 0 c-1.75 0 -15.15 3.95 -20.10 5.90 -2.05 0.80 -6 2.45 -8.75 3.60 -2.75 1.15 -6.35 2.60 -8 3.25 -1.65 0.65 -6.05 2.45 -9.75 4 -16.25 6.75 -20.55 8.45 -25.45 10.05 -5.85 1.95 -6.35 2 -6.75 0.95z m35.95 -13.85 c1.70 -0.85 1.80 -0.90 0.50 -0.65 -0.80 0.20 -2.40 0.75 -3.50 1.25 -1.70 0.80 -1.80 0.90 -0.50 0.65 0.85 -0.20 2.40 -0.75 3.50 -1.25z" />
                <path d="M99.30 103.90 c-0.60 -2.30 -0.30 -8.70 0.45 -9.70 0.70 -0.90 0.70 -0.90 0.75 0 0 0.75 0.25 0.85 1.40 0.55 0.75 -0.20 2.25 -0.55 3.35 -0.75 1.85 -0.35 5.45 -1.60 13.25 -4.65 1.80 -0.70 5.75 -2.20 8.75 -3.30 3.05 -1.15 6.85 -2.65 8.50 -3.35 1.65 -0.75 4.90 -1.95 7.25 -2.80 2.35 -0.85 6.05 -2.35 8.25 -3.35 2.20 -1.05 5.05 -2.30 6.40 -2.80 1.30 -0.50 2.30 -0.95 2.20 -1.05 -0.20 -0.20 -9.70 1.15 -12.85 1.80 -1.25 0.25 -5.95 1.15 -10.50 2 -4.55 0.85 -10.50 2 -13.25 2.60 -9.75 2.10 -40.15 9.90 -49 12.65 -10.20 3.15 -9.25 2.90 -9.25 2.30 0 -0.30 1.30 -0.85 2.90 -1.35 1.55 -0.45 4.90 -1.45 7.35 -2.20 2.50 -0.75 6.55 -2 9 -2.70 5.30 -1.60 6.90 -2.20 5.70 -2.25 -1 -0.05 -20.25 5.60 -26.40 7.75 -0.55 0.15 -0.55 0.35 -0.05 0.95 0.95 1.15 0.15 1.55 -1.65 0.85 -1.30 -0.50 -1.65 -0.45 -1.95 0.10 -0.40 0.75 -3.45 2.80 -4.10 2.80 -0.20 0 -0.20 -0.45 -0.05 -1.05 0.30 -0.90 0.20 -1 -0.85 -0.70 -0.90 0.30 -3.45 1.35 -4.90 2.05 -0.15 0.05 -0.60 -0.05 -1 -0.30 -0.70 -0.40 -0.15 -0.70 6.25 -3.40 1.40 -0.60 4.70 -1.85 7.40 -2.80 2.65 -1 6.95 -2.55 9.50 -3.50 4.95 -1.85 16.70 -5.65 21.60 -7.05 1.65 -0.50 3.80 -1.15 4.75 -1.50 0.95 -0.35 3 -0.90 4.50 -1.20 1.50 -0.35 5.35 -1.25 8.50 -2.05 9.90 -2.45 26.30 -5.80 35.25 -7.25 2.75 -0.40 6.90 -1.10 9.25 -1.50 6.10 -1 16.65 -2 17.65 -1.60 1.75 0.65 0.65 4.40 -1.85 6.40 -1.85 1.45 -13.90 6.90 -24.70 11.20 -4.75 1.85 -8.50 3.50 -8.35 3.65 0.20 0.25 3.45 -0.05 16.25 -1.40 9.95 -1.05 22.35 -1.60 24.40 -1.05 2.45 0.70 4.25 2.70 3.80 4.25 -0.60 1.90 -1.15 2.25 -2.70 1.75 -1 -0.35 -1.75 -0.35 -2.50 0.05 -1.50 0.80 -0.75 1.50 1.55 1.50 1.35 0 1.95 0.20 1.95 0.70 0 1.25 -0.95 1.45 -6.95 1.55 -10.60 0.20 -16.50 0.80 -16.20 1.55 0.35 0.90 -0.75 0.90 -3 -0.05 -1.40 -0.55 -2.05 -0.60 -3.30 -0.10 -0.85 0.30 -1.55 0.85 -1.55 1.20 0 0.35 -0.45 0.65 -1.05 0.65 -0.75 0 -0.95 -0.25 -0.75 -0.75 0.20 -0.60 -0.15 -0.75 -1.45 -0.75 -1.30 0 -1.75 0.20 -1.75 0.80 0 0.55 -0.30 0.75 -1 0.55 -0.55 -0.15 -1 -0.05 -1 0.20 0 0.70 -1.10 0.50 -1.70 -0.30 -0.70 -1 -3.80 -0.50 -3.80 0.60 0 1.20 -1.70 0.50 -2.05 -0.85 -0.35 -1.15 -0.35 -1.15 -0.40 0.35 -0.05 1.55 -1.05 2.95 -1.05 1.45 0 -0.60 -0.55 -0.80 -2.25 -0.80 -1.70 0 -2.25 0.20 -2.25 0.80 0 1.60 -1.25 0.30 -1.55 -1.60 -0.25 -1.75 -0.30 -1.80 -0.40 -0.40 -0.05 1.70 -1.50 4.15 -1.55 2.60 0 -1.10 -1.65 -1.20 -2.70 -0.15 -0.90 0.90 -1.80 1 -1.80 0.15 0 -0.35 -0.35 -0.10 -0.80 0.50 -0.90 1.30 -1.70 1.45 -1.70 0.35 0 -0.65 -0.40 -0.75 -1.85 -0.45 -1.05 0.15 -2.15 0.65 -2.50 1.05 -0.80 1 -1.65 0.40 -1.65 -1.25 0 -1.05 -0.10 -1.20 -0.50 -0.60 -0.25 0.40 -0.50 1.40 -0.50 2.20 0 1.15 -0.15 1.35 -0.60 0.90 -0.75 -0.75 -3.40 -0.80 -3.40 -0.05 0 0.30 -0.40 0.40 -0.90 0.25 -0.60 -0.20 -1.05 0.05 -1.35 0.80 -0.60 1.25 -1.90 1.90 -1.45 0.70 0.40 -1.05 -2.40 -1.10 -3.50 -0.05 -1.05 1.05 -1.65 0.95 -2 -0.35z m-2.80 -19.65 c1.50 -0.45 3.80 -1.10 5.10 -1.40 2.60 -0.65 4.05 -1.70 1.65 -1.20 -0.80 0.20 -3.05 0.80 -5 1.35 -1.90 0.55 -4.25 1.15 -5.15 1.35 -0.90 0.15 -1.75 0.50 -1.95 0.80 -0.35 0.60 1.50 0.30 5.35 -0.90z" />
                <path d="M49.70 100.20 c0.45 -0.40 0.80 -1 0.80 -1.30 0 -0.30 0.15 -0.45 0.30 -0.30 0.40 0.45 -0.70 2.40 -1.35 2.40 -0.30 0 -0.15 -0.35 0.25 -0.80z" />
                <path d="M51 94.80 c0 -0.10 0.55 -0.30 1.25 -0.40 0.70 -0.15 1.25 -0.05 1.25 0.15 0 0.25 -0.55 0.45 -1.25 0.45 -0.70 0 -1.25 -0.10 -1.25 -0.20z" />
                <path d="M69 94.50 c-0.65 -0.45 -0.65 -0.50 0 -0.50 0.40 0 1.10 0.25 1.50 0.50 0.65 0.45 0.65 0.50 0 0.50 -0.40 0 -1.10 -0.25 -1.50 -0.50z" />
              </g>
              <g fill="#aac3df">
                <path d="M41.90 110.45 c-1.10 -0.65 -1.15 -2.10 -0.10 -3 0.70 -0.55 1.05 -0.50 2.30 0.20 2.05 1.20 2.30 1.10 2.70 -0.90 0.25 -1.45 -0.10 -2.50 -2.50 -7 l-2.80 -5.25 1.70 0 c0.95 0 2.05 -0.15 2.50 -0.30 0.55 -0.20 0.80 -0.05 0.80 0.50 0 1.15 2.40 5.80 3 5.80 0.30 0 0.50 -0.25 0.50 -0.60 0 -0.30 0.10 -0.45 0.30 -0.30 0.40 0.45 -3.80 9.55 -4.90 10.55 -1.15 0.95 -2.25 1.05 -3.50 0.30z" />
                <path d="M115 105.20 c-2.25 -0.95 -4.30 -3.20 -4.10 -4.45 0.45 -3.10 1.30 -4.70 3.10 -5.70 2.15 -1.20 3.75 -1.45 2.25 -0.35 -0.80 0.55 -1 1.40 -1.10 4.30 -0.10 4.45 0.40 6 2.05 6 1.65 0 2.40 -1.10 2.25 -3.35 -0.10 -1.05 0 -2.20 0.20 -2.50 0.20 -0.30 0.15 -0.70 -0.10 -0.85 -0.25 -0.15 -0.35 -0.75 -0.20 -1.30 0.15 -0.55 0 -1 -0.30 -1 -0.30 0 -0.55 -0.45 -0.55 -1 0 -0.55 0.10 -1 0.20 -1 0.80 0 3.80 2.25 4.05 3.05 0.20 0.50 0.65 1.30 1.05 1.70 0.45 0.40 0.55 0.75 0.25 0.75 -0.30 0 -0.55 0.50 -0.55 1.10 0 1.70 -2.30 4.30 -4.40 4.90 -2.25 0.60 -1.95 0.60 -4.10 -0.30z" />
                <path d="M57 104.05 c-1.85 -1.85 -2.25 -3.55 -1.50 -6.30 0.45 -1.55 1.10 -2.50 2.20 -3.20 1.85 -1.20 2.75 -0.65 1.90 1.20 -0.75 1.60 -0.80 6.95 -0.10 8.30 0.30 0.55 1.05 0.95 1.75 0.95 1.70 0 2.25 -1.35 2.25 -5.50 0 -3.30 -0.10 -3.55 -1.30 -4.10 -1.15 -0.55 -1.20 -0.65 -0.45 -1.20 1.75 -1.30 5.75 2.75 5.75 5.90 0 1.65 -1.80 4.35 -3.30 4.90 -0.70 0.30 -2.30 0.50 -3.50 0.50 -1.85 0 -2.55 -0.30 -3.70 -1.45z" />
                <path d="M70.95 104.55 c-1.05 -0.85 -1.20 -1.45 -1.40 -5.40 -0.10 -2.50 -0.40 -4.60 -0.75 -4.80 -0.30 -0.25 -0.05 -0.30 0.70 -0.15 0.70 0.15 1.75 0.30 2.30 0.30 1 0 1.10 0.30 1.25 4.30 0.15 3.45 0.35 4.35 1.10 4.75 0.45 0.30 0.85 0.85 0.85 1.20 0 1.10 -2.65 0.95 -4.05 -0.20z" />
                <path d="M77.15 104.80 c-1.35 -0.65 -1.50 -1.55 -0.35 -2 0.65 -0.25 0.75 -1 0.60 -4.30 -0.15 -4.30 0.10 -4.75 2.40 -4.20 1.20 0.30 1.20 0.40 1.20 5.75 l0 5.45 -1.35 -0.05 c-0.80 -0.05 -1.90 -0.30 -2.50 -0.65z" />
                <path d="M84.85 103.90 c-0.10 -0.90 0 -1.80 0.25 -1.95 0.30 -0.20 0.25 -0.45 -0.15 -0.60 -0.45 -0.20 -0.50 -0.40 -0.20 -0.70 0.60 -0.45 0.65 -4.60 0.10 -5.50 -0.30 -0.50 0.15 -0.65 1.80 -0.65 2.30 0 2.85 0.50 2.85 2.50 0 0.50 0.40 1.05 0.90 1.15 0.65 0.20 0.55 0.25 -0.25 0.30 -1.05 0.05 -1.15 0.30 -1.15 2.60 0 3.25 -0.65 4.45 -2.45 4.45 -1.25 0 -1.45 -0.25 -1.70 -1.60z" />
                <path d="M96.90 98 c0.15 -5.40  0 -7.75 -0.40 -8.25 -0.55 -0.65 -0.30 -0.75 1.70 -0.75 l2.30 0 0 3 c0 1.75 0.20 3 0.50 3 0.35 0 0.35 0.35 -0.05 1.05 -0.75 1.45 -0.35 6.90 0.60 7.50 0.50 0.30 0.50 0.45 0.10 0.45 -0.35 0 -0.65 0.35 -0.65 0.75 0 0.55 -0.55 0.75 -2.10 0.75 l-2.15 0 0.15 -7.50z" />
                <path d="M104.55 104.70 c0.50 -0.65 0.50 -0.85 0 -1.20 -0.45 -0.25 -0.50 -0.50 -0.10 -0.70 0.30 -0.20 0.55 -1.65 0.55 -3.25 0 -2.25 -0.20 -3.10 -1 -3.80 -1.20 -1.10 -0.85 -1.75 0.95 -1.75 2.25 0 3.70 1.95 3.50 4.70 -0.15 1.85 -0.05 2.35 0.80 2.75 0.85 0.40 0.90 0.50 0.15 0.50 -1.05 0.05 -1.25 2 -0.30 2.95 0.45 0.45 -0.05 0.60 -2.30 0.60 -2.60 0 -2.85 -0.10 -2.25 -0.80z" />
                <path d="M125.90 104.90 c0.70 -0.70 0.80 -5.90 0.15 -5.90 -0.25 0 -0.20 -0.70 0.10 -1.50 0.45 -1.15 0.45 -1.65 0 -1.90 -0.40 -0.25 -0.40 -0.60 0.15 -1.35 0.55 -0.75 0.85 -0.80 1.30 -0.35 0.35 0.35 1.05 0.60 1.65 0.60 0.95 0 1 0.30 1 5.50 l0 5.50 -2.45 0 c-1.95 0 -2.35 -0.15 -1.90 -0.60z" />
                <path d="M134 104.55 c0.60 -1.15 0.70 -6.05 0.10 -6.05 -0.25 0 -0.35 -0.65 -0.20 -1.45 0.15 -1.15 -0.05 -1.50 -0.85 -1.80 -1.80 -0.55 -1.20 -1.35 0.85 -1.15 3.90 0.45 3.90 0.45 4.05 6.35 0.05 2.35 0.20 4.40 0.35 4.65 0.15 0.20 -0.90 0.40 -2.30 0.40 -2.35 0 -2.50 -0.05 -2 -0.95z" />
                <path d="M141.85 100.90 c0.10 -4.50 0.05 -4.70 -1.25 -5.75 l-1.35 -1.15 1.80 0 c1.10 0 2.35 0.40 3.15 1.05 1.25 0.95 1.30 1.25 1.30 5.45 0 3.05 0.20 4.50 0.65 4.65 0.30 0.15 -0.50 0.30 -1.90 0.30 l-2.50 0.05 0.10 -4.60z" />
                <path d="M149.95 104.05 c-1.50 -1.55 -1.85 -3.85 -1.15 -7.40 0.45 -2.30 4.15 -3.30 7.60 -2.10 1.60 0.55 2.60 2.40 2.60 4.75 0 1.15 -0.15 1.20 -3.20 1.20 -1.80 0 -3.40 0.20 -3.55 0.50 -0.55 0.85 0.95 3.20 2.30 3.70 0.95 0.30 1.75 0.20 3 -0.35 l1.70 -0.85 -1.20 1 c-0.85 0.75 -1.90 1 -3.90 1 -2.35 0 -2.95 -0.20 -4.20 -1.45z m6.05 -4.50 c0 -0.25 -0.15 -1.15 -0.30 -2 -0.30 -1.45 -0.50 -1.60 -1.90 -1.45 -1.40 0.15 -1.55 0.35 -1.70 2.05 l-0.15 1.85 2 0 c1.15 0 2.05 -0.20 2.05 -0.45z" />
                <path d="M49.50 97.70 c0 -0.40 0.45 -0.70 1 -0.70 0.55 0 1 0.20 1 0.45 0 0.25 -0.45 0.55 -1 0.70 -0.65 0.15 -1 0 -1 -0.45z" />
                <path d="M90.90 96.15 c-0.95 -1 -1 -1.25 -0.40 -1.65 1.85 -1.20 4.25 -0.05 3.90 1.80 -0.25 1.30 -2.25 1.20 -3.50 -0.15z" />
                <path d="M65 94.05 c0 -0.55 1.95 -1.30 2.35 -0.85 0.40 0.40 0.15 0.60 -1.20 1 -0.65 0.20 -1.15 0.15 -1.15 -0.15z" />
              </g>
              <g opacity="0.5" transform="rotate(-45, 100.0, 100.0)"></g>
            </svg>
          </div>

          {/* Center Section: Search Bar */}
          <div className="flex items-center bg-gray-100 border border-gray-300 rounded-full px-4 py-2 max-w-lg w-full">
            <input
              type="text"
              placeholder="Start your search"
              className="flex-1 bg-transparent text-sm text-gray-600 placeholder-gray-400 outline-none px-2"
            />
            <button className="bg-pink-500 text-white w-8 h-8 rounded-full flex items-center justify-center hover:bg-pink-600">
              <MagnifyingGlassIcon className="w-4 h-4" />
            </button>
          </div>

          {/* Right Section */}
          <div className="flex items-center gap-4">
            <span className="text-sm cursor-pointer">Become a Host</span>
            <GlobeIcon className="w-5 h-5 cursor-pointer" />
            <div className="flex items-center gap-2 px-3 py-2 bg-white border border-gray-200 rounded-full shadow-sm">
              <HamburgerMenuIcon className="w-5 h-5 text-gray-600 cursor-pointer" />
              <PersonIcon className="w-6 h-6 text-gray-600 rounded-full cursor-pointer" />
            </div>
          </div>
        </nav>
        {/* Header Section */}
        <header className="flex justify-between items-start border-b pb-4">
          {/* Left Section */}
          <div className="max-w-[70%]">
            <h1 className="text-2xl font-semibold">Bordeaux Getaway</h1>
            <div className="flex flex-wrap gap-2 text-gray-700 text-sm">
              <span className="flex items-center gap-1">
                <StarIcon className="w-4 h-4 text-red-500" />
                5.0
              </span>
              <span>
                · 7 reviews <spn></spn>·
              </span>

              <span className="w-4 h-4 text-red-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                >
                  <path
                    d="M9.50004 5.83341L12.1667 3.16675H3.83337L6.50004 5.83341"
                    stroke="#DE3151"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M11.5 9.33325C11.5 11.2662 9.933 12.8333 8 12.8333C6.067 12.8333 4.5 11.2662 4.5 9.33325C4.5 7.40026 6.067 5.83325 8 5.83325C9.933 5.83325 11.5 7.40026 11.5 9.33325Z"
                    stroke="#DE3151"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </span>
              <span> Superhost</span>

              <span>
                ·{" "}
                <a href="#" className="underline">
                  Bordeaux, France
                </a>
              </span>
            </div>
          </div>

          {/* Right Section */}
          <div className="flex gap-4">
            <p className="flex items-center gap-2 text-gray-700 cursor-pointer">
              <Share2Icon className="w-5 h-5" />
              Share
            </p>
            <p className="flex items-center gap-2 text-gray-700 cursor-pointer">
              <HeartIcon className="w-5 h-5" /> Save
            </p>
          </div>
        </header>

        {/* Image Grid Section */}
        <div className="relative grid grid-cols-3 gap-2 h-[400px] w-full rounded-2xl overflow-hidden">
          {/* Main Image */}
          <div className="col-span-3 md:col-span-2 h-[400px]">
            <img
              src={images[0].src}
              alt={images[0].alt}
              className="w-full h-[400px] rounded-lg object-cover"
            />
          </div>

          {/* Small Images */}
          <div className="hidden md:grid grid-cols-2 gap-2">
            {images.slice(1, 5).map((image) => (
              <img
                key={image.id}
                src={image.src}
                alt={image.alt}
                className="w-full h-[400px] rounded-lg object-cover"
              />
            ))}
          </div>

          {/* Show All Photos Button */}
          <button className="absolute bottom-4 right-4 bg-white px-4 py-2 text-sm font-semibold border border-gray-300 rounded-full shadow-md">
            Show all photos
          </button>
        </div>

        <div className="flex items-start gap-20 w-full ">
          {/* Left Section */}
          <div className="flex flex-col items-start gap-8 flex-1">
            {/* Header Section */}
            <div className="flex items-center gap-6 w-full">
              <div className="flex-1">
                <h2 className="text-xl font-semibold">
                  Entire rental unit hosted by Ghazal
                </h2>
                <p className="text-sm text-gray-600">
                  2 guests · 1 bedroom · 1 bed · 1 bath
                </p>
              </div>
              <img
                src="https://static.vecteezy.com/system/resources/thumbnails/004/899/680/small/beautiful-blonde-woman-with-makeup-avatar-for-a-beauty-salon-illustration-in-the-cartoon-style-vector.jpg"
                alt="Host Profile"
                className="w-14 h-14 rounded-full object-cover"
              />
            </div>
            <hr className="border-0 border-t border-gray-300  w-full" />
            {/* Details Section */}
            <div className="flex flex-col gap-4">
              <ul className="space-y-4">
                <li className="flex items-start gap-4">
                  <HomeIcon className="text-xl text-gray-700" />
                  <div>
                    <h4 className="font-semibold">Entire home</h4>
                    <p className="text-gray-500 text-sm font-normal leading-5">
                      You’ll have the apartment to yourself
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <HomeIcon className="text-xl text-gray-700" />
                  <div>
                    <h4 className="font-semibold">Enhanced Clean</h4>
                    <p className="text-gray-500 text-sm font-normal leading-5">
                      This Host committed to Airbnb’s 5-step enhanced cleaning
                      process.{" "}
                      <a
                        href="#"
                        className="text-black text-sm font-medium leading-5 underline"
                      >
                        Show more
                      </a>
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <HomeIcon className="text-xl text-gray-700" />
                  <div>
                    <h4 className="font-semibold">Self check-in</h4>
                    <p className="text-gray-500 text-sm font-normal leading-5">
                      Check yourself in with the keypad.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <CalendarIcon className="text-xl text-gray-700" />
                  <h4 className="font-semibold">
                    Free cancellation before Feb 14
                  </h4>
                </li>
              </ul>
            </div>

            <hr className="border-0 border-t border-gray-300  w-full" />
            {/* Description */}
            <p className="text-black text-base font-normal leading-6 w-[670px]">
              Come and stay in this superb duplex T2, in the heart of the
              historic center of Bordeaux. Spacious and bright, in a real
              Bordeaux building in exposed stone, you will enjoy all the charms
              of the city thanks to its ideal location. Close to many shops,
              bars, and restaurants, you can access the apartment by tram A and
              C and bus routes 27 and 44.... <br />
              <a
                href="#"
                className="text-black text-sm font-medium leading-5 underline"
              >
                {" "}
                Show more {">"}
              </a>
            </p>

            <hr className="border-0 border-t border-gray-300  w-full" />

            {/* Where You'll Sleep Section */}
            <div>
              <h2 className="text-xl font-semibold">Where you'll sleep</h2>
              <div className="flex flex-col items-start gap-4 mt-4">
                <img
                  src="https://www.france-voyage.com/visuals/props/sweet-melody-beau-duplex-quartier-saint-pierre-183828-3_w600.webp"
                  alt="Bedroom"
                  className="w-80 h-52 rounded-lg object-cover"
                />
                <div>
                  <h4 className="text-base font-medium">Bedroom</h4>
                  <p className="text-sm text-gray-600">1 queen bed</p>
                </div>
              </div>
            </div>

            <hr className="border-0 border-t border-gray-300  w-full" />

            {/* What this place offers */}
            <div className="flex flex-col items-start gap-8 w-full">
              <h2 className="text-xl font-semibold">What this place offers</h2>
              <div className="grid grid-cols-2 gap-4 mb-5 w-full ">
                <div className="flex items-center gap-2">
                  <HomeIcon className="text-xl text-gray-700" /> Garden view
                </div>
                <div className="flex items-center gap-2">
                  <HomeIcon className="text-xl text-gray-700" /> Wifi
                </div>
                <div className="flex items-center gap-2">
                  <HomeIcon className="text-xl text-gray-700" />
                  Free washer - in building
                </div>
                <div className="flex items-center gap-2">
                  <HomeIcon className="text-xl text-gray-700" />
                  Central air conditioning
                </div>
                <div className="flex items-center gap-2">
                  <HomeIcon className="text-xl text-gray-700" /> Refrigerator
                </div>
                <div className="flex items-center gap-2">
                  <HomeIcon className="text-xl text-gray-700" /> Kitchen
                </div>
                <div className="flex items-center gap-2">
                  <HomeIcon className="text-xl text-gray-700" /> Dryer
                </div>
                <div className="flex items-center gap-2">
                  <HomeIcon className="text-xl text-gray-700" /> Security
                  cameras on property
                </div>
                <div className="flex items-center gap-2">
                  <HomeIcon className="text-xl text-gray-700" /> Bicycles
                </div>
                <div className="flex items-center gap-2">
                  <HomeIcon className="text-xl text-gray-700" /> Pets allowed
                </div>
              </div>
              <button className="flex p-2 justify-center items-center gap-2 rounded-md border border-black bg-white shadow-sm">
                Show all 37 amenities
              </button>
            </div>

            <hr className="border-0 border-t border-gray-300  w-full" />

            {/* Calendar Section */}
            <div className="flex flex-col items-start gap-8 self-stretch">
              {/* Title Section */}
              <div className="flex flex-col items-start self-stretch">
                <h2 className="text-black text-2xl font-medium leading-8">
                  7 nights in New York
                </h2>
                <p className="self-stretch text-gray-500 text-sm font-normal leading-5">
                  {new Date(startDate).toLocaleDateString("en-US", {
                    month: "short",
                    day: "numeric",
                    year: "numeric",
                  })}{" "}
                  -{" "}
                  {new Date(endDate).toLocaleDateString("en-US", {
                    month: "short",
                    day: "numeric",
                    year: "numeric",
                  })}
                </p>
              </div>

              {/* Calendar Section */}
              <div className="flex items-start gap-6 self-stretch">
                {/* Start Date Calendar */}
                <div className="border rounded-lg p-4">
                  <h3 className="text-lg font-medium text-black mb-4">
                    Start Date
                  </h3>
                  <div>
                    {/* Weekdays Header */}
                    <div className="grid grid-cols-7 text-center text-gray-600 mb-2">
                      {weekdays.map((day) => (
                        <div key={day} className="font-medium">
                          {day}
                        </div>
                      ))}
                    </div>

                    {/* Dates */}
                    <div className="grid grid-cols-7 text-center gap-1">
                      {/* Empty cells for offset */}
                      {Array.from({ length: startOffset }).map((_, i) => (
                        <div key={`empty-${i}`} />
                      ))}

                      {/* Days of the month */}
                      {days.map((day) => {
                        const currentDate = `2022-02-${String(day).padStart(2, "0")}`;
                        return (
                          <div
                            key={day}
                            className={`px-2 py-1 rounded ${
                              currentDate === startDate
                                ? "bg-blue-500 text-white"
                                : "bg-gray-100 text-gray-800"
                            }`}
                          >
                            {day}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>

                {/* End Date Calendar */}
                <div className="border rounded-lg p-4">
                  <h3 className="text-lg font-medium text-black mb-4">
                    End Date
                  </h3>
                  <div>
                    {/* Weekdays Header */}
                    <div className="grid grid-cols-7 text-center text-gray-600 mb-2">
                      {weekdays.map((day) => (
                        <div key={day} className="font-medium">
                          {day}
                        </div>
                      ))}
                    </div>

                    {/* Dates */}
                    <div className="grid grid-cols-7 text-center gap-1">
                      {/* Empty cells for offset */}
                      {Array.from({ length: startOffset }).map((_, i) => (
                        <div key={`empty-${i}`} />
                      ))}

                      {/* Days of the month */}
                      {days.map((day) => {
                        const currentDate = `2022-02-${String(day).padStart(2, "0")}`;
                        return (
                          <div
                            key={day}
                            className={`px-2 py-1 rounded ${
                              currentDate === endDate
                                ? "bg-blue-500 text-white"
                                : "bg-gray-100 text-gray-800"
                            }`}
                          >
                            {day}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>

              {/* Clear Dates Section */}
              <div className="flex justify-between items-center self-stretch">
                <KeyboardIcon className="w-6 h-6" />
                <p className="text-black font-medium text-sm leading-5 underline underline-offset-2 decoration-solid cursor-pointer">
                  Clear dates
                </p>
              </div>
            </div>
          </div>

          {/* Pricing Card Section */}
          <div className="flex flex-col w-[350px] p-5 bg-white border border-gray-300 rounded-lg shadow-md">
            {/* Pricing Header */}
            <div className="flex justify-between items-center w-full mb-2">
              <h2 className="text-2xl font-bold text-gray-800">
                $75 <span className="text-lg text-gray-500">/ night</span>
              </h2>
              <div className="flex items-center text-black text-sm font-medium leading-5 ">
                <StarIcon className="text-red-500 mr-1" />
                <span>5.0</span>
                <a href="#" className="ml-1 underline">
                  · 7 reviews
                </a>
              </div>
            </div>

            {/* Reservation Form */}
            <form className="flex flex-col w-full  p-5 bg-white mt-4">
              <div className="grid grid-cols-2 gap-2 ">
                <div className="flex flex-col  border border-gray-300 rounded-lg">
                  <label className="text-xs font-semibold text-black leading-4">
                    CHECK-IN
                  </label>
                  <input
                    type="date"
                    defaultValue="2022-02-19"
                    className="p-2 "
                  />
                </div>
                <div className="flex flex-col  border border-gray-300 rounded-lg">
                  <label className="text-xs font-semibold text-black leading-4">
                    CHECKOUT
                  </label>
                  <input
                    type="date"
                    defaultValue="2022-02-26"
                    className="p-2 "
                  />
                </div>
              </div>
              <div className="flex flex-col mt-2  border border-gray-300 rounded-lg">
                <label className="text-xs font-semibold text-black leading-4">
                  GUESTS
                </label>
                <select className="p-2">
                  <option>2 guests</option>
                </select>
              </div>
              <button
                type="submit"
                className="w-full mt-4 mb-4 py-3 text-lg font-semibold text-white bg-red-500 rounded-lg hover:bg-red-600"
              >
                Reserve
              </button>
              <p className="text-sm text-center text-gray-500">
                You won’t be charged yet
              </p>
            </form>

            {/* Pricing Breakdown */}
            <div className="border-t border-gray-300 mt-4 pt-2">
              <p className="flex justify-between text-sm text-gray-700">
                $79 × 7 nights <span>$555</span>
              </p>
              <p className="flex justify-between text-sm text-gray-700">
                Weekly discount <span className="text-green-500">-$28</span>
              </p>
              <p className="flex justify-between text-sm text-gray-700">
                Cleaning fee <span>$62</span>
              </p>
              <p className="flex justify-between text-sm text-gray-700">
                Service fee <span>$83</span>
              </p>
              <p className="flex justify-between text-sm text-gray-700">
                Occupancy taxes and fees <span>$29</span>
              </p>
              <p className="flex justify-between font-bold text-gray-900 mt-2">
                Total <span>$701</span>
              </p>
            </div>

            {/* Footer Link */}
            <p className="text-center mt-4">
              <a
                href="#"
                className="text-sm text-gray-500 underline hover:text-gray-600"
              >
                <StarIcon className="inline mr-1" />
                Report this listing
              </a>
            </p>
          </div>
        </div>
        <hr className="border-0 border-t border-gray-300  w-full" />
        <div className="flex flex-col items-start gap-8 w-full">
          {/* Review Header */}
          <h2 className="flex items-center text-2xl font-medium text-black gap-2">
            <StarIcon className="w-6 h-6 text-red-500" />
            <span>5.0</span>
            <span className="text-gray-500">·</span>
            <span>7 reviews</span>
          </h2>

          {/* Ratings Section */}
          <div className="flex items-start gap-20 self-stretch">
            <div className="flex flex-col gap-4 pr-20 flex-[1_0_0]">
              {ratings.slice(0, 3).map((rating, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 text-sm text-gray-800"
                >
                  <span className="text-black text-base font-normal leading-6 flex-1">
                    {rating.title}
                  </span>
                  <div className="relative w-64 h-2 bg-gray-300 rounded-full">
                    <div
                      className="absolute top-0 left-0 h-2 bg-black rounded-full "
                      style={{ width: `${rating.value * 20}%` }}
                    ></div>
                  </div>
                  <span className="text-sm font-medium text-black">
                    {rating.value.toFixed(1)}
                  </span>
                </div>
              ))}
            </div>
            <div className="flex flex-col gap-4 pr-20 flex-[1_0_0]">
              {ratings.slice(3).map((rating, index) => (
                <div
                  key={index}
                  className="flex items-center gap-4 self-stretch w-full"
                >
                  <span className="text-black text-base font-normal leading-6 flex-1">
                    {rating.title}
                  </span>
                  <div className="relative w-64 h-2 bg-gray-300 rounded-full">
                    <div
                      className="absolute top-0 left-0 h-2 bg-black rounded-full"
                      style={{ width: `${rating.value * 20}%` }}
                    ></div>
                  </div>
                  <span className="text-sm font-medium text-black">
                    {rating.value.toFixed(1)}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Reviews Section */}
          <div className="flex flex-col gap-10 w-full">
            {[0, 3].map((startIndex) => (
              <div key={startIndex} className="flex gap-10 w-full">
                {reviews
                  .slice(startIndex, startIndex + 3)
                  .map((review, index) => (
                    <div key={index} className="flex flex-col gap-4 w-1/3">
                      <div className="flex items-center gap-4">
                        <img
                          src={review.image}
                          alt={`${review.name}'s avatar`}
                          className="w-14 h-14 rounded-full object-cover"
                        />
                        <div className="flex flex-col">
                          <span className="text-base font-medium text-black">
                            {review.name}
                          </span>
                          <span className="text-sm text-gray-500">
                            {review.date}
                          </span>
                        </div>
                      </div>
                      <p className="text-base text-black">{review.comment}</p>
                    </div>
                  ))}
              </div>
            ))}
          </div>

          <button className="flex items-center justify-center gap-2 px-4 py-2 rounded-lg border border-black bg-white shadow-sm">
            Show all 12 reviews
          </button>
        </div>
        <hr className="border-0 border-t border-gray-300  w-full" />

        {/* Where You'll Be Section */}
        <div className="flex flex-col items-start gap-6 self-stretch">
          {/* Section Title */}
          <h2 className="text-black text-2xl font-bold">Where you'll be</h2>

          {/* Map Container */}
          <div className="h-80 w-full overflow-hidden rounded-lg">
            <img
              src="https://www.gironde-tourisme.com/espace-pro/wp-content/uploads/sites/2/2017/01/Carte-loueurs-Accueil-V%C3%A9lo-SNCF-250x248.png"
              alt="Map of Bordeaux"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Location Description */}
          <div className="flex flex-col items-start gap-4">
            <h3 className="text-black text-lg font-medium">
              Bordeaux, Nouvelle-Aquitaine, France
            </h3>
            <p className="text-black text-base font-normal leading-6">
              Very dynamic and appreciated district by the people of Bordeaux
              thanks to rue St James and place Fernand Lafargue. Home to many
              historical monuments such as the Grosse Cloche, the Porte de
              Bourgogne and the Porte Cailhau, and cultural sites such as the
              Aquitaine Museum.
            </p>
            <span className="text-black text-base font-medium underline cursor-pointer hover:text-gray-700">
              Show more ›
            </span>
          </div>
        </div>
        {/* Host Information */}
        <div className="flex flex-col items-start gap-8 w-full">
          {/* Host Information */}
          <hr className="border-0 border-t border-gray-300  w-full" />
          <div className="flex items-center gap-6 w-full">
            <img
              src="https://static.vecteezy.com/system/resources/thumbnails/004/899/680/small/beautiful-blonde-woman-with-makeup-avatar-for-a-beauty-salon-illustration-in-the-cartoon-style-vector.jpg" // Replace with the host's profile image
              alt="Host Avatar"
              className="w-14 h-14 rounded-full object-cover"
            />
            <div>
              <h3 className="text-black text-2xl font-medium">
                Hosted by Ghazal
              </h3>
              <p className="text-gray-500 text-sm">Joined May 2021</p>
            </div>
          </div>

          {/* Host Badges */}
          <div className="flex items-center gap-6 w-full">
            <span className="flex items-center gap-2 text-black text-base font-medium">
              <StarIcon className="w-4 h-4 text-red-500" /> 12 Reviews
            </span>
            <span className="flex items-center gap-2 text-black text-base font-medium">
              <StarIcon className="w-4 h-4 text-red-500" /> Identity verified
            </span>
            <span className="flex items-center gap-2 text-black text-base font-medium">
              <span>🏆</span> Superhost
            </span>
          </div>

          {/* Host Description */}
          <div className="flex flex-col gap-4">
            <p className="text-black text-base font-medium">
              Ghazal is a Superhost.
            </p>
            <p className="text-gray-500 text-base leading-6">
              Superhosts are experienced, highly rated hosts who are committed
              to providing great stays for guests.
            </p>
            <p className="text-gray-500 text-base">Response rate: 100%</p>
            <p className="text-gray-500 text-base">
              Response time: within an hour
            </p>
          </div>

          {/* Contact Button */}
          <button className="flex items-center justify-center gap-2 px-4 py-4 border border-black rounded-lg bg-white shadow">
            Contact Host
          </button>

          {/* Security Disclaimer */}
          <div className="flex items-start gap-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M5 20.5C5 20.6326 4.94732 20.7598 4.85355 20.8536C4.75979 20.9473 4.63261 21 4.5 21H4V21.5C4 21.6326 3.94732 21.7598 3.85355 21.8536C3.75979 21.9473 3.63261 22 3.5 22C3.36739 22 3.24021 21.9473 3.14645 21.8536C3.05268 21.7598 3 21.6326 3 21.5V21H2.5C2.36739 21 2.24021 20.9473 2.14645 20.8536C2.05268 20.7598 2 20.6326 2 20.5C2 20.3674 2.05268 20.2402 2.14645 20.1464C2.24021 20.0527 2.36739 20 2.5 20H3V19.5C3 19.3674 3.05268 19.2402 3.14645 19.1464C3.24021 19.0527 3.36739 19 3.5 19C3.63261 19 3.75979 19.0527 3.85355 19.1464C3.94732 19.2402 4 19.3674 4 19.5V20H4.5C4.63261 20 4.75979 20.0527 4.85355 20.1464C4.94732 20.2402 5 20.3674 5 20.5ZM6.5 22C6.40111 22 6.30444 22.0293 6.22221 22.0843C6.13999 22.1392 6.0759 22.2173 6.03806 22.3087C6.00022 22.4 5.99031 22.5006 6.00961 22.5975C6.0289 22.6945 6.07652 22.7836 6.14645 22.8536C6.21637 22.9235 6.30546 22.9711 6.40245 22.9904C6.49945 23.0097 6.59998 22.9998 6.69134 22.9619C6.7827 22.9241 6.86079 22.86 6.91573 22.7778C6.97068 22.6956 7 22.5989 7 22.5C7 22.3674 6.94732 22.2402 6.85355 22.1464C6.75979 22.0527 6.63261 22 6.5 22ZM22.5 2H22V1.5C22 1.36739 21.9473 1.24021 21.8536 1.14645C21.7598 1.05268 21.6326 1 21.5 1C21.3674 1 21.2402 1.05268 21.1464 1.14645C21.0527 1.24021 21 1.36739 21 1.5V2H20.5C20.3674 2 20.2402 2.05268 20.1464 2.14645C20.0527 2.24021 20 2.36739 20 2.5C20 2.63261 20.0527 2.75979 20.1464 2.85355C20.2402 2.94732 20.3674 3 20.5 3H21V3.5C21 3.63261 21.0527 3.75979 21.1464 3.85355C21.2402 3.94732 21.3674 4 21.5 4C21.6326 4 21.7598 3.94732 21.8536 3.85355C21.9473 3.75979 22 3.63261 22 3.5V3H22.5C22.6326 3 22.7598 2.94732 22.8536 2.85355C22.9473 2.75979 23 2.63261 23 2.5C23 2.36739 22.9473 2.24021 22.8536 2.14645C22.7598 2.05268 22.6326 2 22.5 2ZM19.92 6.87C17.4088 6.46601 15.0643 5.35617 13.16 3.67C13.1083 3.6189 13.0426 3.58418 12.9713 3.57017C12.8999 3.55616 12.826 3.56348 12.7588 3.59122C12.6916 3.61895 12.6341 3.66588 12.5934 3.72613C12.5527 3.78639 12.5306 3.85729 12.53 3.93L12.61 20.15C12.6133 20.2131 12.6322 20.2744 12.6651 20.3283C12.698 20.3822 12.7438 20.4271 12.7984 20.4589C12.853 20.4906 12.9146 20.5083 12.9778 20.5102C13.0409 20.5122 13.1035 20.4983 13.16 20.47C15.6842 19.3961 17.7634 17.4886 19.0502 15.066C20.337 12.6435 20.7535 9.8527 20.23 7.16C20.2162 7.08386 20.1789 7.01396 20.1232 6.96015C20.0676 6.90633 19.9966 6.87131 19.92 6.86V6.87Z"
                fill="#484848"
              />
            </svg>
            <p className="text-gray-500 text-xs leading-4">
              To protect your payment, never transfer money or communicate
              outside of the Airbnb website or app.
            </p>
          </div>
        </div>

        <hr className="border-0 border-t border-gray-300  w-full" />
        {/* Things to Know Section */}
        <div className="flex flex-col items-start gap-6 self-stretch">
          <h2 className="text-black text-2xl font-bold">Things to know</h2>

          <div className="flex gap-6">
            {/* House Rules */}
            <div className="flex flex-col gap-4 flex-1">
              <h3 className="text-black text-base font-medium">House rules</h3>
              <ul className="flex flex-col gap-2">
                {thingsToKnow.houseRules.map((item, index) => (
                  <li key={index} className="flex items-center gap-4">
                    <span className="w-6 h-6 flex items-center justify-center">
                      {item.icon}
                    </span>
                    {item.text}
                  </li>
                ))}
              </ul>
            </div>

            {/* Health and Safety */}
            <div className="flex flex-col gap-4 flex-1">
              <h3 className="text-black text-base font-medium">
                Health & safety
              </h3>
              <ul className="flex flex-col gap-2">
                {thingsToKnow.healthAndSafety.map((item, index) => (
                  <li key={index} className="flex items-center gap-4">
                    <span className="w-6 h-6 flex items-center justify-center">
                      {item.icon}
                    </span>
                    {item.text}
                  </li>
                ))}
              </ul>
              <span className="text-black text-base font-medium underline">
                Show more ›
              </span>
            </div>

            {/* Cancellation Policy */}
            <div className="flex flex-col gap-4 flex-1">
              <h3 className="text-black text-base font-medium">
                Cancellation policy
              </h3>
              <ul className="flex flex-col gap-2">
                {thingsToKnow.cancellationPolicy.map((item, index) => (
                  <li key={index}>{item.text}</li>
                ))}
              </ul>
              <span className="text-black text-base font-medium underline">
                Show more ›
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="px-8 py-8 md:px-20 md:py-16 flex flex-col gap-12 w-full bg-gray-50">
        <div className=" w-full bg-gray-50">
          {/* Explore Other Options */}
          <h2 className="text-2xl font-medium leading-8 text-black w-full">
            Explore other options in France
          </h2>
          <div className="flex flex-wrap gap-6 w-full">
            <div className="flex flex-col items-start gap-4 w-[262px] h-[92px] flex-none order-0 flex-grow">
              <span className="text-sm text-gray-600 hover:underline">
                Paris
              </span>
              <span className="text-sm text-gray-600 hover:underline">
                Lille
              </span>
              <span className="text-sm text-gray-600 hover:underline">
                Toulouse
              </span>
            </div>
            <div className="flex flex-col items-start gap-4 w-[262px] h-[92px] flex-none order-0 flex-grow">
              <span className="text-sm text-gray-600 hover:underline">
                Nice
              </span>
              <span className="text-sm text-gray-600 hover:underline">
                Aix-en-Provence
              </span>
              <span className="text-sm text-gray-600 hover:underline">
                Montpellier
              </span>
            </div>
            <div className="flex flex-col items-start gap-4 w-[262px] h-[92px] flex-none order-0 flex-grow">
              <span className="text-sm text-gray-600 hover:underline">
                Lyon
              </span>
              <span className="text-sm text-gray-600 hover:underline">
                Rouen
              </span>
              <span className="text-sm text-gray-600 hover:underline">
                Dijon
              </span>
            </div>
            <div className="flex flex-col items-start gap-4 w-[262px] h-[92px] flex-none order-0 flex-grow">
              <span className="text-sm text-gray-600 hover:underline">
                Marseille
              </span>
              <span className="text-sm text-gray-600 hover:underline">
                Amiens
              </span>
              <span className="text-sm text-gray-600 hover:underline">
                Grenoble
              </span>
            </div>
          </div>

          {/* Unique Stays */}
          <h3 className="text-base font-medium leading-6 text-black w-full">
            Unique stays on Airbnb
          </h3>
          <div className="flex flex-wrap gap-6 w-full">
            <div className="flex flex-col items-start gap-4 w-[262px] h-[56px] flex-none order-0 flex-grow">
              <span className="text-sm text-gray-600 hover:underline">
                Beach House Rentals
              </span>
              <span className="text-sm text-gray-600 hover:underline">
                Cabin Rentals
              </span>
            </div>
            <div className="flex flex-col items-start gap-4 w-[262px] h-[56px] flex-none order-0 flex-grow">
              <span className="text-sm text-gray-600 hover:underline">
                Camper Rentals
              </span>
              <span className="text-sm text-gray-600 hover:underline">
                Tiny House Rentals
              </span>
            </div>
            <div className="flex flex-col items-start gap-4 w-[262px] h-[56px] flex-none order-0 flex-grow">
              <span className="text-sm text-gray-600 hover:underline">
                Glamping Rentals
              </span>
              <span className="text-sm text-gray-600 hover:underline">
                Lakehouse Rentals
              </span>
            </div>
            <div className="flex flex-col items-start gap-4 w-[262px] h-[56px] flex-none order-0 flex-grow">
              <span className="text-sm text-gray-600 hover:underline">
                Treehouse Rentals
              </span>
              <span className="text-sm text-gray-600 hover:underline">
                Mountain Chalet Rentals
              </span>
            </div>
          </div>

          {/* Breadcrumb Navigation */}
          <div className="flex flex-wrap gap-2 text-sm text-black">
            <span className="hover:underline">Airbnb</span>
            <span className="text-gray-600">›</span>
            <span className="hover:underline">Europe</span>
            <span className="text-gray-600">›</span>
            <span className="hover:underline">France</span>
            <span className="text-gray-600">›</span>
            <span className="hover:underline">Bordeaux</span>
          </div>
        </div>
        <hr className="border-0 border-t border-gray-300  w-full" />
        <footer className=" w-full bg-gray-50">
          {/* Links Section */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <h4 className="font-semibold text-gray-800 mb-4">Support</h4>
              <ul className="space-y-2 text-gray-600">
                <li>Help Center</li>
                <li>Safety Information</li>
                <li>Cancellation Options</li>
                <li>Our COVID-19 Response</li>
                <li>Supporting people with disabilities</li>
                <li>Report a neighborhood concern</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-4">Community</h4>
              <ul className="space-y-2 text-gray-600">
                <li>Airbnb.org: disaster relief housing</li>
                <li>Support Afghan refugees</li>
                <li>Celebrating diversity & belonging</li>
                <li>Combating discrimination</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-4">Hosting</h4>
              <ul className="space-y-2 text-gray-600">
                <li>Try hosting</li>
                <li>AirCover: protection for Hosts</li>
                <li>Explore hosting resources</li>
                <li>Visit our community forum</li>
                <li>How to host responsibly</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-4">About</h4>
              <ul className="space-y-2 text-gray-600">
                <li>Newsroom</li>
                <li>Learn about new features</li>
                <li>Letter from our founders</li>
                <li>Careers</li>
                <li>Investors</li>
                <li>Airbnb Luxe</li>
              </ul>
            </div>
          </div>

          {/* Footer Bottom */}
          <div className="border-t pt-4 flex flex-col md:flex-row justify-between items-center text-sm text-gray-600 gap-4">
            <div className="text-center md:text-left">
              © 2024 Airbnb, Inc. ·{" "}
              <a href="#" className="underline">
                Privacy
              </a>{" "}
              ·{" "}
              <a href="#" className="underline">
                Terms
              </a>{" "}
              ·{" "}
              <a href="#" className="underline">
                Sitemap
              </a>
            </div>
            <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-6 gap-4">
              <div className="flex items-center space-x-2">
                <GlobeIcon className="w-5 h-5" />
                <span>English (US)</span>
              </div>
              <div>
                <span>USD</span>
              </div>
              <div className="flex space-x-4">
                <a href="#" aria-label="Facebook" className="hover:underline">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="currentColor"
                    className="text-gray-600"
                  >
                    <path d="M18.896 0H1.104A1.104 1.104 0 0 0 0 1.104v17.792C0 19.617.384 20 1.104 20H10.76V12.46h-2.36v-2.96h2.36V7.05c0-2.36 1.44-3.65 3.56-3.65.7 0 1.5.05 1.8.1v2.08h-1.22c-1.2 0-1.5.7-1.5 1.46v1.76h3.02l-.36 2.96h-2.66V20h5.18c.72 0 1.1-.384 1.1-1.104V1.104A1.104 1.104 0 0 0 18.896 0z"></path>
                  </svg>
                </a>
                <a href="#" aria-label="Twitter" className="hover:underline">
                  <TwitterLogoIcon className="w-5 h-5" />
                </a>
                <a href="#" aria-label="Instagram" className="hover:underline">
                  <InstagramLogoIcon className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default Home;

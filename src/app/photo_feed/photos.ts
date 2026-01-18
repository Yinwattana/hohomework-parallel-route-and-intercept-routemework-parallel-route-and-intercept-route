// src/app/photos.ts

export type Photo = {
  id: string;
  title: string;
  desc: string;
  src: string;
};

export const PHOTOS: Photo[] = [
  { id: "1", title: "Mountain Adventure", desc: "Snow-capped peaks reaching towards endless blue skies in the Himalayas.", src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4" },
  { id: "2", title: "Desert Landscape", desc: "Golden sand dunes stretching across the vast Arabian Desert horizon.", src: "https://images.unsplash.com/photo-1509316785289-025f5b846b35" },
  { id: "3", title: "Ocean Paradise", desc: "Turquoise waters and pristine beaches in a tropical island getaway.", src: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e" },
  { id: "4", title: "Forest Trail", desc: "Misty pine forests with winding paths through natural wilderness.", src: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e" },
  { id: "5", title: "Urban Nights", desc: "City lights reflecting off wet streets in a modern metropolitan area.", src: "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b" },
  { id: "6", title: "Starry Skies", desc: "Millions of stars twinkling above a peaceful countryside landscape.", src: "https://images.unsplash.com/photo-1419242902214-272b3f66ee7a" },
  { id: "7", title: "WBig Ben", desc: "There are many places in London that are known worldwide. The most famous of these is Big Ben.", src: "https://www.22places.com/wp-content/uploads/2025/03/big-ben-westminster-abbey.webp" },
  { id: "9", title: "Lake Reflection", desc: "Still waters reflecting snow-capped mountains and clear blue sky.", src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4" },
  { id: "10", title: "Sunset Valley", desc: "Golden hour light illuminating vast valleys with rolling hills.", src: "https://images.unsplash.com/photo-1495567720989-cebdbdd97913" },
  { id: "11", title: "Aurora Lights", desc: "Green and purple northern lights dancing across the Arctic night sky.", src: "https://images.unsplash.com/photo-1444080748397-f442aa95c3e5" },
  { id: "12", title: "Tropical Garden", desc: "Exotic flowers and lush vegetation in a vibrant botanical paradise.", src: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e" },
];
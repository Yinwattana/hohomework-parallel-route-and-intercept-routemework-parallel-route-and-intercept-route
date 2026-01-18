"use client";

import { useRouter } from "next/navigation";
import { PHOTOS } from "../../../photo_feed/photos";
import { useCallback, use } from "react";

export default function PhotoModal({ params }: { params: Promise<{ id: string }> }) {
  const router = useRouter();
  const { id } = use(params);
  const photo = PHOTOS.find((p) => p.id === id);

  const handleClose = useCallback(() => {
    router.back();
  }, [router]);

  if (!photo) return null;

  return (
    <div 
      className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4 animate-in fade-in" 
      onClick={handleClose}
    >
      <div 
        className="bg-white rounded-3xl overflow-hidden shadow-2xl max-w-2xl w-full animate-in zoom-in-95 duration-300" 
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative">
          <button
            onClick={handleClose}
            className="absolute top-6 right-6 bg-white/90 hover:bg-white text-gray-900 rounded-full w-12 h-12 flex items-center justify-center z-10 transition-all hover:scale-110 shadow-lg"
            aria-label="Close"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <img
            src={photo.src}
            alt={photo.title}
            className="w-full h-auto object-cover max-h-96"
          />
        </div>
        <div className="p-8 bg-white">
          <h1 className="text-4xl font-bold text-gray-900 mb-3">{photo.title}</h1>
          <p className="text-lg text-gray-600 leading-relaxed">{photo.desc}</p>
          <button
            onClick={handleClose}
            className="mt-6 w-full bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white font-semibold py-3 rounded-xl transition-all hover:shadow-lg"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}

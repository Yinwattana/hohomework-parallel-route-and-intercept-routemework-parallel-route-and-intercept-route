"use client";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { PHOTOS } from "../../../photos";

export default function PhotoModal({ params }: { params: { id: string } }) {
  const router = useRouter();
  const photo = PHOTOS.find((p) => p.id === params.id);

  if (!photo) return null;

  return (
    <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="bg-white text-black rounded-xl overflow-hidden max-w-2xl w-full flex flex-col md:flex-row shadow-2xl">
        <div className="relative w-full md:w-1/2 h-64 md:h-auto">
          <Image src={photo.src} alt={photo.title} fill className="object-cover" />
        </div>
        <div className="p-6 md:w-1/2 flex flex-col justify-between">
          <div>
            <h2 className="text-2xl font-bold">{photo.title}</h2>
            <p className="mt-2 text-gray-600">{photo.desc}</p>
          </div>
          <button 
            onClick={() => router.back()}
            className="mt-6 px-4 py-2 bg-black text-white rounded hover:bg-gray-800"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
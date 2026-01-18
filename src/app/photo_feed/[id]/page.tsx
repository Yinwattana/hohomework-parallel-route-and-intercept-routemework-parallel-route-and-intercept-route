import Link from "next/link";
import { PHOTOS } from "../photos";

export default async function PhotoPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const photo = PHOTOS.find((p) => p.id === id);
  if (!photo) return <div className="p-10 text-white">Photo not found</div>;

  return (
    <div className="max-w-4xl mx-auto p-10">
      <Link href="/" className="text-blue-400 hover:underline mb-4 block">← Back to Feed</Link>
      <div className="bg-white text-black rounded-2xl overflow-hidden shadow-lg">
        <img src={photo.src} alt={photo.title} className="w-full h-auto" />
        <div className="p-10">
          <h1 className="text-4xl font-bold">{photo.title}</h1>
          <p className="mt-4 text-xl text-gray-600">{photo.desc}</p>
        </div>
      </div>
    </div>
  );
}
import Link from "next/link";
import { PHOTOS } from "./photo_feed/photos";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-7xl font-extrabold text-gray-900 mb-4">Photo Gallery</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">Discover stunning photography from iconic landmarks around the world</p>
        </div>
        
        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {PHOTOS.map((photo) => (
            <Link key={photo.id} href={`/photo/${photo.id}`}>
              <div className="group cursor-pointer h-full">
                <div className="relative rounded-2xl overflow-hidden bg-white shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 h-96 flex flex-col">
                  {/* Image Container */}
                  <div className="relative h-64 overflow-hidden bg-gray-200">
                    <img 
                      src={photo.src} 
                      alt={photo.title} 
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  
                  {/* Card Content */}
                  <div className="flex-1 p-6 flex flex-col justify-between bg-white">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                        {photo.title}
                      </h3>
                      <p className="text-gray-600 text-sm line-clamp-3">
                        {photo.desc}
                      </p>
                    </div>
                    <div className="mt-4 pt-4 border-t border-gray-100">
                      <button className="text-blue-600 font-semibold text-sm hover:text-blue-700 transition-colors">
                        View Details →
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
}
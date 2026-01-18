"use client";

import { use, useEffect, useState } from "react";

export default function PhotoModal({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const [photo, setPhoto] = useState<any>(null);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/photos/${id}`)
      .then((res) => res.json())
      .then((data) => setPhoto(data));
  }, [id]);

  if (!photo) return null;

  return (
    <div style={{ 
      position: 'fixed', inset: 0, 
      background: 'rgba(15, 23, 42, 0.85)', // Darker overlay to match your screenshot
      backdropFilter: 'blur(12px)', 
      display: 'flex', alignItems: 'center', justifyContent: 'center', 
      zIndex: 1000,
      fontFamily: 'Inter, system-ui, sans-serif' 
    }}>
      <div style={{ 
        background: 'white', 
        width: '90%', maxWidth: '600px', 
        borderRadius: '32px', // Extra rounded corners to match the gallery
        overflow: 'hidden', 
        position: 'relative', 
        boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)' 
      }}>
        {/* Modern Close Button */}
        <button 
          onClick={() => window.history.back()} 
          style={{ 
            position: 'absolute', top: '20px', right: '20px', 
            background: 'white', border: '1px solid #e2e8f0', borderRadius: '50%', 
            width: '40px', height: '40px', cursor: 'pointer', 
            fontSize: '18px', zIndex: 10,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
          }}
        >✕</button>
        
        {/* FIXED IMAGE SOURCE */}
        <img 
          src={`https://picsum.photos/seed/${id}/800/600`} 
          alt={photo.title} 
          style={{ width: '100%', display: 'block', maxHeight: '65vh', objectFit: 'cover' }} 
        />
        
        <div style={{ padding: '32px' }}>
          <h2 style={{ 
            fontSize: '24px', 
            margin: '0 0 12px 0', 
            color: '#0f172a', 
            fontWeight: '800',
            textTransform: 'capitalize' // Matching the gallery style
          }}>
            {photo.title}
          </h2>
          <p style={{ color: '#64748b', fontSize: '16px', fontWeight: '500' }}>
            Currently viewing Photo #{id} via Intercepted Route.
          </p>
        </div>
      </div>
    </div>
  );
}
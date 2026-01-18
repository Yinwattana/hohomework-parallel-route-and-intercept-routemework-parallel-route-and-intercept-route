"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function HomePage() {
  const [photos, setPhotos] = useState<any[]>([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/photos?_limit=12")
      .then(res => res.json())
      .then(data => setPhotos(data));
  }, []);

  return (
    <div style={{ 
      padding: '60px 20px', 
      backgroundColor: '#ffffff', 
      minHeight: '100vh',
      // Professional Font Stack
      fontFamily: 'Inter, system-ui, -apple-system, sans-serif' 
    }}>
      <h1 style={{ 
        textAlign: 'center', 
        marginBottom: '50px', 
        color: '#0f172a', 
        fontSize: '3rem', 
        fontWeight: '900',
        letterSpacing: '-0.05em'
      }}>
        Explore Gallery
      </h1>
      
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', 
        gap: '32px', 
        maxWidth: '1300px', 
        margin: '0 auto' 
      }}>
        {photos.map((p) => (
          <Link key={p.id} href={`/photo/${p.id}`} style={{ textDecoration: 'none' }}>
            <div 
              style={{ 
                backgroundColor: '#fff', 
                borderRadius: '24px', 
                overflow: 'hidden', 
                boxShadow: '0 4px 20px rgba(0,0,0,0.08)', 
                transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                border: '1px solid #f1f5f9'
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = 'scale(1.05)';
                e.currentTarget.style.boxShadow = '0 30px 60px rgba(0,0,0,0.12)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = 'scale(1)';
                e.currentTarget.style.boxShadow = '0 4px 20px rgba(0,0,0,0.08)';
              }}
            >
              <div style={{ backgroundColor: '#f1f5f9', height: '240px', width: '100%' }}>
                <img 
                  // Using Unsplash source to fix the broken image issue
                  src={`https://picsum.photos/seed/${p.id}/600/400`} 
                  alt={p.title} 
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
                />
              </div>
              <div style={{ padding: '24px' }}>
                <p style={{ 
                  margin: 0, 
                  fontSize: '16px', 
                  color: '#1e293b', 
                  fontWeight: '600', 
                  lineHeight: '1.5',
                  textTransform: 'capitalize'
                }}>
                  {p.title}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
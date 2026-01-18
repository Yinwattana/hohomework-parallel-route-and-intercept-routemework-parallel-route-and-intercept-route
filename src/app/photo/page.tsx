/* eslint-disable @next/next/no-img-element */
export default async function PhotoPage({ params }: { params: { id: string } }) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/photos/${params.id}`);
  const photo = await res.json();

  return (
    <div style={{ padding: '50px', textAlign: 'center' }}>
      <h1>Full Page View</h1>
      <img src={photo.url} alt={photo.title} />
      <h2>{photo.title}</h2>
    </div>
  );
}
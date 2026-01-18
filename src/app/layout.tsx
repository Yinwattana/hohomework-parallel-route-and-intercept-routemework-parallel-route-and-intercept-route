export default function RootLayout({
  children,
  modal,
}: {
  children: React.ReactNode;
  modal: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {children}  {/* This renders page.tsx */}
        {modal}     {/* This renders @modal/page.tsx */}
      </body>
    </html>
  );
}
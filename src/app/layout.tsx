import '@/styles/tailwind.css'; // Ensure this path is correct

export const metadata = {
  title: 'Dashboard | Mark I',
  description: '',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

import '@/styles/tailwind.css';
import AppNav from './_ui/app-nav';
import { SignOutButton } from './_ui/sign-out-button';

export const metadata = {
  title: 'Mark I',
  description: '',
  icons: {
    icon: '/favicon.svg',
  },
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className='bg-zinc-900 text-white flex flex-col sm:flex-row min-h-screen w-full'>
        <AppNav>
          <SignOutButton />
        </AppNav>
        <main className='m-2 md:m-4 md:ml-2 rounded-lg shadow-lg bg-zinc-800 w-auto sm:w-full overflow-y-visible'>
          {children}
        </main>
      </body>
    </html>
  );
}

import '@/styles/tailwind.css';
import AppNav from './_ui/app-nav';
import { SignOutButton } from './_ui/sign-out-button';
import { auth } from './_auth/auth';

export const metadata = {
  title: 'Dashboard | Mark I',
  description: '',
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className='bg-zinc-900 text-white flex flex-row min-h-screen'>
        <AppNav>
          <SignOutButton />
        </AppNav>
        <main className='m-4 ml-2 rounded-lg shadow-lg bg-zinc-800 w-full'>
          {children}
        </main>
      </body>
    </html>
  );
}

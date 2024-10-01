import '@/styles/tailwind.css';
import AppNav from './_ui/app-nav';
import { SignOutButton } from './_ui/sign-out-button';
import AuthContext from './_ui/auth-context';
import { auth } from '../../auth';

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
  const session = await auth();

  console.log('user', session);

  // if (!user) {
  //   return (
  //     <div>No user found</div>
  //   )
  // }

  return (
    <html lang="en">
      <body className='bg-zinc-950 text-white flex flex-col sm:flex-row min-h-screen w-full'>
        <AuthContext session={session}>
          <AppNav>
            <SignOutButton />
          </AppNav>
          <main className='m-2 md:m-4 md:ml-2 rounded-lg shadow-lg bg-zinc-900 w-auto sm:w-full overflow-y-visible'>
            {children}
          </main>
        </AuthContext>
      </body>
    </html>
  );
}

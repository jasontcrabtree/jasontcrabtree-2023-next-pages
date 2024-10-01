import { authConfig } from '@/app/_auth/archive-auth.config';
import { getUser } from '@/app/_db/auth-db';
import { compare } from 'bcrypt-ts';
import NextAuth, { Session } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';

interface Credentials {
  email: string;
  password: string;
}

export const { auth, handlers, signIn, signOut } = NextAuth({
  secret: process.env.NEXTAUTH_SECRET,
  ...authConfig,
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: 'Email', type: 'text' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials) {
        if (!credentials) {
          return null;
        }

        const { email, password } = credentials as Credentials;

        try {
          const user = await getUser(email);
          if (!user) {
            return null;
          }

          const passwordsMatch = await compare(password, user.password);
          if (!passwordsMatch) {
            return null;
          }

          return {
            id: user.id,
            email: user.email,
          };
        } catch (error) {
          console.error('Authorize error:', error);
          return null;
        }
      },
    }),
  ],
  pages: {
    signIn: '/auth/signin',
    error: '/auth/error',
  },
});

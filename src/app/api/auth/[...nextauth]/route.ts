import NextAuth from 'next-auth';
import { authConfig } from '@/app/_auth/auth.config';

const handler = NextAuth({
  secret: process.env.NEXTAUTH_SECRET,
  ...authConfig,
});

export { handler as GET, handler as POST };

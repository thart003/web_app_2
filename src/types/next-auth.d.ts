// src/types/next-auth.d.ts
import type { DefaultSession, DefaultUser } from 'next-auth';
import { JWT } from 'next-auth/jwt';

declare module 'next-auth' {
  interface Session {
    user: {
      isPremium: boolean;
    } & DefaultSession['user']
  }

  interface User extends DefaultUser {
    isPremium: boolean;
  }
}

declare module 'next-auth/jwt' {
  interface JWT {
    isPremium: boolean;
  }
}
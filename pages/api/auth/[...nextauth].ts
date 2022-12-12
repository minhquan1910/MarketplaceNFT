import CredentialsProvider from 'next-auth/providers/credentials';
import NextAuth from 'next-auth';

export type TUserData = {
  address: string;
  signature: string;
  profileId: string;
  expirationTime: string;
};

export interface ISession {
  user: TUserData;
}

export default NextAuth({
  providers: [
    CredentialsProvider({
      name: 'MoralisAuth',
      credentials: {
        address: {
          label: 'address',
          type: 'text',
          placeholder: '',
        },
      },
      async authorize(credentials) {
        try {
          const { address } = credentials as { address: string };
          const user = { address };

          return user;
        } catch (e) {
          console.error(e);
          return null;
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.user = user;
      }
      return token;
    },
    async session({ session, token }) {
      (session as unknown as ISession).user = (token as unknown as ISession).user;
      return session;
    },
  },
});

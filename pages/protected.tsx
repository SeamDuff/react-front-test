import { useSession, signIn, signOut } from 'next-auth/react';
import React from 'react';

export default function ProtectedPage() {
  const { data: session } = useSession();
  if (!session) return <button onClick={() => signIn()}>Sign in</button>;

  return (
    <div>
      <p>Welcome, {session.user?.email}</p>
      <button onClick={() => signOut()}>Sign out</button>
    </div>
  );
}

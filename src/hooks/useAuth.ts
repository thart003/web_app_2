import { useState, useEffect } from 'react';
import type { User } from '@/types';

export function useAuth() {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Add authentication logic here
    setLoading(false);
  }, []);

  return { user, loading };
}
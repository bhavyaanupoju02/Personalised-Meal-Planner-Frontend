// src/components/UserMetrics.tsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const UserMetrics = ({ email }: { email: string }) => {
  const [metrics, setMetrics] = useState<{ height: number; weight: number } | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchMetrics = async () => {
      try {
        const response = await axios.get('http://localhost:3000/api/users/metrics', {
          params: { email },
        });
        setMetrics(response.data);
      } catch (err) {
        setError('Failed to fetch user metrics');
      }
    };

    fetchMetrics();
  }, [email]);

  if (error) return <p>{error}</p>;
  if (!metrics) return <p>Loading...</p>;

  return (
    <div>
      <h3>User Metrics</h3>
      <p><strong>Height:</strong> {metrics.height} mts</p>
      <p><strong>Weight:</strong> {metrics.weight} kg</p>
    </div>
  );
};

export default UserMetrics;

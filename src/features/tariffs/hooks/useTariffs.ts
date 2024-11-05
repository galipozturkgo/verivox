import { useEffect, useState } from 'react';
import { BASE_URL } from '@verivox/utils/Contants';
import { Tariff } from '../components/tariff-list/components/TariffItem.types';

export const useTariffs = () => {
  const [tariffs, setTariffs] = useState<Tariff[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [hasError, setHasError] = useState<boolean>(false);

  useEffect(() => {
    const fetchTariffs = async () => {
      try {
        setIsLoading(true);

        const response = await fetch(`${BASE_URL}/tariffs`);

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();

        setTariffs(data);
      } catch {
        setHasError(true);
      } finally {
        setIsLoading(false);
      }
    };

    fetchTariffs();
  }, []);

  return {
    tariffs,
    isLoading,
    hasError,
  };
};

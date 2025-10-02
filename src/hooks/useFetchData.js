import { useState, useEffect } from 'react';

export const useFetchData = dataUrl => {
  const [data, setData] = useState({});
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!dataUrl) return;
    fetchData(dataUrl);
  }, [dataUrl]);

  const fetchData = async url => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error('Ошибка сети');
      }
      const result = await response.json();
      setData(result || {});
    } catch (err) {
      setError('Не удалось получить данные');
    } finally {
      setLoading(false);
    }
  };

  return { data, error, loading };
};

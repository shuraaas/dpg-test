import { useState, useEffect } from 'react';

/**
 * Хук для получения данных по указанному URL.
 * Управляет состояниями данных, ошибки и загрузки.
 *
 * @param {string} dataUrl - URL для запроса. При изменении выполняется повторный запрос.
 * @returns {{data: Object, error: (string|null), loading: boolean}} Состояние: данные, ошибка или null, флаг загрузки.
 */

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

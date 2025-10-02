import { useEffect } from 'react';

/**
 * Вызывает колбэк при клике вне переданного элемента.
 *
 * @param {{ current: HTMLElement | null }} ref - Ref на целевой элемент.
 * @param {() => void} callback - Функция, вызываемая при клике вне элемента.
 */

export function useOutsideClick(ref, callback) {
  useEffect(() => {
    function handleClick(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        callback();
      }
    }

    document.addEventListener('mousedown', handleClick);
    return () => {
      document.removeEventListener('mousedown', handleClick);
    };
  }, [ref, callback]);
}

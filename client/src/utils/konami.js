import { useEffect } from 'react';

const KONAMI_CODE = [
  'ArrowUp', 'ArrowUp',
  'ArrowDown', 'ArrowDown',
  'ArrowLeft', 'ArrowRight',
  'ArrowLeft', 'ArrowRight',
  'b', 'a'
];

export function useKonamiCode(onTrigger) {
  useEffect(() => {
    let keyIndex = 0;

    const handleKeyDown = (event) => {
      const key = event.key.length === 1 ? event.key.toLowerCase() : event.key;
      const expectedKey = KONAMI_CODE[keyIndex].length === 1 ? KONAMI_CODE[keyIndex].toLowerCase() : KONAMI_CODE[keyIndex];

      if (key === expectedKey) {
        keyIndex++;
        if (keyIndex === KONAMI_CODE.length) {
          onTrigger();
          keyIndex = 0;
        }
      } else {
        keyIndex = 0;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onTrigger]);
}

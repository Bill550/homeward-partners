
import { useState, useCallback } from 'react';

export interface UseToggleReturn {
  value: boolean;
  toggle: () => void;
  setToggle: (value: boolean) => void;
}

export const useToggle = (initialValue = false): UseToggleReturn => {
  const [value, setValue] = useState(initialValue);

  const toggle = useCallback(() => {
    setValue(prev => !prev);
  }, []);

  const setToggle = useCallback((newValue: boolean) => {
    setValue(newValue);
  }, []);

  return { value, toggle, setToggle };
};
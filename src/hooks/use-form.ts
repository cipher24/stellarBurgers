import React, { useState } from 'react';
import { TRequestProps } from '../utils/types';

export function useForm<T extends {[key: string]: string} >(inputValues: T) {
  const [values, setValues] = useState<TRequestProps>(inputValues);

  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    const { value, name } = e.target as HTMLInputElement;
    setValues({
      ...values,
      [name]: value
    });
  };

  return { values, handleChange, setValues }
}
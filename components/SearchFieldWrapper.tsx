'use client';

import { Button, SearchField } from '@heroui/react';
import { useSearchParams, useRouter } from 'next/navigation';
import { useState } from 'react';

export function SearchFieldWrapper({
  defaultValue = '',
}: {
  defaultValue?: string;
}) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [value, setValue] = useState(defaultValue);

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();

    const params = new URLSearchParams(searchParams.toString());

    if (value) {
      params.set('q', value);
    } else {
      params.delete('q');
    }

    router.push(`/?${params.toString()}`);
  }

  return (
    <form onSubmit={onSubmit} className='flex gap-4 items-end'>
      <SearchField name='search'>
        <SearchField.Group>
          <SearchField.SearchIcon />
          <SearchField.Input
            value={value}
            onChange={(e) => setValue(e.target.value)}
            className='w-full'
            placeholder='Search for your favourite music...'
          />
          <SearchField.ClearButton />
        </SearchField.Group>
      </SearchField>
      <Button type='submit' className={'text-white'}>
        Search
      </Button>
    </form>
  );
}

import { ItunesAlbum } from '@/lib/types';
import { Card } from '@heroui/react';
import Image from 'next/image';

export function AlbumDisplay({ album }: { album: ItunesAlbum }) {
  return (
    <Card className='relative shadow-xl'>
      <Image
        src={album.artworkUrl100!}
        width={100}
        height={100}
        alt={`Album Arwork of ${album.collectionName}`}
        className='absolute blur-lg inset-0 size-full  obejct cover opacity-40 z-0'
      />
      <Card.Content className='flex flex-col items-center z-10 relative'>
        <Image
          src={album.artworkUrl100!}
          width={100}
          height={100}
          alt={`Album Arwork of ${album.collectionName}`}
          className='relative z-10 rounded-sm'
        />
        <div className='w-full flex flex-col justify-center mt-2 text-foreground'>
          <span className='text-center  w-full text-sm font-medium'>
            {album.releaseDate && new Date(album.releaseDate!).getFullYear()}
          </span>
          <span className='text-center text-lg w-full font-bold line-clamp-2'>
            {album.collectionName}
          </span>
          <span className='text-center text-sm w-full'>
            {album.trackCount}{' '}
            {album.trackCount && album.trackCount > 1 ? 'Tracks' : 'Track'}
          </span>
        </div>
      </Card.Content>
    </Card>
  );
}

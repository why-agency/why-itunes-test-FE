import { ItunesAlbum } from '@/lib/types';
import { Card } from '@heroui/react';
import Image from 'next/image';
import Link from 'next/link';

export function AlbumDisplay({ album }: { album: ItunesAlbum }) {
  return (
    <Link href={album.collectionViewUrl} target='_blank'>
      <Card className='relative shadow-xl group h-full'>
        <Image
          src={album.artworkUrl100!}
          width={100}
          height={100}
          alt={`Album Arwork of ${album.collectionName}`}
          className='absolute blur-lg inset-0 size-full  obejct cover opacity-40 z-0 transition-all duration-700 ease group-hover:scale-125'
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
        <p className='absolute bottom-2 -translate-x-1/2 left-1/2 bg-white/60 px-3 py-2 text-xs rounded-full backdrop-blur-3xl font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20 text-center min-w-32 '>
          View Album on iTunes
        </p>
      </Card>
    </Link>
  );
}

import {
  ItunesAlbum,
  ItunesArtist,
  ItunesSearchResponse,
  ItunesTrack,
} from '@/lib/types';
import { isAlbum, isArtist, isTrack } from '@/lib/utils';
import Image from 'next/image';
import Link from 'next/link';

async function getItunesResults(term: string) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SITE_URL}/api/itunes?term=${encodeURIComponent(term)}`,
    { cache: 'no-store' },
  );

  return res.json();
}

export default async function Home() {
  const data = (await getItunesResults('mobb deep')) as ItunesSearchResponse;

  const artists: ItunesArtist[] = data.results.filter(isArtist);
  const albums: ItunesAlbum[] = data.results.filter(isAlbum);
  const tracks: ItunesTrack[] = data.results.filter(isTrack);

  console.log(artists);

  return (
    <div className='font-sans h-dvh w-full'>
      <main className='grow flex flex-col  size-full p-6'>
        <h1 className='text-4xl'>Welcome to &WhyTunes</h1>
        <div className='flex flex-col gap-10 mt-10'>
          <section className='flex flex-col gap-10'>
            <h2 className='text-3xl'>Artists</h2>
            <article className='grid grid-cols-4 gap-6'>
              {artists.map((artist, i) => (
                <div key={`display-artist-info-${i}`}>
                  <Link href={artist.artistLinkUrl}>{artist.artistName}</Link>
                </div>
              ))}
            </article>
          </section>
          <section className='flex flex-col gap-10'>
            <h2 className='text-3xl'>Albums</h2>
            <article className='grid grid-cols-4 gap-6'>
              {albums.map((album, i) => (
                <div key={`display-album-info-${i}`}>
                  <Image
                    src={album.artworkUrl100!}
                    width={100}
                    height={100}
                    alt={`Album Arwork of ${album.collectionName}`}
                  />
                  <span>{album.collectionName}</span>
                </div>
              ))}
            </article>
          </section>
        </div>
      </main>
    </div>
  );
}

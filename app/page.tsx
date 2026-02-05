import { AlbumDisplay } from '@/components/AlbumDisplay';
import { SearchFieldWrapper } from '@/components/SearchFieldWrapper';
import {
  ItunesAlbum,
  ItunesArtist,
  ItunesSearchResponse,
  ItunesTrack,
} from '@/lib/types';
import { isAlbum, isArtist, isTrack } from '@/lib/utils';
import { Card } from '@heroui/react';
import Link from 'next/link';

async function getItunesResults(term: string) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SITE_URL}/api/itunes?term=${encodeURIComponent(term)}`,
    { cache: 'no-store' },
  );

  return res.json();
}

export default async function Home({
  searchParams: rawSearchParams,
}: {
  searchParams: Promise<{ q?: string }>;
}) {
  const searchParams = await rawSearchParams;
  const query = searchParams.q ?? 'why';

  const data = (await getItunesResults(query)) as ItunesSearchResponse;

  const artists: ItunesArtist[] = data.results.filter(isArtist);
  const albums: ItunesAlbum[] = data.results.filter(isAlbum);
  const tracks: ItunesTrack[] = data.results.filter(isTrack);

  return (
    <div className='font-sans w-full'>
      <main className='grow flex flex-col  size-full p-6'>
        <div className='mb-15 pb-15 border-b flex items-center flex-col gap-5'>
          <h1 className='text-4xl font-bolder'>Welcome to &WhyTunes</h1>

          <SearchFieldWrapper defaultValue={query} />
        </div>
        <div className='flex flex-col gap-16 '>
          <section className='flex flex-col gap-5'>
            <h2 className='text-3xl'>Artists</h2>
            <article className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
              {artists && artists.length > 0 ? (
                artists.map((artist, i) => (
                  <Link
                    key={`display-artist-info-${i}`}
                    href={artist.artistLinkUrl}
                    className='group relative'
                    target='_blank'
                  >
                    <Card className='group-hover:-translate-y-0.5 transition-all duration-500 group-hover:shadow-lg group-hover:bg-black/5'>
                      <Card.Header>
                        <Card.Title className='font-bold'>
                          {artist.artistName}
                        </Card.Title>
                      </Card.Header>
                    </Card>
                    <p className='absolute bottom-1/2 translate-y-1/2 right-4 bg-white/60 px-3 py-2 text-xs rounded-full backdrop-blur-3xl font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
                      View Artist on iTunes
                    </p>
                  </Link>
                ))
              ) : (
                <div>Sorry, no results...</div>
              )}
            </article>
          </section>
          <section className='flex flex-col gap-5'>
            <h2 className='text-3xl'>Albums</h2>
            <article className='grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  xl:grid-cols-6'>
              {albums && albums.length > 0 ? (
                albums.map((album, i) => (
                  <AlbumDisplay key={`display-album-info-${i}`} album={album} />
                ))
              ) : (
                <div>Sorry, no results...</div>
              )}
            </article>
          </section>

          <section className='flex flex-col gap-5'>
            <h2 className='text-3xl'>Songs</h2>
            <article className='flex flex-col gap-6'>
              {tracks && tracks.length > 0 ? (
                tracks.map((track, i) => (
                  <Link
                    key={`display-artist-info-${i}`}
                    href={track.trackViewUrl}
                    className='group'
                    target='_blank'
                  >
                    <Card className='group-hover:-translate-y-0.5 transition-all duration-500 group-hover:shadow-lg group-hover:bg-black/5 relative'>
                      <Card.Content>
                        <span className='text-muted'>
                          <span className='text-foreground font-bold'>
                            {track.trackName}
                          </span>{' '}
                          by{' '}
                          <span className='text-foreground font-bold'>
                            {track.artistName}
                          </span>{' '}
                          on Album{' '}
                          <span className='text-foreground font-bold'>
                            {track.collectionName}
                          </span>
                        </span>
                        <p className='absolute bottom-1/2 translate-y-1/2 right-4 bg-white/60 px-3 py-2 text-xs rounded-full backdrop-blur-3xl font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
                          View Song on iTunes
                        </p>
                      </Card.Content>
                    </Card>
                  </Link>
                ))
              ) : (
                <div>Sorry, no results...</div>
              )}
            </article>
          </section>
        </div>
      </main>
    </div>
  );
}

import { AlbumDisplay } from '@/components/AlbumDisplay';
import {
  ItunesAlbum,
  ItunesArtist,
  ItunesSearchResponse,
  ItunesTrack,
} from '@/lib/types';
import { isAlbum, isArtist, isTrack } from '@/lib/utils';
import { Card, Label, SearchField } from '@heroui/react';
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
    <div className='font-sans w-full'>
      <main className='grow flex flex-col  size-full p-6'>
        <div className='mb-10 pb-10 border-b flex items-center flex-col gap-10'>
          <h1 className='text-4xl font-bolder'>Welcome to &WhyTunes</h1>
          <SearchField name='search' className='flex flex-col items-center'>
            <Label className='w-fit'>Search to get stated</Label>
            <SearchField.Group>
              <SearchField.SearchIcon />
              <SearchField.Input className='' placeholder='Search...' />
              <SearchField.ClearButton />
            </SearchField.Group>
          </SearchField>
        </div>
        <div className='flex flex-col gap-10 mt-10'>
          <section className='flex flex-col gap-10'>
            <h2 className='text-3xl'>Artists</h2>
            <article className='flex flex-col gap-6'>
              {artists && artists.length > 0 ? (
                artists.map((artist, i) => (
                  <Link
                    key={`display-artist-info-${i}`}
                    href={artist.artistLinkUrl}
                    className='group'
                  >
                    <Card className='group-hover:-translate-y-1 transition-all duration-500 group-hover:shadow-xl'>
                      <Card.Header>
                        <Card.Title>{artist.artistName}</Card.Title>
                      </Card.Header>
                    </Card>
                  </Link>
                ))
              ) : (
                <div>Sorry, no results...</div>
              )}
            </article>
          </section>
          <section className='flex flex-col gap-10'>
            <h2 className='text-3xl'>Albums</h2>
            <article className='grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  xl:grid-cols-6'>
              {albums.map((album, i) => (
                <AlbumDisplay key={`display-album-info-${i}`} album={album} />
              ))}
            </article>
          </section>

          <section className='flex flex-col gap-10'>
            <h2 className='text-3xl'>Songs</h2>
            <article className='flex flex-col gap-6'>
              {tracks.map((track, i) => (
                <Link
                  key={`display-artist-info-${i}`}
                  href={track.trackViewUrl}
                >
                  <Card>
                    <Card.Header>
                      <Card.Title>
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
                      </Card.Title>
                    </Card.Header>
                  </Card>
                </Link>
              ))}
            </article>
          </section>
        </div>
      </main>
    </div>
  );
}

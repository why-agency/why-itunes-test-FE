import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const term = searchParams.get('term');

  if (!term) {
    return NextResponse.json({ error: 'Missing search term' }, { status: 400 });
  }

  const itunesUrl = `https://itunes.apple.com/search?media=music&entity=musicArtist,album,song&term=${encodeURIComponent(
    term,
  )}&limit=10`;

  const res = await fetch(itunesUrl, {
    // optional but recommended
    headers: {
      Accept: 'application/json',
    },
    // prevents Next from caching searches
    cache: 'no-store',
  });

  if (!res.ok) {
    return NextResponse.json(
      { error: 'iTunes API error' },
      { status: res.status },
    );
  }

  const data = await res.json();
  return NextResponse.json(data);
}

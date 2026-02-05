// types/itunes.ts

export type WrapperType = 'artist' | 'collection' | 'track';
export type Explicitness = 'explicit' | 'cleaned' | 'notExplicit';

export interface ItunesBase {
  wrapperType: WrapperType;
  artistId?: number;
  artistName?: string;
  artistViewUrl?: string;
  primaryGenreName?: string;
  country?: string;
  currency?: string;
}

export interface ItunesArtist extends ItunesBase {
  wrapperType: 'artist';
  artistType: 'Artist';
  artistId: number;
  artistName: string;
  artistLinkUrl: string;
  amgArtistId?: number;
  primaryGenreId?: number;
}

export interface ItunesAlbum extends ItunesBase {
  wrapperType: 'collection';
  collectionType: 'Album' | string;

  artistId: number;
  collectionId: number;
  artistName: string;

  collectionName: string;
  collectionCensoredName?: string;

  collectionViewUrl: string;
  artworkUrl60?: string;
  artworkUrl100?: string;

  collectionPrice?: number;
  collectionExplicitness?: Explicitness;
  contentAdvisoryRating?: string;

  trackCount?: number;
  copyright?: string;
  releaseDate?: string;
}

export interface ItunesTrack extends ItunesBase {
  wrapperType: 'track';
  kind: 'song' | string;

  artistId: number;
  collectionId: number;
  trackId: number;

  artistName: string;
  collectionName: string;
  trackName: string;

  collectionViewUrl: string;
  trackViewUrl: string;
  previewUrl?: string;

  artworkUrl30?: string;
  artworkUrl60?: string;
  artworkUrl100?: string;

  trackPrice?: number;
  collectionPrice?: number;

  collectionExplicitness?: Explicitness;
  trackExplicitness?: Explicitness;

  discNumber?: number;
  trackNumber?: number;
  trackTimeMillis?: number;

  isStreamable?: boolean;
}

export type ItunesResult = ItunesArtist | ItunesAlbum | ItunesTrack;

export interface ItunesSearchResponse {
  resultCount: number;
  results: ItunesResult[];
}

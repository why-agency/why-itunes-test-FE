// Here be supporting functions

import clsx, { ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { ItunesAlbum, ItunesArtist, ItunesResult, ItunesTrack } from './types';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const isArtist = (result: ItunesResult): result is ItunesArtist =>
  result.wrapperType === 'artist';

export const isAlbum = (result: ItunesResult): result is ItunesAlbum =>
  result.wrapperType === 'collection';

export const isTrack = (result: ItunesResult): result is ItunesTrack =>
  result.wrapperType === 'track';

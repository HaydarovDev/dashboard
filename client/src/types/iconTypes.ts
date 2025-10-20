import type React from 'react';

export type IconParam = {
  size?: number;
  color?: string;
};

export interface NotificationData {
  id: number | string;
  title: string;
  message: string;
}

export interface NftDetails {
  id: string | number;
  img: string;
  title: string;
  description: string;
  icon?: React.ReactNode;
  price: number;
  about: string;
  owner: string;
  creator: string;
  endin: string;
}

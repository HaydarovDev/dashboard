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

export interface User {
  id: number;
  image: string;
  username: string;
}

export interface Currency {
  id: number;
  code: string;
  name: string;
  amount: number;
  formatted: string;
  flag: string;
}

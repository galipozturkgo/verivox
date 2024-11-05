export interface Tariff {
  name: string;
  price: number;
  link: string;
  downloadSpeed: number;
  uploadSpeed: number;
  benefits: string[];
}

export interface TariffItemProps extends Tariff {
  order: number;
}

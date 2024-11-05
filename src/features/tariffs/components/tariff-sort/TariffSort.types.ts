export type TariffSortBy =
  | 'price-asc'
  | 'price-desc'
  | 'download-speed-asc'
  | 'download-speed-desc'
  | 'upload-speed-asc'
  | 'upload-speed-desc';

export interface TariffSortProps {
  sortBy: TariffSortBy;
  onChange: (sortBy: TariffSortBy) => void;
}

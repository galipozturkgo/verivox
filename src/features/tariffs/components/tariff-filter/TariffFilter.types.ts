export type TariffFilterType = 'price' | 'download-speed' | 'upload-speed';

export interface TariffFilterBy {
  type: TariffFilterType;
  min: number | null;
  max: number | null;
}

export interface TariffFilterProps {
  filter: TariffFilterBy;
  onChange: (filter: TariffFilterBy) => void;
}

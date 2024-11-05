import Select from '@verivox/components/select/Select';
import { TariffSortBy, TariffSortProps } from './TariffSort.types';

export const TARIFF_SORT_OPTIONS: {
  label: string;
  value: TariffSortBy;
}[] = [
  {
    label: 'Price: Ascending',
    value: 'price-asc',
  },
  {
    label: 'Price: Descending',
    value: 'price-desc',
  },
  {
    label: 'Download speed: Ascending',
    value: 'download-speed-asc',
  },
  {
    label: 'Download speed: Descending',
    value: 'download-speed-desc',
  },
  {
    label: 'Upload speed: Ascending',
    value: 'upload-speed-asc',
  },
  {
    label: 'Upload speed: Descending',
    value: 'upload-speed-desc',
  },
];

const TariffSort: React.FC<TariffSortProps> = ({ sortBy, onChange }) => {
  const handleChange = (value: string) => onChange(value as TariffSortBy);

  return (
    <Select
      id="sort-by"
      label="Sort by"
      options={TARIFF_SORT_OPTIONS.map(({ label, value }) => ({
        label,
        value,
      }))}
      value={sortBy}
      onChange={handleChange}
    />
  );
};

export default TariffSort;

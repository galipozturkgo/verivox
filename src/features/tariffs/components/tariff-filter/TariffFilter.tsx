import styles from './TariffFilter.module.scss';
import Input from '@verivox/components/input/Input';
import Select from '@verivox/components/select/Select';
import { TariffFilterType, TariffFilterProps } from './TariffFilter.types';

export const TARIFF_FILTER_OPTIONS: {
  label: string;
  value: TariffFilterType;
}[] = [
  {
    label: 'Price',
    value: 'price',
  },
  {
    label: 'Download speed',
    value: 'download-speed',
  },
  {
    label: 'Upload speed',
    value: 'upload-speed',
  },
];

const TariffFilter: React.FC<TariffFilterProps> = ({ filter, onChange }) => {
  const handleTypeChange = (value: string) =>
    onChange({
      ...filter,
      type: value as TariffFilterType,
      min: null,
      max: null,
    });

  const handleMinChange = (value: number | string | null) =>
    onChange({ ...filter, min: value as number });

  const handleMaxChange = (value: number | string | null) =>
    onChange({ ...filter, max: value as number });

  return (
    <div className={styles.tariffFilter}>
      <Select
        id="filter-type"
        label="Filter by"
        options={TARIFF_FILTER_OPTIONS.map(({ label, value }) => ({
          label,
          value,
        }))}
        value={filter.type}
        onChange={handleTypeChange}
      />
      <div className={styles.tariffFilterInput}>
        <Input
          id="min-filter"
          label="Min"
          type="number"
          value={filter.min || ''}
          onChange={handleMinChange}
          placeholder="min"
        />
        <Input
          id="max-filter"
          label="Max"
          type="number"
          value={filter.max || ''}
          onChange={handleMaxChange}
          placeholder="max"
        />
      </div>
    </div>
  );
};

export default TariffFilter;

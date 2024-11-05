import styles from './Tariffs.module.scss';
import { useMemo, useState } from 'react';
import TariffList from './components/tariff-list/TariffList';
import TariffFilter from './components/tariff-filter/TariffFilter';
import TariffSort from './components/tariff-sort/TariffSort';
import { useTariffs } from './hooks/useTariffs';
import { TariffFilterBy } from './components/tariff-filter/TariffFilter.types';
import { TariffSortBy } from './components/tariff-sort/TariffSort.types';

const Tariffs = () => {
  const { tariffs, isLoading, hasError } = useTariffs();

  const [filter, setFilter] = useState<TariffFilterBy>({
    type: 'download-speed',
    min: null,
    max: null,
  });

  const [sortBy, setSortBy] = useState<TariffSortBy>('price-asc');

  const filteredItems = useMemo(() => {
    if (!tariffs) {
      return [];
    }

    let result = [...tariffs];

    if (filter.min !== null || filter.max !== null) {
      result = result.filter((tariff) => {
        const valueToFilter =
          filter.type === 'price'
            ? tariff.price
            : filter.type === 'download-speed'
            ? tariff.downloadSpeed
            : tariff.uploadSpeed;

        const meetsMin =
          filter.min !== null ? valueToFilter >= filter.min : true;
        const meetsMax =
          filter.max !== null ? valueToFilter <= filter.max : true;

        return meetsMin && meetsMax;
      });
    }

    result.sort((a, b) => {
      switch (sortBy) {
        case 'price-asc':
          return a.price - b.price;
        case 'price-desc':
          return b.price - a.price;
        case 'download-speed-asc':
          return a.downloadSpeed - b.downloadSpeed;
        case 'download-speed-desc':
          return b.downloadSpeed - a.downloadSpeed;
        case 'upload-speed-asc':
          return a.uploadSpeed - b.uploadSpeed;
        case 'upload-speed-desc':
          return b.uploadSpeed - a.uploadSpeed;
        default:
          return 0;
      }
    });

    return result;
  }, [tariffs, filter, sortBy]);

  const isEmpty = !filteredItems.length;

  if (isLoading) {
    return <div>Loading</div>;
  }

  if (hasError) {
    return <div>Error loading tariffs</div>;
  }

  return (
    <div className={styles.tariffs}>
      <div className={styles.tariffsHeader}>
        <div className={styles.tariffsHeaderItems}>
          <TariffFilter filter={filter} onChange={setFilter} />
          <TariffSort sortBy={sortBy} onChange={setSortBy} />
        </div>
      </div>

      {isEmpty ? <div>Not found</div> : <TariffList items={filteredItems} />}
    </div>
  );
};

export default Tariffs;

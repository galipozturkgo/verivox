import TariffItem from './components/TariffItem';
import { TariffListProps } from './TariffList.types';
import styles from './TariffList.module.scss';

const TariffList: React.FC<TariffListProps> = ({ items }) => {
  return (
    <ul className={styles.tariffList}>
      {items.map((item, key) => (
        <TariffItem key={key} order={key + 1} {...item} />
      ))}
    </ul>
  );
};

export default TariffList;

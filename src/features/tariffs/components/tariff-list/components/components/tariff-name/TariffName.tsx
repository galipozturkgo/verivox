import styles from './TariffName.module.scss';
import { Tariff } from '../../TariffItem.types';

const TariffName: React.FC<Pick<Tariff, 'name'>> = ({ name }) => {
  return <div className={styles.tariffName}>{name}</div>;
};

export default TariffName;

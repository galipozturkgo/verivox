import TariffBenefits from './components/tariff-benefits/TariffBenefits';
import TariffInfo from './components/tariff-info/TariffInfo';
import TariffName from './components/tariff-name/TariffName';
import TariffSpeed from './components/tariff-speed/TariffSpeed';
import styles from './TariffItem.module.scss';
import { TariffItemProps } from './TariffItem.types';

const TariffItem: React.FC<TariffItemProps> = ({
  order,
  name,
  price,
  link,
  downloadSpeed,
  uploadSpeed,
  benefits,
}) => {
  return (
    <li className={styles.tariffItem}>
      <div className={styles.tariffOrder}>{order}.</div>
      <div className={styles.tariffContent}>
        <TariffName name={name} />
        <TariffSpeed downloadSpeed={downloadSpeed} uploadSpeed={uploadSpeed} />
        <TariffBenefits benefits={benefits} />
        <TariffInfo price={price} link={link} />
      </div>
    </li>
  );
};

export default TariffItem;

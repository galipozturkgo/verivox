import styles from './TariffInfo.module.scss';
import { Tariff } from '../../TariffItem.types';

const formatPrice = (price: number) => {
  return new Intl.NumberFormat('de-DE', {
    style: 'currency',
    currency: 'EUR',
  }).format(price);
};

const TariffInfo: React.FC<Pick<Tariff, 'price' | 'link'>> = ({
  price,
  link,
}) => {
  return (
    <div className={styles.tariffInfo}>
      <div className={styles.tariffPrice}>{formatPrice(price)}</div>
      <a
        href={link}
        target="_blank"
        rel="noreferrer"
        className={styles.tariffLink}
      >
        To Tariff ►
      </a>
    </div>
  );
};

export default TariffInfo;

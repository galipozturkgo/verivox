import styles from './TariffBenefits.module.scss';
import { Tariff } from '../../TariffItem.types';

const TariffBenefits: React.FC<Pick<Tariff, 'benefits'>> = ({ benefits }) => {
  return (
    <div className={styles.tariffBenefits}>
      {benefits.map((benefit, key) => {
        return (
          <div key={key} className={styles.benefitItem}>
            <span className={styles.bullet}></span>
            <span>{benefit}</span>
          </div>
        );
      })}
    </div>
  );
};

export default TariffBenefits;

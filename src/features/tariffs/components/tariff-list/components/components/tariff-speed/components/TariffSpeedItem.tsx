import styles from './TariffSpeedItem.module.scss';
import classNames from 'classnames';
import { TariffSpeedItemProps } from './TariffSpeedItem.types';

const TariffSpeedItem: React.FC<TariffSpeedItemProps> = ({
  direction,
  speed,
  color,
}) => {
  const speedWithUnit = `${speed} Mbit/s`;

  return (
    <div className={styles.tariffSpeedItem}>
      <span className={styles.tariffSpeedItemLabel}>
        {direction === 'down' ? 'Download' : 'Upload'}
      </span>
      <div className={classNames(styles.tariffSpeedContainer, color)}>
        <div className={styles.tariffSpeedBox}>
          {direction === 'down' ? '▼' : '▲'}
        </div>
        <div className={classNames(styles.tariffSpeedDivider, color)} />
        <div className={styles.tariffSpeedBox}>{speedWithUnit}</div>
      </div>
    </div>
  );
};

export default TariffSpeedItem;

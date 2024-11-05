import styles from './TariffSpeed.module.scss';
import { Tariff } from '../../TariffItem.types';
import TariffSpeedItem from './components/TariffSpeedItem';

const TariffSpeed: React.FC<Pick<Tariff, 'downloadSpeed' | 'uploadSpeed'>> = ({
  downloadSpeed,
  uploadSpeed,
}) => {
  return (
    <div className={styles.tariffSpeed}>
      <TariffSpeedItem
        direction="down"
        speed={downloadSpeed}
        color={styles.tariffSpeedDownload}
      />
      <TariffSpeedItem
        direction="up"
        speed={uploadSpeed}
        color={styles.tariffSpeedUpload}
      />
    </div>
  );
};

export default TariffSpeed;

import styles from './alliances.module.css';
import AllianceContainer from '../../components/AllianceContainer/AllianceContainer';
import alliancesData from '../../constants/alliancesData';

const Alliances = () => {
  return (
    <section id="alliances" className={styles.alliancesSection}>
      <h2 className={styles.alliancesSectionHeader}>Nuestras alianzas</h2>
      <div className={styles.alliancesCategory}>
        <h2 className={styles.alliancesCategoryHeader}>
          Alianzas internacionales
        </h2>
        <div className={styles.alliancesList}>
          {alliancesData.international.map((organization, index) => (
            <AllianceContainer
              key={index}
              photo={organization.photo}
              name={organization.name}
              country={organization.country}
              link={organization.link}
            />
          ))}
        </div>
      </div>
      <div className={styles.alliancesCategory}>
        <h2 className={styles.alliancesCategoryHeader}>Alianzas nacionales</h2>
        <div className={styles.alliancesList}>
          {alliancesData.national.map((organization, index) => (
            <AllianceContainer
              key={index}
              photo={organization.photo}
              name={organization.name}
              link={organization.link}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Alliances;

import styles from './team.module.css';
import TeamCard from '../../components/TeamCard/TeamCard';
import teamData from '../../constants/teamData';

const Team = () => {
  return (
    <section id="team" className={styles.teamSection}>
      <h2 className={styles.teamTitle}>Comité directivo</h2>
      <div className={styles.teamCardsContainer}>
        {teamData.map((member, index) => (
          <TeamCard
            key={index}
            name={member.name}
            position={member.position}
            photo={member.photo}
            socialNetworks={member.socialNetworks}
          />
        ))}
      </div>
    </section>
  );
};

export default Team;

import "./team.css";
import TeamCard from "../../components/TeamCard/TeamCard";
import teamData from "../../constants/teamData";

const Team = () => {
  return (
    <section id="team" className="team-section">
      <h2 className="team-title">Equipo</h2>
      <div className="team-cards-container">
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

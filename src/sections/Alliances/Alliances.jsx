import './alliances.css';
import AllianceContainer from '../../components/AllianceContainer/AllianceContainer';
import alliancesData from '../../constants/alliancesData';

const Alliances = () => {
  return (
    <section id="alliances" className="alliances-section">
      <h2>Nuestras alianzas</h2>
      <div className="alliances-category">
        <h2>Alianzas internacionales</h2>
        <div className="alliances-list">
          {alliancesData.international.map((organization, index) => (
            <AllianceContainer
              key={index}
              photo={organization.photo}
              name={organization.name}
              country={organization.country}
            />
          ))}
        </div>
      </div>
      <div className="alliances-category">
        <h2>Alianzas nacionales</h2>
        <div className="alliances-list">
          {alliancesData.national.map((organization, index) => (
            <AllianceContainer
              key={index}
              photo={organization.photo}
              name={organization.name}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Alliances;

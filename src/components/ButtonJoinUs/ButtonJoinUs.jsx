import "./button-join-us.css";

const ButtonJoinUs = () => {
  const handleClick = () => {
    window.open("https://forms.gle/HpvAknKRC1xJev2P7", "_blank");
  };

  return (
    <button className="join-us-button" onClick={handleClick}>
      ¡Únete a la red!
    </button>
  );
};

export default ButtonJoinUs;

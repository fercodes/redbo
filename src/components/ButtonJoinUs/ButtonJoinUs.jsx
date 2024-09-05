import "./button-join-us.css";

const ButtonJoinUs = () => {
  const handleClick = () => {
    window.open("https://yoursite.com/join", "_blank");
  };

  return (
    <button className="join-us-button" onClick={handleClick}>
      ¡Únete a la red!
    </button>
  );
};

export default ButtonJoinUs;

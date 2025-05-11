import styles from './buttonJoinUs.module.css';

const ButtonJoinUs = () => {
  const handleClick = () => {
    window.open('https://forms.gle/HpvAknKRC1xJev2P7', '_blank');
  };

  return (
    <button className={styles.joinUsButton} onClick={handleClick}>
      ¡Únete a la red!
    </button>
  );
};

export default ButtonJoinUs;

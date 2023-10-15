import styles from './App.module.css';
import useAdviceAPI from './useAdviceApi';

const App = () => {
  const { currentAdvice, getAdvice } = useAdviceAPI();
  const { id, advice } = currentAdvice || {};

  return (
    <div className={styles.wrapper}>
      <h1>Advice #{id}</h1>
      {!advice ? <p>...</p> : <blockquote>{advice}</blockquote>}
      <picture className={styles.separator}>
        <source media='(min-width: 550px)' srcSet='./images/pattern-divider-desktop.svg'></source>
        <img src='./images/pattern-divider-mobile.svg' alt='Horizontal rules image'></img>
      </picture>
      <button className={styles.bubble} onClick={getAdvice}></button>
    </div>
  );
};

export default App;

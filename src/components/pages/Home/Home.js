import styles from './Home.module.scss';
import Row from 'react-bootstrap/Row';
import Tables from '../../features/Tables/Tables';


const Home = () => {
  return (
    <div>
      <div className={styles.header}>
      <h1>All tables</h1>
      </div>
      <Row className={styles.cardContainer}>
        <Tables />
      </Row>
    </div>
  );
};

export default Home;
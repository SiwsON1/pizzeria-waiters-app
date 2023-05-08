import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import styles from './Tables.module.scss';
import { getAllTables } from '../../../redux/tablesRedux';





const Tables = () => {
  
  

  const tablesData = useSelector(state => getAllTables(state));


  return (
    <section className={styles.cards}>
      <div className="d-flex flex-column flex-wrap justify-content-between">
        {tablesData.map((table) => (
          <Card key={table.id} className={styles.card}>
            <Card.Body>
              <div className={styles.cardBody}>
                <div className={styles.titles}>
                  <Card.Title as="h3">Table {table.id}</Card.Title>
                  <Card.Subtitle className={styles.subTitle}>
                    <span style={{ fontWeight: "bold" }}>Status: </span>
                    <span style={{ fontWeight: 300, fontSize: "0.9rem" }}>
                      {table.status}
                    </span>
                  </Card.Subtitle>
                </div>
                <Link to={`/table/${table.id}`}>
                  <Button variant="primary">Show more</Button>
                </Link>
              </div>
            </Card.Body>
          </Card>
        ))}
      </div>
    </section>
  );
}

export default Tables;
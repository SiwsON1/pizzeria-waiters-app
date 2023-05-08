import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import { Form } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { getAllStatus } from '../../../redux/statusRedux';
import styles from './TableForm.module.scss';
import { useEffect } from 'react';

const TableForm = ({ action, actionText, ...props }) => {

  const [peopleAmount, setPeopleAmount] = useState(props.peopleAmount|| '');
  const [maxPeopleAmount, setMaxPeopleAmount] = useState(props.maxPeopleAmount|| '');
  const [status, setStatus] = useState(props.status || '');
  const [bill, setBill] = useState(props.bill || '');


  const statuses = useSelector(getAllStatus);


  


  const handleSubmit = () => {
   
      action({ status,peopleAmount,maxPeopleAmount,bill  });
   };
   const handlePeopleAmountChange = (e) => {
    const value = parseInt(e.target.value, 10);
    if (value >= 0 && value <= 10) {
      setPeopleAmount(value);
    }
  };
  
  const handleMaxPeopleAmountChange = (e) => {
    const value = parseInt(e.target.value, 10);
    if (value >= 0 && value <= 10) {
      setMaxPeopleAmount(value);
      if (peopleAmount > value) {
        setPeopleAmount(value);
      }
    }
  };
  
 
   useEffect(() => {
    if (status === 'Cleaning' || status === 'Free') {
      setPeopleAmount('');
    }
  }, [status]);

  useEffect(() => {
  if (status === 'Busy' && bill === '') {
    setBill(0);
  }
}, [status, bill]);


  useEffect(() => {
    if (peopleAmount > maxPeopleAmount) {
      setPeopleAmount(maxPeopleAmount);
    }
  }, [maxPeopleAmount]);

  return (
    <>
      <h2 className={styles.title}>Table {props.id}</h2>
      <Form onSubmit={handleSubmit} className={styles.listForm}>
        <Form.Group className="mb-4 d-flex align-items-center col-4" controlId="exampleForm.ControlSelect1">
          <Form.Label as="h5" className="me-2 pe-3">Status:</Form.Label>
          <Form.Control as="select" value={status} onChange={e => setStatus(e.target.value)}>
            <option value="">Select status</option>
            {statuses.map(status => (
              <option key={status} value={status}>{status}</option>
            ))}
          </Form.Control>
        </Form.Group>
        <Form.Group className={`${styles.card} mb-4 d-flex`} controlId="peopleInput">
  <Form.Label as="h5" className="me-2 pe-1 mt-1">People:</Form.Label>
  <div className="d-flex flex-grow-1">
    <Form.Control
      type="text"
      value={peopleAmount}
      onChange={handlePeopleAmountChange}
      className={styles.squareInput}
    />
    <div className="mt-1">/</div>
    <Form.Control
      type="text"
      value={maxPeopleAmount}
      onChange={handleMaxPeopleAmountChange}
      className={styles.squareInput}
    />
  </div>
</Form.Group>
<Form.Group className={`${styles.card} mb-4 d-flex`} controlId="billInput">
  {status === "Busy" ? (
    <>
      <Form.Label as="h5" className=" mt-1 pe-5">Bill:</Form.Label>
      <div className="d-flex flex-grow-1">
        <span className="mt-1">$</span>
        <Form.Control
          type="text"
          value={bill}
          onChange={e => setBill(e.target.value)}
          className={styles.squareInput}
        />
      </div>
    </>
  ) : null}
</Form.Group>
        <Button variant="primary" type="submit">{actionText}</Button>
      </Form>
    </>
  );
};


export default TableForm;
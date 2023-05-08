
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { editTableRequest, getTableById } from '../../../redux/tablesRedux';
import TableForm from '../TableForm/TableForm';

const EditTableForm = () => {

  const { id } = useParams();

  const tableData = useSelector(state => getTableById(state, id));

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const action = table => {
    dispatch(editTableRequest({ ...table, id }));
    navigate('/')
};

 return (

 <TableForm action ={action} actionText ={'Update'} id={id} status ={tableData.status} peopleAmount={tableData.peopleAmount} maxPeopleAmount={tableData.maxPeopleAmount} bill={tableData.bill}/>
);
};


export default EditTableForm;
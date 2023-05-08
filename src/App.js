import { Container } from 'react-bootstrap';
import { Route, Routes } from "react-router-dom";
import Home from "./components/pages/Home/Home";
import Table from './components/pages/Table/Table';
import NotFound from './components/pages/NotFound/NotFound';
import Header from './components/views/Header/Header';
import Footer from './components/views/Footer/Footer';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchTables, getFetchTablesLoading } from './redux/tablesRedux';
import { useSelector } from 'react-redux';
import Spinner from 'react-bootstrap/Spinner';

function App() {
  const dispatch = useDispatch();
 

  useEffect(() => {
    dispatch(fetchTables());
  }, [dispatch]);

  return (
    <Container>
      <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/table/:id" element={<Table />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      <Footer />
    </Container>
  );
}

export default App;
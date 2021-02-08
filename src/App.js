import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { Graph, Table, AddPopup } from './components';
import { setTableAC } from './redux/actions/rows';

import { mainAPI } from './DAL/main';

import './index.css';

export default function App() {
  const dispatch = useDispatch();

  const tableRows = useSelector(({ rows }) => rows);

  React.useEffect(() => {
    mainAPI.getTables.then((res) => {
      dispatch(setTableAC(res.data));
    });
  }, []);

  return (
    <div className='container'>
      <AddPopup />
      <Table />
      <Graph table={tableRows} />
    </div>
  );
}

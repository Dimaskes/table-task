import React from 'react';
import { useSelector } from 'react-redux';

import RowOfTable from './RowOfTable';

const Table = () => {
  const tableRows = useSelector(({ rows }) => rows);

  return (
    <table className='table table-bordered table-hover'>
      <thead className='thead-light'>
        <tr>
          <th scope='col'>#</th>
          <th scope='col'>Дата</th>
          <th scope='col'>Инструмент</th>
          <th scope='col'>Стоимость</th>
        </tr>
      </thead>
      <tbody>
        {tableRows && tableRows.map((item) => <RowOfTable key={item.id} rowData={item} />)}
      </tbody>
    </table>
  );
};

export default Table;

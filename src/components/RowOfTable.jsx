import React from 'react';
import { useDispatch } from 'react-redux';

import { editDate, editCompany, editPrice } from '../redux/actions/rows';

function RowOfTable(props) {
  const dispatch = useDispatch();

  const [visibleDateForm, setVisibleDateForm] = React.useState(false);
  const [visibleCompanyForm, setVisibleCompanyForm] = React.useState(false);
  const [visiblePriceForm, setVisiblePriceForm] = React.useState(false);

  let dateInput = React.createRef();
  let companyInput = React.createRef();
  let priceInput = React.createRef();

  const onEditDate = () => {
    setVisibleDateForm(!visibleDateForm);
  };
  const onEditCompany = () => {
    setVisibleCompanyForm(!visibleCompanyForm);
  };
  const onEditPrice = () => {
    setVisiblePriceForm(!visiblePriceForm);
  };

  const editDateClicked = () => {
    const reg_exp = /^\d\d\d\d\-\d\d\-\d\d$/;
    if (
      reg_exp.test(dateInput.current.value) &&
      window.confirm('Вы действительно хотите обновить данное поле?')
    ) {
      dispatch(editDate(props.rowData.id, dateInput.current.value));
      setVisibleDateForm(false);
    } else {
      alert('Попробуйте снова');
    }
  };

  const editCompanyClicked = () => {
    if (
      companyInput.current.value.length !== 0 &&
      window.confirm('Вы действительно хотите обновить данное поле?')
    ) {
      dispatch(editCompany(props.rowData.id, companyInput.current.value));
      setVisibleCompanyForm(false);
    } else {
      alert('Попробуйте снова');
    }
  };

  const editPriceClicked = () => {
    if (
      typeof +priceInput.current.value === 'number' &&
      +priceInput.current.value > 0 &&
      window.confirm('Вы действительно хотите обновить данное поле?')
    ) {
      dispatch(editPrice(props.rowData.id, priceInput.current.value));
      setVisiblePriceForm(false);
    } else {
      alert('Попробуйте снова');
    }
  };

  return (
    <tr>
      <td>{props.rowData.id}</td>
      <td onDoubleClick={onEditDate}>
        {!visibleDateForm ? (
          props.rowData.date
        ) : (
          <div>
            <input
              type='date'
              className='form-control'
              placeholder='Дата'
              required
              ref={dateInput}
            />
            <div className='edit-input__wrapper'>
              <button
                type='button'
                className='btn btn-secondary btn-sm btn-edit'
                onClick={editDateClicked}>
                Изменить дату
              </button>
              <button
                type='button'
                className='btn btn-secondary btn-sm btn-edit'
                onClick={onEditDate}>
                Отменить
              </button>
            </div>
          </div>
        )}
      </td>
      <td onDoubleClick={onEditCompany}>
        {!visibleCompanyForm ? (
          props.rowData.company
        ) : (
          <div>
            <input
              type='text'
              className='form-control'
              placeholder='Компания'
              required
              ref={companyInput}
            />
            <div className='edit-input__wrapper'>
              <button
                type='button'
                className='btn btn-secondary btn-sm btn-edit'
                onClick={editCompanyClicked}>
                Изменить компанию
              </button>
              <button
                type='button'
                className='btn btn-secondary btn-sm btn-edit'
                onClick={onEditCompany}>
                Отменить
              </button>
            </div>
          </div>
        )}
      </td>
      <td onDoubleClick={onEditPrice}>
        {!visiblePriceForm ? (
          props.rowData.price
        ) : (
          <div>
            <input
              type='number'
              className='form-control'
              placeholder='Цена'
              required
              ref={priceInput}
            />
            <div className='edit-input__wrapper'>
              <button
                type='button'
                className='btn btn-secondary btn-sm btn-edit'
                onClick={editPriceClicked}>
                Изменить стоимость
              </button>
              <button
                type='button'
                className='btn btn-secondary btn-sm btn-edit'
                onClick={onEditPrice}>
                Отменить
              </button>
            </div>
          </div>
        )}
      </td>
    </tr>
  );
}

export default RowOfTable;

import React from 'react';
import { useDispatch } from 'react-redux';
import { insertNewRow } from '../redux/actions/rows';

const AddPopup = () => {
  const dispatch = useDispatch();

  const [date, setDate] = React.useState('');
  const updateDate = (e) => {
    setDate(e.target.value);
  };
  const [company, setCompany] = React.useState('');
  const updateCompany = (e) => {
    setCompany(e.target.value);
  };
  const [price, setPrice] = React.useState('');
  const updatePrice = (e) => {
    setPrice(e.target.value);
  };

  const onInsertRow = () => {
    if (
      isValid(company, date, price) &&
      window.confirm('Вы действительно хотите добавить запись?')
    ) {
      const row = {
        date,
        company,
        price,
      };
      dispatch(insertNewRow(row));
      disableVisiblePopup();
    } else {
      alert('Попробуйте снова');
    }
  };

  const [visiblePopup, setVisiblePopup] = React.useState(false);

  const enableVisiblePopup = () => {
    setVisiblePopup(true);
  };

  const disableVisiblePopup = () => {
    setVisiblePopup(false);
    setDate('');
    setCompany('');
    setPrice('');
  };

  const isValid = (company, date, price) => {
    const reg_exp = /^\d\d\d\d\-\d\d\-\d\d$/;
    return company.length !== 0 && reg_exp.test(date) && typeof +price === 'number' && +price > 0;
  };
  return (
    <header className='header'>
      <button
        type='button'
        className='btn btn-secondary btn-lg btn-block'
        onClick={enableVisiblePopup}>
        Добавить запись
      </button>

      {visiblePopup && (
        <div className={visiblePopup ? 'modal add-popup' : ''} tabIndex='-1' role='dialog'>
          <div className='modal-dialog modal-dialog-centered'>
            <div className='modal-content'>
              <div className='modal-header'>
                <h5 className='modal-title'>Добавление записи</h5>
                <button type='button' className='close' data-dismiss='modal' aria-label='Close'>
                  <span aria-hidden='true' onClick={disableVisiblePopup}>
                    &times;
                  </span>
                </button>
              </div>
              <div className='modal-body'>
                <form>
                  <div className='row'>
                    <div className='col'>
                      <input
                        type='date'
                        className='form-control'
                        placeholder='Дата'
                        onChange={updateDate}
                        required
                      />
                    </div>
                    <div className='col'>
                      <input
                        type='text'
                        className='form-control'
                        placeholder='Компания'
                        onChange={updateCompany}
                        required
                      />
                    </div>
                    <div className='col'>
                      <input
                        type='number'
                        className='form-control'
                        placeholder='Цена'
                        onChange={updatePrice}
                        required
                      />
                    </div>
                  </div>
                  <div className='modal-buttons'>
                    <button
                      type='button'
                      className='btn btn-secondary'
                      data-dismiss='modal'
                      onClick={disableVisiblePopup}>
                      Отменить
                    </button>
                    <button type='button' className='btn btn-primary' onClick={onInsertRow}>
                      Добавить
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default AddPopup;

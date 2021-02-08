export const SET_TABLE = 'SET_TABLE';
export const EDIT_DATE = 'EDIT_DATE';
export const EDIT_COMPANY = 'EDIT_COMPANY';
export const EDIT_PRICE = 'EDIT_PRICE';
export const INSERT_ROW = 'INSERT_ROW';

export const insertNewRow = (row) => {
  return {
    type: INSERT_ROW,
    payload: row,
  };
};

export const editPrice = (id, newPrice) => {
  return {
    type: EDIT_PRICE,
    id: id,
    newPrice: newPrice,
  };
};

export const editCompany = (id, newCompany) => {
  return {
    type: EDIT_COMPANY,
    id: id,
    newCompany: newCompany,
  };
};
export const editDate = (id, newDate) => {
  return {
    type: EDIT_DATE,
    id: id,
    newDate: newDate,
  };
};

export const setTableAC = (data) => {
  return {
    type: SET_TABLE,
    rows: data.notes,
  };
};

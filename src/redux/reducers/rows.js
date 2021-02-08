import { EDIT_DATE, EDIT_COMPANY, EDIT_PRICE, SET_TABLE, INSERT_ROW } from '../actions/rows';

const initialState = {
  rows: [],
};

const data = (state = initialState, action) => {
  switch (action.type) {
    case SET_TABLE: {
      return {
        ...state,
        rows: action.rows,
      };
    }

    case EDIT_PRICE: {
      const newItems = {
        ...state,
      };

      const rowIndex = newItems.rows.findIndex((item) => item.id === action.id);

      newItems.rows.forEach((item, index) => {
        if (index === rowIndex) {
          item.price = action.newPrice;
        }
      });

      return {
        ...state,
        rows: newItems.rows,
      };
    }

    case EDIT_COMPANY: {
      const newItems = {
        ...state,
      };

      const rowIndex = newItems.rows.findIndex((item) => item.id === action.id);

      newItems.rows.forEach((item, index) => {
        if (index === rowIndex) {
          item.company = action.newCompany;
        }
      });

      return {
        ...state,
        rows: newItems.rows,
      };
    }
    case EDIT_DATE: {
      const newItems = {
        ...state,
      };

      const rowIndex = newItems.rows.findIndex((item) => item.id === action.id);

      newItems.rows.forEach((item, index) => {
        if (index === rowIndex) {
          item.date = action.newDate;
        }
      });

      return {
        ...state,
        rows: newItems.rows,
      };
    }

    case INSERT_ROW:
      const newId = state.rows.length + 1;
      action.payload.id = newId;
      return { rows: [...state.rows, action.payload] };

    default:
      return state;
  }
};

export default data;

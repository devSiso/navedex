import React, { useReducer, createContext } from 'react';
import PropTypes from 'prop-types';

const initialState = {
  navers: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_NAVERS':
      return {
        ...state,
        navers: [ ...action.navers ]
      };

    case 'REMOVE_NAVER':
      return {
        ...state,
        navers: state.navers.filter(naver => naver.id !== action.id)
      }

    case 'ADD_NEW_NAVER':
      return {
        ...state,
        navers: state.navers.push(action.data)
      }

    // case 'UPTADE_NAVER':
    //   return {
    //     ...state,
    //     navers: state.navers.map(naver => {
    //       if (naver.id === action.id) {
    //         return {
    //           adimission_date: action.adimission_date,
    //           birthdate: action.
    //         }
    //       }

    //       return navers;
    //     })
    //   }

    default:
      return state;
  }
};

const NaversContext = createContext(initialState);

const NaversProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return <NaversContext.Provider value={{ state, dispatch }}>{children}</NaversContext.Provider>;
};

NaversProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { NaversProvider };
export default NaversContext;

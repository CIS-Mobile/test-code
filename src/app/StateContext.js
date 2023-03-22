import React, { useState, useMemo, useContext, createContext } from 'react';

const StateContext = createContext();

export function StateProvider({ children }) {
  const [email, setEmail] = useState({data: '', valid: ''});
  const [password, setPassword] = useState({data: '', valid: ''});
  const [firstName, setFirstName] = useState({data: '', valid: ''});
  const [lastName, setLastName] = useState({data: '', valid: ''});

  const state = useMemo(
    () => ({ email, password, firstName, lastName }),
    [email, password, firstName, lastName]
  );

  const setters = useMemo(
    () => ({ setEmail, setPassword, setFirstName, setLastName }),
    [setEmail, setPassword, setFirstName, setLastName]
  );

  return (
    <StateContext.Provider value={{ state, setters }}>
      {children}
    </StateContext.Provider>
  );
}

export function useAppState() {
	const { state } = useContext(StateContext);
	return state;
  }
  
  export function useStateSetters() {
	const { setters } = useContext(StateContext);
	return setters;
  }
  
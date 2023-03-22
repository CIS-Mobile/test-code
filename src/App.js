import React from 'react';

import { StateProvider } from './app/StateContext';
import SignupPage from './app/SignupPage';

function App() {
  return (
    <StateProvider>
      <SignupPage />
    </StateProvider>
  );
}

export default App;

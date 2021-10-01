import React, { Suspense } from 'react';
import UserContextProvider from './contexts/users-context';
import './App.css';
const Users = React.lazy(() => import('./screens/users/Users'));

function App() {
  return (
    <UserContextProvider>
      <Suspense fallback={<div>Loading...</div>}>
        <Users />
      </Suspense>
    </UserContextProvider>
  );
}

export default App;

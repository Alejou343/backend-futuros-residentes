import React from 'react';
import Setter from '../../Components/Setter';
import ApplicationList from '../ApplicationList';
import TableHeader from '../../Components/TableHeader';
import { MyContextProvider } from '../../Context/ApplicationContext';

function App() {

  return (
      <MyContextProvider>
        <Setter />
        <TableHeader />
        <ApplicationList />
      </MyContextProvider>
  )
}

export default App;

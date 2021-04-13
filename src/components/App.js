import React from 'react';
import Signup from "./Signup"
import { AuthProvider } from '../contexts/AuthContext';


const App = () => {
  return (
    <AuthProvider>
      <div className="text-center mx-auto mt-20 ">

        <Signup />
      </div>
    </AuthProvider>
  );
}

export default App;

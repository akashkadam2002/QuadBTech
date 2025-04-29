import React from 'react';
import EmployeeRegistrationForm from './EmployeeRegistrationForm';
import './App.css';

function App() {
  const handleEmployeeRegister = (employeeData) => {
    console.log('Registered Employee:', employeeData);
    alert('Employee Registered Successfully!');
  };

  return (
    <div className="app-container">
      <EmployeeRegistrationForm 
        title="Employee Registration" 
        onRegister={handleEmployeeRegister} 
      />
    </div>
  );
}

export default App;

import React, { useState } from 'react';
import './EmployeeForm.css';

function EmployeeRegistrationForm({ title, onRegister }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    department: '',
    password: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onRegister(formData);
    setFormData({ name: '', email: '', department: '', password: '' });
  };

  return (
    <div className="form-container">
      <h2>{title}</h2>
      <form onSubmit={handleSubmit}>
        <label>Full Name</label>
        <input 
          type="text" 
          name="name" 
          placeholder="Enter full name"
          value={formData.name} 
          onChange={handleChange} 
          required 
        />

        <label>Email</label>
        <input 
          type="email" 
          name="email" 
          placeholder="Enter email"
          value={formData.email} 
          onChange={handleChange} 
          required 
        />

        <label>Department</label>
        <input 
          type="text" 
          name="department" 
          placeholder="Enter department"
          value={formData.department} 
          onChange={handleChange} 
          required 
        />

        <label>Password</label>
        <input 
          type="password" 
          name="password" 
          placeholder="Create password"
          value={formData.password} 
          onChange={handleChange} 
          required 
        />

        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default EmployeeRegistrationForm;

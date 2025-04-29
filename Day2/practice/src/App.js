import React, { useState } from 'react';
import './App.css'; 

function App() {
  const [student, setStudent] = useState({
    name: '',
    age: '',
    course: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setStudent(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Student Registered:', student);
    alert(`Student Registered:\nName: ${student.name}\nAge: ${student.age}\nCourse: ${student.course}`);
    setStudent({ name: '', age: '', course: '' });
  };

  return (
    <div className="container">
      <h2>Student Registration</h2>
      <form onSubmit={handleSubmit} className="form">
        <div className="form-group">
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={student.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Age:</label>
          <input
            type="number"
            name="age"
            value={student.age}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Course:</label>
          <input
            type="text"
            name="course"
            value={student.course}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="submit-btn">Register</button>
      </form>
    </div>
  );
}

export default App;

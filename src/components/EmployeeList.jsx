import React, { useState, useEffect } from 'react';
import employeesData from '../data.json'; 
import Navbar from './Navbar';
import Search from "../assets/search-interface-symbol.png";

const EmployeeList=()=> {
  const [employees, setEmployees] = useState(employeesData); 
  const [searchTerm, setSearchTerm] = useState('');
  const [showList, setShowList] = useState(false);


  const filteredEmployees = employees.filter((employee) => {
    if (!searchTerm) return true;
    const loweredName = employee.name.toLowerCase();
    return loweredName.includes(searchTerm.toLowerCase());
  });

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleUserIconClick = () => {
    setShowList(!showList);
  };

  const renderEmployeeCard = (employee) => (
    <div className='cards' key={employee.id}>
      <div className='idcard'>
      <p>EMP ID : <span> {employee.id}</span></p>
       <div className='id'>{employee.id} </div>
      </div>
      <p>Name : <span>{employee.name}</span> </p>
      <p>DOB : <span className='dob'>{employee.dateOfBirth}</span></p>
      <p>Role : <span className='role'>{employee.role}</span></p>
    </div>
  );

  return (
    <div>
     <Navbar />
     
        <div className='employee'>
        <div className='mop'>
          <div className='mopside'>4</div>
        </div>
        <div className='search'>
          <input type="text" placeholder="Search by name" onChange={handleSearchChange} />
          <div className='searchicon'><img src={Search} height={25} width={25}></img></div>
          </div>
          {filteredEmployees.map(renderEmployeeCard)}
        </div>
 
     
    </div>
  );
}

export default EmployeeList;

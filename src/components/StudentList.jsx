import React from 'react'
import Card from './Card';

function StudentList() {
    const StudentsData = [
    {
      id: 1,
      name: "Adebambo",
      state: "Oyo",
      stack: "UI",
      description: "A node developer",
      jobTitle: "Software Engineer",
    },
    {
      id: 2,
      name: "Francis",
      state: "Ekiti",
      stack: "Backend",
      description: "An angular Developer",
      jobTitle: "Software Engineer",
    },
    {
      id: 3,
      name: "Olumelu",
      state: "Ogun",
      stack: "Data Anaylst",
      description: "A react developer",
      jobTitle: "Software Engineer",
    },
    {
      id: 4,
      name: "Dangote",
      state: "Kano",
      stack: "Frontend",
      description: "uses visual studio code",
      jobTitle: "Software Engineer",
    },
    {
      id: 5,
      name: "Favor",
      state: "Edo",
      stack: "UI",
      description: "A figma Developer",
      jobTitle: "Software Engineer",
    },
    {
      id: 6,
      name: "Funmi",
      state: "Kwara",
      stack: "Fullstack",
      description: " A software developer",
      jobTitle: "Software Engineer",
    },
  ];
  return (
    <div className='card-row'>
         {StudentsData.map(student => <Card desc={student.description} JD={student.jobTitle} name={student.name} state={student.state} stack={student.stack}/>)} 
    </div>
  )
}

export default StudentList
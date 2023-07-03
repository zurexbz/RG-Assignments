import { useEffect, useState } from "react";
import Form from "./components/Form";
import Table from "./components/Table";

const App = () => {
        const [students, setStudents] = useState([]);
        const [isLoading, setIsLoading] = useState(true);
      
        useEffect(() => {
          getStudent()
        },
        []);

        const getStudent = ( ) => {
            fetch("http://localhost:3001/student")
            .then((response) => response.json())
            .then((json) => {
                setStudents(json);
                setIsLoading(false);
            })
        }
        const addStudent = async (student) => {
            const newStudent = {
                ...student,
                id: students.length + 1,
            };
        
            await fetch('http://localhost:3001/student', {
                method: 'POST',
                headers: {
                'Content-Type': 'application/json',
                },
                body: JSON.stringify(newStudent),
            })
            await getStudent()
  
        };
        
        const deleteStudent = (id) => {
            fetch(`http://localhost:3001/student/${id}`, { method: 'DELETE',
            })
                .then(() => {
                setStudents(students.filter((student) => student.id !== id));
                })
                .catch((error) => console.log(error));
        };
      
        return (
            <div>
                <h1>Student Portal</h1>
                <Form addStudent={addStudent} />
            {isLoading ? (
                <p>Loading ...</p>
            ) : (
                <
                Table students={students} deleteStudent={deleteStudent} 
                />
            )}
            </div>
        );
    };

export default App;
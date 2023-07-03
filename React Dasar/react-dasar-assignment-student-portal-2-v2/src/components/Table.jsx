import React from 'react';

function Table({ students, deleteStudent }) {
  return (
        <table>
        <thead>
            <tr>
            <th>ID:</th>
            <th>Fullname:</th>
            <th>Birth Date:</th>
            <th>Gender:</th>
            <th>Program Study:</th>
            <th>Faculty:</th>
            <th>Action:</th>
            </tr>
        </thead>

        <tbody>
            {students.map((student) => (
            <tr key={student.id} className="student-data-row">
                <td>{student.id}</td>
                <td>{student.fullname}</td>
                <td>{student.birthDate}</td>
                <td>{student.gender}</td>
                <td>{student.programStudy}</td>
                <td>{student.faculty}</td>
                <td>

                <button
                    onClick={() => deleteStudent(student.id)}
                    data-testid={`delete-${student.id}`}
                    >
                    Delete Student
                </button>
                
                </td>
            </tr>
            ))}
        </tbody>

        </table>
    );
}

export default Table;
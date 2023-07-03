const Table = (props) => {
    return (
        <table id="table-student">
        <thead>
        <tr>
            <th>No</th>
            <th>Full Name</th>
            <th>Birth Date</th>
            <th>Gender</th>
            <th>Faculty</th>
            <th>Program Study</th>
            <th>Option</th>
        </tr>
        </thead>
        <tbody>
            {props.students?.map((student, index) => (
            <tr key={student.id}>
                <td>{index + 1}</td>
                <td>{student.fullname}</td>
                <td>{student.birthDate}</td>
                <td>{student.gender}</td>
                <td>{student.faculty}</td>
                <td>{student.programStudy}</td>
                <td>
                    <button>Edit</button>
                    <button>Delete</button>
                </td>
            </tr>
            ))}
        </tbody>
        </table>
    );
};
  
export default Table;
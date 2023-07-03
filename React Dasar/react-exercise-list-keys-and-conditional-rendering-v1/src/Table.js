function Table({ mentors }) {
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>House</th>
          <th>Email</th>
        </tr>
      </thead>
      {!mentors[0]? (
          <tbody>
          <tr>
            <td>Data not available</td>
            <td>Data not available</td>
            <td>Data not available</td>
          </tr>
        </tbody>
      ):(
        <tbody>
            {mentors.map(mentor => {
              let backgroundColor = ""
              mentor.id % 2 !== 0 ? (backgroundColor = "lightCyan") : (backgroundColor = "white")
              return (            
                <tr style={{backgroundColor}} key={mentor.id}>
                  <td>{mentor.name}</td>
                  <td>{mentor.house}</td>
                  <td>{mentor.email}</td>
                </tr>
              )
            })}
        </tbody>
        )}
    </table>
  );
}

export default Table;
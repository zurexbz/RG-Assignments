import { useState } from "react";

function Task1() {
  return(
    <div className="basic_component">
      <h1>Halo dunia!</h1>
    </div>
  );
}

function Task1_1(props) {
  const { name } = props;
  return <h1>{name}</h1>;
}

function Task2() {
  const [name, setName] = useState("Klik tombol di bawah");

  return (
    <div>
      <h1>
        {name}
      </h1>
      <button onClick={() => setName("Tombol telah di-klik!")}>
        Klik saya!
      </button>
    </div>
  );
}

const students = [
  {
    name: "John Doe",
    age: 20,
    dropout: false,
  },
  {
    name: "Jane Doe",
    age: 21,
    dropout: true,
  },
  {
    name: "John Smith",
    age: 22,
    dropout: false,
  },
  {
    name: "Jane Smith",
    age: 23,
    dropout: true,
  },
];

function Task3() {
  return(
    <div>
      {students.map((students) => (
        <h2>
          {students.name} - {students.age}
        </h2>
      ))}
    </div>
  );
}

function Task3_1() {
  return(
    <div>
      {students
        .filter((students) => students.dropout === false)
        .map((students) => (
          <h2>
            {students.name} - {students.age}
          </h2>
        ))}
    </div>
  );
}

function Task4() {
  const [remove, setRemove] = useState(false);
  return (
    <div>
      {!remove && 
        <p>
          Klik tombol di-bawah untuk menghapus elemen
        </p>
      }
      <button onClick={() => setRemove(true)}>
        Hapus
      </button>
    </div>
  );
}

export { Task1, Task1_1, Task2, Task3, Task3_1, Task4 };

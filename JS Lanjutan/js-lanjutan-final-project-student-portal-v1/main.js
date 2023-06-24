async function process_argv() {
    let { argv } = process;
    argv = argv.slice(2);
    const result = await studentActivitiesRegistration(argv);

    return result;
}

async function getStudentActivities() {
    try {
        const response = await fetch('http://localhost:3001/activities');
        const data = response.json()
        return data;
    } catch (error) {
        console.error(error);
    }
}

async function studentActivitiesRegistration(data) {
    const [method, ...args] = data;
    if (method === 'CREATE') {
        const [name, day] = args;
        const activities = await fetch('http://localhost:3001/activities')
        .then(response => response.json())
        .then(data => data.filter(activity => activity.days.includes(day))
        .map(({name, desc}) => ({name, desc})));
        const newStudent = {name, activities};

        const options = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newStudent)
        };
        const addedStudent = await fetch('http://localhost:3001/students', options)
        .then(response => response.json());
        return addedStudent;
    } else if (method === 'DELETE') {
        const id = args[0];
        const deletedStudent = await deleteStudent(id);
        return { message: `Successfully deleted student data with id ${id}` };
    } else {
        throw new Error(`Invalid method: ${method}`);
    }
}

async function addStudent(name, day) {
    const activities = await fetch('http://localhost:3001/activities')
    .then(response => response.json())
    .then(data => data.filter(activity => activity.days.includes(day))
    .map(({name, desc}) => ({name, desc})))
    const newStudent = {name, activities}
    const options = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newStudent)
    }
    const addedStudent = await fetch('http://localhost:3001/students', options)
        .then(response => response.json())
    return addedStudent
}

async function deleteStudent(id) {
    const resp = await fetch(`http://localhost:3001/students/${id}`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json"
        }
    })
    if (resp) return { message: `Successfully deleted student data with id ${id}` }
}

process_argv()
    .then((data) => {
        console.log(data);
    })
    .catch((err) => {
        console.log(err);
    });

module.exports = {
    studentActivitiesRegistration,
    getStudentActivities,
    addStudent,
    deleteStudent
};

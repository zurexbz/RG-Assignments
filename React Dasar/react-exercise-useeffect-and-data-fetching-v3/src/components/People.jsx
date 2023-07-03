const People = (props) => {
    return (
        <div>
            <h1>{props.data.name}</h1>
            <h2>Gender:</h2>
            <p>{props.data.gender}</p>
            <h2>Birth Year:</h2>
            <p>{props.data.birth_year}</p>
            <h2>Mass:</h2>
            <p>{props.data.mass}</p>
            <h2>Height:</h2>
            <p>{props.data.height}</p>
            <h2>Eye Color:</h2>
            <p>{props.data.eye_color}</p>
        </div>
    ) // TODO: replace this
};

export default People;
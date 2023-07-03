const Planet = (props) => {
    return (
        <div>
            <h1>{props.data.name}</h1>
            <h2>Rotation Period:</h2>
            <p>{props.data.rotation_period}</p>
            <h2>Orbital Period:</h2>
            <p>{props.data.orbital_period}</p>
            <h2>Terrain:</h2>
            <p>{props.data.terrain}</p>
            <h2>Population:</h2>
            <p>{props.data.population}</p>
            <h2>Climate:</h2>
            <p>{props.data.climate}</p>
        </div>
    ) // TODO: replace this
};

export default Planet;
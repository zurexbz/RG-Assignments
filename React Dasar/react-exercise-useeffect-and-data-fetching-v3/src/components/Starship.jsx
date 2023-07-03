const Starship = (props) => {
    return (
        <div>
            <h1>{props.data.name}</h1>
            <h2>Model:</h2>
            <p>{props.data.model}</p>
            <h2>Manufacturer:</h2>
            <p>{props.data.manufacturer}</p>
            <h2>Crew:</h2>
            <p>{props.data.crew}</p>
            <h2>Passengers:</h2>
            <p>{props.data.passengers}</p>
            <h2>Cargo Capacity:</h2>
            <p>{props.data.cargo_capacity}</p>
            <h2>Starship Class:</h2>
            <p>{props.data.starship_class}</p>
        </div>
    ) // TODO: replace this
};

export default Starship;
import { useEffect, useState } from "react";
import Planet from "./components/Planet";
import Starship from "./components/Starship";
import People from "./components/People";

const App = () => {
    const [request, setRequest] = useState("people");
    const [results, setResults] = useState([""]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch(`https://swapi.py4e.com/api/${request}`)
            .then((response) => response.json())
            .then((json) => {
                setResults(json.results);
                setLoading(false);
            })
        setLoading(true);
    }, [request]);

    return (
        <div>
            <select value={request} onChange={(e) => setRequest(e.target.value)}>
                <option value="people">People</option>
                <option value="planets">Planets</option>
                <option value="starships">Starships</option>
            </select>
            {loading ? (
                <h2>Loading...</h2>
            ) : (
                <div>
                    {results.map((result,index) => {
                        switch(request){
                            case "planets":
                                return <Planet key={index} data={result}></Planet>
                            case "starships":
                                return <Starship key={index} data={result}></Starship>
                            default:
                                return <People key={index} data={result}></People>
                        }
                    })}
                </div>
            )}
        </div>
    ) 
};

export default App;
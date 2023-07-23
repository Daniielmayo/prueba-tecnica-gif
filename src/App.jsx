import "./App.css";
import { useEffect, useState } from "react";

function App() {
    const [catFact, setcatFact] = useState("");
    const [catGif, setcatGif] = useState("");

    const GIPHY_API_KEY = "7iaV563OK2Tw8xRxX4hxB5bxYKhYu5pA";

    const callGiphAPI = (string) => {
        fetch(
            `https://api.giphy.com/v1/gifs/search?q=${string}&api_key=${GIPHY_API_KEY}`
        )
            .then((res) => res.json())
            .then((data) => {
                console.log(data.data[0].images.original.url, "gif");
                setcatGif(data.data[0].images.original.url);
            });
    };

    const callApi = () => {
        fetch("https://catfact.ninja/fact")
            .then((res) => res.json())
            .then((data) => {
                setcatFact(data.fact || "Hola me hecharon de la API");
                callGiphAPI(data?.fact?.split(" ").slice(0, 3).join(" "));
                console.log(data.fact);
            });
    };

    useEffect(callApi, []);

    return (
        <>
            <h1>{catFact} </h1>
            <img src={catGif} alt="" />
        </>
    );
}

export default App;

import { useState, useEffect } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";

interface Game {
    id: number;
    name: string
}

interface FetchGamesResponse {
    count: number;
    results: Game[]
}


//*pulled the states and fetch from gamegrid component and set it up as a custom hook
const useGames = () => {
    const [games, setGames] = useState<Game[]>([]); //*Stores the games from api. Empty array initialized, but of type Game[] defined above
    const [error, setError] = useState(''); //*set error message

    //*to send a fetch request to backend
    useEffect(() => {
        const controller = new AbortController()

        apiClient
            .get<FetchGamesResponse>('/games', {signal: controller.signal})
            .then(res => setGames(res.data.results)) //* res var is type FetchGamesResponse, so we can then get .results property. res var has property and responses from Axios, use data prop so we can read body of response
            .catch(err => {
                if (err instanceof CanceledError) return;
                setError(err.message)});

        return () => controller.abort();
    }, []);
    
    return { games, error }; //*return games and error objects to be used in components
}

export default useGames;
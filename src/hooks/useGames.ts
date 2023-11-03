import { useState, useEffect } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";

//*interface for platform objects, data pulled from API 
export interface Platform {
    id: number;
    name: string;
    slug: string;
}

//*below is interface containing props that were pulled from API
export interface Game {
    id: number;
    name: string;
    background_image: string;
    parent_platforms: { platform: Platform }[] //*Parent platform is an array of objects that each object has a platform property of type Platform
    metacritic: number //*metacritic prop as per dev tool
}

interface FetchGamesResponse {
    count: number;
    results: Game[]
}


//*pulled the states and fetch from gamegrid component and set it up as a custom hook
const useGames = () => {
    const [games, setGames] = useState<Game[]>([]); //*Stores the games from api. Empty array initialized, but of type Game[] defined above
    const [error, setError] = useState(''); //*set error message

    //*to send a fetch request to backend. useEffect, always add the [] as dependency in second parameter
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
import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";

interface Genre {
    id: number;
    name: string;
}

interface FetchGenresResponse {
    count: number;
    results: Genre[]
}

const useGenres = () => {
    const [genres, setGenres] = useState<Genre[]>([]); //*Stores the games from api. Empty array initialized, but of type Game[] defined above
    const [error, setError] = useState(''); //*set error message
    const [isLoading, setLoading] = useState(false)

    //*to send a fetch request to backend. useEffect, always add the [] as dependency in second parameter
    useEffect(() => {
        const controller = new AbortController()

        setLoading(true);
        apiClient
            .get<FetchGenresResponse>('/genres', {signal: controller.signal})
            .then(res => {
                setGenres(res.data.results); //* res var is type FetchGamesResponse, so we can then get .results property. res var has property and responses from Axios, use data prop so we can read body of response
                setLoading(false);
            }) 
            .catch(err => {
                if (err instanceof CanceledError) return;
                setError(err.message);
                setLoading(false);
            });

        return () => controller.abort();
    }, []);
    
    return { genres, error, isLoading }; //*return games and error objects to be used in components
}


export default useGenres;
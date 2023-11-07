import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { AxiosRequestConfig, CanceledError } from "axios";

//*this is a generic data fetching hook
//*factored out of useGenre and useGame originally

interface FetchResponse <T> {
    count: number;
    results: T[]
}

const useData = <T>(endpoint: string, requestConfig?: AxiosRequestConfig, deps?: any[]) => {
    const [data, setData] = useState<T[]>([]); //*Stores the games from api. Empty array initialized, but of type Game[] defined above
    const [error, setError] = useState(''); //*set error message
    const [isLoading, setLoading] = useState(false)

    //*to send a fetch request to backend. useEffect, always add the [] as dependency in second parameter
    useEffect(() => {
        const controller = new AbortController()

        setLoading(true);
        apiClient
            .get<FetchResponse<T>>(endpoint, {signal: controller.signal, ...requestConfig})
            .then(res => {
                setData(res.data.results); //* res var is type FetchGamesResponse, so we can then get .results property. res var has property and responses from Axios, use data prop so we can read body of response
                setLoading(false);
            }) 
            .catch(err => {
                if (err instanceof CanceledError) return;
                setError(err.message);
                setLoading(false);
            });

        return () => controller.abort();
    }, deps ? [...deps] : []);
    
    return { data, error, isLoading }; //*return games and error objects to be used in components
}


export default useData;
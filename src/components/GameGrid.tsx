import React, { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { Text } from "@chakra-ui/react"

interface Game {
    id: number;
    name: string
}

interface FetchGamesResponse {
    count: number;
    results: Game[]
}

const GameGrid = () => {
    const [games, setGames] = useState<Game[]>([]); //*Stores the games from api. Empty array initialized, but of type Game[] defined above
    const [error, setError] = useState(''); //*set error message

    //*to send a fetch request to backend
    useEffect(() => {
        apiClient.get<FetchGamesResponse>('/games')
            .then(res => setGames(res.data.results)) //* res var is type FetchGamesResponse, so we can then get .results property. res var has property and responses from Axios, use data prop so we can read body of response
            .catch(err => setError(err.message));
    })
    

    return (
        <>
            {error && <Text>{error}</Text>}
            <ul>
                {games.map(game => <li key={game.id}>{game.name}</li>)}
            </ul>
        </>
    );
};

export default GameGrid;

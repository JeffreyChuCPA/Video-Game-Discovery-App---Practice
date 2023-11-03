import useGames from "../hooks/useGames";
import { SimpleGrid, Text } from "@chakra-ui/react";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";

const GameGrid = () => {
    const { games, error, isLoading } = useGames(); //*pulling games and error props from the useGames function via destructuring

    const skeletons = [1, 2, 3, 4, 5, 6];

    return (
        <>
            {error && <Text>{error}</Text>}
            <SimpleGrid
                columns={{ sm: 1, md: 2, lg: 3, xl: 5 }}
                padding="10px"
                spacing={10}
            >
                {isLoading &&
                    skeletons.map((skeleton) => (
                        <GameCardSkeleton key={skeleton} />
                    ))}
                {games.map((game) => (
                    <GameCard key={game.id} game={game} />
                ))}
            </SimpleGrid>
        </>
    );
};

export default GameGrid;

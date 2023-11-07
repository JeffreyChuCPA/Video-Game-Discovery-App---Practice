import { Grid, GridItem, HStack, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { useState } from "react";
import { Genre } from "./hooks/useGenres";
import PlatformSelector from "./components/PlatformSelector";
import { Platform } from "./hooks/useGames";
import SortSelector from "./components/SortSelector";

export interface GameQuery {
    genre: Genre | null;
    platform: Platform | null;
    sortOrder: string
}

//* to share a state between components, store it in the closest parent
function App() {

    const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery)

    return (
        <Grid
            templateAreas={{ //*defining grid via columns and rows
                base: `"nav" "main"`, //*base scenario of a single column
                lg: `"nav nav" "aside main"` //*2 columns on large devices
            }}
            templateColumns={{ //*defining the width of columns
                base: '1fr', //*Base scenario of 1 column, 1 fraction so column stretches and takes up all available spaces
                lg: '200px 1fr' //*Large device base scenario, 2 columns, first is 200px, 2nd is where the game grid is and ganna stretch and take up all the available space
            }}
        >
            <GridItem area="nav" >
                <NavBar/>
            </GridItem>
            <Show above="lg">
                <GridItem area="aside" paddingX={5}>
                    <GenreList selectedGenre={gameQuery.genre} onSelectGenre={(genre) => setGameQuery({...gameQuery, genre})} />
                </GridItem>
            </Show>
            <GridItem area="main">
                <HStack spacing={5} paddingLeft={2} marginBottom={3}>
                    <PlatformSelector selectedPlatform={gameQuery.platform} onSelectPlatform={(platform) => setGameQuery({...gameQuery, platform})} />
                    <SortSelector sortOrder={gameQuery.sortOrder} onSelectSortOrder={(sortOrder) => setGameQuery({...gameQuery, sortOrder})} />
                </HStack>
                <GameGrid gameQuery={gameQuery} />
            </GridItem>
        </Grid>
    );
}

export default App;

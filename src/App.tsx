import { Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";


function App() {
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
                    <GenreList />
                </GridItem>
            </Show>
            <GridItem area="main">
                <GameGrid />
            </GridItem>
        </Grid>
    );
}

export default App;

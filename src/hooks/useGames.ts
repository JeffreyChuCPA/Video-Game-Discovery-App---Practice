import useData from "./useData";
import { Genre } from "./useGenres";

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


//*pulled the states and fetch from gamegrid component and set it up as a custom hook
//*added selectedGenre as a param, to pass into useData as a API query fetch param, and added a dep param as an array to act as the dependency to trigger changes
//*params: is an axios defined properties, genres: is from the API query parameter as per API documentation, set genres to be selectedGenre.ID as the ID would be the index for the genre as per API documentation
const useGames = (selectedGenre: Genre | null) => useData<Game>('/games', { params: {genres: selectedGenre?.id}}, [selectedGenre?.id]);

export default useGames;
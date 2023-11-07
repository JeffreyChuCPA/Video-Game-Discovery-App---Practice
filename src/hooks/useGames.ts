import useData from "./useData";

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
const useGames = () => useData<Game>('/games');

export default useGames;
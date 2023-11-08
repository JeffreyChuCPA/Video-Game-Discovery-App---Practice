import { Heading } from '@chakra-ui/react'
import { GameQuery } from '../App'

interface Props {
    gameQuery: GameQuery
}

const GameHeading = ({gameQuery}: Props) => {
    //games
    //action games
    //xbox games
    //xbox action games

    const heading = `${gameQuery.platform?.name || ''} ${gameQuery.genre?.name || ''} Games`

    return (
        <Heading as='h1' marginY={3} fontSize='5xl'>{heading}</Heading>
    )
}

export default GameHeading
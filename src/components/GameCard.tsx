import { Game } from "../hooks/useGames";
import { Card, Heading, Image, CardBody } from "@chakra-ui/react";

interface Props {
    game: Game;
}

//*to return a card component
const GameCard = ({ game }: Props) => {
    return (
        <Card borderRadius={10} overflow='hidden'>
            <Image src={game.background_image} />
            <CardBody>
                <Heading fontSize='2xl' >{game.name}</Heading>
            </CardBody>
        </Card>
    );
};

export default GameCard;

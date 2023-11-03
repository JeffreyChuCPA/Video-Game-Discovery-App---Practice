import { Game } from "../hooks/useGames";
import { Card, Heading, Image, CardBody, HStack } from "@chakra-ui/react";
import PlatformIconList from "./PlatformIconList";
import CriticScore from "./CriticScore";
import { getCroppedImageURL } from "../services/image-url";


interface Props {
    game: Game;
}

//*to return a card component
const GameCard = ({ game }: Props) => {
    return (
        <Card >
            <Image src={getCroppedImageURL(game.background_image)} />
            <CardBody>
                <Heading fontSize='2xl' >{game.name}</Heading>
                <HStack justifyContent='space-between'>
                    <PlatformIconList platforms={game.parent_platforms.map(p => p.platform)} />
                    <CriticScore score={game.metacritic} />
                </HStack>
            </CardBody>
        </Card>
    );
};

export default GameCard;

import { Game } from "../hooks/useGames";
import { Card, Heading, Image, CardBody, HStack } from "@chakra-ui/react";
import PlatformIconList from "./PlatformIconList";
import CriticScore from "./CriticScore";
import { getCroppedImageURL } from "../services/image-url";
import Emoji from "./Emoji";

interface Props {
    game: Game;
}

//*to return a card component
const GameCard = ({ game }: Props) => {
    return (
        <Card>
            <Image src={getCroppedImageURL(game.background_image)} />
            <CardBody>
                <HStack justifyContent="space-between" marginBottom={3}>
                    <PlatformIconList
                        platforms={game.parent_platforms.map((p) => p.platform)}
                    />
                    <CriticScore score={game.metacritic} />
                </HStack>
                <Heading fontSize="2xl">{game.name}<Emoji rating={game.rating_top} /></Heading>
            </CardBody>
        </Card>
    );
};

export default GameCard;

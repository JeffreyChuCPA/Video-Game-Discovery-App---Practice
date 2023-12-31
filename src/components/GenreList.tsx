import {
    HStack,
    List,
    ListItem,
    Image,
    Button,
    Heading
} from "@chakra-ui/react";
import useGenres, { Genre } from "../hooks/useGenres";
import { getCroppedImageURL } from "../services/image-url";

//* component that holds some state should be the one updating it
interface Props {
    onSelectGenre: (genre: Genre) => void; //*to notify parent that a genre has been selected
    selectedGenre: Genre | null;
}

const GenreList = ({ selectedGenre, onSelectGenre }: Props) => {
    const { data} = useGenres(); //*components should not know anything about making HTTP requests

    //if (error) return null;
    //if (isLoading) return <Spinner />; //*return dictates what is to be shown. Spinner shown if isLoading is true, otherwise, show the list of genres in code below

    //*jsx code below returns the visual of the genres in a list form
    return (
        <>
        <Heading fontSize='2xl' marginBottom={2.5} >Genre</Heading>
        <List>
            {data.map((genre) => (
                <ListItem key={genre.id} paddingY="5px">
                    <HStack>
                        <Image
                            boxSize="32px"
                            borderRadius={8}
                            objectFit='cover' //*used to scale image to fit container while preserving the aspect ratio
                            src={getCroppedImageURL(genre.image_background)}
                        />
                        <Button
                            whiteSpace="normal" //*default is nowrap, set to normal as per instructor
                            textAlign='left'
                            fontWeight={
                                genre.id === selectedGenre?.id
                                    ? "bold"
                                    : "normal"
                            }
                            fontSize="lg"
                            variant="link"
                            onClick={() => onSelectGenre(genre)}
                        >
                            {genre.name}
                        </Button>
                    </HStack>
                </ListItem>
            ))}
        </List>
        </>
    );
};

export default GenreList;

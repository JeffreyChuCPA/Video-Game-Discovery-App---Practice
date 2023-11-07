import { HStack, List, ListItem, Image, Text, Spinner } from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import { getCroppedImageURL } from "../services/image-url";

const GenreList = () => {
    const { data, isLoading, error } = useGenres(); //*components should not know anything about making HTTP requests

    if (error) return null;
    if (isLoading) return <Spinner/>;

    return (
        <List>
            {data.map((genre) => (
                <ListItem key={genre.id} paddingY='5px'>
                    <HStack>
                        <Image
                            boxSize="32px"
                            borderRadius={8}
                            src={getCroppedImageURL(genre.image_background)}
                        />
                        <Text fontSize='lg' >{genre.name}</Text>
                    </HStack>
                </ListItem>
            ))}
        </List>
    );
};

export default GenreList;

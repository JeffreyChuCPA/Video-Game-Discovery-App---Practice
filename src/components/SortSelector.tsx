import {
    Button,
    Menu,
    MenuButton,
    MenuItem,
    MenuList,
    Spinner
} from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import { Platform } from "../hooks/useGames";

interface Props {
    onSelectPlatform: (platform: Platform) => void;
    selectedPlatform: Platform | null;
}

const SortSelector = () => {
    //const { data, error, isLoading } = usePlatform();

    //if (error) return null;
    //if (isLoading) return <Spinner />;

    return (
        <Menu>
            <MenuButton
                as={Button}
                rightIcon={<BsChevronDown />}
                
            >
                Order by: Relevance
            </MenuButton>
            <MenuList >
                <MenuItem>Relevance</MenuItem>
                <MenuItem>Date added</MenuItem>
                <MenuItem>Name</MenuItem>
                <MenuItem>Release Date</MenuItem>
                <MenuItem>Popularity</MenuItem>
                <MenuItem>Average Rating</MenuItem>
            </MenuList>
        </Menu>
    );
};

export default SortSelector;

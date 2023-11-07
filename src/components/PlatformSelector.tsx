import {
    Button,
    Menu,
    MenuButton,
    MenuItem,
    MenuList,
    Spinner
} from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import usePlatform from "../hooks/usePlatforms";
import { Platform } from "../hooks/useGames";

interface Props {
    onSelectPlatform: (platform: Platform) => void;
    selectedPlatform: Platform | null;
}

const PlatformSelector = ({ onSelectPlatform, selectedPlatform }: Props) => {
    const { data, error, isLoading } = usePlatform();

    if (error) return null;
    if (isLoading) return <Spinner />;

    return (
        <Menu>
            <MenuButton
                as={Button}
                rightIcon={<BsChevronDown />}
                
            >
                {selectedPlatform?.name || 'Platforms'}
            </MenuButton>
            <MenuList >
                {data.map((platform) => (
                    <MenuItem key={platform.id} onClick={() => onSelectPlatform(platform)} >{platform.name}</MenuItem>
                ))}
            </MenuList>
        </Menu>
    );
};

export default PlatformSelector;

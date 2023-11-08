
import { HStack, Image } from "@chakra-ui/react";
import logo from '../assets/logo.webp'
import ColorModeSwitch from "./ColorModeSwitch";
import SearchingInput from "./SearchingInput";

const NavBar = () => {
    return <HStack justifyContent='space-between' padding='10px'> //*no need got justify content space-between as we now have 3 components placed in nav bar compared to 2 before
            <Image src={logo} boxSize='60px'/>
            <SearchingInput />
            <ColorModeSwitch />
        </HStack>;
};

export default NavBar;

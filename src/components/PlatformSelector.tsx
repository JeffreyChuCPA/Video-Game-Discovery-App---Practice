import { Button, Menu, MenuButton, MenuItem, MenuList, Spinner } from "@chakra-ui/react"
import { BsChevronDown } from "react-icons/bs"
import usePlatform from "../hooks/usePlatforms"


const PlatformSelector = () => {
    const {data, error, isLoading} = usePlatform();

    if (error) return null;
    if (isLoading) return <Spinner/>;

    return (
        <Menu>
            <MenuButton as={Button} rightIcon={<BsChevronDown/>} >Platforms</MenuButton>
            <MenuList>
                {data.map(platform => <MenuItem key={platform.id} >{platform.name}</MenuItem>)}
            </MenuList>
        </Menu>
    )
}

export default PlatformSelector
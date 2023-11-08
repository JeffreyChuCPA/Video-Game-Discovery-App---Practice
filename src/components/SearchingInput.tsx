import {Input, InputGroup, InputLeftElement} from '@chakra-ui/react'
import { BsSearch } from 'react-icons/bs'

const SearchingInput = () => {
    return (
        <InputGroup>
        <InputLeftElement children={<BsSearch/>} /> //*adding search icon to left side of search bar
            <Input borderRadius={20} placeholder='Search Games...' variant='filled'/>
        </InputGroup>
    )
}

export default SearchingInput
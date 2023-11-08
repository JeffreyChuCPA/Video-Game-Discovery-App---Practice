import {Input, InputGroup, InputLeftElement} from '@chakra-ui/react'
import { useRef } from 'react';
import { BsSearch } from 'react-icons/bs'

interface Props {
    onSearch: (searchText: string) => void;
}

const SearchingInput = ({onSearch}: Props) => {
    const ref = useRef<HTMLInputElement>(null);
    
    return (
        <form onSubmit={(event) => {
            event.preventDefault();
            if (ref.current) onSearch(ref.current.value);
        }}>
            <InputGroup>
            <InputLeftElement children={<BsSearch/>} /> //*adding search icon to left side of search bar
                <Input ref={ref} borderRadius={20} placeholder='Search Games...' variant='filled'/>
            </InputGroup>
        </form>
    )
}

export default SearchingInput
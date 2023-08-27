import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'
import { BsChevronDown } from 'react-icons/bs'

interface Props {
    onSelectSortOrder: (order: string) => void;
    selectedSortOrder: string | null;
}

const SortSelector = ({onSelectSortOrder, selectedSortOrder}: Props) => {
    
    const sortOrder = [
        {value: "", label: "Relevance"},
        {value: "-added", label: "Date added"},
        {value: "name", label: "Name"},
        {value: "-released", label: "Release date"},
        {value: "-metacritic", label: "Popularity"},
        {value: "-rating", label: "Average rating"},
    ]

    const currentSortOrder = sortOrder.find((order) => order.value === selectedSortOrder)

    return (
        <Menu>
            <MenuButton as={Button} rightIcon={<BsChevronDown />}>
                Sort by: {currentSortOrder?.label || 'Relevance'}
            </MenuButton>
            <MenuList>
                {sortOrder.map(e => <MenuItem onClick={() => onSelectSortOrder(e.value)} key={e.value} value={e.value}>{e.label}</MenuItem>)}
            </MenuList>
        </Menu>
    )
}

export default SortSelector
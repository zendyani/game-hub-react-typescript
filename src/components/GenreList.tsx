import { HStack, Image, List, ListItem, Text } from '@chakra-ui/react'
import useGenres from '../hooks/useGenres'
import getCropperImageUrl from '../services/image-url'

const GenreList = () => {
    const { data, error, isLoading } = useGenres()
    return (
        <List>
            {data.map(g => 
                <ListItem paddingY='5px'>
                    <HStack>
                        <Image boxSize='32px' borderRadius={8} src={getCropperImageUrl(g.image_background)} />
                        <Text fontSize={'lg'}>{g.name}</Text>
                    </HStack>
                </ListItem>
            )}
        </List>
    )
}

export default GenreList
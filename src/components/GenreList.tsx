import { Button, HStack, Image, List, ListItem, Spinner, Text } from '@chakra-ui/react'
import useGenres from '../hooks/useGenres'
import getCropperImageUrl from '../services/image-url'
import Genre from '../interfaces/Genre'

interface Props {
    onSelectGenre: (genre: Genre) => void;
    selectedGenre: Genre | null;
}

const GenreList = ({ onSelectGenre, selectedGenre }: Props) => {
    const { data, error, isLoading } = useGenres()

    if (error) return null
    if (isLoading) return <Spinner />

    return (
        <List>
            {data.map(g =>
                <ListItem paddingY='5px' key={g.id}>
                    <HStack>
                        <Image boxSize='32px' borderRadius={8} src={getCropperImageUrl(g.image_background)} />
                        <Button fontWeight={g.id === selectedGenre?.id ? 'bold': 'normal'}  variant={'link'} onClick={() => onSelectGenre(g)} >{g.name}</Button>
                    </HStack>
                </ListItem>
            )}
        </List>
    )
}

export default GenreList
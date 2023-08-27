import { SimpleGrid } from '@chakra-ui/react'
import useGames from '../hooks/useGames'
import GameCard from './GameCard'
import GameCardSkeleton from './GameCardSkeleton'
import GameCardContainer from './GameCardContainer'
import GameQuery from '../interfaces/GameQuery'

interface Props {
    gameQuery: GameQuery
}

const GameGrid = ({ gameQuery }: Props) => {
    const { data, error, isLoading } = useGames(gameQuery)
    const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    return (
        <>
            {error && <p>{error}</p>}
            <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 4 }} spacing={6} padding={3}>
                {isLoading && skeletons.map(s =>
                    <GameCardContainer key={s}>
                        <GameCardSkeleton />
                    </GameCardContainer>)}
                {!isLoading && data.map((game) => (
                    <GameCardContainer key={game.id}>
                        <GameCard game={game} />
                    </GameCardContainer>
                ))}
            </SimpleGrid>
        </>
    )
}

export default GameGrid
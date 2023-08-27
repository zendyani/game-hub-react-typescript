import { HStack, Image, Text } from '@chakra-ui/react'
import logo from '../assets/logo.webp'
import ColorModSwitch from './ColorModeSwitch'
import SearchInput from './SearchInput'

const NavBar = () => {
  return (
    <HStack padding='10px'>
        <Image src={logo} boxSize={'60px'} />
        <SearchInput />
        <ColorModSwitch />
    </HStack>
  )
}

export default NavBar
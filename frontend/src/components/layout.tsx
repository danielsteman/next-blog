import React from 'react';
import {
  Flex,
  ChakraProvider,
  Grid,
  GridItem,
  Box,
  useMediaQuery,
} from '@chakra-ui/react';
import {
  FaGithub, FaStackOverflow, FaLinkedin, FaLastfmSquare,
} from 'react-icons/fa';
import ColorModeSwitcher from '../components/colormodeswitcher';
import Logo from '../components/logo';
import customTheme from '../themes/theme';
import NavigationButton from '../components/navigationbutton';
import SideMenu from '../components/sidemenu';
import SearchBar from '../components/searchbar';

interface Props {
  children: React.ReactNode;
}

const Base: React.FC<Props> = ({ children }) => {
  const [isMobile] = useMediaQuery('(max-width: 30em)');
  return (
    <ChakraProvider theme={customTheme}>
      <Grid
        templateColumns="repeat(4, 1fr)"
        templateRows="repeat(2, 1fr)"
        textAlign="left"
        maxW={1280}
        p="2rem"
        my={0}
        mx="auto"
      >
        <GridItem colSpan={[1, 1, 1, 1, 1]} rowSpan={2}>
          <Flex textAlign="left" flexDirection="row">
            {isMobile ? (
              <Box mb={4} zIndex={3}>
                <SideMenu />
              </Box>
            ) : null}
            <Logo />
          </Flex>
        </GridItem>
        {isMobile ? (
          null
        ) : (
          <GridItem colSpan={[0, 2, 2, 2, 2]} rowSpan={2}>
            <SearchBar isMobile={isMobile} />
          </GridItem>
        )}
        <GridItem colSpan={[3, 1, 1, 1, 1]} rowSpan={2} textAlign="right">
          <Box>
            <NavigationButton url="https://www.github.com/danielsteman" icon={FaGithub} />
            <NavigationButton url="https://www.stackoverflow.com/users/11383969/dsteman" icon={FaStackOverflow} />
            <NavigationButton url="https://www.linkedin.com/in/danielsteman/" icon={FaLinkedin} />
            <NavigationButton url="https://www.last.fm/user/daniel-steman" icon={FaLastfmSquare} />
            <ColorModeSwitcher />
          </Box>
        </GridItem>
        {isMobile ? (
          <GridItem colSpan={[4, 2, 2, 2, 2]} rowSpan={2}>
            <SearchBar isMobile={isMobile} />
          </GridItem>
        ) : (
          null
        )}
        {!isMobile ? (
          <GridItem colSpan={1} py={8}>
            <SideMenu />
          </GridItem>
        ) : null}
        <GridItem
          colSpan={[4, 3, 3, 3, 3]}
          py={[0, 16, 16, 16, 16]}
          pr={[0, 16, 16, 16, 16]}
        >
          {children}
        </GridItem>
      </Grid>
    </ChakraProvider>
  );
};

export default Base;



import { ChakraProvider, CSSReset, extendTheme } from '@chakra-ui/react';

import { useStore } from './store/store';
import Header from './components/Header/Header';
import HomePage from './pages/HomePage';


const theme = extendTheme({
  config: {
    initialColorMode: 'light',
    useSystemColorMode: false,
  },
});

const App = () => {
  const { isNavbarOpen } = useStore();

  return (
    <ChakraProvider theme={theme}>
      <CSSReset />
      <HomePage/>
      {/* Your other components go here */}
      <div className={`overlay ${isNavbarOpen ? 'active' : ''}`} onClick={() => useStore.setState({ isNavbarOpen: false })}></div>
    </ChakraProvider>
  );
};

export default App;

import { ThemeProvider } from 'styled-components';

import GlobalStyles from './styles/GlobalStyles';
import theme from './styles/theme/theme';
import Layout from './components/Layout';

 const App = () => {
   
  return (
    <ThemeProvider theme={theme}>
       <Layout/>
       <GlobalStyles/>
    </ThemeProvider>
    );
}

export default App;

import { ThemeProvider } from 'styled-components';
import { Container } from './components/styles/Container.styled';
import GlobalStyles from './components/styles/Global';
import React from 'react';
import Header from './components/Header';
import content from './content';
import Card from './components/Card';
import Footer from './components/Footer';

const theme = {
    colors: {
        header: '#ebfbff',
        body: '#fff',
        footer: '#003333',
    },

    mobile: '768px',
};

function App() {
    return (
        <ThemeProvider theme={theme}>
            <GlobalStyles />
            <React.Fragment>
                <Header />
                <Container>
                    {content.map((item, index) => {
                        return <Card key={index} item={item} />;
                    })}
                </Container>
                <Footer />
            </React.Fragment>
        </ThemeProvider>
    );
}

export default App;

import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/header'
import Footer from './components/footer'

function App() {
    return (
        <div>
            <Header />
            <Footer />
        </div>
    );
}

ReactDOM.render(<App/>, document.getElementById('root'))
import React from 'react';
import Container from 'react-bootstrap/Container';
import MainpageNav from "../components/MainpageNav";
import './styles/Home.css';

function NotFound(){
    return(
        <div className="App">
            <MainpageNav />
                <Container id="mainpage-main-content">
                    <div>
                        <h1>Page Not Found</h1>
                        <p>We could not find what you were looking for.</p>
                        <p>If you believe this link should work, please contact the owner of the site.</p>
                    </div>
                </Container>
        </div>
    );
}

export default NotFound;

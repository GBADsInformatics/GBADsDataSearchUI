import { useSearchParams } from "react-router-dom";
import SearchNav from "../components/SearchNav";
import PaperInfo from '../components/PaperInformation';
import MainGrid from '../components/MainGrid';
import "./styles/Search.css";
import { Container } from 'react-bootstrap';

function Search(){
    const [searchParams] = useSearchParams();

    const searchWas = searchParams.get('criteria');
    console.log(searchParams.get('criteria'));
    return(
        <div>
            <SearchNav search={searchWas}/>
            <Container id="organize-main-search">
                <Container id="paper-info">
                    <PaperInfo/>
                </Container>
                <Container id="main-grid-container" style={{width: '2900px'}}>
                    <MainGrid/>
                </Container>
            </Container>
        </div>
        
    );
}

export default Search;
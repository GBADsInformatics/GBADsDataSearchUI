import { useSearchParams } from "react-router-dom";
import SearchNav from "../components/SearchpageNav";
import PaperInfo from '../components/PaperInformation';
import MainGrid from '../components/MainGrid';
import "./Search.css";
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
                <Container style={{width: '2900px'}}>
                    <MainGrid/>
                </Container>
            </Container>
        </div>
        
    );
}

export default Search;
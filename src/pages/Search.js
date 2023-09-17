import { useSearchParams } from "react-router-dom";
import SearchNav from "../components/SearchNav";
// import PaperInfo from '../components/PaperInformation';
import MainGrid from '../components/MainGrid';
import "./styles/Search.css";
import { Container } from 'react-bootstrap';
import KeywordSidebar from "../components/KeywordSidebar";

function Search(){
    const [searchParams] = useSearchParams();

    const searchWas = searchParams.get('criteria');
    console.log(searchParams.get('criteria'));
    const keywords = ['example', 'keyword', 'you', 'will', 'see']
    return(
        <div>
            <SearchNav search={searchWas}/>
            <Container id="organize-main-search">
                {/* <Container id="paper-info">
                    <PaperInfo/>
                </Container> */}
                <Container style={{width: '500px', paddingTop: '2%', marginTop: '3%;'}}>
                    <KeywordSidebar keywords={keywords}/>
                </Container>
                <Container id="main-grid-container" style={{width: '2900px', paddingTop: '2%', marginTop: '3%;'}}>
                    <MainGrid theSearch={searchWas}/>
                </Container>
            </Container>
        </div>
        
    );
}

export default Search;
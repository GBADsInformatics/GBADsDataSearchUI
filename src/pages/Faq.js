import MainpageNav from "../components/MainpageNav";
import Container from 'react-bootstrap/Container';
import './styles/Home.css';

function FAQ() {
  const faqDictionary = {
    "What is the purpose of this site?" : "Our site is designed to facilitate data exploration based on user queries related to various topics. Users can input specific queries, refine them with additional keywords, and explore relevant data, literature, or other related information.",
    "How do I start a search on TAIL?" : "To start a search, simply enter your query in the search bar. You can input specific terms like \"Cattle in Asia in 2011\" or broader topics like \"Dogs and Cats population in Canada and Argentina in 1998 and 1967.\"",
    "Can I add more keywords to my search?" : "Absolutely! Once you've entered your initial query, our system suggests additional keywords based on the semantic layer. You can also manually add keywords to refine and enhance your search.",
    "What is the semantic layer, and how does it work?" : "The semantic layer enriches your query by adding related keywords. For example, if you search for \"Cow,\" the system might automatically add keywords like \"Cattle\" and \"Bovine\" to provide a more comprehensive set of results.",
    "How can I narrow down my results?" : "To refine your search and focus on specific aspects, consider including more keywords, relevant years, or additional terms related to your topic. By doing so, you can tailor the results to match your specific interests and obtain more precise and targeted information. On the results page, you can selectively un-select keywords to adjust the scope of your search, providing you with a flexible and customizable experience.",
    "Is there a limit to the number of keywords I can add?" : "There is no strict limit to the number of keywords you can add. However, keep in mind that adding too many keywords may result in more specific and potentially narrower results.",
    "How often is the data updated on the site?" : "The frequency of data updates depends on the sources we pull information from. We strive to keep the data as current as possible, but the update schedule may vary.",
    // "How can I provide feedback or report issues?" : "We welcome your feedback! You can use the provided feedback form on the site to share your thoughts, report issues, or suggest improvements.",
  };

  return (
    <div className="App">
      <MainpageNav></MainpageNav>
      <Container id="mainpage-main-content">
        <Container>
        <h1 style={{fontWeight: "bold", fontSize: "50px"}}>FAQ</h1>
        <hr/>
        <Container style={{textAlign: "left"}}>
        {Object.entries(faqDictionary).map(([question, answer]) => (
        <div key={question}>
          <h1>{question}</h1>
          <p>{answer}</p>
        </div>
      ))}
        </Container>
      </Container>
      </Container>
    </div>
  );
}

export default FAQ;

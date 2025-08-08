import { FormControl, InputGroup, Container, Button } from "react-bootstrap";
import "./App.css";
const clientId = import.meta.env.VITE_CLIENT_ID;
const clientSecret = import.meta.env.VITE_CLIENT_SECRET;


function App() {
  return (
    <><div className="App">
      <h1>Alexas Swag Album Finder</h1>
    </div>
    
    <Container>
        <InputGroup>
          <FormControl
            placeholder="Search For Artist"
            type="input"
            aria-label="Search for an Artist"
            onKeyDown={() => { /* search function here */ }}
            onChange={() => { /* setSearch function here */ }}
            style={{
              width: "300px",
              height: "35px",
              borderWidth: "0px",
              borderStyle: "solid",
              borderRadius: "5px",
              marginRight: "10px",
              paddingLeft: "10px",
            }} />

          <Button onClick={() => { /* search function here */ }}>Search</Button>
        </InputGroup>
      </Container></>



  );
}
export default App;
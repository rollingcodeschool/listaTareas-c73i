import { Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Container className="my-4">
        <h1 className="text-center">Lista de tareas</h1>
      </Container>
      <Footer></Footer>
    </>
  );
}

export default App;

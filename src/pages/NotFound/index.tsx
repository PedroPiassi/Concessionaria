import { Container } from "react-bootstrap";
import Header from "../../components/Header";

export default function NotFound() {
  return (
    <>
      <Header />
      <Container>
        <h1>Página não encontrada 😟</h1>
      </Container>
    </>
  );
}

import type { NextPage } from "next";
import styles from "../styles/Home.module.scss";
import { Container, Text, Button, Card, Link } from "@nextui-org/react";

const Home: NextPage = () => {
  return (
    <Container>
      <main>
        <Button>Click me</Button>
        <Card>
          <Text h4>Next UI</Text>
          <Text>🚀 Beautiful and modern React UI library.</Text>
          <Card.Footer>
            <Link
              color="primary"
              target="_blank"
              href="https://github.com/nextui-org/nextui"
            >
              Visit source code on GitHub.
            </Link>
          </Card.Footer>
        </Card>
      </main>
    </Container>
  );
};

export default Home;

import { FC, ReactElement } from "react";
import Head from "next/head";
import Navigation from "./navigation";

interface Props {
  children: ReactElement;
}
const Layout: FC<Props> = ({ children }) => {
  return (
    <>
      <Head>
        <title>Fernandoox</title>
        <meta
          name="description"
          content="Freelance, developer, javascript lover"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navigation />
      {children}
      <footer>footer</footer>
    </>
  );
};

export default Layout;

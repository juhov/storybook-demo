import App, { Container } from "next/app";
import ThemeProviderWithGlobalStyles from "../theme/Provider";
import { Header } from "guild-js-theme";

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <Container>
        <ThemeProviderWithGlobalStyles>
          <Header title="#guild-js-dev ❤" />
          <Component {...pageProps} />
        </ThemeProviderWithGlobalStyles>
      </Container>
    );
  }
}

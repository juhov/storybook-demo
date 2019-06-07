import App, { Container } from "next/app";
import ThemeProviderWithGlobalStyles from "../theme/Provider";

export default class BBApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <Container>
        <ThemeProviderWithGlobalStyles>
          <Component {...pageProps} />
        </ThemeProviderWithGlobalStyles>
      </Container>
    );
  }
}

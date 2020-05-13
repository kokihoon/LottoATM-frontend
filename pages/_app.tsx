import { NextComponentType } from "next";
import { AppContext, AppInitialProps, AppProps } from "next/app";
import "../styles/reset.css";
import { Provider } from "react-redux";
import configureStore from "../store/configureStore";

const store = configureStore();

const LottoATM: NextComponentType<AppContext, AppInitialProps, AppProps> = ({
  Component,
  pageProps
}) => {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
};

LottoATM.getInitialProps = async ({
  Component,
  ctx
}: AppContext): Promise<AppInitialProps> => {
  let pageProps = {};

  if (Component.getInitialProps) {
    pageProps = await Component.getInitialProps(ctx);
  }

  return { pageProps };
};

export default LottoATM;

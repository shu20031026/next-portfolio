import "../styles/globals.css";
import type { AppProps } from "next/app";
import { NextUIProvider } from "@nextui-org/react";
import { RecoilRoot } from "recoil";
import { Layout } from "~/layouts";
import { NextPage } from "next";

const MyApp: NextPage<AppProps> = ({ Component, pageProps }) => {
  return (
    <RecoilRoot>
      <NextUIProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </NextUIProvider>
    </RecoilRoot>
  );
};

export default MyApp;

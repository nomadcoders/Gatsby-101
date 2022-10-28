import { StaticImage } from "gatsby-plugin-image";
import * as React from "react";
import Layout from "../components/Layout";
import Seo from "../components/Seo";

export default function IndexPage() {
  return (
    <Layout title="Welcome to DevStickers 👋🏻">
      <StaticImage
        height={200}
        src="https://images.unsplash.com/photo-1540651810471-5699df74834f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80"
        alt="Stickers on the wall"
      />
    </Layout>
  );
}

export const Head = () => <Seo title="Home" />;

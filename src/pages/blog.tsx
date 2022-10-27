import React from "react";
import Layout from "../components/Layout";
import Seo from "../components/Seo";

export default function Blog() {
  return (
    <Layout title="Blog">
      <p>The most recent news from my shop.</p>
    </Layout>
  );
}

export const Head = () => <Seo title="Blog" />;

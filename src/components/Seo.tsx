import React from "react";

interface ISeoProps {
  title: string;
}

export default function Seo({ title }: ISeoProps) {
  return <title>{title} | DevStickers!</title>;
}

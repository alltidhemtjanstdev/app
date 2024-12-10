import React from "react";
import { PortableText, PortableTextReactComponents } from "@portabletext/react";
import { PortableTextBlock } from "@portabletext/types";

type RenderPortableTextProps = {
  text: PortableTextBlock[];
};

export const RenderPortableText: React.FC<RenderPortableTextProps> = ({
  text,
}) => {
  if (!text) return null;

  return <PortableText value={text} components={portableTextComponents} />;
};

export const portableTextComponents: Partial<PortableTextReactComponents> = {
  marks: {
    link: ({ value, children }) => {
      const rel = !value.href.startsWith("/")
        ? "noopener noreferrer"
        : undefined;

      return (
        <a href={value.href} target="_blank" rel={rel} className="underline">
          {children}
        </a>
      );
    },
    strong: ({ children }) => {
      if (!children) return null;

      const childArray = React.Children.toArray(children);
      const firstChild = typeof childArray[0] === "string" ? childArray[0] : "";
      const isSpecialText = firstChild.includes("Alltid Hemtjänst");

      return (
        <strong
          className={`${isSpecialText ? "text-[#5a317a] font-semibold" : ""}`}
        >
          {children}
        </strong>
      );
    },
  },
  list: {
    bullet: ({ children }) => (
      <ul className="custom-list-disc pl-6">{children}</ul>
    ),
    number: ({ children }) => <ol className="list-decimal pl-6">{children}</ol>,
  },
};

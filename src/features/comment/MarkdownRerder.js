import React from "react";
import styled from "styled-components";
import ReactMarkdown from "react-markdown";
// -- 중간줄 구현하기
import remarkGfm from "remark-gfm";
// code 보여주기
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";

const MarkDownStyle = styled.div`
  font-size: ${({ fontsize }) => fontsize || "16px"};
  line-height: 2.5rem;
  overflow-y: ${({ overflow }) => overflow || "auto"};
  margin: ${({ margin }) => margin || "0"};
  cursor: ${({ cursor }) => cursor || "default"};
`;

// 표일 때
const TableContainer = styled.div`
  height: ${({ height }) => height || "350px"};
  width: 100%;
  img {
    width: 50%;
    height: 100%;
    object-fit: cover;
  }
  table {
    width: 100%;
    border-collapse: collapse;
  }
  th,
  td {
    border: 1px solid #ccc;
    padding: 5px;
  }
`;

const BlockQutoeStyle = styled.blockquote`
  padding: 1.8rem;
  border-left: 5px solid var(--color-point1);
  margin-left: 0;
  background-color: whitesmoke;
  color: var(--color-point1);
`;

function BlockQutoe(children) {
  return <BlockQutoeStyle>{children.children}</BlockQutoeStyle>;
}

const MarkdownRenderer = ({
  markdown,
  height,
  fontsize,
  margin,
  overflow,
  cursor,
}) => {
  return (
    <MarkDownStyle
      fontsize={fontsize}
      margin={margin}
      overflow={overflow}
      cursor={cursor}
    >
      <TableContainer height={height}>
        <ReactMarkdown
          remarkPlugins={[remarkGfm]}
          children={markdown}
          components={{
            blockquote: BlockQutoe,

            code({ node, inline, className, children, ...props }) {
              const match = /language-(\w+)/.exec(className || "");
              return !inline && match ? (
                <SyntaxHighlighter
                  children={String(children).replace(/\n$/, "")}
                  language={match[1]}
                  {...props}
                />
              ) : (
                <code className={className} {...props}>
                  {children}
                </code>
              );
            },
          }}
        ></ReactMarkdown>
      </TableContainer>
    </MarkDownStyle>
  );
};

export default MarkdownRenderer;

import React from "react";
import ReleaseNoteContent from "./ReleaseNoteContent";
import ReactMarkdown from "react-markdown";

interface MainProps {
  selectedContent: string;
}

const InstallationContent = () => (
  <div>
    <h2 className="text-2xl font-bold">Installation</h2>
    <p className="mt-4 text-gray-700">라이브러리를 다운로드 하기 위한 방법</p>
    <br />
    <ol className="mt-2 list-decimal list-inside">
      <ReactMarkdown>{"명령어로 터미널에서 jgdesign 라이브러리를 다운로드 하세요."}</ReactMarkdown>
      <ReactMarkdown className={"block bg-gray-800 text-white p-4 rounded"}>{"npm install jgdesign"}</ReactMarkdown>

      <br />

      <ReactMarkdown>{"import를 하여 원하는 컴포넌트를 골라 사용하세요."}</ReactMarkdown>
      <ReactMarkdown className={"block bg-gray-800 text-white p-4 rounded"}>{"`import { TextButtonBlack } from \"jgdesign\";`"}</ReactMarkdown>
    </ol>
  </div>
);

const StorybookUIContent = () => (
  <div className="w-full h-full">
    <h2 className="text-2xl font-bold">Components</h2>
    <ReactMarkdown></ReactMarkdown>
    <ol className="mt-2 list-inside">
      <ReactMarkdown>Storybook을 통한 Component UI 감상</ReactMarkdown>
      <ReactMarkdown>{"chromatic과 storybook을 사용하여 jgdesign 라이브러리의 컴포넌트들의 ui를 항상 최신 버전으로 확인할 수 있다."}</ReactMarkdown>
    </ol>
    
    <div className="mt-4 list-disc list-inside text-blue-500 hover:underline">
      <ReactMarkdown>[바로 가기](https://www.chromatic.com/library?appId=675a852f840cfc9eddd16d60)</ReactMarkdown>
    </div>
  </div>
);

const Main = ({ selectedContent }: MainProps) => {
  const contentMap: { [key: string]: React.ReactNode } = {
    Installation: <InstallationContent />,
    "Release Notes": <ReleaseNoteContent />,
    "Components": <StorybookUIContent/>,
  };

  const content = contentMap[selectedContent];

  return (
    <main className="flex-1 p-4">
      {content || <p className="text-gray-500">Select an option from the sidebar.</p>}
    </main>
  );
};

export default Main;

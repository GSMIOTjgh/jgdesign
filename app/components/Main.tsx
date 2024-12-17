import Link from "next/link";
import React from "react";
import ReleaseNoteContent from "./ReleaseNoteContent";

interface MainProps {
  selectedContent: string;
}

const InstallationContent = () => (
  <div>
    <h2 className="text-2xl font-bold">Installation</h2>
    <p className="mt-4 text-gray-700">라이브러리를 다운로드 하기 위한 방법</p>
    <ol className="mt-2 list-decimal list-inside">
      <li>npm install jgdesign 명령어로 터미널에서 jgdesign 라이브러리를 다운로드 하세요.</li>
      <li>import를 하여 원하는 컴포넌트를 골라 사용하세요.</li>
    </ol>
  </div>
);

const StorybookUIContent = () => (
  <div className="w-full h-full">
    <h2 className="text-2xl font-bold">Storybook UI</h2>
    <ul className="mt-4 list-disc list-inside text-gray-700">Storybook을 통한 Component UI 감상</ul>
    <Link className="mt-4 list-disc list-inside text-blue-500 hover:underline" href={"https://www.chromatic.com/library?appId=675a852f840cfc9eddd16d60"}>바로 가기</Link>
  </div>
);

const Main = ({ selectedContent }: MainProps) => {
  const contentMap: { [key: string]: React.ReactNode } = {
    Installation: <InstallationContent />,
    "Release Notes": <ReleaseNoteContent />,
    "Storybook UI": <StorybookUIContent />,
  };

  const content = contentMap[selectedContent];

  return (
    <main className="flex-1 p-4">
      {content || <p className="text-gray-500">Select an option from the sidebar.</p>}
    </main>
  );
};

export default Main;

import React from "react";

interface MainProps {
  selectedContent: string;
}

const InstallationContent = () => (
  <div>
    <h2 className="text-2xl font-bold">Installation</h2>
    <p className="mt-4 text-gray-700">Follow these steps to install the library:</p>
    <ol className="mt-2 list-decimal list-inside">
      <li>npm install jgdesign 명령어로 터미널에서 jgdesign 라이브러리를 다운로드 하세요.</li>
      <li>import를 하여 원하는 컴포넌트를 골라 사용하세요.</li>
    </ol>
  </div>
);

const StorybookUIContent = () => (
  <div className="w-full h-full">
    <h2 className="text-2xl font-bold">Storybook UI</h2>
    <ul className="mt-4 list-disc list-inside text-gray-700"></ul>
    <iframe
      src="https://v2.tailwindcss.com/docs/installation"
      className="w-full h-full"
    />
  </div>
);

const Main = ({ selectedContent }: MainProps) => {
  const contentMap: { [key: string]: React.ReactNode } = {
    Installation: <InstallationContent />,
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

interface SidebarProps {
  setSelectedContent: (content: string) => void;
}

const Sidebar = ({ setSelectedContent }: SidebarProps) => {
  const menuItems = ["Installation", "Release Notes", "Storybook UI",];

  return (
    <div className="w-80">
      <div className="w-full text-left pl-11 py-8 font-semibold">
        <span className="">Getting started</span>
        <ul className="text-gray-400 font-medium flex flex-col pt-3 gap-y-2 cursor-pointer">
          {menuItems.map((item) => (
            <li
              key={item}
              className="hover:text-black"
              onClick={() => setSelectedContent(item)}
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;

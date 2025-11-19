import { useState } from "react";
import CreatePost from "./CreatePost";
import Posts from "../../components/common/Posts";
import XSvg from "../../components/svgs/X";

const HomePage = () => {
  const [feedType, setFeedType] = useState("forYou");

  return (
    <div className="flex-[4_4_0] mr-auto border-r border-gray-700 min-h-screen">
      <div className="md:hidden flex items-center gap-2 justify-center">
        <XSvg className="px-2 w-12 h-12 rounded-full fill-white hover:bg-stone-900" />
      </div>
      <div className="flex w-full border-b border-gray-700">
        <div
          className={
            "flex justify-center flex-1 p-3 hover:bg-secondary transition duration-300 cursor-pointer relative"
          }
          onClick={() => setFeedType("forYou")}
        >
          For you
          {feedType === "forYou" && (
            <div className="absolute bottom-0 w-10  h-1 rounded-full bg-primary"></div>
          )}
        </div>
        <div
          className="flex justify-center flex-1 p-3 hover:bg-secondary transition duration-300 cursor-pointer relative"
          onClick={() => setFeedType("following")}
        >
          Following
          {feedType === "following" && (
            <div className="absolute bottom-0 w-10  h-1 rounded-full bg-primary"></div>
          )}
        </div>
      </div>
      <CreatePost />
      <Posts feedType={feedType} />
    </div>
  );
};
export default HomePage;

import FacebookLogo from '../icons/facebookLogo';
import SearchIcon from '../icons/searchIcon';
import Plus from '../icons/plus';
import Messenger from '../icons/messenger';
import DownArrow from '../icons/downArrow';
import Bell from '../icons/bell';
import Home from '../icons/home';
import Watch from '../icons/watch';
import Groups from '../icons/groups';
import Feed from '../icons/feed';

export default function Navbar() {
  return (
    <div>
      <div className="h-14 flex justify-between w-screen shadow-fb px-4 py-2">
        <div className="flex">
          <FacebookLogo />
          <div className="h-10 w-64 ml-2 flex items-center rounded-full bg-fFill p-3">
            <SearchIcon />
            <input
              className="text-fGrey ml-2 bg-fFill focus:outline-none"
              placeholder="Search Facebook"
            />
          </div>
        </div>

        <div className="flex space-x-24 items-center">
          <button className="focus:outline-none">
            <Home />
          </button>
          <button className="focus:outline-none">
            <Watch />
          </button>
          <button className="focus:outline-none">
            <Groups />
          </button>
          <button className="focus:outline-none">
            <Feed />
          </button>
        </div>

        <div className="flex space-x-2">
          <button className="h-9 p-0.5 flex items-center rounded-full focus:outline-none">
            <img
              src="https://picsum.photos/id/1005/300"
              className="rounded-full border w-9 border-fButton"
              alt="profile"
            />
            <div className="text-fBlack font-medium ml-2 pr-3">
              Ronald Oliver
            </div>
          </button>

          <div className="w-10 bg-fButton flex items-center justify-center relative rounded-full ">
            <div className="absolute rounded-full bg-fRed w-5 h-5 z-50 inset-x-6 -top-1 hidden">
              <div className="text-sm text-white text-center">3</div>
            </div>
            <Plus />
          </div>

          <div className="w-10 bg-fButton flex items-center justify-center relative rounded-full">
            <div className="absolute rounded-full bg-fRed w-5 h-5 z-50 inset-x-6 -top-1 hidden">
              <div className="text-sm text-white text-center">3</div>
            </div>
            <Messenger />
          </div>

          <div className="w-10 bg-fButton rounded-full flex justify-center items-center relative">
            <div className="absolute rounded-full bg-fRed w-5 h-5 z-50 inset-x-6 -top-1">
              <div className="text-sm text-white text-center">3</div>
            </div>

            <Bell />
          </div>

          <div className="w-10 bg-fButton flex items-center justify-center relative rounded-full">
            <div className="absolute rounded-full bg-fRed w-5 h-5 z-50 inset-x-6 -top-1 hidden">
              <div className="text-sm text-white text-center">3</div>
            </div>
            <DownArrow borderColor="#1d1f23" />
          </div>
        </div>
      </div>
    </div>
  );
}

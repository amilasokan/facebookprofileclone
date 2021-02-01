import DownArrow from '../icons/downArrow';
import Phone from '../icons/phone';
import Friend from '../icons/friend';
import More from '../icons/more';

export default function TimelineHeader() {
  return (
    <div className="px-44 shadow">
      <div className="relative h-96 rounded-b flex justify-center">
        <img
          src="https://picsum.photos/id/1018/3000"
          className="object-cover w-full h-full rounded-b"
          alt="cover"
        />
        <div className="absolute -bottom-6">
          <img
            src="https://picsum.photos/id/1005/1000"
            className="object-cover border-4 border-white w-40 h-40 rounded-full"
            alt="cover"
          />
        </div>
      </div>
      <div className="text-center mt-6 text-3xl font-bold text-fBlack">
        Ronald Oliver
      </div>
      <div className="border border-fGrey mt-6 border-opacity-10" />
      <div className="flex justify-between px-8">
        <div className="flex items-center">
          <div className="px-4 py-5 text-fBlue border-b-4 border-fBlue">
            Posts
          </div>
          <div className="px-4 py-5 text-fGrey">
            Friends <span className="text-sm ml-1">458</span>
          </div>
          <div className="px-4 py-5 text-fGrey">Photos</div>
          <div className="px-4 py-5 text-fGrey">Videos</div>
          <div className="px-4 py-5 text-fGrey">Check-Ins</div>
          <div className="px-4 flex items-center py-5 text-fGrey">
            More
            <span className="ml-1">
              <DownArrow borderColor="#606770" />
            </span>
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <button className="w-12 h-9 bg-fButton rounded flex items-center justify-center focus:outline-none">
            <Phone />
          </button>
          <button className="w-12 h-9 bg-fButton rounded flex items-center justify-center focus:outline-none">
            <Friend />
          </button>
          <button className="w-12 h-9 bg-fButton rounded flex items-center justify-center focus:outline-none">
            <More />
          </button>
        </div>
      </div>
    </div>
  );
}

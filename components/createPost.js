import Image from '../icons/image';
import Friend from '../icons/friend';
import Feeling from '../icons/feeling';
import Tag from '../icons/tag';

export default function CreatePost() {
  return (
    <div>
      <div className="w-full shadow-fb rounded bg-white p-4">
        <div className="flex space-x-2">
          <img
            src="https://picsum.photos/id/1015/500"
            alt="img"
            className="h-10 w-10 rounded-full"
          />
          <input
            className="bg-fFill px-4 py-3 w-full focus:outline-none rounded-full"
            placeholder="Write something to Roland…"
          />
        </div>
        <div className="border border-fGray border-opacity-10 mt-4" />
        <div className="flex justify-between">
          <button className="flex justify-center items-center w-1/3 focus:outline-none mt-4 py-2">
            <Image />
            <span className="text-fGrey text-opacity-80 font-medium ml-2">
              Photo/Video
            </span>
          </button>
          <button className="flex justify-center items-center w-1/3 focus:outline-none mt-4 py-2">
            <Tag />
            <span className="text-fGrey text-opacity-80 font-medium ml-2">
              Tag Friends
            </span>
          </button>
          <button className="flex justify-center items-center w-1/3 focus:outline-none mt-4 py-2">
            <Feeling />
            <span className="text-fGrey text-opacity-80 font-medium ml-2">
              Feelling/Activity
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}

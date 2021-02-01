import More from '../icons/more';
import SLike from '../icons/likesmall';
import CommentButton from '../icons/lovesmall';

export default function MainPost() {
  return (
    <div>
      <div className="w-full shadow-fb rounded bg-white p-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <img
              src="https://picsum.photos/id/1025/500"
              alt="img"
              className="h-10 w-10 rounded-full"
            />
            <div className="ml-4">
              <span className="cursor-pointer font-bold">Ronald Oliver</span>{' '}
              was with{' '}
              <span className="cursor-pointer font-bold">Steve Cunningham</span>{' '}
              <br />
              <span className="text-fGrey text-opacity-50 text-sm">
                {' '}
                November 16, 2021{' '}
              </span>
            </div>
          </div>
          <button className="w-9 h-9 rounded-full bg-fFill flex items-center justify-center focus:outline-none">
            <More />
          </button>
        </div>
        <div className="w-full mt-4">
          Nunc scelerisque tincidunt elit. Vestibulum non mi ipsum. Cras pretium
          suscipit tellus sit amet aliquet. Vestibulum maximus lacinia massa non
          porttitor.
        </div>
        <img
          src="https://picsum.photos/id/1014/2000"
          alt="img"
          className="w-full h-72 object-cover mt-4 rounded"
        />
        <div className="flex justify-between mt-4 items-center text-fGrey text-opacity-50">
          <div>26 Likes</div>
          <div>1 Comment</div>
        </div>
        <div className="border border-fGray border-opacity-10 mt-4" />
        <div className="flex justify-between items-center mt-4">
          <button className="w-1/2 flex items-center justify-center focus:outline-none">
            <SLike />
            <span className="ml-1">Like</span>
          </button>
          <button className="w-1/2 flex items-center justify-center focus:outline-none">
            <CommentButton />
            <span className="ml-1">Comment</span>
          </button>
        </div>
        <div className="border border-fGray border-opacity-10 mt-4" />
        <div className="flex space-x-2 mt-4">
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
      </div>
    </div>
  );
}

import Navbar from '../components/navbar';
import TimelineHeader from '../components/timelineHeader';
import Intro from '../components/intro';
import Photos from '../components/photos';
import CreatePost from '../components/createPost';
import Posts from '../components/posts';
import MainPost from '../components/mainPost';

export default function Home() {
  return (
    <div className="antialiased">
      <Navbar />
      <TimelineHeader />

      <div className="px-52 grid grid-cols-12 pt-4 gap-4 bg-fFill z-0 pb-56">
        <div className="col-span-5 col-start-1 row-start-1 space-y-4">
          <Intro />
          <Photos />
        </div>
        <div className="flex-row row-start-1 col-span-7 col-start-6 space-y-4">
          <CreatePost />
          <Posts />
          <MainPost />
          <MainPost />
        </div>
      </div>
    </div>
  );
}

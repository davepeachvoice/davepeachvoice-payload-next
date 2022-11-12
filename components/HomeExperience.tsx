import { react as HomeContent } from '../content/home.md';

export default function HomeExperience() {
  return (
    <div className="items-center">
      <div className="h-full w-full p-6">
        <span className="md:text-lg">
          <HomeContent></HomeContent>
        </span>
      </div>
    </div>
  );
}

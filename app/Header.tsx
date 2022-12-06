import Banner from "./Banner";

async function getTrending() {
  const res = await fetch(
    `${process.env.BASE_URL}/trending/all/day?api_key=${process.env.IMDB_API_KEY}&language=en-US&page=1`
  );
  const trending = await res.json();
  return trending.results;
}

const Header = async () => {
  const trending = await getTrending();

  return (
    <>
      <div className="flex mx-auto justify-between p-5 relative">
        <div className="flex justify-center items-center gap-4 text-[13px]">
          <img src="./R.png" alt="netflix logo" className="max-h-12" />
          <ul className="flex gap-3 font-bold transition ease-in duration-150 ">
            <li>
              <a className="text-gray-500 hover:text-gray-700" href="#">
                Home
              </a>
            </li>
            <li>
              <a className="text-gray-500 hover:text-gray-700" href="#">
                TV Shows
              </a>
            </li>
            <li>
              <a className="text-gray-500 hover:text-gray-700" href="#">
                Movies
              </a>
            </li>
            <li>
              <a className="text-gray-500 hover:text-gray-700" href="#">
                Recently Added
              </a>
            </li>
            <li>
              <a className="text-gray-500 hover:text-gray-700" href="#">
                My List
              </a>
            </li>
          </ul>
        </div>
        <div>
          <ul className="flex gap-4">
            <li>Search</li>
            <li>Notification</li>
            <li>Account</li>
          </ul>
        </div>
        <Banner trending={trending} />
      </div>
      {/* @ts-ignore */}
    </>
  );
};

export default Header;

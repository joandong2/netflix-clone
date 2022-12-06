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
      <div className="p-9 relative z-10 h-screen">
        <div className="flex justify-between text-[13px] items-center">
          <div className="flex justify-betweeen gap-6 items-center">
            <img src="./R.png" alt="netflix logo" className="max-h-[40px]" />
            <ul className="flex gap-3 font-bold transition ease-in duration-150 ">
              <li>
                <a className="text-light-gray hover:text-dark-gray" href="#">
                  Home
                </a>
              </li>
              <li>
                <a className="text-light-gray hover:text-dark-gray" href="#">
                  TV Shows
                </a>
              </li>
              <li>
                <a className="text-light-gray hover:text-dark-gray" href="#">
                  Movies
                </a>
              </li>
              <li>
                <a className="text-light-gray hover:text-dark-gray" href="#">
                  Recently Added
                </a>
              </li>
              <li>
                <a className="text-light-gray hover:text-dark-gray" href="#">
                  My List
                </a>
              </li>
            </ul>
          </div>

          <ul className="flex gap-4">
            <li>Search</li>
            <li>Notification</li>
            <li>Account</li>
          </ul>
        </div>

        <Banner trending={trending} />
        <div className="fadeBottom"></div>
      </div>
    </>
  );
};

export default Header;

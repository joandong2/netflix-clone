import Banner from "./Banner";
import Navbar from "./Navbar";

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
      <div className="header h-screen mb-[-15em]">
        <Navbar />
        <Banner trending={trending} />
        <div className="fadeBottom"></div>
      </div>
    </>
  );
};

export default Header;

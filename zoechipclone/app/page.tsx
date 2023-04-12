import MainContainer from './components/MainContainer';

const API_KEY = process.env.API_KEY; /* API KEY */

async function getData() {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/550?api_key=058656fa2298b8939959508260aa1ee4`,
    { next: { revalidate: 10 } }
  );

  return res.json();
}

export default async function Home() {
  const data = await getData();

  return (
    <div className="bg-stone-900">
      <MainContainer />
    </div>
  );
}

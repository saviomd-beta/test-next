import { getMoviePopular } from "@/utils/tmdbServices";

export default async function Home() {
  const movies = await getMoviePopular();
  return (
    <main>
      <ul>
        {movies.map((movie) => (
          <li key={movie.id}>{`${movie.title} (${movie.release_date})`}</li>
        ))}
      </ul>
    </main>
  );
}

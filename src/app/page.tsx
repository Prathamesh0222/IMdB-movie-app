import Results from "@/components/Results";


const API_KEY = process.env.API_KEY;

export default async function Home({searchParams}:{searchParams: {genre:string}}) {
    const genre = searchParams.genre || "fetchTrending";
    await new Promise(resolve => setTimeout(resolve, 2000));
        const res = await fetch(`https://api.themoviedb.org/3${
        genre === 'fetchTopRated' ? `/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1` : `/trending/all/day?api_key=${API_KEY}`
      }`,{next: {revalidate:10000}})
    const data = await res.json();
    if(!data){
      throw new Error("No data found")
    }
    const results = data.results;
    console.log(results);
  return <div>
    <Results results={results}/>
  </div>
    
}
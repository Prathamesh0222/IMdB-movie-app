import Image from "next/image";
import Link from "next/link";
import { FiThumbsUp } from "react-icons/fi";


export default function Card({result}: {result: any}) {
  return (
    <div className="group cursor-pointer sm:hover:shadow-slate-400 sm:shadow-md rounded-lg sm:border sm:border-slate-400 sm:m-2 p-4">
        <Link href={`/movie/${result.id}`}>
            <Image
            src={`https://image.tmdb.org/t/p/original/${result.backdrop_path || result.poster_path}`} 
           height={5300}
           width={500}
           alt="movie poster"
           className="sm:rounded-t-lg group-hover:opacity-75 transition-opacity duration-300"
            ></Image>
            <div className="">
                <p className="line-clamp-2 text-md">{result.overview}</p>
                <h2 className="text-lg font-bold truncate hover:text-amber-300">{result.title || result.name}</h2>
                <div className="mt-2">
                <p className="flex items-center">{result.release_date || result.first_air_date}
                <FiThumbsUp className="h-5 mr-1 ml-3"/>
                {result.vote_count}
                </p>
                </div>
            </div>
        </Link>
    </div>
  )
}

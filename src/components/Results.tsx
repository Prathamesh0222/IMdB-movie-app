

export default function Results({results}:{results: any[]}) {
  return (
    <div>{
      results.map((result) => (
        <div key={result.id}>
            <h2>{result.original_title}</h2>
        </div>
      ))
    }</div>
  )
}

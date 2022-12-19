import useSWR from "swr";
import "./App.css";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

function App() {
  const { data, error, isLoading } = useSWR(
    "https://jsonplaceholder.typicode.com/posts",
    fetcher
  );

  console.log(data);

  if (!data) return <h1>Loading...</h1>;
  if (error) return <h1>Error</h1>;
  if (isLoading) return <h1>Error</h1>;
  return (
    <div className="App">
      {data &&
        data.map(
          (item: {
            userId: number;
            id: number;
            title: string;
            body: string;
          }) => {
            return (
              <div key={item.id}>
                <h1>{item.title}</h1>
                <h2>{item.body}</h2>
              </div>
            );
          }
        )}
    </div>
  );
}

export default App;

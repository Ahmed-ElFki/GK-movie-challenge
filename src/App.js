import AddMovie from "./Components/AddMovie";
import MoviesList from "./Components/MoviesList";
import { useSelector } from "react-redux";
import EditMovie from "./Components/EditMovie";

function App() {
  const { updateMovieToggle, updateMovieID } = useSelector((state) => state);

  return (
    <>
      <AddMovie />
      {updateMovieToggle ? (
        <EditMovie id={updateMovieID} display={updateMovieToggle} />
      ) : (
        <></>
      )}
      <MoviesList />
    </>
  );
}

export default App;

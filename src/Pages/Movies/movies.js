import axios from "axios";
import { useEffect, useState } from "react";
import CustomPagination from "../../components/Pagination/CustomPagination";
import SingleContent from "../../components/SingleContent/SingleContent";

const Movies = () => {
  const [page, setpage] = useState(1);
  const [content, setcontent] = useState([]);
  const [numOfPages, setnumOfPages] = useState();

  const fetchMovies = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}`
    );
    setcontent(data.results);
    setnumOfPages(data.total_pages);
  };

  useEffect(() => {
    fetchMovies();
    // eslint-disable-next-line
  }, [page]);

  return (
    <div>
      <span className="pageTitle">Movies</span>
      <div className="trending">
        {content &&
          content.map((c) => (
            <SingleContent
              key={c.id}
              id={c.id}
              poster={c.poster_path}
              title={c.title || c.name}
              date={c.first_air_date || c.release_date}
              media_type={c.media_type}
              vote_average={c.vote_average}
            />
          ))}
      </div>
      {numOfPages > 1 && (
        <CustomPagination setpage={setpage} numOfPages={numOfPages} />
      )}
    </div>
  );
};

export default Movies;

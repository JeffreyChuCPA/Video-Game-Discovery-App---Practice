import useGenres from "../hooks/useGenres";

const GenreList = () => {
    const { data } = useGenres(); //*components should not know anything about making HTTP requests

    return (
        <ul>
            {data.map((genre) => (
                <li key={genre.id}>{genre.name}</li>
            ))}
        </ul>
    );
};

export default GenreList;

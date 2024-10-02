// Films.tsx
import React, { useEffect, useState } from "react";
import axios from "axios";
import FilmDetailsModal from "./FilmDetailsModal";
import { Film } from "./interfaces/film.interface";

const Films: React.FC = () => {
  const [films, setFilms] = useState<Film[]>([]);
  const [selectedFilmId, setSelectedFilmId] = useState<string | null>(null);
  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);

  useEffect(() => {
    const fetchFilms = async () => {
      try {
        const { data } = await axios.get("http://localhost:4000/films");
        console.log("data", data)
        setFilms(data);
      } catch (error) {
        console.error("Error fetching films:", error);
        console.error("Error fetching films:", error);
      }
    };

    fetchFilms();
  }, []);

  const openModal = (id: string) => {
    setSelectedFilmId(id);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setSelectedFilmId(null);
    setModalIsOpen(false);
  };

  return (
    <div>
      <h1>Ghibli Films</h1>
      <ul>
        {films.map(({ id, title, description }) => (
          id ? ( // Ensure id is defined
          <li key={id} onClick={() => openModal(id)}>
            <h2>{title}</h2>
            <p>{description}</p>
          </li>
          ) : null
        ))}
      </ul>
      <FilmDetailsModal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        filmId={selectedFilmId}
      />
    </div>
  );
};

export default Films;

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Film } from './interfaces/film.interface';
import './FilmDetailsModal.css';

interface FilmDetailsModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
  filmId: string | null;
}

const FilmDetailsModal: React.FC<FilmDetailsModalProps> = ({ isOpen, onRequestClose, filmId }) => {
  const [film, setFilm] = useState<Film | null>(null);
  const [error, setError] = useState<string>('');

  useEffect(() => {
    if (filmId) {
      const fetchFilm = async () => {
        try {
          const { data } = await axios.get(`http://localhost:4000/films/${filmId}`);
          setFilm(data);
        } catch (err) {
          setError('Failed to fetch film details');
        }
      };

      fetchFilm();
    }
  }, [filmId]);

  if (!isOpen) {
    return null;
  }

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        {error && <div>{error}</div>}
        {!error && !film && <div>Loading...</div>}
        {film && (
          <div>
            <h1>{film.title}</h1>
            <p>{film.description}</p>
          </div>
        )}
        <button onClick={onRequestClose}>Close</button>
      </div>
    </div>
  );
};

export default FilmDetailsModal;

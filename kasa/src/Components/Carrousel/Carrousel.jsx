import React, { useState } from 'react';
import './Carrousel.css';
import leftarrow from '@/Assets/Svg/Carrousel/ArrowLeft.svg'; // Importe l'icône de flèche gauche
import rightarrow from '@/Assets/Svg/Carrousel/ArrowRight.svg'; // Importe l'icône de flèche droite

/**
 * Composant de carrousel pour afficher une série d'images.
 * @param {string[]} slides - Un tableau d'URLs des images à afficher dans le carrousel.
 * @returns {JSX.Element} Composant de carrousel.
 */
function Carrousel({ slides }) {
  const [current, setCurrent] = useState(0); // Initialise l'index de l'image à 0

  // Fonction pour passer à l'image précédente
  const prevSlide = () => {
    setCurrent(current === 0 ? slides.length - 1 : current - 1);
  };

  // Fonction pour passer à l'image suivante
  const nextSlide = () => {
    setCurrent(current === slides.length - 1 ? 0 : current + 1);
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null; // Retourne null si aucun diapo n'est disponible
  }

  return (
    <div className='Carrousel'>
      <img className='Slider_img' src={slides[current]} alt='logement' />

      {slides.length > 1 && (
        <>
          <button className='left-arrow' onClick={prevSlide}>
            <img src={leftarrow} alt='prev' />
          </button>
          <button className='right-arrow' onClick={nextSlide}>
            <img src={rightarrow} alt='next' />
          </button>
        </>
      )}

      <p className='counter'>{`${current + 1}/${slides.length}`}</p>
    </div>
  );
}

export default Carrousel;
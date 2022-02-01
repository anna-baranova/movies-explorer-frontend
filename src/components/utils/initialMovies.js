import image1 from '../../images/movie-card.jpg';
import image2 from '../../images/movie-card1.jpg';
import image3 from '../../images/movie-card2.jpg';
import image4 from '../../images/movie-card3.jpg';
import image5 from '../../images/movie-card4.jpg';
import image6 from '../../images/movie-card5.jpg';
import image7 from '../../images/movie-card6.jpg';
import image8 from '../../images/movie-card7.jpg';

const initialMovies = [
  {
    _id: "1",
    name: "33 слова о дизайне",
    duration: 107,
    image: image1,
    isSaved: false,
  },
  {
    _id: "2",
    name: "Киноальманах «100 лет дизайна»",
    duration: 107,
    image: image2,
    isSaved: false,
  },
  {
    _id: "3",
    name: "В погоне за Бенкси",
    duration: 107,
    image: image3,
    isSaved: false,
  },
  {
    _id: "4",
    name: "Баския: Взрыв реальности",
    duration: 107,
    image: image4,
    isSaved: false,
  },
  {
    _id: "5",
    name: "Бег это свобода",
    duration: 107,
    image: image5,
    isSaved: false,
  },
  {
    _id: "6",
    name: "Книготорговцы",
    duration: 107,
    image: image6,
    isSaved: true,
  },
  {
    _id: "7",
    name: "Когда я думаю о Германии ночью",
    duration: 107,
    image: image7,
    isSaved: false,
  },
  {
    _id: "8",
    name: "Gimme Danger: История Игги и The Stooge и что-то там еще",
    duration: 107,
    image: image8,
    isSaved: false,
  },
  {
    _id: "9",
    name: "Дженис: Маленькая девочка грустит",
    duration: 107,
    image: image1,
    isSaved: true,
  },
  {
    _id: "10",
    name: "Соберись перед прыжком",
    duration: 107,
    image: image2,
    isSaved: true,
  },
  {
    _id: "11",
    name: "Пи Джей Харви: A dog called money",
    duration: 107,
    image: image3,
    isSaved: false,
  },
  {
    _id: "12",
    name: "По волнам: Искусство звука в кино",
    duration: 107,
    image: image4,
    isSaved: false,
  },
];

const initialMoviesSaved = initialMovies.filter((movie) => movie.isSaved === true);

export { initialMovies, initialMoviesSaved };
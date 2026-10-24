// Статические импорты из src/assets работают и в dev, и после vite build.
import logo from './assets/logo.png';
import wincooboc from './assets/wincooboc.png';
import yellow from './assets/yellow.png';
import crutoi from './assets/crutoi.png';
import gift from './assets/gift.png';
import pasle from './assets/pasle.png';
import questhion from './assets/questhion.png';
import red from './assets/red.png';
import run from './assets/run.png';

export const artwork = {
  logo,
  wincooboc,
  yellow,
  crutoi,
  gift,
  pasle,
  questhion,
  red,
  run,
};

// Порядок карточек как в десктопном макете: диплом, знания, призы, баллы.
export const benefitArtwork = [wincooboc, pasle, gift, crutoi];

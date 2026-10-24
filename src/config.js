import { artwork } from './assets';

// Общая дата для шапки и таймера. Магнитогорск: UTC+05:00.
export const REGISTRATION_DEADLINE = new Date('2026-11-01T00:00:00+05:00');
export const REGISTRATION_DATE_LABEL = '01.11.2026';

// Замените на реальные адреса перед публикацией.
export const LINKS = {
  account: '',
  registration: '',
  rules: '',
  archive: '',
  history: '',
  qualifying: '',
  final: '',
  vk: '',
  telegram: '',
};

export const CONTACT_ENDPOINT = ''; // Например '/api/contact', когда серверный обработчик готов.

// Логотип подключён из src/assets/logo.png (та же папка, что и остальные картинки).
export const BRAND_LOGO = artwork.logo;

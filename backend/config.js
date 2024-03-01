require('dotenv').config();

const {
  NODE_ENV, JWT_SECRET, PORT = 3000, MONGO_URL_PROD,
} = process.env;
const ALLOWED_CORS = [
  'https://mesto-kybikn.nomoredomains.monster',
  'http://mesto-kybikn.nomoredomains.monster',
  'http://localhost:3000',
  'http://localhost:3001',
  'http://localhost:4000',
  'https://mesto.kybikn.ru',
  'http://mesto.kybikn.ru',
];

module.exports = {
  NODE_ENV, JWT_SECRET, PORT, MONGO_URL_PROD, ALLOWED_CORS,
};

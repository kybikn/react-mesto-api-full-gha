class Auth {
  constructor({ baseUrl, headers }) {
    this._baseUrl = baseUrl;
    this._headers = headers;
    this._loginUrl = `${baseUrl}/signin`;
    this._registerUrl = `${baseUrl}/signup`;
    this._checkTokenUrl = `${baseUrl}/users/me`;
  }

  _handleResponse(response) {
    if (response.ok) {
      // парсит json файл и возвращает js обьект
      return response.json();
    } else {
      // возвращает reject ошибку
      return Promise.reject(
        `Ошибка: ${response.status} ${response.statusText}`
      );
    }
  }

  login = (email, password) => {
    return fetch(this._loginUrl, {
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify({ email, password }),
    }).then(this._handleResponse);
  };

  register = (email, password) => {
    return fetch(this._registerUrl, {
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify({ email, password }),
    }).then(this._handleResponse);
  };

  checkToken = () => {
    return fetch(this._checkTokenUrl, {
      method: 'GET',
      credentials: 'include',
      headers: {
        ...this._headers,
      },
    }).then(this._handleResponse);
  };
  // checkToken = (token) => {
  //   return fetch(this._checkTokenUrl, {
  //     method: 'GET',
  //     credentials: 'include',
  //     headers: {
  //       ...this._headers,
  //       Authorization: `Bearer ${token}`,
  //     },
  //   }).then(this._handleResponse);
  // };
}

// ----- Инстанс класса Auth --------
const auth = new Auth({
  baseUrl: 'https://auth.nomoreparties.co',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});

export default auth;

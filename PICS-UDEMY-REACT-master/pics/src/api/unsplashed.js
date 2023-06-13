import axios from "axios";

// creo una instancia del cliente axios con propiedades por defecto
export default axios.create({
    baseURL:'https://api.unsplash.com',
    headers: {
        Authorization:
          `Client-ID ${process.env.REACT_APP_ACCESS_KEY}`,
      },
    }
)
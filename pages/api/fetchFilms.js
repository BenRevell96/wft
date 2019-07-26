const axios = require('axios')
const key = process.env.MOVIE_DB_KEY

const api_url = 'https://api.themoviedb.org/3'

export default (req, res) => {
  axios
    .get(`${api_url}/discover/movie?api_key=${key}&sort_by=popularity.desc`)
    .then(response => {
      // handle success
      console.log(response.data)
      res.send(response.data)
    })
    .catch(error => {
      // handle error
      console.log(error)
    })
}

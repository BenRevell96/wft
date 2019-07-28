const axios = require('axios')
const key = process.env.MOVIE_DB_KEY

const api_url = 'https://api.themoviedb.org/3'

export default (req, res) => {
  const setMonths = (date, months) => {
    date.setMonth(date.getMonth() + months)
    return date
  }
  const date = setMonths(new Date(), -6)
    .toISOString()
    .split('T')[0]

  axios
    .get(
      `${api_url}/discover/movie?api_key=${key}&vote_count.gte=100&release_date.lte=${date}`
    )
    .then(response => {
      // handle success
      res.send(response.data)
    })
    .catch(error => {
      // handle error
      console.log(error)
    })
}

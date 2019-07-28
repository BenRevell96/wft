const express = require('express')
const next = require('next')
const graphqlHTTP = require('express-graphql')
const { buildSchema } = require('graphql')

const dev = process.env.NODE_ENV !== 'production'
const nextApp = next({ dev })
const handle = nextApp.getRequestHandler()

nextApp
  .prepare()
  .then(() => {
    const app = express()

    // Construct a schema, using GraphQL schema language
    const schema = buildSchema(`
    type Film { 
      adult: Boolean
      id: Int
      overview: String
      popularity: Float
      poster_path: String
      release_date: String
      title: String
      vote_average: Float
      vote_count: Int
    }
    type Query {
      Film: Film
      Films: [Film]
    }
    `)

    // The root provides a resolver function for each API endpoint
    const root = {
      Film: data => data,
      Films: data => data
    }

    app.use(
      '/graphql',
      graphqlHTTP({
        schema: schema,
        rootValue: root,
        graphiql: true
      })
    )

    app.get('*', (req, res) => {
      return handle(req, res)
    })

    app.listen(3000, err => {
      if (err) throw err
      console.log('> Ready on http://localhost:3000')
    })
  })

  .catch(ex => {
    console.error(ex.stack)
    process.exit(1)
  })

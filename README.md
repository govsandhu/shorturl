# Lighthouse URL Shortener

Simple application built with Typescript, TSNode, Postgres, Knex, EJS and Express that allows users to shorten long URLs.

## Dependencies

- Typescript
- TSNode
- Express
- EJS
- Knex
- Postgres
- Nodemon
- Dotenv-Cli
- Path

## Getting Started

- Install all dependencies using the `npm install` command.
- Create a `.env` file in the project root containing your `PG_CONNECTION_STRING`. Adding a `PORT` is optional. View `.env-example` for an example.
- Run migrations with the `npm run migrate` command to create the Urls table.
- Run the project using the `npm run start` command.

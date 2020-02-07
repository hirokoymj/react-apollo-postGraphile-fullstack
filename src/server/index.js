const express = require("express");
const { postgraphile } = require("postgraphile");

const db_user = "";
const db_name = "hiroko";
const db_schema = "forum_example";
const port = process.env.PORT ? process.env.PORT : 3030;

const app = express();

app.use(
  postgraphile(
    process.env.DATABASE_URL ||
      `postgres://${db_user}:@localhost:5432/${db_name}`,
    db_schema,
    {
      watchPg: true,
      graphiql: true,
      enhanceGraphiql: true,
      enableCors: true,
      graphqlRoute: "/graphql",
      graphiqlRoute: "/graphiql"
    }
  )
);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

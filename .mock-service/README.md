## How to start the service?
Make sure you have Docker installed. Then create a new file in the `.mock-service` directory called `.env` and paste in the content from [this link](https://github.com/shecodesvietnam/be-mentorship-v2/blob/release/.env). Start the service by running the following command.

```bash
docker compose -f ./.mock-service/docker-compose.yml up
```

## Monitoring
* Get into the running container's shell.

```bash
docker exec -it postgres bash
```

* Get into the Postgres front-end.

```bash
psql -U postgres
```

* Get into the our database, from where you can run SQL queries.

```bash
\c mentorship
```

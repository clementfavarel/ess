# Use the official PostgreSQL image from Docker Hub
FROM postgres:latest

# Set environment variables for PostgreSQL
ENV POSTGRES_DB=${POSTGRES_DB}
ENV POSTGRES_USER=${POSTGRES_USER}
ENV POSTGRES_PASSWORD=${POSTGRES_PASSWORD}

# Copy initialization scripts into the container
COPY ./init/init.sql /docker-entrypoint-initdb.d/

# Expose the PostgreSQL port
EXPOSE ${DATABASE_PORT}

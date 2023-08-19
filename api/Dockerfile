FROM python:3.9.6

# Copy local code to the container image.
ENV APP_HOME /srv/app
WORKDIR $APP_HOME

# Install production dependencies.
RUN pip install -U pip==23.2.1 setuptools==68.1.2 poetry==1.5.1
COPY pyproject.toml pyproject.toml
COPY poetry.lock poetry.lock

# disable virtualenv, install dependencies in system python
RUN poetry config virtualenvs.create false
RUN poetry install

# Copy local code to the container image.
COPY . .

# Run the web service on container startup.
EXPOSE 8000
CMD exec python -m src.server

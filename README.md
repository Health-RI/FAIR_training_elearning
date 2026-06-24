[![theme badge](https://img.shields.io/badge/ELIXIR%20toolkit%20theme-jekyll-blue?color=0d6efd)](https://github.com/ELIXIR-Belgium/elixir-toolkit-theme)

# FAIR training eLearning 

Repository to host the eLearning material for the FAIR training



# Local Development

## Prerequisites
Install [Docker Desktop](https://www.docker.com/products/docker-desktop/)

## Build and Run

```bash
# Build the Docker image
docker build -t fair-training .

# Run the site
docker run -p 4000:4000 -v $(pwd):/site fair-metroline
```

Open http://localhost:4000 in your browser. The site will automatically reload when you make changes!

To stop: Press `Ctrl+C`
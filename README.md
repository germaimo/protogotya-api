
# GOTYA - API
 
Este repositorio es parte de la aplicación GOTYA y esta construida con Node.js y Express donde a partir de una url local de un archivo .als se pueden obtener los nombres de los canales MIDI y de audio.

Funciona a la par con una app de REACT que se encuentra en el repositorio de protogotya-frontend: [![github](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/germaimo/gotya-frontend)


## Tech Stack

**Server:** Node

**Packages:** Express, Cors


## Local
Antes de ejecutar este componente, asegúrate de tener instaladas las siguientes dependencias:

Node.js (versión 14 o superior)
npm (Node Package Manager)

**Clonar el proyecto**

```bash
  git clone git clone https://github.com/germaimo/protogotya-api.git
```

Go to the project directory

```bash
  cd protogotya-api
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm start
```

### Prerequisitos

La API utiliza archivos ALS para obtener las pistas de audio y MIDI. Asegúrate de tener un archivo ALS válido y colócalo en el mismo directorio que el archivo index.js de la API. El archivo ALS se utiliza para extraer la información de las pistas.


## API Reference

#### Obtener nombres de canales de audio

```http
  GET /audio-tracks
```
Obtiene una lista de nombres de las pistas de audio disponibles en el archivo ALS.


#### Get item

```http
   GET /midi-tracks
```

Obtiene una lista de nombres de las pistas MIDI disponibles en el archivo ALS.
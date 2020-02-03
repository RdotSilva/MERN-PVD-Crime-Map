# MERN Providence Crime Map

Full stack web application that allows users to search their neighborhood and find recently committed crimes.

Users can search by radius to their home address or enter a custom address to see crimes within that area.

Users must register and login to view crime data.

### Prerequisites

You must create a config file with your environment variables.

1. Create a new file: config/config.env

2. Add variables

```
NODE_ENV=YOUR_ENV
PORT=YOUR_PORT

MONGO_URI=YOUR_MONGO_URI

```

## Installation

1. Install dependencies in main project folder.

```
npm install
```

2. Install dependencies in client folder.

```
cd client

npm install
```

## Running the servers

This projects uses concurrently to run the Node and React servers together.

Make sure you are in the project root directory before executing any of these commands.

Start development server.

```
npm run dev
```

Start production server.

```
npm start
```

## Built With

- React
- JavaScript
- NodeJS
- ExpressJS
- MongoDB Atlas
- Geolib
- VSCode

## APIs used

- Google Maps API
- LocationIQ

## Screenshots

![Coming Soon](https://upload.wikimedia.org/wikipedia/commons/8/80/Comingsoon.png "Coming Soon")

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

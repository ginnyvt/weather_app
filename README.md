# Weather app

A front-end application that displays the current and the forecast weather (every 3-hour interval during the upcoming 15 hours) for a given city. A city is provided with name, longitude and latitude information. Weather data is retrieved from OpenWeatherMap service.

## Technologies

1. [Ionic Framework](https://ionicframework.com/)
2. [React](https://react.dev/)
3. [Typescript](https://www.typescriptlang.org/)

## Run locally

Clone the project and make sure you have node, npm installed on your local machine.

```bash
  git@github.com:ginnyvt/weather_app.git
```

Create your IDs in the OpenWeatherMap service and replace your api key in the ./.env

Install dependencies

```bash
  npm install
```

Start the client server.

```bash
  npx ionic server -p 8000
```

Your server will be running at http://localhost:8000

To run test

```bash
  npm run test
```

## Demo

Link to [demo](https://ionic-weather-app.netlify.app/)

## Authors

- [ginnyvt](https://github.com/ginnyvt)

## License

[MIT](https://choosealicense.com/licenses/mit/)

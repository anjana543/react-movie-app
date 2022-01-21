## OVERVIEW

A Movie Listing App!

## LIVE APP DEMO (Check in mobile application)

https://anjana543.github.io/react-movie-app/

## INSTRUCTIONS

1. Clone this repository and install the dependencies using `npm`
2. Runs the app in the development mode using `npm start`

## COMPONENTS

To speed up the time there are several components provided that will help you structure the user interface.

These components are based on the Tailwind CSS - a utility-first CSS framework for rapidly building custom user interfaces.

### TextField

The TextField component serves as a wrapper component for input element.

### GridItem

The GridItem component wraps an image, and title text.

### Loader

The Loader component provides a simple and round spinner loader.

### Image

The Image component provides option to set the image path, alternative text and fallback for broken images.

### ErrorBlock

The ErrorBlock component acts as a wrapper to the api error message.

## Getting Started with the App

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## DATA SCHEMA

### Movie List Api

```json
{
  "page": {
    // Movie Genre
    "title": "Romantic Comedy",
    // Total number of movies available for the genre
    "total-content-items": "10",
    // Requested page number
    "page-num-requested": "1",
    // Expected number of movie items
    "page-size-requested": "5",
    // Actual number of movie items returned
    "page-size-returned": "3",
    "content-items": {
      "content": [
        {
          // Movie title
          "name": "The Birds",
          // Movie poster image
          "poster-image": "poster1.jpg"
        },
        {
          "name": "Rear Window",
          "poster-image": "poster2.jpg"
        },
        {
          "name": "Family Pot",
          "poster-image": "poster3.jpg"
        }
      ]
    }
  }
}
```


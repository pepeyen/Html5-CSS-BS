# cs-tech

## [Live demo](https://pepeyen.github.io/cs-tech)

### tl;dr

 ```
git clone https://github.com/pepeyen/cs-tech.git
cd cs-tech/
npm install
npm start
```

Then open [http://localhost:3000/](http://localhost:3000/) to see your app. The initial structure of your app is setup. You may need to do a few changes to the firebase relaated components, read **Firebase setup** for more.

### Firebase setup

Go to `pages/cart/cart.js` you got to insert your [firebase](https://firebase.google.com/) database name inside the `firebaseDB`

![Tutorial](https://i.imgur.com/H166X8b.png)

Also head to `comp/firestart/Firebase.js` and insert your firebase configuration inside the `firebaseConfig` constant

![Tutorial](https://i.imgur.com/caK0oKo.png)

Now you are ready to use the project, just issue a `npm start` and you're good to go

## About the Project

Academic project as a course e-commerce mock-up.

## Development

Install dependencies:

```sh
npm install
```

```sh
npm start
```

<h1>Search Youtube Videos by Keyword</h1>

<h4>Before running locally:</h4>

* You must have Node Js installed. In case you don't have it installed, go to: https://nodejs.org/en
* You must have Jest installed. After installing Node JS, run the command:
 ```bash
npm install -g jest
```

<h2> Run the Project</h2>

 * Clone the project <a href="https://github.com/julianzp/youtube-get-api.git" target="_blank"></a>.</li>

 * Open the terminal in the directory YOUTUBE-GET-API and execute this command:

 ```bash
node app/index.js
```

The app will run in: <http://localhost:3000>

### Let's explore the API

| METHOD | URL | DESCRIPTION | VALID REQUEST BODY|
| ------ | --- | ----------- | ------------------------- |
| GET    | /api/youtube?search={key_word} | Type the keyword you want to search for in the query parameter| |

### Let's explore the Unit Tests

* There are some run test implemented in the functionality of the HTTP Get method

* Run de command:

 ```bash
npx jest
```
to execute the unit test suites


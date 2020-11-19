# Portfolio with React
<hr>

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

## Description

Its a portfolio built with React.

<!-- ![Image of Webstite](public/assets/images/web.png) -->

### Table of Contents

*[Usage](#usage)

*[Process](#process)

*[License](#license)

*[Contributing](#contributing)

*[Questions](#questions)


## Usage
 
To use this application, run npm start within the app directory.

```bash
npm start
```

## Process

### Creating a React App

To create a react app, open an integrated terminal and run the following code.

```bash
npx create-react-app appName
```

After creating the app, many files and directories will be instantiated.

### App.js

Within return statement in App.js, call components the program may implement to place elements into the DOM.
The routes were also created within the App.js.
*the following code shows neccesarry imports*

```js
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
```
*after getting the import, the pathing can be defined as such*

```js
<Switch>
    <Route exact path="/">
       <Home /> 
    </Route>
    <Route exact path="/portfolio">
      <Portfolio />
    </Route>
    <Route exact path="/contact">
      <Contact />
    </Route>
</Switch>
```

Based on what path had been called, the corresponding page will be rendered.

### Components

There were three main components to this program.
1. Card
2. Navbar
3. Footer

The Navbar and Footer were implemented into the App.js to keep the display of the both elements consistent within each page

#### Card

The Card Component is probably the most complicated of the three components. Card will intake props in order to retrieve information being passed in by its parents. In this particular app, Card was used to display different projects. 

#### Navbar

The Navbar utilized Link from react-router-dom to dynamically change the page based on the link clicked. If Contact were to be clicked, the user would be routed to the url with a /contact without needing to refresh the page.

*the code below shows implementation*
```js
    <Link to = "/$routeName">$routeName<Link>
```

#### Footer

The Footer component simply had the class footer with whatever text desired inside. A style css was implemented to allow the footer to stick to the bottom of the page.

### Pages

Three pages were used in this application:
1. contact.js
2. home.js
3. portfolio.js

Both contact.js and home.js can be built as one would normally build a webpage within HTML.

portfolio.js uses the Card component mentioned above. We can use state and fill elements with a .json file. By using map, elements can be passed into Card to fill out each Card individually.

*the below code shows implementation in this app*

```js
import db from "../repos.json";
class Portfolio extends Component {
    state = {
        db
    };
    render() {
        return (
            <div className="container">
                <h1>Portfolio</h1>
                {this.state.db.map(repo => (
                    <Card
                        id={repo.id}
                        name={repo.name}
                        image={repo.image}
                        link={repo.link}
                    />
                ))}
            </div>
        );
    }
}
```

The id will be passed to Card's prop.id. The name will be passed to Card's prop.name, so on so forth.

## License

This Project is licensed under the MIT License

## Built With:
* [HTML](https://developer.mozilla.org/en-US/docs/Web/HTML)
* [JS](https://developer.mozilla.org/en-US/docs/Web/JS)
* [REACT](https://developer.mozilla.org/en-US/docs/Web/React)
* [BOOTSTRAP](https://developer.mozilla.org/en-US/docs/Web/BootStrap)


## Author(s):
**Brian Lee**
* [GitHub](https://github.com/brianjunhyuplee)
* [LinkedIn](https://www.linkedin.com/in/brian-lee-559208187/)


## Questions

If you have any questions about the repo, open an issue or contact me directly at [brianjunhyuplee@gmail.com](brianjunhyup@gmail.com). You can find more of my work at [brianjunhyuplee](https://github.com/brianjunhyuplee). <img src = "https://avatars3.githubusercontent.com/u/70872311?v=4" width = 20 alt = "github profile picture">
    


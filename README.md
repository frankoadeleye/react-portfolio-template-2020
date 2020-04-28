# RPT2020 ⚡️ [![GitHub](https://img.shields.io/github/license/cobidev/simplefolio?color=blue)](https://github.com/cobidev/simplefolio/blob/master/LICENSE.md) ![GitHub stars](https://img.shields.io/github/stars/cobidev/simplefolio) ![GitHub forks](https://img.shields.io/github/forks/cobidev/simplefolio)

## A minimal portfolio template for Developers!

## Features

⚡️ Modern UI Design with SCSS (Original styling by BradTraversy)
⚡️ SPA: Single Page Application
⚡️ Fully Responsive\
⚡️ Valid HTML5 & CSS3\
⚡️ Navigation with React Router
⚡️ Well organized documentation

To view a demo example, **[click here](https://frankoadeleye.github.io/react-portfolio-template-2020/)**\

---

## Getting Started 🚀

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites 📋

You'll need [Git](https://git-scm.com) and [Node.js](https://nodejs.org/en/download/) (which comes with [NPM](http://npmjs.com)) installed on your computer.

```
node@v10.16.0 or higher
npm@6.9.0 or higher
git@2.17.1 or higher
```

Also, you can use [Yarn](https://yarnpkg.com/) instead/or of NPM ☝️

```
yarn@v1.21.1 or higher
```

---

## How To Use 🔧

From your command line, first clone RPT2020:

```bash
# Clone this repository
$ git clone https://github.com/frankoadeleye/react-portfolio-template-2020.git

# Go into the repository
$ cd react-portfolio-template-2020

# Remove current origin repository
$ git remote remove origin
```

Then you can install the dependencies either using NPM or Yarn:

Using NPM:

```bash
# Install dependencies
$ npm install

# Start development server
$ npm start
```

Using Yarn:

```bash
# Install dependencies
$ yarn

# Start development server
$ yarn start
```

Once your server has started, go to this url it will load automatically (using Yarn) and you will see the website running on a Development Server. If it doesn't load automatically, then go to localhost:3000/ (or your prefered host) manually.

---

## Template Instructions:

### Step 1 - STRUCTURE

Go to `/src/homepage.jsx` and fill your information: Name and links, do the same for contact.jsx, about.jsx, work.jsx.
Also remember to include your resume (CV) and link appropraite in navigation.jsx: just replace the template resume with your own and provide the corret path. That's all!

## Deployment 📦

Once you have done with your setup. You need to put your website online!

You can deploy to github pages. just create a repo, change the name and homepage name in package.json to your new repo name.
Then git add, git commit and then push to your new repo.
Lastly enter:

```bash
  yarn deploy
```

to deploy to production.

## Technologies used 🛠️

- [HTML5](https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5) - Markup language
- [ReactJS](https://reactjs.org/) - JavaScript Framework
- [Sass](https://sass-lang.com/documentation) - CSS extension language
- [React-router](https://reacttraining.com/react-router/web/guides/quick-start) - ReactJS library

## Authors

- **Frank Adeleye (ReactJS framework Version)** - [https://github.com/cobidev](https://github.com/frankoadeleye)
- **Brad Traversy (Original HTML5/CSS/JS Version)** - [https://github.com/bradtraversy](https://github.com/bradtraversy)

## Acknowledgments 🎁

I was motivated to create this react version out of sheer desire to switch from the reciever mentality to a giver/provider mentality, but even those that give recieves, right? We'll all forever be on both sides.
Also thanks to [Brad](https://github.com/bradtraversy) for the original version [modern portfolio](https://github.com/bradtraversy/modern_portfolio) and [Jacobo Martinez](https://github.com/cobidev) for a wonderful way to structure a ReadMe file.

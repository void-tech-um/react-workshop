---
layout: spec
---

# React Workshop

{: .primer-spec-toc-ignore }

Welcome to the React Workshop for the VOID Tech Org at the University of Michigan. The workshop is intended to be a 2 hour workshop that introduces the basics of React and how to use it to build a simple web application. The workshop is intended to be a hands-on workshop, so the members will be following along to build the application themselves.

## Getting Started

Make sure you are in a Unix environment (Mac or Linux). If you are on Windows, you can use the Windows Subsystem for Linux (WSL) to run a Linux environment on your Windows machine. You can find instructions on how to set up WSL [here](https://docs.microsoft.com/en-us/windows/wsl/install-win10).

To get started, you will need to download the starter code for the workshop:

Download and unpack the starter files:

```console
$ pwd
/home/santiagomed/umich/void/workshops
$ mkdir react-workshop
$ cd react-workshop
$ wget https://voidtechmichigan.org/react-workshop/starter_files.tar.gz
$ tar -xvzf starter_files.tar.gz
```

Move the starter files to your project directory and remove the original `starter_files/` directory and tarball.

```console
$ pwd
/home/santiagomed/umich/void/workshops/react-workshop
$ mv starter_files/* .
$ rm -rf starter_files starter_files.tar.gz
```

Your project directory should now look like this:

```console
$ tree
react-workshop/
├── package-lock.json
├── package.json
├── public
│   └── index.html
├── src
│   ├── App.tsx
│   ├── components
│   │   ├── Cart.tsx
│   │   ├── ItemCard.tsx
│   │   ├── ItemFactory.tsx
│   │   └── Market.tsx
│   ├── global
│   │   └── types.ts
│   ├── helper
│   │   └── api.ts
│   ├── index.tsx
│   ├── react-app-env.d.ts
│   └── reportWebVitals.ts
└── tsconfig.json
```

## Installation

Once you have cloned the repository, you will need to install Node.js and the dependencies for the project.

If you already have Node.js installed, use `wget` to install `nvm`, the Node.js version manager. You can check if you have Node.js installed by running `node --version`.

```console
$ node --version
v16.18.0
$ wget -qO- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.2/install.sh | bash
```

Then, use `nvm` to install the latest stable version of Node.js.

```console
$ nvm install --lts
```

If you do not have Node.js installed, you can install it from the [Node.js website](https://nodejs.org/en/). Make sure you install the latest stable version (LTS). As of October 20, 2022, the LTS is v16.18.0. Make sure your installation also includes `npm`, the Node.js package manager.

If you want to install `nvm` to manage your Node.js versions, you can do so through the command below. This is not necessary for the workshop, but it is recommended.

```console
$ node --version
v16.18.0
$ wget -qO- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.2/install.sh | bash
```

Once you have Node.js installed, you can install the dependencies for the project.

```console
$ pwd
/home/santiagomed/umich/void/workshops/react-workshop
$ npm ci
```

## Running the Project

Once you have installed the dependencies, you can start the development server by running the following command in your terminal:

```console
$ npm start
```

This will start the development server and open a new tab in your browser with the application running. Open [http://localhost:3000](http://localhost:3000) to view it in the browser. You can now start editing the code and the browser will automatically reload when you save your changes. You can stop the development server by pressing `Ctrl + C` (Windows) or `Cmd + C` (Mac).

If you haven't made any changes to the code, you should see a blank page with the text "Hello VOID!" in the top left corner of the page. You can now start editing the code to build the application.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn more about React, check out the [React documentation](https://reactjs.org/).

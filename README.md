<div align="center">
<pre>
╔═════════════════════════════════════════════════════════════╗
║                                                             ║
║  ██████ ██████ ██████ ██████ ██████ ██████ ██   ██ ██████   ║
║  ██     ██  ██ ██     ██       ██     ██   ███ ███ ██       ║
║  ████   ██████ ████   ████     ██     ██   ██ █ ██ ████     ║
║  ██     ██ ██  ██     ██       ██     ██   ██   ██ ██       ║
║  ██     ██  ██ ██████ ██████   ██   ██████ ██   ██ ██████   ║
║                                                             ║
║                                                             ║
╚═════════════════════════════════════════════════════════════╝
</pre>
</div>
<p align="center">
	<b><code>❯ FreeTime : A platform to provide information about movies and tv shows With proper User Authentication </code></b>
</p>
<p align="center">
	<!-- Shields.io badges disabled, using skill icons. --></p>
<p align="center">Built with the tools and technologies:</p>
<p align="center">
	<a href="https://skillicons.dev">
		<img src="https://skillicons.dev/icons?i=html,tailwind,express,nodejs,mongodb,react,javascript">
	</a></p>
<br>


![Screenshot 1](https://github.com/xxehacker/FreeTime/blob/main/img/1.png)
![Screenshot 2](https://github.com/xxehacker/FreeTime/blob/main/img/2.png)
![Screenshot 3](https://github.com/xxehacker/FreeTime/blob/main/img/3.png)
![Screenshot 4](https://github.com/xxehacker/FreeTime/blob/main/img/4.png)
![Screenshot 3](https://github.com/xxehacker/FreeTime/blob/main/img/5.png)
![Screenshot 4](https://github.com/xxehacker/FreeTime/blob/main/img/6.png)


##  Project Structure

```sh
└── freetime/
    ├── LICENSE
    ├── README.md
    ├── backend
    │   ├── config
    │   │   ├── envVariables.js
    │   │   └── mongoconnect.js
    │   ├── controllers
    │   │   ├── auth.controller.js
    │   │   ├── movie.controller.js
    │   │   ├── search.controller.js
    │   │   └── tvshow.controller.js
    │   ├── middleware
    │   │   └── protectRoute.js
    │   ├── models
    │   │   └── user.model.js
    │   ├── routes
    │   │   ├── auth.route.js
    │   │   ├── movie.route.js
    │   │   ├── search.route.js
    │   │   └── tvshow.route.js
    │   ├── server.js
    │   ├── services
    │   │   └── tmdb.service.js
    │   └── utils
    │       └── generateToken.js
    ├── frontend
    │   ├── .gitignore
    │   ├── README.md
    │   ├── components.json
    │   ├── eslint.config.js
    │   ├── index.html
    │   ├── jsconfig.json
    │   ├── package-lock.json
    │   ├── package.json
    │   ├── postcss.config.js
    │   ├── public
    │   │   ├── avatar1.png
    │   │   ├── avatar2.jpg
    │   │   ├── avatar3.png
    │   │   ├── hero-vid.m4v
    │   │   ├── video-devices.m4v
    │   │   └── vite.svg
    │   ├── src
    │   │   ├── App.jsx
    │   │   ├── assets
    │   │   │   ├── 404.png
    │   │   │   ├── device-pile.png
    │   │   │   ├── download-icon.gif
    │   │   │   ├── extraction.jpg
    │   │   │   ├── freetime.png
    │   │   │   ├── hero.png
    │   │   │   ├── kids.png
    │   │   │   ├── react.svg
    │   │   │   ├── stranger-things-lg.png
    │   │   │   ├── stranger-things-sm.png
    │   │   │   └── tv.png
    │   │   ├── components
    │   │   │   ├── ContentSlider.jsx
    │   │   │   ├── Footer.jsx
    │   │   │   ├── Navbar.jsx
    │   │   │   └── ui
    │   │   ├── hooks
    │   │   │   └── useFetchTrendingContent.jsx
    │   │   ├── index.css
    │   │   ├── lib
    │   │   │   └── utils.js
    │   │   ├── main.jsx
    │   │   ├── pages
    │   │   │   ├── 404Page.jsx
    │   │   │   ├── LoginPage.jsx
    │   │   │   ├── SignupPage.jsx
    │   │   │   ├── WatchPage.jsx
    │   │   │   └── home
    │   │   ├── store
    │   │   │   ├── authUser.js
    │   │   │   └── content.js
    │   │   └── utils
    │   │       └── constants.js
    │   ├── tailwind.config.js
    │   └── vite.config.js
    ├── package-lock.json
    └── package.json
```

##  Getting Started

###  Prerequisites

Before getting started with freetime, ensure your runtime environment meets the following requirements:

- **Programming Language:** JavaScript
- **Frontend Framework:** React 
- **Backend Framework:** Node.js , Express
- **Database:** MongoDB
- **Package Manager:** Npm
- **Packages:** Tailwind CSS , React Router , ShadCN UI , Zustand , Axios


###  Installation

Install freetime using one of the following methods:

**Build from source:**

1. Clone the freetime repository:
```sh
❯ git clone https://github.com/xxehacker/freetime
```

2. Navigate to the project directory:
```sh
❯ cd freetime
```

3. Install the project dependencies:


**Using `npm`** &nbsp; [<img align="center" src="https://img.shields.io/badge/npm-CB3837.svg?style={badge_style}&logo=npm&logoColor=white" />](https://www.npmjs.com/)

```sh
❯ npm install
```




###  Usage
Run freetime using the following command:
**Using `npm`** &nbsp; [<img align="center" src="https://img.shields.io/badge/npm-CB3837.svg?style={badge_style}&logo=npm&logoColor=white" />](https://www.npmjs.com/)

```sh
❯ npm run dev
```

##  License

This project is protected under the MIT License. For more details, refer to the [LICENSE](https://github.com/xxehacker/freetime/blob/main/LICENSE) file.

---


<p align="center">
  <a href="https://github.com/altaysimsek/shortcutIO">
    <img alt="klima" src="./public/img/klimalogo.png" width="150" />
  </a>
</p>
<p align="center">Basically shows forecast to you</p>

---
## 🔱Purpose

I can say this project is the first express project I have developed. By doing this project, I simply learned how to use and how to use free APIs that i can access on the internet. I experienced how to access the queries and parameters in the address bar and how to take action according to the changes in this project.

**This is not the final version of the project!**


While doing this project, I also learned to use **git** and the basics of how to hide ./node_modules or files I need to store (such as API tokens).When I did it for the first time, I did not know them exactly, so I published them in a different repo, but that repo is hidden.

## 🦄 Run
For use this project , firstly you need to clone this repo then get api tokens from **darkSky** and **mapBox** .After that you need to paste your tokens to **src/utils/key.js** and now you can run your server.
 

	const  darkSkyKey  =  '<your api key>'
    	const  mapBoxKey  =  '<your api key>'
    	module.exports  =  {darkSkyKey,mapBoxKey}

To start server ;

	node src/app.js



## Ekran Görüntüleri

![thumbnail](/public/img/thumbnail.png)


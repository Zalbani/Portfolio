# Project Portfolio

MY personnal portfolio

## Production site

Deploy with Netlify

https://zalbani.dev/

## Getting Started 

1. Create and edit the .env file like this:
```
GOOGLE_AUTH_SECRET = 
GOOGLE_AUTH_ID = 
YOUTUBE_API_KEY = 
DB_User=
DB_Password=
DB_Name=
DB_Port=
DB_Host= 
```

2. Install packages
```yarn install```

3. Launch the app
```yarn start```

### UseFull link
Passeport.js for authentification
http://www.passportjs.org/

Google documentation for YouTube API and auhtentification
https://developers.google.com/docs/api/

Socket.io for like and unlike functions
https://socket.io/

### Prerequisites

- Postgre server for database
- APIs Keys

### Install & launch
To install packages
```yarn install```

To launch the app
```yarn start```

### Add Data into BDD
You have to create new function into
```Quickstart.js``` like  ```getCategories()``` or ```getTopVideos```

Then you have to replace at line ``` 26 - authorize(JSON.parse(content), newFunction);```

Then this script will be executed when you launch the project.

You can before try you're youtube api request there [Youtube API Documentation](https://developers.google.com/youtube/v3/docs/)



## Authors

* **Alexis Lauradoux** - [AlexisLauradoux](https://github.com/AlexisLauradoux)
* **Alban Pierson** - [Zalbani](https://github.com/Zalbani)
* **Romain Jaldorau** - [RomainJaldo](https://github.com/RomainJaldo)
* **Jeremy Fevre** - [D33pLearning](https://github.com/D33pLearning)

Базовая нстройка
    git init
    на сайте https://www.gitignore.io/ - можно настроить гит игнор
в папке server 
    npm init
    в package.json есть строка "main": "index.js", вот и нужно 
    создать такой файл
    npm i express --save
    если нет установить npm i -g nodemon
    и установить npm i -D nodemon
    npm i dotenv body-parser cors
    
    создаеться файл .env в него опрокидуется переменная среды
    nodemon запускает это всё
    
    npm i mongoose
    
    Заметки. Папка handles - нужна для отлова ошибок
    папка models для самой бд
    
    после установки и подулючения дб нужно также запускать
    команду mongod
    
    npm i bcryptjs
    @Использование bcrypt
    
    JSON WEB TOKEN
    npm i jsonwebtoken

Создание стороны клиента
    npx create-react-app client
    
     npm start
        Starts the development server.
    
      npm run build
        Bundles the app into static files for production.
    
      npm test
        Starts the test runner.
    
      npm run eject
        Removes this tool and copies build dependencies, configuration files
        and scripts into the app directory. If you do this, you can’t go back!
    
    We suggest that you begin by typing:
      cd client
      npm start
      
      Изменения: index.js 
        Убрал react dom и оставил только render
        
Создание баш скрипта для запуска двух серверов одновременно
называется start.sh и для линукс прописать
chmod +x start.sh
и запуск ./start.sh

для windows нужен git bush и запуск просто start.sh

- удалить сервера 
netstat -ano | findstr :4000
for /f "tokens=5" %a in ('netstat -aon ^| find ":4000" ^| find "LISTENING"') do taskkill /f /pid %a
for /f "tokens=5" %a in ('netstat -aon ^| find ":3000" ^| find "LISTENING"') do taskkill /f /pid %a

    npm i axios
    
    для редакс
    npm i redux react-redux redux-thunk

утсановить npm i jwt-decode
npm i react-router-dom
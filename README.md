# Barber-Scheduler

Barber Scheduler is a simple Barbershop website made with react where the owner can track appointments and see his stores performances.

TechStack: GoLang, React.js, Gin, Gorm, Axios, PSQL

# Final Product

![Scheduler](https://github.com/kansd1401/Barber-Scheduler/blob/master/screenshots/01.png)

![Popup](https://github.com/kansd1401/Barber-Scheduler/blob/master/screenshots/02.png)

![Contact](https://github.com/kansd1401/Barber-Scheduler/blob/master/screenshots/03.png)

![About](https://github.com/kansd1401/Barber-Scheduler/blob/master/screenshots/04.png)

### Getting Started

 1. First setup Golang on your computer:
    ~~~ sh
    https://golang.org/doc/install
    ~~~

 2. Install dependencies
    ~~~ sh
    $ go get -u github.com/gin-gonic/gin
    $ go get github.com/gin-contrib/cors
    $ go get -u github.com/jinzhu/gorm
    ~~~

  3. Create psql database:
    ~~~ sh
    host     = "localhost"
    user     = "manager"
    password = "password"
    dbname   = "scheduler"
    ~~~

  4. Cd to backend and reset the db:
    ~~~ sh
    $ go run db/db:reset.go 
    ~~~

  5. Run api:
    ~~~ sh
    $ go run main.go 
    ~~~

  6. On a new tab cd to Barber-scheduler/client and install dependencies:
    ~~~ sh
    $ npm i
    ~~~

  7. Run react app:
    ~~~ sh
    $ npm run
    ~~~

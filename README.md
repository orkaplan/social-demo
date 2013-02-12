# A demo for using passport-facebook module for consuming facebook webservices


the demo is based on the example of <a href="https://github.com/jaredhanson/passport-facebook">passport-facebook</a>

the example:
1. uses in memory session, for production consider database or cookie sessions
2. uses <a href="http://github.com/mren/facebook-api">facebook-api</a> module to get user friends
3. uses request to get user's likes
4. stores all user's data and access token in memory
5. delete user's details on logout
6. display list of logged in users on the '/' page

the demo was given on the <a href="http://www.meetup.com/NodeJS-Israel">nodeJS-IL meetup</a>

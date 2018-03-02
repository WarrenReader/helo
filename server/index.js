require('dotenv').config();

const express = require('express')
   , session = require('express-session')
   , massive = require('massive')
   , passport = require('passport')
   , Auth0Strategy = require('passport-auth0');

const {SERVER_PORT
   , CONNECTION_STRING
   , SESSION_SECRET
   , DOMAIN
   , CLIENT_ID
   , CLIENT_SECRET
   , CALLBACK_URL} = process.env;

const app = express();

// massive(CONNECTION_STRING).then(db => {
//    app.set('db', db)
// })

app.use(session({
   secret: SESSION_SECRET,
   resave: false,
   saveUninitialized: true
}))

app.use(passport.initialize());
app.use(passport.session());

passport.use(new Auth0Strategy({
   domain: DOMAIN
   , clientID: CLIENT_ID
   , clientSecret: CLIENT_SECRET
   , callbackURL: CALLBACK_URL
   , scope: 'openid profile'
}, function(accessToken, refreshTocken, extraParams, profile, done) {
   done(null, profile);
   }
))

passport.serializeUser((profile, done) => {
   done(null, profile);
})

passport.deserializeUser((profile, done) => {
   done(null, profile);
})



//ENDPOINTS
app.get('/auth', passport.authenticate('auth0'));
app.get('auth/callback', passport.authenticate('auth0', {
   successRedirect: 'http://localhost:3000'
   , failureRedirect: 'http://localhost:3030'
}))


//SERVER LISTENING
app.listen(SERVER_PORT, () => console.log(`Listening on ${SERVER_PORT}`));
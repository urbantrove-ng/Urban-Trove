const passport = require('passport')
const JwtStrategy = require('passport-jwt').Strategy
const ExtractJwt = require('passport-jwt').ExtractJwt
const GoogleStrategy = require('passport-google-oauth20').Strategy
const User = require('../models/user')
const {jwt_secret,server,allowedOrigin,google_client_id,google_client_secret} = require('../config')
const opts = {}

opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken()
opts.secretOrKey = jwt_secret

passport.use(new JwtStrategy(opts,function(jwt_payload,done){
  User.findOne({id:jwt_payload.id})
  .then(user=>{
    if(user){
     return  done(null,user)
    }else{
     return done(null,false)
    }
  })
  .catch(err=>{
    if(err){
        return done(err,false)
    }
  })
}));
passport.use(new GoogleStrategy({
    clientID:google_client_id,
    clientSecret:google_client_secret,
    callbackURL:`${server}/api/v1/auth/google/callback`
},async function(accessToken,refreshToken,profile,cb){
 try {
    const user = await User.findOne({googleId:profile.id})
    if (user){
     return cb(null,user)
    }else{
    const createdUser = await User.create({
        email:profile.emails[0].value,
        username:profile.displayname,
        role:'user',
        googleId:profile.id
    })
    cb(null,createdUser)
    }
 } catch (error) {
    cb(err,null)
 }
}))

module.exports = passport
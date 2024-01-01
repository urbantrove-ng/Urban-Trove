const passport = require('passport')
const JwtStrategy = require('passport-jwt').Strategy
const ExtractJwt = require('passport-jwt').ExtractJwt
const GoogleStrategy = require('passport-google-oauth20').Strategy
const TwitterStrategy = require('passport-twitter').Strategy
const FacebookStrategy = require('passport-facebook').Strategy
const User = require('../models/user')
const {jwt_secret,server,allowedOrigin,google_client_id,google_client_secret,twitter_client_key,twitter_client_secret,facebook_client_id,facebook_client_secret} = require('../config')
const opts = {}

opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken()
opts.secretOrKey = jwt_secret

passport.use(new JwtStrategy(opts,function(jwt_payload,done){
  User.findOne({_id:jwt_payload._id})
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
    callbackURL:`${allowedOrigin}/auth/google/callback`
},async function(accessToken,refreshToken,profile,cb){
 try {
     const user = await User.findOne({googleId:profile.id})
     if (user){
         return cb(null,user)
        }
        const registeredUserWithEmail = await User.findOne({email:profile.emails[0].value})
       if(registeredUserWithEmail){
        return cb({msg:"User already exists with this email"},null)
       }else{
    const createdUser = await User.create({
        email:profile.emails[0].value,
        username:profile.displayname,
        role:'user',
        googleId:profile.id,
        password:'354856773936-5qqqtduv-dummyunhashedpassword'
    })
    cb(null,createdUser)
    }
 } catch (error) {
    cb(err,null)
 }
}))

passport.use(new TwitterStrategy({
    consumerKey:twitter_client_key,
    consumerSecret:twitter_client_secret,
    callbackURL:`${allowedOrigin}/auth/twitter/callback`,
    includeEmail:true,
},async function(token,tokenSecret,profile,cb){
    try {
        const user = await User.findOne({twitterId:profile.id})
        if (user){
            return cb(null,user)
        }
        const registeredUserWithEmail = await User.findOne({email:profile.emails[0].value})
        if(registeredUserWithEmail){
         return cb({msg:"User already exists with this email"},null)
        }else{
     const createdUser = await User.create({
         email:profile.emails[0].value,
         username:profile.displayname,
         role:'user',
         twitterId:profile.id,
         password:'354856773936-5qqqtduv-dummyunhashedpassword'
     })
     cb(null,createdUser)
     }
    } catch (error) {
        cb(err,null)
    }
}))

passport.use(new FacebookStrategy({
    clientID:facebook_client_id,
    clientSecret:facebook_client_secret,
    callbackURL:`${allowedOrigin}/api/v1/auth/facebook/callback`,
    profileFields:['id','displayName','emails','photos']
},async function(accessToken,refreshToken,profile,cb){
    try {
        const user = await User.findOne({facebookId:profile.id})
        if (user){
            return cb(null,user)
        }
        const registeredUserWithEmail = await User.findOne({email:profile.emails[0].value})
        if(registeredUserWithEmail){
         return cb({msg:"User already exists with this email"},null)
        }else{
     const createdUser = await User.create({
         email:profile.emails[0].value,
         username:profile.displayname,
         role:'user',
         facebookId:profile.id,
         password:'354856773936-5qqqtduv-dummyunhashedpassword'
     })
     cb(null,createdUser)
     }
    } catch (error) {
        cb(err,null)
    }
}))

module.exports = passport
module.exports ={
    port:process.env.PORT || 3000,
    database_uri:process.env.NODE_ENV ==='development'?
    process.env.LOCAL_DB_URI:
    process.env.REMOTE_DB_URI,
    jwt_secret:process.env.JWT_SECRET,
    jwt_expires:process.env.JWT_EXPIRES
}
module.exports ={
    port:process.env.PORT || 3000,
    database_uri:process.env.NODE_ENV ==='development'?
    process.env.LOCAL_DB_URI:
    process.env.REMOTE_DB_URI,
    jwt_secret:process.env.JWT_SECRET,
    jwt_expires:process.env.JWT_EXPIRES,
    allowedOrigin:process.env.NODE_ENV ==='development'?
    process.env.LOCAL_DOMAIN:
    process.env.REMOTE_DOMAIN,
    server:process.env.NODE_ENV ==='development'?
    process.env.LOCAL_SERVER:
    process.env.REMOTE_REMOTE,
    google_client_id:process.env.GOOGLE_CLIENT_ID,
    google_client_secret:process.env.GOOGLE_CLIENT_SECRET
}
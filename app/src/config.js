let API_URL = ["https://api.synko.kunah.fr", "http://localhost:4070"]
const isDevelopment = process.env.NODE_ENV !== "production";

module.exports = {
    API_URL: API_URL[isDevelopment ? 1 : 0]
}
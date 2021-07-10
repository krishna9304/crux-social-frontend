const prod = process.env.NODE_ENV === "production";
module.exports = {
  "process.env.BACKEND_URL": prod
    ? "https://crux-social-api.herokuapp.com"
    : "http://localhost:8080",
};

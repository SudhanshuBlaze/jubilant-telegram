const hotpTotpGenerator = require("hotp-totp-generator");
const axios = require("axios");
const authKey = hotpTotpGenerator.totp({
  key: "skrourkela@gmail.comDPSCHALLENGE",
  T0: 0,
  X: 120,
  algorithm: "sha512",
});

const headers = {
  Authorization: `Basic ${authKey}`,
  "content-type": "application/json",
};

const article = {
  github: "https://github.com/SudhanshuBlaze/jubilant-telegram",
  email: "skrourkela@gmail.com",
  url: "projects/77799676772/locations/us-central1/endpoints/4560466368759070720",
  notes:
    "Predicted MPG: 19.1825542 . I have provided the deployed endpoint name. It can be accessed by creating a reference to the deployed endoint. Please see the short video attached in README.md",
};

axios
  .post(
    "https://dps-challenge.netlify.app/.netlify/functions/api/challenge",
    article,
    { headers }
  )
  .then((response) => console.log(response))
  .catch((err) => console.log(err));

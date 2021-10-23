const hotpTotpGenerator = require("hotp-totp-generator");
const authKey = hotpTotpGenerator.totp({
  key: "skrourkela@gmail.comDPSCHALLENGE",
  T0: 0,
  X: 120,
  algorithm: "sha512",
});

console.log(authKey);
//Basic Password

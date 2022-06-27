const http = require("http");
const ldap = require("ldapjs");

// our user details. Currently it is filled.
const enteredInfo = [
  {
    user: "xyz", //username is - admin
    pass: "abc", //password is - secret
    // loggedIn: false,
  },
];

const app = http.createServer((req, res) => {
  const items = req.url.split("/");
  if (req.method === "POST") {
    req.on("data", (data) => {
      const info = data.toString();
      console.log("Request:", info);
      enteredInfo.pop();
      enteredInfo.push(JSON.parse(info));
      //authentication function is called after getting the info
      if (enteredInfo.length) {
        authenticateDN(
          `uid=${enteredInfo[0].user},ou=system`, //enteredInfo.length - 1
          `${enteredInfo[0].pass}`
        );
      }
    });
  }
  if (req.method === "GET") {
    //&& items[1] === "friends"
    res.writeHead(200, {
      "Content-Type": "application/json",
    });
    res.end(JSON.stringify(enteredInfo));
  }
});

app.listen(5000, () => {
  console.log("server started");
});

function authenticateDN(username, password) {
  // create client
  const client = ldap.createClient({
    url: "ldap://127.0.0.1:10389", //ldap domain
  });
  //   bind - passes credential and if credential is correct we can understand that the connection has been successful
  client.bind(username, password, (err) => {
    if (err) {
      console.log("Error in connection: ", err);
      // enteredInfo[0].loggedIn = false;
    } else {
      console.log("Success");
      // enteredInfo[0].loggedIn = true;
    }
  });
}
// authenticateDN(
//   `uid=${enteredInfo[enteredInfo.length - 1].user},ou=system`,
//   `${enteredInfo[enteredInfo.length - 1].pass}`
// );
// enteredInfo.pop()
// console.log(enteredInfo);

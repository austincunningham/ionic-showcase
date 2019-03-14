let config = {
  "version": 1,
  "namespace": "voyager",
  "clientId": "voyager-ionic-example",
  "services": [
    {
      "id": "security",
      "name": "security",
      "type": "security",
      "url": "https://localhost:3000/api/init",
      "config": {
        "mobile-security-server-url": "https://localhost:3000/api/init"

      }
    }
  ]
};

module.exports = config;

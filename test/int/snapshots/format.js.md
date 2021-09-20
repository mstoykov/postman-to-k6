# Snapshot report for `test/int/format.js`

The actual snapshot is saved in `format.js.snap`.

Generated by [AVA](https://ava.li).

## v1

> Snapshot 1

    `// Auto-generated by the postman-to-k6 converter␊
    ␊
    import "./libs/shim/core.js";␊
    import URI from "./libs/urijs.js";␊
    import { group } from "k6";␊
    ␊
    export let options = { maxRedirects: 4 };␊
    ␊
    const Request = Symbol.for("request");␊
    postman[Symbol.for("initial")]({␊
      options␊
    });␊
    ␊
    export default function() {␊
      group("Test Folder 1", function() {␊
        group("Test Folder 2", function() {␊
          postman[Request]({␊
            name: "Test Request 2",␊
            method: "POST",␊
            address: "http://2.example.com/",␊
            data: {␊
              search: "puppies"␊
            },␊
            auth(config, Var) {␊
              const address = new URI(config.address);␊
              address.username("user456");␊
              address.password("secret2");␊
              config.address = address.toString();␊
              config.options.auth = "digest";␊
            }␊
          });␊
        });␊
      });␊
    ␊
      group("Test Folder 3", function() {␊
        postman[Request]({␊
          name: "Test Request 3",␊
          method: "DELETE",␊
          address: "http://3.example.com/?type=cockroach&id=roach7",␊
          pre() {␊
            // Prepare for request␊
          },␊
          post(response) {␊
            // Test response␊
          }␊
        });␊
      });␊
    ␊
      postman[Request]({␊
        name: "Test Request 1",␊
        method: "GET",␊
        address: "http://1.example.com/?search=kittens",␊
        headers: {␊
          Session: "abc123"␊
        },␊
        auth(config, Var) {␊
          const address = new URI(config.address);␊
          address.username("user123");␊
          address.password("secret");␊
          config.address = address.toString();␊
          config.options.auth = "basic";␊
        }␊
      });␊
    }␊
    `

## v2

> Snapshot 1

    `// Auto-generated by the postman-to-k6 converter␊
    ␊
    import "./libs/shim/core.js";␊
    import URI from "./libs/urijs.js";␊
    import { group } from "k6";␊
    ␊
    export let options = { maxRedirects: 4 };␊
    ␊
    const Request = Symbol.for("request");␊
    postman[Symbol.for("initial")]({␊
      options␊
    });␊
    ␊
    export default function() {␊
      group("Test Folder 1", function() {␊
        group("Test Folder 2", function() {␊
          postman[Request]({␊
            name: "Test Request 2",␊
            method: "POST",␊
            address: "http://2.example.com/",␊
            data: {␊
              search: "puppies"␊
            },␊
            auth(config, Var) {␊
              const address = new URI(config.address);␊
              address.username("user456");␊
              address.password("secret2");␊
              config.address = address.toString();␊
              config.options.auth = "digest";␊
            }␊
          });␊
        });␊
      });␊
    ␊
      group("Test Folder 3", function() {␊
        postman[Request]({␊
          name: "Test Request 3",␊
          method: "DELETE",␊
          address: "http://3.example.com/?type=cockroach&id=roach7",␊
          pre() {␊
            // Prepare for request␊
          },␊
          post(response) {␊
            // Test response␊
          }␊
        });␊
      });␊
    ␊
      postman[Request]({␊
        name: "Test Request 1",␊
        method: "GET",␊
        address: "http://1.example.com/?search=kittens",␊
        headers: {␊
          Session: "abc123"␊
        },␊
        auth(config, Var) {␊
          const address = new URI(config.address);␊
          address.username("user123");␊
          address.password("secret");␊
          config.address = address.toString();␊
          config.options.auth = "basic";␊
        }␊
      });␊
    }␊
    `

## v2.1

> Snapshot 1

    `// Auto-generated by the postman-to-k6 converter␊
    ␊
    import "./libs/shim/core.js";␊
    import URI from "./libs/urijs.js";␊
    import { group } from "k6";␊
    ␊
    export let options = { maxRedirects: 4 };␊
    ␊
    const Request = Symbol.for("request");␊
    postman[Symbol.for("initial")]({␊
      options␊
    });␊
    ␊
    export default function() {␊
      group("Test Folder 1", function() {␊
        group("Test Folder 2", function() {␊
          postman[Request]({␊
            name: "Test Request 2",␊
            method: "POST",␊
            address: "http://2.example.com/",␊
            data: {␊
              search: "puppies"␊
            },␊
            auth(config, Var) {␊
              const address = new URI(config.address);␊
              address.username("user456");␊
              address.password("secret2");␊
              config.address = address.toString();␊
              config.options.auth = "digest";␊
            }␊
          });␊
        });␊
      });␊
    ␊
      group("Test Folder 3", function() {␊
        postman[Request]({␊
          name: "Test Request 3",␊
          method: "DELETE",␊
          address: "http://3.example.com/?type=cockroach&id=roach7",␊
          pre() {␊
            // Prepare for request␊
          },␊
          post(response) {␊
            // Test response␊
          }␊
        });␊
      });␊
    ␊
      postman[Request]({␊
        name: "Test Request 1",␊
        method: "GET",␊
        address:␊
          "http://1.example.com/?search=kittens&postId={{postId}}&orderby=lastAction%20asc",␊
        headers: {␊
          Session: "abc123"␊
        },␊
        auth(config, Var) {␊
          const address = new URI(config.address);␊
          address.username("user123");␊
          address.password("secret");␊
          config.address = address.toString();␊
          config.options.auth = "basic";␊
        }␊
      });␊
    }␊
    `
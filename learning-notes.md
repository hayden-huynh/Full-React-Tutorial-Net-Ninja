# Creating a React App

```
npx create-react-app <project name>
```

- As `npx` is part of Node.js so it should be installed

# React Components and Templates

- Each React component is equivalent to a UI compoment (e.g. nav bar, side column, main body) and consists of the Template and the Logic for that component.
- `App.js` is an example of a React component, which is actually a JS function returning its UI template written in JSX.
- `App.js` is usually the root component - the first component to be rendered by React and sits at the top of the component tree

# JSON Server

- JSON server will take in a JSON file and produce endpoints based on the top-level resources (top-level properties) that we can access as if they were RESTful APIs.
- To run the JSON server, first create the JSON file storing data and then run the command:
  ```
  npx json-server --watch <path to JSON file> --port 8000
  ```
  - Initially, the server will try to listen on port 3000. If that port is occupied, it will listen on the port we specify here.
  - Example:
    ```
    npx json-server --watch data/db.json --port 8000
    ```


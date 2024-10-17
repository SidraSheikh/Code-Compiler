import React from "react";
import Navbar from "./Navbar2";
import "./React.css";
import Footer from "./Footer";

function ReactPage() {

  return (
    <div className="bg-image">
      <Navbar />
      <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-md-8">
            <div className="tutorial-section bg-light p-4 rounded shadow-sm">
              <h1 className="mb-4">React.js Tutorial</h1>
              <p>
                React is a JavaScript library for building user interfaces. It
                is maintained by Facebook and a community of individual
                developers and companies. React can be used as a base in the
                development of single-page or mobile applications, as it is
                optimal for fetching rapidly changing data that needs to be
                recorded.
              </p>

              <h2 className="mt-4">What is React?</h2>
              <p>
                React allows developers to create large web applications that
                can change data, without reloading the page. Its main goal is to
                be fast, scalable, and simple. React achieves this by breaking
                each UI into a collection of components. Components are
                reusable, independent pieces of code that serve as the building
                blocks of React applications.
              </p>

              <h2 className="mt-4">Basic React Syntax</h2>
              <p>
                A basic React component to display "Hello, World!" is shown
                below:
              </p>
              <pre className="bg-dark text-white p-3 rounded">
                {`import React from 'react';

function HelloWorld() {
  return <h1>Hello, World!</h1>;
}

export default HelloWorld;`}
              </pre>

              <h2 className="mt-4">Common React Concepts</h2>
              <ul>
                <li>
                  <code>Components</code> - Reusable, independent pieces of code
                </li>
                <li>
                  <code>Props</code> - Short for properties, used to pass data
                  from parent to child components
                </li>
                <li>
                  <code>State</code> - Local state managed within a component
                </li>
                <li>
                  <code>Lifecycle Methods</code> - Methods that are
                  automatically called at different stages of a component's life
                </li>
                <li>
                  <code>React Hooks</code> - Functions that let you use state
                  and other React features without writing a class
                </li>
              </ul>

              <h2 className="mt-4">Example: React Component</h2>
              <p>Here is an example of a simple React component:</p>
              <pre className="bg-dark text-white p-3 rounded">
                {`import React from 'react';

function Greet(props) {
  return <h1>Hello, {props.name}!</h1>;
}

export default Greet;`}
              </pre>

              <h2 className="mt-4">Example: React Hook</h2>
              <p>The following example demonstrates the useState hook:</p>
              <pre className="bg-dark text-white p-3 rounded">
                {`import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}

export default Counter;`}
              </pre>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default ReactPage;

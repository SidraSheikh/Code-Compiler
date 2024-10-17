import React from "react";
import Navbar from "./Navbar2";
import "./Python.css";
import { useNavigate } from "react-router-dom";
import Footer from "./Footer";

function Python() {
  const navigate = useNavigate();

  const handleTryYourself = () => {
    navigate("/editorScreen", {
      state: {
        language: "python",
        code: `print("Hello, World!")`
      }
    });
  };

  return (
    <div className="bg-image">
      <Navbar />
      <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-md-8">
            <div className="tutorial-section bg-light p-4 rounded shadow-sm">
              <h1 className="mb-4">Python Tutorial</h1>
              <p>
                Python is a versatile, easy-to-read programming language. It is
                widely used in web development, data science, artificial
                intelligence, and more.
              </p>

              <h2 className="mt-4">What is Python?</h2>
              <p>
                Python is an interpreted, high-level, general-purpose
                programming language. It emphasizes code readability and allows
                developers to express concepts in fewer lines of code compared
                to other programming languages.
              </p>

              <h2 className="mt-4">Basic Python Syntax</h2>
              <p>
                A basic Python statement to display "Hello, World!" is shown
                below:
              </p>
              <pre className="bg-dark text-white p-3 rounded">
                {`print("Hello, World!")`}
              </pre>

              <h2 className="mt-4">Common Python Operations</h2>
              <ul>
                <li>
                  <code>Variables</code> - Used to store data values
                </li>
                <li>
                  <code>Functions</code> - Blocks of reusable code designed to
                  perform a specific task
                </li>
                <li>
                  <code>Conditional Statements</code> - Used to execute
                  different actions based on different conditions
                </li>
                <li>
                  <code>Loops</code> - Used to iterate over a sequence of
                  elements
                </li>
                <li>
                  <code>Lists</code> - Ordered and mutable collections of items
                </li>
                <li>
                  <code>Dictionaries</code> - Unordered and mutable collections
                  of key-value pairs
                </li>
              </ul>

              <h2 className="mt-4">Example: Python Function</h2>
              <p>Here is an example of a Python function:</p>
              <pre className="bg-dark text-white p-3 rounded">
                {`def greet(name):
    return "Hello, " + name

print(greet("John"))`}
              </pre>

              <h2 className="mt-4">Example: Python Loop</h2>
              <p>The following example demonstrates a Python loop:</p>
              <pre className="bg-dark text-white p-3 rounded">
                {`for i in range(5):
    print(i)`}
              </pre>

              <button
                onClick={handleTryYourself}
                className="btn btn-primary btn-lg"
              >
                Try Yourself
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Python;

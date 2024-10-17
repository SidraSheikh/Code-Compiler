import React from "react";
import Navbar from "./Navbar2";
import { useNavigate } from "react-router-dom";
import "./Javascript.css";
import Footer from "./Footer";

function JavaScript() {
  const navigate = useNavigate();

  const handleTryYourself = () => {
    navigate("/editorScreen", {
      state: {
        language: "html",
        code: `
<!DOCTYPE html>
<html>
<body>

<h1>JavaScript Arithmetic</h1>
<h2>The * Operator</h2>

<p id="demo"></p>

<script>
let x = 5;
let y = 2;
let z = x * y;
document.getElementById("demo").innerHTML = z;
</script>

</body>
</html>`
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
              <h1 className="mb-4">JavaScript Tutorial</h1>
              <p>JavaScript is the programming language of the Web.</p>
              <p>JavaScript can update and change both HTML and CSS.</p>
              <p>JavaScript can calculate, manipulate, and validate data.</p>

              <h2 className="mt-4">What is JavaScript?</h2>
              <p>
                JavaScript is a programming language commonly used to create
                interactive effects within web browsers.
              </p>

              <h2 className="mt-4">Basic JavaScript Syntax</h2>
              <p>
                A basic JavaScript statement to display "Hello World" is shown
                below:
              </p>
              <pre className="bg-dark text-white p-3 rounded">
                {`<script>
  document.getElementById("demo").innerHTML = "Hello World!";
</script>`}
              </pre>
              <p>
                The <code>document.getElementById("demo").innerHTML</code>{" "}
                statement changes the content of the HTML element with
                id="demo".
              </p>

              <h2 className="mt-4">Common JavaScript Operations</h2>
              <ul>
                <li>
                  <code>Variables</code> - Used to store data values
                </li>
                <li>
                  <code>Functions</code> - Blocks of code designed to perform a
                  particular task
                </li>
                <li>
                  <code>Events</code> - Things that happen to HTML elements
                </li>
                <li>
                  <code>Conditions</code> - Used to perform different actions
                  based on different conditions
                </li>
              </ul>

              <h2 className="mt-4">Example: JavaScript Function</h2>
              <p>Here is an example of a JavaScript function:</p>
              <pre className="bg-dark text-white p-3 rounded">
                {`function myFunction() {
  document.getElementById("demo").innerHTML = "Paragraph changed.";
}`}
              </pre>

              <h2 className="mt-4">Example: Adding Two Numbers</h2>
              <p>
                The following example demonstrates adding two numbers in
                JavaScript:
              </p>
              <pre className="bg-dark text-white p-3 rounded">
                {`<script>
  var x = 5;
  var y = 6;
  var z = x + y;
  document.getElementById("demo").innerHTML = z;
</script>`}
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

export default JavaScript;

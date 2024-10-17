import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar2";
import Footer from "./Footer";
import "./css.css";

function Csspage() {
  const navigate = useNavigate();

  const cssCode = `
     <!DOCTYPE html>
<html>
<head>
<style>
body {
  background-color: lightblue;
}

h1 {
  color: white;
  text-align: center;
}

p {
  font-family: verdana;
  font-size: 20px;
}
</style>
  <title>My First HTML Page</title>
</head>
<body>

<h1>Hello, World!</h1>
<p>This is my first HTML page.</p>

</body>
</html>`;

  const handleTryYourself = () => {
    navigate("/editorScreen", { state: { language: "css", code: cssCode } });
  };

  return (
    <div className="bg-image">
      <Navbar />
      <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-md-8">
            <div className="tutorial-section bg-light p-4 rounded shadow-sm">
              <h1 className="mb-4">CSS Tutorial</h1>
              <p>
                CSS stands for Cascading Style Sheets. It describes how HTML
                elements are to be displayed on screen, paper, or in other
                media.
              </p>
              <p>
                CSS saves a lot of work. It can control the layout of multiple
                web pages all at once.
              </p>

              <h2 className="mt-4">What is CSS?</h2>
              <p>
                CSS is a language that describes the style of an HTML document.
                CSS describes how HTML elements should be displayed.
              </p>

              <h2 className="mt-4">Basic CSS Syntax</h2>
              <p>
                A CSS rule-set consists of a selector and a declaration block.
              </p>
              <pre className="bg-dark text-white p-3 rounded">
                {`selector {
  property: value;
}`}
              </pre>
              <p>
                The selector points to the HTML element you want to style. The
                declaration block contains one or more declarations separated by
                semicolons. Each declaration includes a CSS property name and a
                value, separated by a colon.
              </p>

              <h2 className="mt-4">Example: Styling a Paragraph</h2>
              <p>Here is an example of CSS to style a paragraph:</p>
              <pre className="bg-dark text-white p-3 rounded">
                {`p {
  color: red;
  text-align: center;
}`}
              </pre>

              <h2 className="mt-4">Common CSS Properties</h2>
              <ul>
                <li>
                  <code>color</code> - Sets the color of the text
                </li>
                <li>
                  <code>font-family</code> - Specifies the font for the text
                </li>
                <li>
                  <code>font-size</code> - Sets the size of the font
                </li>
                <li>
                  <code>background-color</code> - Sets the background color of
                  an element
                </li>
                <li>
                  <code>margin</code> - Sets the margin area on all four sides
                  of an element
                </li>
                <li>
                  <code>padding</code> - Sets the padding area on all four sides
                  of an element
                </li>
                <li>
                  <code>border</code> - Sets the border around an element
                </li>
              </ul>

              <h2 className="mt-4">Example: My First CSS</h2>
              <p>Below is a simple example of a CSS file:</p>
              <pre className="bg-dark text-white p-3 rounded">
                {`body {
  background-color: lightblue;
}

h1 {
  color: navy;
  margin-left: 20px;
}`}
              </pre>

              <button
                onClick={handleTryYourself}
                className="btn btn-primary btn-lg"
              >
                Try Yourself in Code Editor
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Csspage;

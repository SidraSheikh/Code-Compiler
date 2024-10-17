import React from "react";
import Navbar from "./Navbar2";
import "./HTML.css";
import { useNavigate } from "react-router-dom";
import Footer from "./Footer";

function HTMLPAGE() {
  const navigate = useNavigate();

  const handleTryYourself = () => {
    navigate("/editorScreen", {
      state: {
        language: "html",
        code: `<!DOCTYPE html>
<html>
<head>
  <title>My First HTML Page</title>
</head>
<body>

<h1>Hello, World!</h1>
<p>This is my first HTML page.</p>

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
              <h1 className="mb-4">HTML Tutorial</h1>
              <p>
                HTML is the standard markup language for creating Web pages. It
                stands for HyperText Markup Language.
              </p>
              <p>
                With HTML you can create your own Website. HTML is easy to learn
                - You will enjoy it!
              </p>

              <h2 className="mt-4">What is HTML?</h2>
              <p>
                HTML is the standard markup language for creating Web pages. It
                describes the structure of a Web page and consists of a series
                of elements.
              </p>
              <p>
                HTML elements tell the browser how to display the content. The
                elements label pieces of content such as "this is a heading",
                "this is a paragraph", "this is a link", etc.
              </p>

              <h2 className="mt-4">Basic HTML Tags</h2>
              <ul>
                <li>
                  <code>&lt;!DOCTYPE html&gt;</code> - Defines the document type
                </li>
                <li>
                  <code>&lt;html&gt;</code> - The root element of an HTML page
                </li>
                <li>
                  <code>&lt;head&gt;</code> - Contains meta-information about
                  the HTML document
                </li>
                <li>
                  <code>&lt;title&gt;</code> - Sets the title of the HTML
                  document
                </li>
                <li>
                  <code>&lt;body&gt;</code> - Contains the visible page content
                </li>
                <li>
                  <code>&lt;h1&gt; to &lt;h6&gt;</code> - Defines HTML headings
                </li>
                <li>
                  <code>&lt;p&gt;</code> - Defines a paragraph
                </li>
                <li>
                  <code>&lt;a&gt;</code> - Defines a hyperlink
                </li>
                <li>
                  <code>&lt;img&gt;</code> - Embeds an image
                </li>
              </ul>

              <h2 className="mt-4">Structure of an HTML Document</h2>
              <pre className="bg-dark text-white p-3 rounded">
                {`<!DOCTYPE html>
<html>
<head>
  <title>Page Title</title>
</head>
<body>

<h1>This is a Heading</h1>
<p>This is a paragraph.</p>
<a href="https://www.example.com">This is a link</a>

</body>
</html>`}
              </pre>

              <h2 className="mt-4">Example: My First HTML Page</h2>
              <p>Below is a simple example of an HTML page:</p>
              <pre className="bg-dark text-white p-3 rounded">
                {`<!DOCTYPE html>
<html>
<head>
  <title>My First HTML Page</title>
</head>
<body>

<h1>Hello, World!</h1>
<p>This is my first HTML page.</p>

</body>
</html>`}
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

export default HTMLPAGE;

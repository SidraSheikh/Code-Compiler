import React from "react";
import Navbar from "./Navbar2";
import "./Cpp.css";
import Footer from "./Footer";

function Cpp() {
  
  return (
    <div className="bg-image">
      <Navbar />
      <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-md-8">
            <div className="tutorial-section bg-light p-4 rounded shadow-sm">
              <h1 className="mb-4">C++ Programming Tutorial</h1>
              <p>
                C++ is a general-purpose programming language created as an
                extension of the C programming language. It is widely used for
                system/application software, game development, drivers,
                client-server applications, and embedded firmware.
              </p>

              <h2 className="mt-4">What is C++?</h2>
              <p>
                C++ is a statically-typed, free-form, multi-paradigm, compiled,
                general-purpose programming language. It provides facilities for
                low-level memory manipulation and is designed with a bias toward
                system programming and embedded, resource-constrained software
                and large systems, with performance, efficiency, and flexibility
                of use as its design highlights.
              </p>

              <h2 className="mt-4">Basic C++ Syntax</h2>
              <p>
                A basic C++ program to display "Hello, World!" is shown below:
              </p>
              <pre className="bg-dark text-white p-3 rounded">
                {`#include <iostream>

int main() {
    std::cout << "Hello, World!" << std::endl;
    return 0;
}`}
              </pre>

              <h2 className="mt-4">Common C++ Operations</h2>
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
                  <code>Loops</code> - Used to execute a block of code
                  repeatedly
                </li>
                <li>
                  <code>Arrays</code> - Collections of elements of the same type
                </li>
                <li>
                  <code>Classes and Objects</code> - Fundamental building blocks
                  of C++ programs
                </li>
              </ul>

              <h2 className="mt-4">Example: C++ Function</h2>
              <p>Here is an example of a C++ function:</p>
              <pre className="bg-dark text-white p-3 rounded">
                {`#include <iostream>

void greet() {
    std::cout << "Hello, World!" << std::endl;
}

int main() {
    greet();
    return 0;
}`}
              </pre>

              <h2 className="mt-4">Example: C++ Loop</h2>
              <p>The following example demonstrates a C++ loop:</p>
              <pre className="bg-dark text-white p-3 rounded">
                {`#include <iostream>

int main() {
    for(int i = 0; i < 5; i++) {
        std::cout << i << std::endl;
    }
    return 0;
}`}
              </pre>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Cpp;

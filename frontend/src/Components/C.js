import React from "react";
import Navbar from "./Navbar2";
import "./C.css";
import Footer from "./Footer";

function C() {

  return (
    <div className="bg-image">
      <Navbar />
      <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-md-8">
            <div className="tutorial-section bg-light p-4 rounded shadow-sm">
              <h1 className="mb-4">C Programming Tutorial</h1>
              <p>
                C is a general-purpose programming language that was developed
                in the early 1970s. It is a procedural language with a static
                type system, designed for system programming such as operating
                system development and software development for embedded
                systems.
              </p>

              <h2 className="mt-4">What is C?</h2>
              <p>
                C is often called the mother of all programming languages
                because many other programming languages, such as C++, Java, and
                Python, have their roots in C. It provides low-level access to
                memory and has minimal runtime support, making it suitable for
                systems programming where performance is critical.
              </p>

              <h2 className="mt-4">Basic C Syntax</h2>
              <p>
                A basic C program to display "Hello, World!" is shown below:
              </p>
              <pre className="bg-dark text-white p-3 rounded">
                {`#include <stdio.h>

int main() {
    printf("Hello, World!\\n");
    return 0;
}`}
              </pre>

              <h2 className="mt-4">Common C Operations</h2>
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
                  <code>Pointers</code> - Variables that store memory addresses
                </li>
              </ul>

              <h2 className="mt-4">Example: C Function</h2>
              <p>Here is an example of a C function:</p>
              <pre className="bg-dark text-white p-3 rounded">
                {`#include <stdio.h>

void greet() {
    printf("Hello, World!\\n");
}

int main() {
    greet();
    return 0;
}`}
              </pre>

              <h2 className="mt-4">Example: C Loop</h2>
              <p>The following example demonstrates a C loop:</p>
              <pre className="bg-dark text-white p-3 rounded">
                {`#include <stdio.h>

int main() {
    int i;
    for(i = 0; i < 5; i++) {
        printf("%d\\n", i);
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

export default C;

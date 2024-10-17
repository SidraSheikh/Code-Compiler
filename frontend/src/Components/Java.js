import React from "react";
import Navbar from "./Navbar2";
import "./Java.css";
import Footer from "./Footer";

function Java() {
  return (
    <div className="bg-image">
      <Navbar />
      <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-md-8">
            <div className="tutorial-section bg-light p-4 rounded shadow-sm">
              <h1 className="mb-4">Java Programming Tutorial</h1>
              <p>
                Java is a high-level, class-based, object-oriented programming
                language that is designed to have as few implementation
                dependencies as possible. It is widely used for developing
                mobile applications, web applications, desktop applications, and
                large systems.
              </p>

              <h2 className="mt-4">What is Java?</h2>
              <p>
                Java is known for its "write once, run anywhere" philosophy,
                which means that Java code can run on any device that supports
                Java without the need for recompilation. It is
                platform-independent and offers automatic memory management
                through garbage collection.
              </p>

              <h2 className="mt-4">Basic Java Syntax</h2>
              <p>
                A basic Java program to display "Hello, World!" is shown below:
              </p>
              <pre className="bg-dark text-white p-3 rounded">
                {`public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`}
              </pre>

              <h2 className="mt-4">Common Java Operations</h2>
              <ul>
                <li>
                  <code>Variables</code> - Used to store data values
                </li>
                <li>
                  <code>Methods</code> - Functions that are part of a class
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
                  of Java programs
                </li>
              </ul>

              <h2 className="mt-4">Example: Java Method</h2>
              <p>Here is an example of a Java method:</p>
              <pre className="bg-dark text-white p-3 rounded">
                {`public class Main {
    static void greet() {
        System.out.println("Hello, World!");
    }

    public static void main(String[] args) {
        greet();
    }
}`}
              </pre>

              <h2 className="mt-4">Example: Java Loop</h2>
              <p>The following example demonstrates a Java loop:</p>
              <pre className="bg-dark text-white p-3 rounded">
                {`public class Main {
    public static void main(String[] args) {
        for(int i = 0; i < 5; i++) {
            System.out.println(i);
        }
    }
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

export default Java;

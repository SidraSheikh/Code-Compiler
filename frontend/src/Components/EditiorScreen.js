import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "./Navbar2";
import Footer from "./Footer";
import "./EditorScreen.css";
import axios from "axios";

function EditorScreen() {
  const location = useLocation();
  const { language, code } = location.state || { language: "text", code: "" };

  const [editorLanguage, setEditorLanguage] = useState(language);
  const [editorCode, setEditorCode] = useState(code);
  const [output, setOutput] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    if (location.state) {
      setEditorLanguage(location.state.language);
      setEditorCode(location.state.code);
    }
  }, [location.state]);

  const handleCodeChange = (event) => {
    setEditorCode(event.target.value);
  };

  const handleRunCode = async () => {
    setLoading(true);
    setError("");

    try {
      const response = await axios.post(
        "http://localhost:5000/execute",
        {
          language: editorLanguage,
          code: editorCode
        },
        {
          headers: {
            "Content-Type": "application/json"
          }
        }
      );
      setOutput(response.data.output);
    } catch (error) {
      setError(`Error: ${error.message}`);
      console.error("Execution Error:", error); 
    } finally {
      setLoading(false);
    }
  };
   function renderOutput() {
     if (["python"].includes(editorLanguage)) {
       return <pre>{output}</pre>;
     } else {
       return (
         <iframe
           srcDoc={`<pre>${output}</pre>`}
           style={{ width: "100%", height: "400px" }}
           title="Output"
         />
       );
     }
   }


  return (
    <div className="bg-image">
      <Navbar />
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-6">
            <div className="editor-section bg-light p-4 rounded shadow-sm">
              <h1 className="mb-4">Code Editor</h1>
              <p>Language: {editorLanguage}</p>
              <textarea
                className="code-editor bg-dark text-white p-3 rounded"
                value={editorCode}
                onChange={handleCodeChange}
                rows={20}
              />
              <button
                onClick={handleRunCode}
                className="btn btn-primary btn-lg mt-3"
                disabled={loading}
              >
                {loading ? "Running..." : "Run Code"}
              </button>
              {error && <div className="alert alert-danger mt-3">{error}</div>}
            </div>
          </div>
          <div className="col-md-6">
            <div className="output-section bg-light p-4 rounded shadow-sm">
              <h1 className="mb-4">Output</h1>
              {renderOutput()}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default EditorScreen;

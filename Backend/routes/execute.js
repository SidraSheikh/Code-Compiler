const { PythonShell } = require("python-shell");
const express = require("express");
const router = express.Router();
const fs = require("fs");
const path = require("path");
const { exec,spawn } = require("child_process");
const { Script } = require("vm");

router.post("/", async (req, res) => {
  const { language, code } = req.body;

  if (!language || !code) {
    return res
      .status(400)
      .send({ output: "Language and code are required fields." });
  }

  try {
    switch (language.toLowerCase()) {
      case "html":
        res.send({ output: code });
        break;
      case "css":
        res.send({ output: `<style>${code}</style>` });
        break;
      case "javascript":
        executeJavaScriptCode(code, res);
        break;
      case "python":
        executePythonCode(code, res);
        break;
      default:
        res.send({ output: "Language not supported." });
    }
  } catch (error) {
    res.status(500).send({ output: `Server error: ${error.message}` });
  }
});

function executeJavaScriptCode(code, res) {
  try {
    const script = new Script(code);
    let output = "";
    const originalConsoleLog = console.log;

    console.log = (...args) => {
      output += args.join(" ") + "\n";
    };

    script.runInNewContext({ console: console });

    console.log = originalConsoleLog;

    res.send({
      output:
        output.trim() ||
        "JavaScript code executed successfully, but there is no output."
    });
  } catch (error) {
    console.error("Error executing JavaScript code:", error);
    res.send({ output: `Error executing JavaScript code: ${error.message}` });
  }
}

function executePythonCode(code, res) {
  const tempFilePath = path.join(__dirname, "temp.py");

  try {
    fs.writeFileSync(tempFilePath, code);
    console.log(`Executing Python code:\n${code}\n`);

    const pythonProcess = spawn("python3", [tempFilePath]);

    let output = "";
    let errorOutput = "";

    pythonProcess.stdout.on("data", (data) => {
      output += data.toString();
    });

    pythonProcess.stderr.on("data", (data) => {
      errorOutput += data.toString();
      console.error("Python error:", data.toString());
    });

    pythonProcess.on("close", (code) => {
      fs.unlinkSync(tempFilePath); // Clean up the temp file
      if (errorOutput) {
        res.send({ output: `Python error: ${errorOutput}` });
      } else {
        res.send({ output: output.trim() || "No output." });
      }
    });
  } catch (error) {
    if (fs.existsSync(tempFilePath)) fs.unlinkSync(tempFilePath); // Clean up in case of an unexpected error
    console.error("Server error:", error);
    res.status(500).send({ output: `Server error: ${error.message}` });
  }
}
module.exports = router;

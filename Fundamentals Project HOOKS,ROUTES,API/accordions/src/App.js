import React, { useState } from "react";
import Question from "./Question";
import data from "./data";
import "./App.css";

function App() {
  const [questions, setQuestions] = useState(data);

  return (
    <div className="container">
      <h3>Question and ansers about login</h3>
      <section className="info">
        {questions.map((question) => {
          return <Question key={question.id} {...question} />;
        })}
      </section>
    </div>
  );
}

export default App;

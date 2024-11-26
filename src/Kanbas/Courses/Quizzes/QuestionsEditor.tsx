import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import questionsData from "../../Database/questions.json"; 
import { FaTrash, FaEdit } from "react-icons/fa";
import { IoAddCircleOutline } from "react-icons/io5";

export default function QuestionsEditor() {
  const { cid, qid } = useParams();
  const navigate = useNavigate();

  const [questions, setQuestions] = useState<any[]>([]);
  const [newQuestionType, setNewQuestionType] = useState("Multiple Choice");

  useEffect(() => {
    const fetchQuestions = async () => {
      const filteredQuestions = questionsData.filter(
        (question) => question.quizId === qid
      );
      setQuestions(filteredQuestions);
    };
    fetchQuestions();
  }, [qid]);

  const handleAddQuestion = () => {
    const newQuestion = {
      id: `q${new Date().getTime()}`,
      quizId: qid,
      type: newQuestionType,
      points: 0,
      title: "",
      description: "",
      options: newQuestionType === "Multiple Choice" ? [] : undefined,
      correctAnswer: "",
    };
    setQuestions([...questions, newQuestion]);
  };

  const handleEditQuestion = (questionId: string) => {
    console.log(`Edit question: ${questionId}`);
  };

  const handleDeleteQuestion = (questionId: string) => {
    setQuestions(questions.filter((question) => question.id !== questionId));
  };

  const handleBackToQuizEditor = () => {
    navigate(`/Kanbas/Courses/${cid}/Quizzes/${qid}`);
  };

  return (
    <div className="container mt-4">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h3>Questions Editor</h3>
        <button className="btn btn-secondary" onClick={handleBackToQuizEditor}>
          Back to Quiz Editor
        </button>
      </div>

      <div className="d-flex justify-content-between align-items-center mb-3">
        <div>
          <label htmlFor="questionType" className="form-label">
            New Question Type:
          </label>
          <select
            id="questionType"
            className="form-select"
            value={newQuestionType}
            onChange={(e) => setNewQuestionType(e.target.value)}
          >
            <option value="Multiple Choice">Multiple Choice</option>
            <option value="True/False">True/False</option>
            <option value="Fill in the Blank">Fill in the Blank</option>
          </select>
        </div>
        <button
          className="btn btn-success d-flex align-items-center"
          onClick={handleAddQuestion}
        >
          <IoAddCircleOutline className="me-2" />
          Add Question
        </button>
      </div>

      <ul className="list-group">
        {questions.map((question) => (
          <li
            key={question.id}
            className="list-group-item d-flex justify-content-between align-items-center"
          >
            <div>
              <h6>{question.title || "Untitled Question"}</h6>
              <p className="mb-1 text-muted">
                {question.type} | {question.points} points
              </p>
              <p className="mb-0">{question.description}</p>
            </div>
            <div className="d-flex align-items-center">
              <button
                className="btn btn-outline-primary me-2"
                onClick={() => handleEditQuestion(question.id)}
              >
                <FaEdit />
              </button>
              <button
                className="btn btn-outline-danger"
                onClick={() => handleDeleteQuestion(question.id)}
              >
                <FaTrash />
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

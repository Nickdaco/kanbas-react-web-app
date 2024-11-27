import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import MultipleChoiceEditor from "./QuestionsEditors/MultipleChoiceEditor";
import TrueFalseEditor from "./QuestionsEditors/TrueFalseEditor";
import LongAnswerEditor from "./QuestionsEditors/LongAnswerEditor";
import questionsData from "../../Database/questions.json";

export default function QuestionsEditor() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedQuestionType, setSelectedQuestionType] =
    useState<string>("Multiple Choice");
  const [questions, setQuestions] = useState<any[]>([]);
  const { qid, cid } = useParams();
  const navigate = useNavigate();

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  const handleSaveQuestion = (newQuestion: any) => {
    setQuestions([...questions, newQuestion]);
    setIsModalOpen(false);
  };

  useEffect(() => {
    if (qid) {
      const quizQuestions = questionsData.filter(
        (question) => question.quizId === qid
      );
      setQuestions(quizQuestions);
    }
  }, [qid]);

  const handleBackClick = () => {
    navigate(`/Kanbas/Courses/${cid}/Quizzes/${qid}`);
  };

  return (
    <div className="container mt-4">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <div>
          <h3>Questions Editor</h3>
          <button
            className="btn btn-outline-secondary mt-2"
            onClick={handleBackClick}
          >
            Back to Quiz Details
          </button>
        </div>
        <div className="d-flex align-items-center">
          <select
            className="form-select me-2"
            style={{ width: "200px" }}
            value={selectedQuestionType}
            onChange={(e) => setSelectedQuestionType(e.target.value)}
          >
            <option value="Multiple Choice">Multiple Choice</option>
            <option value="True/False">True/False</option>
            <option value="Long Answer">Long Answer</option>
          </select>
          <button className="btn btn-primary" onClick={handleOpenModal}>
            + New Question
          </button>
        </div>
      </div>
      <ul className="list-group">
        {questions.map((question, index) => (
          <li key={index} className="list-group-item">
            <h5>{question.title}</h5>
            <p>{question.question}</p>
            <p>
              <strong>Points:</strong> {question.points}
            </p>
            <p>
              <strong>Type:</strong> {question.type}
            </p>
          </li>
        ))}
      </ul>

      {/* Modals */}
      {isModalOpen && selectedQuestionType === "Multiple Choice" && (
        <MultipleChoiceEditor
          onSave={(newQuestion: any) =>
            handleSaveQuestion({ ...newQuestion, quizId: qid })
          }
          onCancel={handleCloseModal}
        />
      )}
      {isModalOpen && selectedQuestionType === "True/False" && (
        <TrueFalseEditor
          onSave={(newQuestion: any) =>
            handleSaveQuestion({ ...newQuestion, quizId: qid })
          }
          onCancel={handleCloseModal}
        />
      )}
      {isModalOpen && selectedQuestionType === "Long Answer" && (
        <LongAnswerEditor
          onSave={(newQuestion: any) =>
            handleSaveQuestion({ ...newQuestion, quizId: qid })
          }
          onCancel={handleCloseModal}
        />
      )}
    </div>
  );
}

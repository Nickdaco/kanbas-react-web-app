import axios from "axios";
const REMOTE_SERVER = process.env.REACT_APP_REMOTE_SERVER;
const MODULES_API = `${REMOTE_SERVER}/api/modules`;
export const updateModule = async (module: any) => {
  const { data } = await axios.put(`${MODULES_API}/${module._id}`, module);
  return data;
};

export const deleteModule = async (moduleId: string) => {
  const response = await axios.delete(`${MODULES_API}/${moduleId}`);
  return response.data;
};
export function createQuizForCourse(arg0: string, updatedQuiz: { _id: string; name: any; description: any; points: any; status: any; dueDate: any; availableFromDate: any; availableUntilDate: any; shuffleAnswers: any; timeLimit: any; multipleAttempts: any; course: string | undefined; }) {
    throw new Error("Function not implemented.");
}

export function updateQuiz(updatedQuiz: { _id: string; name: any; description: any; points: any; status: any; dueDate: any; availableFromDate: any; availableUntilDate: any; shuffleAnswers: any; timeLimit: any; multipleAttempts: any; course: string | undefined; }) {
    throw new Error("Function not implemented.");
}


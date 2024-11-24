import axios from "axios";
const REMOTE_SERVER = process.env.REACT_APP_REMOTE_SERVER;
const ASSIGNMENTS_API = `${REMOTE_SERVER}/api/assignments`;
export const updateAssignment = async (assignment: any) => {
  const { data } = await axios.put(
    `${ASSIGNMENTS_API}/${assignment._id}`,
    assignment
  );
  return data;
};

export const deleteAssignment = async (assignmentId: string) => {
  const response = await axios.delete(`${ASSIGNMENTS_API}/${assignmentId}`);
  return response.data;
};
export function createAssignmentForCourse(arg0: string, updatedAssignment: { _id: string; title: any; description: any; points: any; dueDate: any; availableFromDate: any; availableUntilDate: any; course: string | undefined; }) {
  throw new Error("Function not implemented.");
}


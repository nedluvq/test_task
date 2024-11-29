import React from "react";
import { TaskTree } from "./components/TaskTree";
import { taskStore } from "./stores/TaskStore";
import "./styles/main.scss";

const App: React.FC = () => {
  React.useEffect(() => {
    taskStore.addTask({
      id: "1",
      name: "Header Task",
      isCompleted: false,
      subTasks: [
        {
          id: "1-1",
          name: "First Subtask",
          isCompleted: false,
          subTasks: [],
        },
        {
          id: "1-2",
          name: "Second Subtask",
          isCompleted: false,
          subTasks: [
            {
              id: "1-2-1",
              name: "Nested Subtask",
              isCompleted: false,
              subTasks: [],
            },
          ],
        },
      ],
    });
  }, []);
  React.useEffect(() => {
    taskStore.addTask({
      id: "2",
      name: "Header Task 2",
      isCompleted: false,
      subTasks: [
        {
          id: "2-1",
          name: "First Subtask 2",
          isCompleted: false,
          subTasks: [],
        },
        {
          id: "2-2",
          name: "Second Subtask 2",
          isCompleted: false,
          subTasks: [
            {
              id: "2-2-1",
              name: "Nested Subtask 2",
              isCompleted: false,
              subTasks: [],
            },
          ],
        },
      ],
    });
  }, []);

  return (
    <div className="app">
      <h1>Task Tree</h1>
      <TaskTree />
    </div>
  );
};

export default App;

import React from "react";
import { observer } from "mobx-react-lite";
import { taskStore, Task } from "../stores/TaskStore";
import { TaskItem } from "./TaskItem";

export const TaskTree: React.FC = observer(() => {
  const handleToggle = (task: Task, isCompleted: boolean) => {
    taskStore.toggleTaskCompletion(task, isCompleted);
    if (task.subTasks.length > 0) {
      task.subTasks.forEach((subTask) =>
        taskStore.updateParentCompletion(subTask)
      );
    }
  };

  return (
    <div>
      {taskStore.tasks.map((task) => (
        <TaskItem key={task.id} task={task} onToggle={handleToggle} />
      ))}
    </div>
  );
});

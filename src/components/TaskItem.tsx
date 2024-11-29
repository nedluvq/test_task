import React from "react";
import { observer } from "mobx-react-lite";
import { ITaskItem } from "./ITaskItem";

export const TaskItem: React.FC<ITaskItem> = observer(({ task, onToggle }) => {
  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onToggle(task, e.target.checked);
  };

  return (
    <div className="task-item">
      <label className="task-item__label">
        <input
          type="checkbox"
          checked={task.isCompleted}
          onChange={handleCheckboxChange}
          className="task-item__checkbox"
        />
        <span
          className={`task-item__text ${task.isCompleted ? "completed" : ""}`}
        >
          {task.name}
        </span>
      </label>
      <div className="task-item__subtasks">
        {task.subTasks.map((subTask) => (
          <TaskItem key={subTask.id} task={subTask} onToggle={onToggle} />
        ))}
      </div>
    </div>
  );
});

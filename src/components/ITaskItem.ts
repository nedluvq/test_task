import { Task } from "../stores/TaskStore";

export interface ITaskItem {
    task: Task;
    onToggle: (task: Task, isCompleted: boolean) => void;
  }
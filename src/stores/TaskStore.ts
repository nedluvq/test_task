import { makeAutoObservable } from "mobx";

export interface Task {
  id: string;
  name: string;
  isCompleted: boolean;
  subTasks: Task[];
}

class TaskStore {
  tasks: Task[] = [];

  constructor() {
    makeAutoObservable(this);
  }

  toggleTaskCompletion(task: Task, isCompleted: boolean) {
    task.isCompleted = isCompleted;
    task.subTasks.forEach((subTask) => this.toggleTaskCompletion(subTask, isCompleted));
  }

  updateParentCompletion(task: Task) {
    if (task.subTasks.length > 0) {
      const allCompleted = task.subTasks.every((subTask) => subTask.isCompleted);
      task.isCompleted = allCompleted;
    }
  }

  addTask(task: Task) {
    this.tasks.push(task);
  }
}

export const taskStore = new TaskStore();
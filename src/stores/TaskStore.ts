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
    this.updateParentCompletion(task);
  }

  updateParentCompletion(task: Task) {
    const parentTask = this.findParentTask(this.tasks, task);
    if (parentTask) {
      const allCompleted = parentTask.subTasks.every((subTask) => subTask.isCompleted);
      parentTask.isCompleted = allCompleted;
      this.updateParentCompletion(parentTask);
    }
  }

  findParentTask(tasks: Task[], targetTask: Task): Task | null {
    for (const task of tasks) {
      if (task.subTasks.includes(targetTask)) {
        return task;
      }
      const parent = this.findParentTask(task.subTasks, targetTask);
      if (parent) {
        return parent;
      }
    }
    return null;
  }

  addTask(task: Task) {
    this.tasks.push(task);
  }
}

export const taskStore = new TaskStore();

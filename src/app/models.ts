export interface Task {
    taskName: string
    priority: string
}

export interface Todo {
    name: string
    dueDate: Date
    tasks: Task[]
}
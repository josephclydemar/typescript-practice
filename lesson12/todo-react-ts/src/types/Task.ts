
enum TaskLifecycleStage {
    Pending = 'Pending',
    OnHold = 'On-Hold',
    InProgress = 'In-Progress',
    Cancelled = 'Cancelled',
    Completed = 'Completed'
}

enum TaskTimelineStatus {
    AheadOfSchedule = 'Ahead-Of-Schedule',
    OnSchedule = 'On-Schedule',
    BehindSchedule = 'Behind-Schedule'
}

enum TasksManipulate {
    AddNewTask,
    DeleteTask,
    EditTask
}

interface SubTask {
    id: string;
    title: string;
    objectives: string[];
    lifecycleStage: TaskLifecycleStage;
}

interface Task {
    id: string;
    title: string;
    objectives: string[];
    subtasks: SubTask[];
    lifecycleStage: TaskLifecycleStage;
    timelineStatus: TaskTimelineStatus;
}


type TasksManipulateAction = {
    taskId: string;
    taskTitle?: string;
    taskObjectives?: string[];
    taskSubtasks?: SubTask[];
    actionType: TasksManipulate;
}

type TasksContextType = {
    tasks: Task[];
    tasksDispatch: React.Dispatch<TasksManipulateAction>;
}


export {
    TaskLifecycleStage,
    TaskTimelineStatus,
    TasksManipulate,
}

export type {
    SubTask,
    Task,
    TasksContextType,
    TasksManipulateAction
};
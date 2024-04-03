import { createContext, Context, ReactNode, useReducer } from 'react';

import { Task, TaskLifecycleStage, TaskTimelineStatus, TasksManipulateAction, TasksManipulate, TasksContextType } from '../types/Task';


type TasksContextProviderProps = {
    children: ReactNode;
}


const TasksContext: Context<TasksContextType | null> = createContext<TasksContextType | null>(null);

function manipulateTasksState(state: Task[], action: TasksManipulateAction): Task[] {
    const { taskId, taskTitle, taskObjectives, taskSubtasks, actionType } = action;
    switch(actionType) {
        case TasksManipulate.AddNewTask:
            return [
                ...state,
                {
                    id: taskId,
                    title: taskTitle !== undefined ? taskTitle : '',
                    objectives: taskObjectives !== undefined ? taskObjectives : [],
                    subtasks: taskSubtasks !== undefined ? taskSubtasks : [],
                    lifecycleStage: TaskLifecycleStage.Pending,
                    timelineStatus: TaskTimelineStatus.AheadOfSchedule
                }
            ];
        case TasksManipulate.DeleteTask:
            return state.filter(function (item: Task): boolean {
                return item.id !== taskId;
            })
        default:
            return state;
    }
}

export function TasksContextProvider({ children }: TasksContextProviderProps) {
    const [tasks, tasksDispatch] = useReducer<(state: Task[], action: TasksManipulateAction) => Task[]>(
        manipulateTasksState,
        []
    );
    return (
        <TasksContext.Provider value={{ tasks, tasksDispatch }}>
            { children }
        </TasksContext.Provider>
    );
}


export default TasksContext;
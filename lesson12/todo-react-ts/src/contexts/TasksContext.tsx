import { createContext, Context, ReactNode, useReducer } from 'react';

import { Task, TaskLifecycleStage, TaskTimelineStatus, TasksManipulateAction, TasksManipulate, TasksContextType } from '../types/Task';


type TasksContextProviderProps = {
    children: ReactNode;
}


const TasksContext: Context<TasksContextType | null> = createContext<TasksContextType | null>(null);

function manipulateTasksState(state: Task[], action: TasksManipulateAction): Task[] {
    const { taskId, actionType } = action;
    switch(actionType) {
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
        [
            {
                id: "1",
                title: "Market Research",
                objectives: ["Identify target demographics", "Analyze competitor strategies"],
                subtasks: [],
                lifecycleStage: TaskLifecycleStage.InProgress,
                timelineStatus: TaskTimelineStatus.OnSchedule
            },
            {
                id: "2",
                title: "Prototype Development",
                objectives: ["Design user interface", "Implement basic functionalities"],
                subtasks: [],
                lifecycleStage: TaskLifecycleStage.InProgress,
                timelineStatus: TaskTimelineStatus.BehindSchedule
            },
            {
                id: "3",
                title: "Client Meeting",
                objectives: ["Discuss project requirements", "Gather feedback"],
                subtasks: [],
                lifecycleStage: TaskLifecycleStage.Pending,
                timelineStatus: TaskTimelineStatus.OnSchedule
            },
            {
                id: "4",
                title: "Resource Allocation",
                objectives: ["Allocate team members to tasks", "Ensure availability of required tools"],
                subtasks: [],
                lifecycleStage: TaskLifecycleStage.Completed,
                timelineStatus: TaskTimelineStatus.AheadOfSchedule
            },
            {
                id: "5",
                title: "Quality Assurance Testing",
                objectives: ["Identify and rectify bugs", "Ensure adherence to quality standards"],
                subtasks: [],
                lifecycleStage: TaskLifecycleStage.InProgress,
                timelineStatus: TaskTimelineStatus.OnSchedule
            },
            {
                id: "6",
                title: "Documentation",
                objectives: ["Create user manuals", "Prepare technical documentation"],
                subtasks: [],
                lifecycleStage: TaskLifecycleStage.InProgress,
                timelineStatus: TaskTimelineStatus.OnSchedule
            },
            {
                id: "7",
                title: "Stakeholder Presentation",
                objectives: ["Present project progress", "Address stakeholder concerns"],
                subtasks: [],
                lifecycleStage: TaskLifecycleStage.Pending,
                timelineStatus: TaskTimelineStatus.BehindSchedule
            },
            {
                id: "8",
                title: "Risk Management",
                objectives: ["Identify potential risks", "Develop mitigation strategies"],
                subtasks: [],
                lifecycleStage: TaskLifecycleStage.InProgress,
                timelineStatus: TaskTimelineStatus.OnSchedule
            },
            {
                id: "9",
                title: "Feature Implementation",
                objectives: ["Add new features based on client requests", "Ensure compatibility with existing system"],
                subtasks: [],
                lifecycleStage: TaskLifecycleStage.Pending,
                timelineStatus: TaskTimelineStatus.BehindSchedule
            },
            {
                id: "10",
                title: "Performance Optimization",
                objectives: ["Improve system speed", "Enhance resource utilization"],
                subtasks: [],
                lifecycleStage: TaskLifecycleStage.InProgress,
                timelineStatus: TaskTimelineStatus.OnSchedule
            },
            {
                id: "11",
                title: "User Acceptance Testing",
                objectives: ["Gather feedback from end-users", "Ensure user satisfaction"],
                subtasks: [],
                lifecycleStage: TaskLifecycleStage.Pending,
                timelineStatus: TaskTimelineStatus.OnSchedule
            },
            {
                id: "12",
                title: "Budget Review",
                objectives: ["Analyze project expenditures", "Identify areas for cost reduction"],
                subtasks: [],
                lifecycleStage: TaskLifecycleStage.Completed,
                timelineStatus: TaskTimelineStatus.OnSchedule
            },
            {
                id: "13",
                title: "Training Sessions",
                objectives: ["Train team members on new tools and technologies", "Enhance skillsets"],
                subtasks: [],
                lifecycleStage: TaskLifecycleStage.Pending,
                timelineStatus: TaskTimelineStatus.BehindSchedule
            },
            {
                id: "14",
                title: "Integration Testing",
                objectives: ["Ensure seamless integration with other systems", "Verify interoperability"],
                subtasks: [],
                lifecycleStage: TaskLifecycleStage.InProgress,
                timelineStatus: TaskTimelineStatus.OnSchedule
            },
            {
                id: "15",
                title: "Feedback Collection",
                objectives: ["Gather feedback from stakeholders and team members", "Identify areas for improvement"],
                subtasks: [],
                lifecycleStage: TaskLifecycleStage.Pending,
                timelineStatus: TaskTimelineStatus.OnSchedule
            },
            {
                id: "16",
                title: "Security Audit",
                objectives: ["Identify vulnerabilities", "Implement security measures"],
                subtasks: [],
                lifecycleStage: TaskLifecycleStage.InProgress,
                timelineStatus: TaskTimelineStatus.OnSchedule
            },
            {
                id: "17",
                title: "Finalization of Deliverables",
                objectives: ["Review and finalize project deliverables", "Ensure completeness and accuracy"],
                subtasks: [],
                lifecycleStage: TaskLifecycleStage.Pending,
                timelineStatus: TaskTimelineStatus.BehindSchedule
            },
            {
                id: "18",
                title: "Client Demo",
                objectives: ["Demonstrate project features to the client", "Address client queries"],
                subtasks: [],
                lifecycleStage: TaskLifecycleStage.Pending,
                timelineStatus: TaskTimelineStatus.OnSchedule
            },
            {
                id: "19",
                title: "Performance Monitoring",
                objectives: ["Monitor system performance", "Identify areas for optimization"],
                subtasks: [],
                lifecycleStage: TaskLifecycleStage.InProgress,
                timelineStatus: TaskTimelineStatus.OnSchedule
            },
            {
                id: "20",
                title: "Project Closure",
                objectives: ["Document lessons learned", "Archive project documentation"],
                subtasks: [],
                lifecycleStage: TaskLifecycleStage.Pending,
                timelineStatus: TaskTimelineStatus.OnSchedule
            }
        ]
    );
    return (
        <TasksContext.Provider value={{ tasks, tasksDispatch }}>
            { children }
        </TasksContext.Provider>
    );
}


export default TasksContext;
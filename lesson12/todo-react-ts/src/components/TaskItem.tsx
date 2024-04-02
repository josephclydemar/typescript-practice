import { ReactElement, useContext, Context } from 'react';

import TasksContext from '../contexts/TasksContext';

import { CssStyle } from '../types/Style';
import { Task, TasksContextType, TasksManipulate } from '../types/Task';

type TaskItemProps = {
    clsNameForItem?: string;
    cssStyle?: CssStyle;
    taskItem: Task;
}

export default function TaskItem({ taskItem, clsNameForItem='noclass-taskitem' }: TaskItemProps) {
    const { tasksDispatch } = useContext<TasksContextType>(TasksContext as Context<TasksContextType>);
    const { id, title, objectives, lifecycleStage, timelineStatus } = taskItem;

    return (
        <div className={ clsNameForItem }>
            <div>
                <h5>{ title }</h5>
                <div>
                    <h6>Objectives:</h6>
                    <ol>
                        { objectives.map(function (item: string): ReactElement {
                            return (
                                <li>{ item }</li>
                            );
                        }) }
                    </ol>
                </div>
                <p><b>Task Stage:</b> { lifecycleStage }</p>
                <p><b>Project Timeline Status:</b> { timelineStatus }</p>
            </div>
            <div className='lifecycleStageInput'>
                <select name='task-lifecycle-stage' id='task-lifecycle-stage'>
                    <option defaultChecked value='Set Task Lifecycle Stage'>Set Lifecycle Stage</option>
                    <option value='Pending'>Pending</option>
                    <option value='On-Hold'>On-Hold</option>
                    <option value='In-Progress'>In-Progress</option>
                    <option value='Cancelled'>Cancelled</option>
                    <option value='Completed'>Completed</option>
                </select>
            </div>
            <div className='timelineStatusInput'>
                <select name='task-timeline-status' id='task-timeline-status'>
                    <option defaultChecked value='Set Task Timeline Status'>Set Task Timeline Status</option>
                    <option value='Ahead-Of-Schedule'>Ahead-Of-Schedule</option>
                    <option value='On-Schedule'>On-Schedule</option>
                    <option value='Behind-Schedule'>Behind-Schedule</option>
                </select>
            </div>
            <div>
                <button onClick={function (): void {
                    tasksDispatch({ taskId: id, actionType: TasksManipulate.DeleteTask });
                }}>Delete Task</button>
            </div>
        </div>
    );
}

import { ReactElement, useContext, useRef, useEffect, Context, useState, ChangeEvent } from 'react';

import TasksContext from '../contexts/TasksContext';

import { CssStyle } from '../types/Style';
import { Task, TasksContextType, TasksManipulate } from '../types/Task';

type TaskItemProps = {
    clsNameForItem?: string;
    cssStyle?: CssStyle;
    key?: string | number;
    taskItem: Task;
}

export default function TaskItem({ key, taskItem, clsNameForItem='noclass-taskitem' }: TaskItemProps) {
    const { tasks, tasksDispatch } = useContext<TasksContextType>(TasksContext as Context<TasksContextType>);
    const { id, title, objectives, lifecycleStage, timelineStatus } = taskItem;

    const newAddedTaskRef = useRef<HTMLDivElement | null>(null);
    useEffect(function (): void {
        newAddedTaskRef.current?.scrollIntoView({
            behavior: 'smooth'
        });
    }, [tasks]);


    const [lifecycleStageSample, setLifecycleStageSample] = useState<string>('');

    
    useEffect(function (): void {
        console.log('Key:', key);
        console.log('Task Lifecycle Stage:', lifecycleStageSample);
    }, [lifecycleStageSample]);

    return (
        <div key={key} ref={newAddedTaskRef} className={ clsNameForItem }>
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
                <select name='task-lifecycle-stage' id='task-lifecycle-stage' onChange={function (e: ChangeEvent<HTMLSelectElement>): void {
                    setLifecycleStageSample(() => e.target.value);
                }}>
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
                    tasksDispatch({ taskId: id, actionType: TasksManipulate.EditTask });
                }}>Edit Task</button>
                <button onClick={function (): void {
                    tasksDispatch({ taskId: id, actionType: TasksManipulate.DeleteTask });
                }}>Delete Task</button>
            </div>
        </div>
    );
}

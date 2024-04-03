import { ChangeEvent, Context, useContext, useState } from 'react';
import { nanoid } from 'nanoid';

import TasksContext from '../contexts/TasksContext';

import { TasksContextType, TasksManipulate } from '../types/Task';

type TaskAddBoxProps = {
    clsName?: string;
    isAddTask?: boolean;
    setIsAddTask: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function TaskAddBox({ clsName='noclass-taskaddbox', setIsAddTask }: TaskAddBoxProps) {
    const { tasksDispatch } = useContext<TasksContextType>(TasksContext as Context<TasksContextType>);

    const [taskTitle, setTaskTitle] = useState<string>('');

    return (
        <div className={clsName}>
            <div>
                <input className='text-input' type='text' placeholder='Task Title' onChange={function (e: ChangeEvent<HTMLInputElement>): void {
                    setTaskTitle(() => e.target.value);
                }}/>
            </div>
            <div>
                <input className='text-input' type='text' placeholder='Task Title'/>
            </div>
            <div>
                <input className='text-input' type='text' placeholder='Task Title'/>
            </div>
            <div>
            <button onClick={function (): void {
                tasksDispatch({ taskId: nanoid(), taskTitle: taskTitle, actionType: TasksManipulate.AddNewTask });
                setIsAddTask(() => false);
            }}>Confirm Add</button>

            <button onClick={function (): void {
                setIsAddTask(() => false);
            }}>Cancel</button>
            </div>
        </div>
  )
}

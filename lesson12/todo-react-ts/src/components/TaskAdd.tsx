import { useState } from 'react';

import TaskAddBox from './TaskAddBox';

export default function TaskAdd() {
  const [isAddTask, setIsAddTask] = useState<boolean>(false);

  

  return (
    <div>
        <div>
          <button onClick={function (): void {
            setIsAddTask(() => true);
          }}>Add New Task</button>
        </div>
        { isAddTask === true ? (
          <TaskAddBox setIsAddTask={setIsAddTask} clsName='task-addbox' />
        ) : '' }
    </div>
  )
}

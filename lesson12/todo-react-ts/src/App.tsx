import './components/css/Heading.css';
import './components/css/TasklistSection.css';
import './components/css/TaskOperations.css';

import { useContext, Context } from 'react';

import TasksContext from './contexts/TasksContext';

import { Task, TasksContextType, TaskLifecycleStage } from './types/Task';

import Heading from './components/Heading';
import Section from './components/Section';
import TaskList from './components/TaskList';
import TaskOperations from './components/TaskOperations';

function App(): JSX.Element {
  const { tasks } = useContext<TasksContextType>(TasksContext as Context<TasksContextType>);
  return (
    <>
      <Heading title='My Todo App' clsName='mainTitle'/>
      <Section clsName='task-operations'>
        <TaskOperations />
      </Section>
      <Section title='Pending Tasks' clsName='tasklist-pending'>
        <TaskList items={tasks.filter(function (item: Task): boolean {
          return item.lifecycleStage === TaskLifecycleStage.Pending
        })} clsName='tasklist' clsNameForItem='taskitem' />
      </Section>
      <Section title='In-Progress Tasks' clsName='tasklist-inprogress'>
        <TaskList items={tasks.filter(function (item: Task): boolean {
          return item.lifecycleStage === TaskLifecycleStage.InProgress
        })} clsName='tasklist' clsNameForItem='taskitem' />
      </Section>
      <Section title='Completed Tasks' clsName='tasklist-completed'>
        <TaskList items={tasks.filter(function (item: Task): boolean {
          return item.lifecycleStage === TaskLifecycleStage.Completed
        })} clsName='tasklist' clsNameForItem='taskitem' />
      </Section>
    </>
  );
}

export default App;

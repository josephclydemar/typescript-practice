

import { ReactElement } from 'react';

import TaskItem from './TaskItem';

import { CssStyle } from '../types/Style';
import { Task } from '../types/Task';

type TaskListProps = {
    clsName?: string;
    clsNameForItem?: string;
    cssStyle?: CssStyle;
    items: Task[];
}

export default function TaskList({ clsName='noclass-tasklist', clsNameForItem='noclass-taskitem', cssStyle={}, items }: TaskListProps): ReactElement {
    return (
        <div className={ clsName }>
            {/* <h6>QTY: { items.length }</h6> */}
            { items.map(function (item: Task, i: number): ReactElement {
                return <TaskItem key={i} taskItem={item} clsNameForItem={clsNameForItem} cssStyle={cssStyle} />;
            }) }
        </div>
    );
}

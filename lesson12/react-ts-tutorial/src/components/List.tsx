import { ReactElement, ReactNode } from 'react';

type ListProps<T> = {
    clsName?: string;
    verticalPaddingPerItem?: string;
    items: T[];
    render: (item: T) => ReactNode;
};

export default function List<T,>({ clsName='noclassListItem', verticalPaddingPerItem='0vh', items, render }: ListProps<T>): JSX.Element {
    return (
        <div>
            <ol>
                { items.map(function (item: T, i: number): ReactElement {
                    return (
                        <li key={i} className={ clsName } style={{ marginTop: verticalPaddingPerItem }}>
                            { render(item) }
                        </li>
                    );
                }) }
            </ol>
        </div>
    );
}

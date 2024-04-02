import { ReactNode } from 'react';

import './css/Section.css';

type cssStyle = {
    [key: string]: string | number;
}


type SectionProps = {
    cssStyle?: cssStyle;
    clsName?: string;
    title?: string;
    children: ReactNode;
};

export default function Section({ cssStyle={ }, clsName='noclass', title='My Subheading', children }: SectionProps): ReactNode {
    return (
        <section className={ clsName } style={cssStyle}>
            <h2>{ title }</h2>
            <div>{ children }</div>
        </section>
    );
}

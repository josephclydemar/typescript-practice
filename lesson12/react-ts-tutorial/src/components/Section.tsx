import { ReactNode } from 'react';

import './css/Section.css';

type SectionProps = {
    clsName?: string;
    title?: string;
    children: ReactNode;
};

export default function Section({ clsName='noclass', title='My Subheading', children }: SectionProps): ReactNode {
    return (
        <section className={ clsName }>
            <h2>{ title }</h2>
            <div>{ children }</div>
        </section>
    );
}

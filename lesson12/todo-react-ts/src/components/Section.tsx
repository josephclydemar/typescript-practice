import { ReactNode } from 'react';

import { CssStyle } from '../types/Style';

type SectionProps = {
    children: ReactNode;
    title?: string | null;
    clsName?: string;
    cssStyle?: CssStyle;
}

export default function Section({ title=null, children, clsName='no-class-section', cssStyle={} }: SectionProps) {
  return (
    <div className={ clsName } style={cssStyle}>
        { title !== null ? <h3>{ title }</h3> : '' }
        { children }
    </div>
  )
}

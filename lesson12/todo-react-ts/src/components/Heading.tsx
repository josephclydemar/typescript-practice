import { ReactElement } from 'react';

type HeadingProps = {
    clsName?: string;
    title: string;
}

export default function Heading({ title, clsName='noclass-heading' }: HeadingProps): ReactElement {
  return (
    <div style={{
      width: '100%'
    }}>
        <h1 className={ clsName }>{ title }</h1>
    </div>
  )
}

import { ReactElement } from "react";

import './css/Heading.css';


type HeadingProps = {
    title: string;
}

export default function Heading({ title }: HeadingProps): ReactElement {
  return (
    <h1 className='mainHeading'>{ title }</h1>
  );
}
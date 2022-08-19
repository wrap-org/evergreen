import React from 'react';
interface IconProps {
    icon: string;
    color?: string;
    title?: string;
}
declare class Icon extends React.PureComponent<IconProps> {
    render(): JSX.Element;
}
export default Icon;

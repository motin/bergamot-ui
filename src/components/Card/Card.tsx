import * as React from "react";
import classNames from "classnames";

interface Props {
    size?: string;
    children?: React.ReactNode;
    title?: string;
    actions?: React.ReactNode[];
    borderless?: boolean;
    style?: React.CSSProperties;
}

const Card = ({ children, actions, title, size, borderless, style }: Props) => {
    const classes = classNames({
        Card: "Card",
        borderless: !borderless
    })

    return (
        <div className={classes} style={style}>
            <div className={"Card__header"}>
                <h3 className={"Card__title"}>Card Title</h3>
            </div>
            <div className={"Card__body"}>
                {children}
            </div>
            <div className={"Card__footer"}>
                {actions}
            </div>
        </div>
    )
}

export default Card;
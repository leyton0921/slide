import React from "react";

interface IContainer {
    className: string;
    children:any
}

const Container: React.FC<IContainer> = ({ className, children }) => {
    return (
        <div className={className}>
            {children}
        </div>
    );
};

export default Container;

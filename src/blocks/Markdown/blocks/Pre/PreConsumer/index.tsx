import React, {useContext, useEffect , PropsWithChildren, CSSProperties} from "react";

import {PreContext} from "../PreContext";


type Props = PropsWithChildren<{
    style?: CSSProperties;
}>;

const PreConsumer: React.FC<Props> = (props) => {
    const {
        children,
        ...rest
    } = props;

    const {
        hasPre,
        setProps
    } = useContext(PreContext);

    useEffect(() => {
        if(!hasPre) {
            return;
        }

        setProps(rest);

        return () => setProps({});
    }, [hasPre, setProps, JSON.stringify(rest)]); // eslint-disable-line

    if(hasPre) {
        return (
            <React.Fragment>
                {children}
            </React.Fragment>
        );
    }

    return (
        <span
          {...rest}
          style={{
            ...rest.style,
            display: "inline-block",
            verticalAlign: "middle",
            lineHeight: 1,
            padding: "0.1em 0.2em",
            borderRadius: "4px"
          }}>
            {children}
        </span>
    );
};


export {PreConsumer};

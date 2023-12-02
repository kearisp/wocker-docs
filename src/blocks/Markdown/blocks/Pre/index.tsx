import React, {useState, useContext, useEffect, createContext, PropsWithChildren} from "react";


const Context = createContext<{
    setProps: (props: any) => void;
}>({
    setProps() {}
});

type Props = PropsWithChildren<{
    className?: string;
}>;

const Pre: React.FC<Props> = (props) => {
    const {
        className,
        children
    } = props;

    const [cProps, setCProps] = useState({});

    return (
        <Context.Provider
          value={{
            setProps: setCProps
          }}>
            <pre
              className={className}
              {...cProps}>
                {children}
            </pre>
        </Context.Provider>
    );
};

const PreConsumer: React.FC<PropsWithChildren> = (props) => {
    const {
        children,
        ...rest
    } = props;

    const {setProps} = useContext(Context);

    useEffect(() => {
        setProps(rest);

        return () => setProps({});
    }, [setProps, JSON.stringify(rest)]); // eslint-disable-line

    return (
        <React.Fragment>
            {children}
        </React.Fragment>
    );
};


export {
    Pre,
    PreConsumer
};

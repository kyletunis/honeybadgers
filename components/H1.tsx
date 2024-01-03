import { HtmlProps, useHtmlProps } from '@/hooks/useHtmlProps';
import React from 'react';

const H1: React.FC<HtmlProps> = (props) => {
    const { classes, children, ...htmlProps } = useHtmlProps({ ...props, baseClasses: "text-center  text-6xl p-6 font-fugaz tracking-wide underline decoration-amber-500 bg-gray-900 my-6 border-y border-amber-500/40" });
    return <h1 className={classes} {...htmlProps}>{children}</h1>;
};

export default H1;
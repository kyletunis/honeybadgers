import { HTMLAttributes, ReactNode } from 'react';

// Define the props shared by all html components
export type HtmlProps = HTMLAttributes<HTMLElement> & {
    children: ReactNode;
    baseClasses?: string;
};

// Custom hook to handle shared logic
export function useHtmlProps({ baseClasses, className, ...props }: HtmlProps) {
    const defaultBaseClasses = baseClasses || '';
    const classes = `${defaultBaseClasses} ${className || ''}`.trim();

    return { classes, ...props };
}

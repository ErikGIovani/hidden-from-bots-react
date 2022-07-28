import React from "react";
declare type PropsEmail = {
    children: React.ReactNode;
    email: string;
    style?: React.CSSProperties;
    className?: string;
};
declare type PropsPhone = {
    children: React.ReactNode;
    phone: string;
    style?: React.CSSProperties;
    className?: string;
};
declare function Email({ children, email, style, className }: PropsEmail): JSX.Element;
declare function Phone({ children, phone, style, className }: PropsPhone): JSX.Element;
declare function EmailBase64({ children, email, style, className, }: PropsEmail): JSX.Element;
declare function PhoneBase64({ children, phone, style, className, }: PropsPhone): JSX.Element;
export { Email, Phone, EmailBase64, PhoneBase64 };

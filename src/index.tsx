import React from "react";

type PropsEmail = {
  children: React.ReactNode;
  email: string;
  style?: React.CSSProperties;
  className?: string;
};

type PropsPhone = {
  children: React.ReactNode;
  phone: string;
  style?: React.CSSProperties;
  className?: string;
};

function Email({ children, email, style = {}, className = "" }: PropsEmail) {
  return (
    <p
      style={
        Object.keys(style).length > 0
          ? { ...style, cursor: "pointer" }
          : { cursor: "pointer" }
      }
      className={className}
      onClick={(e) => (window.location.href = `mailto:${email}`)}
    >
      {children}
    </p>
  );
}

function Phone({ children, phone, style = {}, className = "" }: PropsPhone) {
  return (
    <p
      style={
        Object.keys(style).length > 0
          ? { ...style, cursor: "pointer" }
          : { cursor: "pointer" }
      }
      className={className}
      onClick={(e) => (window.location.href = `tel:${phone}`)}
    >
      {children}
    </p>
  );
}

function EmailBase64({
  children,
  email,
  style = {},
  className = "",
}: PropsEmail) {
  return (
    <p
      style={
        Object.keys(style).length > 0
          ? { ...style, cursor: "pointer" }
          : { cursor: "pointer" }
      }
      className={className}
      onClick={(e) => (window.location.href = `mailto:${atob(email)}`)}
    >
      {children}
    </p>
  );
}

function PhoneBase64({
  children,
  phone,
  style = {},
  className = "",
}: PropsPhone) {
  return (
    <p
      style={
        Object.keys(style).length > 0
          ? { ...style, cursor: "pointer" }
          : { cursor: "pointer" }
      }
      className={className}
      onClick={(e) => (window.location.href = `tel:${atob(phone)}`)}
    >
      {children}
    </p>
  );
}

export { Email, Phone, EmailBase64, PhoneBase64 };
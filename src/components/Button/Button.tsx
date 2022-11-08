import React from "react";

export interface ButtonProps {
  label: string;
}

export default function Button(props: ButtonProps) {
  return <button>{props.label}</button>;
}

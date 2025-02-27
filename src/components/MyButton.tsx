import React from "react";
import { Button } from "react-bootstrap";

interface MyButtonProps {
  label: string;
  variant?: "primary" | "secondary" | "success" | "danger";
  onClick?: () => void;
}

const MyButton: React.FC<MyButtonProps> = ({ label, variant = "primary", onClick }) => {
  return (
    <Button variant={variant} onClick={onClick}>
      {label}
    </Button>
  );
};

export default MyButton;

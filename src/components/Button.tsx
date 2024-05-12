// Source: https://github.com/adrianhajdin/travel_ui_ux/blob/main/components/Navbar.tsx
import Image from 'next/image';
import React from 'react';

type ButtonProps = {
  type: 'button' | 'submit';
  title: string;
  icon?: string;
  className?: string; // Add className prop
  full?: boolean;
};

const Button = ({
  type,
  title,
  icon,
  className, // Include className in props
  full,
}: ButtonProps) => {
  return (
    <button
      className={`flexCenter gap-3 rounded-full border ${className} ${
        full && 'w-full'
      }`}
      type={type}
    >
      {icon && (
        <Image src={icon} alt={title} width={24} height={24} />
      )}
      <label className="bold-16 whitespace-nowrap cursor-pointer">
        {title}
      </label>
    </button>
  );
};

export default Button;

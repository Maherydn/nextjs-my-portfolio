import Link from "next/link";
import React from "react";

interface ContactItemProps {
  label: string;
  href: string;
  icon: React.ReactNode;
}

const ContactItem: React.FC<ContactItemProps> = ({ label, href, icon }) => {
  return (
    <Link
      href={href}
      target="_blank"
      className="flex justify-between items-center h-16 px-6 bg-gray rounded-lg cursor-pointer"
    >
      <div className="flex space-x-2 items-center">
        {icon}
        <h4 className="text-white/60 text-lg font-medium">{label}</h4>
      </div>
      <div>
        <p>➜</p>
      </div>
    </Link>
  );
};

export default ContactItem;

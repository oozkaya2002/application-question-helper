"use client";

interface MenuLinkProps {
  label: string;
  onClick: () => void;
}

const MenuLink: React.FC<MenuLinkProps> = ({ label, onClick }) => {
  return (
    <div
      onClick={onClick}
      className="px-4 py-2 text-sm font-medium text-primary hover:bg-primary-foreground
        hover:text-primary"
    >
      {label}
    </div>
  );
};

export default MenuLink;

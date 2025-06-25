interface ButtonProps {
  label: string;
  href: string;
  icon?: React.ReactNode;
  customClass?: string;
  style: "primary" | "secondary";
}

const Button = ({ label, href, icon, customClass, style }: ButtonProps) => {
  const baseClass = "h-14 rounded-full flex justify-center items-center active:scale-95 transition-all duration-300 ease-in-out";

  const primaryStyle = "bg-accent text-white hover:bg-transparent hover:text-accent border border-accent hover:shadow-glow-secondary";
  const secondaryStyle = "border border-accent dark:border-white hover:dark:border-accent hover:dark:text-accent text-accent dark:text-white hover:shadow-glow-secondary active:scale-95 transition-all duration-300 ease-in-out";

  const selectedStyle = style === "primary" ? primaryStyle : secondaryStyle;

  return (
    <a href={href} className={`${baseClass} ${selectedStyle} ${customClass}`}>
      <p>{label}</p>
      <div className="sm:hidden">{icon}</div>
    </a>
  );
};

export default Button;

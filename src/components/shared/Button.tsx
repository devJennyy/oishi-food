interface ButtonProps {
  label: string;
  href: string;
  icon?: React.ReactNode;
  customClass?: string;
  style: "primary" | "secondary";
}

const Button = ({ label, href, icon, customClass, style }: ButtonProps) => {
  const baseClass = "h-14 rounded-full flex justify-center items-center active:scale-95 transition-all duration-300 ease-in-out";

  const primaryStyle = "bg-secondary text-white hover:bg-transparent hover:text-secondary border border-secondary hover:shadow-glow-secondary";
  const secondaryStyle = "border border-secondary dark:border-white hover:dark:border-secondary hover:dark:text-secondary text-secondary dark:text-white hover:shadow-glow-secondary active:scale-95 transition-all duration-300 ease-in-out";

  const selectedStyle = style === "primary" ? primaryStyle : secondaryStyle;

  return (
    <a href={href} className={`${baseClass} ${selectedStyle} ${customClass}`}>
      <p>{label}</p>
      <div className="sm:hidden">{icon}</div>
    </a>
  );
};

export default Button;

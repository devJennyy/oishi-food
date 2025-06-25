interface Props {
  label: string;
  title: string;
  highlight: string;
}

const SectionHeader = ({ label, title, highlight }: Props) => {
  return (
    <div className="flex flex-col gap-2">
      <p className="font-bold capitalize text-secondary sm:text-xl text-lg tracking-wider">
        {label}
      </p>
      <p className="lg:text-5xl md:text-4xl sm:text-5xl text-4xl lg:font-semibold sm:font-bold font-black sm:leading-tight leading-[2.7rem] sm:max-w-full max-w-[20rem] w-full">
        {title} <span className="text-secondary">{highlight}</span>
      </p>
    </div>
  );
};

export default SectionHeader;

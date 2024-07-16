type SectionTitleProps = {
  title: string;
  className?: string;
};

const SectionTitle: React.FC<SectionTitleProps> = ({ className, title }) => (
  <h2
    className={`${className} text-6xl font-bold mb-8 text-primary-text-color`}
  >
    {title}
  </h2>
);

export default SectionTitle;

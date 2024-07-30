type SectionTitleProps = {
  title: string;
  className?: string;
};

const SectionTitle: React.FC<SectionTitleProps> = ({ className, title }) => (
  <h2
    className={`${className} text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 md:mb-8 text-primary-text-color text-center sm:text-left`}
  >
    {title}
  </h2>
);

export default SectionTitle;

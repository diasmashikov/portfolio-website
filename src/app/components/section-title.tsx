type SectionTitleProps = {
  title: string;
};

const SectionTitle: React.FC<SectionTitleProps> = ({ title }) => (
  <h2 className="text-6xl font-bold mb-8">{title}</h2>
);

export default SectionTitle;

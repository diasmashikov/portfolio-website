import { FaExternalLinkAlt } from "react-icons/fa";

type ExternalLinkProps = {
  href: string;
  websiteName: string;
  className?: string;
};

const ExternalLink: React.FC<ExternalLinkProps> = ({
  href,
  websiteName,
  className,
}) => {
  return (
    <a
      href={href}
      className={`${className} rounded-xl text-secondary-text-color bg-primary-background-color   px-4 font-semibold flex flex-row items-center gap-2 text-sm`}
      target="_blank"
      rel="noopener noreferrer"
    >
      <FaExternalLinkAlt /> {websiteName}
    </a>
  );
};

export default ExternalLink;

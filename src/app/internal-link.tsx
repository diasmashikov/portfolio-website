import Link from "next/link";
import { FaExternalLinkAlt } from "react-icons/fa";

type InternalLinkProps = {
  href: string;
  websiteName: string;
  className?: string;
};

const InternalLink: React.FC<InternalLinkProps> = ({
  href,
  websiteName,
  className,
}) => {
  return (
    <Link
      href={href}
      className={`${className} rounded-xl text-secondary-text-color bg-primary-background-color  px-4 font-semibold flex flex-row items-center gap-2 text-sm`}
    >
      <FaExternalLinkAlt /> {websiteName}
    </Link>
  );
};

export default InternalLink;

import Link from "next/link";
import { FaExternalLinkAlt } from "react-icons/fa";

type InternalLinkProps = {
  href: string;
  websiteName: string;
};

const InternalLink: React.FC<InternalLinkProps> = ({ href, websiteName }) => {
  return (
    <Link
      href={href}
      className="rounded-xl text-gray-500 bg-base-200  px-4 font-semibold flex flex-row items-center gap-2 text-sm"
    >
      <FaExternalLinkAlt /> {websiteName}
    </Link>
  );
};

export default InternalLink;

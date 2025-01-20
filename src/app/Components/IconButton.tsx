import Link from "next/link";

interface TechButtonProps {
  link: string;
  icon: React.ElementType;
}

function IconButton({link, icon: Icon }: TechButtonProps) {
  return (
    <Link
      href={link}
      target="_blank"
      className="w-10 h-10 flex flex-row justify-center items-center rounded-sm text-white hover:translate-x-0.5 hover:translate-y-0.5 transition-all duration-300 border border-white shadow-[3px_3px_1px_2px_rgba(128,128,128,1)] hover:shadow-[3px_3px_1px_1px_rgba(128,128,128,1)]"
    >
      <Icon className="w-full h-full p-0" />
    </Link>
  );
}

export default IconButton;

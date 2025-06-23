import Link from "next/link";
import SocialLinks from "@/app/components/ui/social-link";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-400 py-6 text-center">
      <div className="container bg-gray-800 text-white py-4 mx-auto text-center space-x-4">
        <Link href="/Activities" className="hover:underline">
          Activity Zone
        </Link>
        <Link href="/Contact" className="hover:underline">
          Contact Us
        </Link>
        <SocialLinks />
        <p>&copy; 2025 BTB CBO. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;

import { cn } from "@/lib/utils";

import LaunchUI from "../../logos/launch-ui";
import {
  Footer,
  FooterBottom,
  FooterColumn,
  FooterContent,
} from "../../ui/footer";
import { ModeToggle } from "../../ui/mode-toggle";

export default function FooterSection2({
  columns = [
    {
      title: "Product",
      links: [
        { text: "Changelog", href: "/" },
        { text: "Documentation", href: "/" },
      ],
    },
    {
      title: "Company",
      links: [
        { text: "About", href: "/about" },
        { text: "Careers", href: "/" },
        { text: "Blog", href: "/" },
      ],
    },
    {
      title: "Contact",
      links: [
        { text: "Discord", href: "/" },
        { text: "Twitter", href: "/" },
        { text: "Github", href: "/" },
      ],
    },
  ],

  copyright = "© 2025 Secnote. All rights reserved",

  policies = [
    { text: "About", href: "/about" },
    { text: "Contact", href: "/contact" },
    { text: "Privacy Policy", href: "/privacy" },
    { text: "Terms of Service", href: "/terms" },
  ],

  showModeToggle = true,
  className,
}) {
  return (
    <footer className={cn("bg-blue-100 w-full px-4 g-font", className)}>
      <div className="max-w-container mx-auto g-font">
        <Footer>
          <FooterBottom>
            <div className="text-[13px]">{copyright}</div>
            <div className="flex items-center gap-4 text-[13px]">
              {policies.map((policy, index) => (
                <a key={index} href={policy.href}>
                  {policy.text}
                </a>
              ))}
            </div>
          </FooterBottom>
        </Footer>
      </div>
    </footer>
  );
}

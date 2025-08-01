import { Menu } from "lucide-react";

import { cn } from "@/lib/utils";

import LaunchUI from "../../logos/launch-ui";
import { Button } from "../../ui/button";
import {
  Navbar as NavbarComponent,
  NavbarLeft,
  NavbarRight,
} from "../../ui/navbar";
import Navigation from "../../ui/navigation";
import { Sheet, SheetContent, SheetTrigger } from "../../ui/sheet";

export default function Navbar({
  logo = <LaunchUI />,
  name = "Secnote",
  homeUrl = "/",

  mobileLinks = [
    { text: "Built for Privacy", href: "/" },
    { text: "Components", href: "/" },
    { text: "Documentation", href: "/" },
  ],

  actions = [
    // { text: "Sign in", href: "https://www.launchuicomponents.com/", isButton: false },
    {
      text: "Built for Privacy",
      href: "/contact",
      isButton: true,
      variant: "default",
    },
  ],

  showNavigation = true,
  customNavigation,
  className,
}) {
  return (
    <header className={cn("sticky top-0 z-50 -mb-4 px-4 pb-2", className)}>
      <div className="fade-bottom bg-blue-100 absolute left-0 h-24 w-full backdrop-blur-"></div>
      <div className="max-w-container relative mx-auto">
        <NavbarComponent>
          <NavbarLeft>
            <a
              href={homeUrl}
              className="flex items-center gap-2 text-[33px] font-bold is-font"
            >
              {logo}
              {name}
            </a>
            {/* {showNavigation && (customNavigation || <Navigation />)} */}
          </NavbarLeft>
          {/* <NavbarRight>
            {actions.map((action, index) =>
              action.isButton ? (
                <Button key={index} variant={action.variant || "default"} asChild>
                  <a href={action.href}>
                    {action.icon}
                    {action.text}
                    {action.iconRight}
                  </a>
                </Button>
              ) : (
                <a key={index} href={action.href} className="hidden text-sm md:block">
                  {action.text}
                </a>
              ))}
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="shrink-0 md:hidden">
                  <Menu className="size-5" />
                  <span className="sr-only">Toggle navigation menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right">
                <nav className="grid gap-6 text-lg font-medium">
                  <a href={homeUrl} className="flex items-center gap-2 text-xl font-bold">
                    <span>{name}</span>
                  </a>
                  {mobileLinks.map((link, index) => (
                    <a
                      key={index}
                      href={link.href}
                      className="text-muted-foreground hover:text-foreground">
                      {link.text}
                    </a>
                  ))}
                </nav>
              </SheetContent>
            </Sheet>
          </NavbarRight> */}
        </NavbarComponent>
      </div>
    </header>
  );
}

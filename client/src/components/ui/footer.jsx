import * as React from "react";

import { cn } from "@/lib/utils";

function Footer({
  className,
  ...props
}) {
  return (
    (<div
      data-slot="footer"
      className={cn("bg-blue-100 text-foreground pt-12 pb-4", className)}
      {...props} />)
  );
}

function FooterContent({
  className,
  ...props
}) {
  return (
    (<div
      data-slot="footer-content"
      className={cn(
        "grid grid-cols-2 gap-8 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5",
        className
      )}
      {...props} />)
  );
}

function FooterColumn({
  className,
  ...props
}) {
  return (
    (<div
      data-slot="footer-column"
      className={cn("flex flex-col gap-4", className)}
      {...props} />)
  );
}

function FooterBottom({
  className,
  ...props
}) {
  return (
    (<div
      data-slot="footer-bottom"
      className={cn(
        "border-gray-400 dark:border-gray-600 text-muted-foreground mt-8 flex flex-col items-center justify-between gap-4 border-t pt-4 text-xs sm:flex-row",
        className
      )}
      {...props} />)
  );
}

export { Footer, FooterBottom, FooterColumn, FooterContent };

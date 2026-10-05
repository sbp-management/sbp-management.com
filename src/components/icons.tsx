import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

/** Lucide-style stroke icons (24px grid, 2px stroke, round caps). */
function Stroke({ children, ...props }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      {children}
    </svg>
  );
}

export const PhoneIcon = (p: IconProps) => (
  <Stroke {...p}>
    <path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384" />
  </Stroke>
);

export const MailIcon = (p: IconProps) => (
  <Stroke {...p}>
    <rect width="20" height="16" x="2" y="4" rx="2" />
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
  </Stroke>
);

export const ArrowRightIcon = (p: IconProps) => (
  <Stroke {...p}>
    <path d="M5 12h14" />
    <path d="m12 5 7 7-7 7" />
  </Stroke>
);

export const MenuIcon = (p: IconProps) => (
  <Stroke {...p}>
    <path d="M4 5h16" />
    <path d="M4 12h16" />
    <path d="M4 19h16" />
  </Stroke>
);

export const CloseIcon = (p: IconProps) => (
  <Stroke {...p}>
    <path d="M18 6 6 18" />
    <path d="m6 6 12 12" />
  </Stroke>
);

/** Eight-point burst used beside the hero eyebrow. */
export function StarIcon(p: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="currentColor"
      aria-hidden="true"
      {...p}
    >
      <path d="M10 0c.7 3.6 1.5 5.4 2.8 6.7 1.3 1.3 3.1 2.1 6.7 2.8-3.6.7-5.4 1.5-6.7 2.8-1.3 1.3-2.1 3.1-2.8 6.7-.7-3.6-1.5-5.4-2.8-6.7C5.9 11 4.1 10.2.5 9.5c3.6-.7 5.4-1.5 6.7-2.8C8.5 5.4 9.3 3.6 10 0Z" />
      <path
        d="m2.9 2.9 4.4 2.5m5.4 9.2 4.4 2.5M17.1 2.9l-2.5 4.4m-9.2 5.4-2.5 4.4"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  );
}

/** Chat bubble with a smile: the icon inside the ">40" stat card. */
export function SmileBubbleIcon(p: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="36"
      height="36"
      viewBox="0 0 36 36"
      fill="none"
      aria-hidden="true"
      {...p}
    >
      <path
        d="M18 4C10.3 4 4 9.4 4 16.2c0 3.2 1.4 6.1 3.7 8.3L6.6 31l6.1-2.9c1.7.5 3.4.8 5.3.8 7.7 0 14-5.4 14-12.2S25.700 4 18 4Z"
        fill="#0e1681"
      />
      <circle cx="13" cy="15" r="1.6" fill="#c8f9e4" />
      <circle cx="23" cy="15" r="1.6" fill="#c8f9e4" />
      <path
        d="M12.500 19.500c1.400 2.300 3.200 3.300 5.500 3.300s4.100-1 5.500-3.300"
        stroke="#c8f9e4"
        strokeWidth="1.800"
        strokeLinecap="round"
      />
    </svg>
  );
}

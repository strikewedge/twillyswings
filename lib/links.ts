export const bio = {
  name: "twillyswings",
  tagline: "massive golf nerd. building tools for the obsessed.",
};

export type Link = {
  title: string;
  description: string;
  href: string;
  icon: string;
  /** The one card the page is about right now: bigger, orange, first. */
  featured?: boolean;
  /** Small uppercase line above a featured card's title. */
  kicker?: string;
};

export const links: Link[] = [
  {
    title: "Strike Wedge Launch",
    description:
      "A launch monitor for your wedge game, built for iPhone. Ball speed, launch angle and carry, with a slow motion replay of every shot. Every Strike Wedge comes with a year of the app.",
    href: "https://app.strikewedge.com",
    icon: "/icons/strikewedge-launch.png",
    featured: true,
    kicker: "New · App Store 13 October",
  },
  {
    title: "Strike Wedge",
    description: "Constraint-based training aid. Click for 20% off.",
    href: "https://strikewedge.com/discount/TWILLYSWINGS",
    icon: "/icons/strikewedge.png",
  },
  {
    title: "Mirror Vision",
    description:
      "See your swing in real time. iPhone streams to iPad — your own personal swing mirror.",
    href: "https://apps.apple.com/us/app/mirror-vision-golf-coaching/id1381051713",
    icon: "/icons/mirror-vision.png",
  },
  {
    title: "Lowpoint",
    description: "Visualise and simulate low point in the golf swing.",
    href: "https://lowpoint.strikewedge.com",
    icon: "/icons/lowpoint.png",
  },
  {
    title: "Strike Wedge Wind",
    description: "Calculate how wind affects your shot, on the course.",
    href: "https://apps.apple.com/au/app/strike-wedge-wind/id6767115548",
    icon: "/icons/strikewedge-wind.png",
  },
];

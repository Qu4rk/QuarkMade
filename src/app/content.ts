// Semantic page content extracted from recognized recipe sections.

export type NavLinkDataItem = {
  label: string;
};
export const navLinkData: NavLinkDataItem[] = [
    { label: "BASE31" },
    { label: "B31 DISTRICT" },
    { label: "Base Living" }
];

export type TileDataItem = {
  description: string;
};
export const tileData: TileDataItem[] = [
    { description: "Today" },
    { description: "Wed, Dec 31" },
    { description: "7:00 PM" }
];

export type CardsItem = {
  variant: string;
  title: string;
  description: string;
};
export const cards: CardsItem[] = [
    { variant: "base31-expands-its-public-art-program-with", title: "Base31 Expands Its Public Art Program with the Launch of the Art Walk, a Collaboration between B31 District and Oeno Gallery", description: "Where History Meets Contemporary Canadian Art" },
    { variant: "understanding-the-base31-community-associa", title: "Understanding the Base31 Community Association", description: "As Base31 continues to grow and evolve, we believe it is important to keep the broader community informed and provide clear, accessible information about the Community Association and its role in Base31’s long-term development. The following information explains why the Community Association was created, how it will operate and what it means for Base31 and the broader Prince Edward County community." },
    { variant: "five-years-in-base31-builds-on-momentum-un", title: "Five years in, Base31 builds on momentum, unveils plans for next chapter in Prince Edward County", description: "The historic Prince Edward Country destination expands community-focused plans, highlighting Base Living housing initiatives and expanding B31 District as a County cultural hub" },
    { variant: "continuing-the-evolution-of-base31", title: "Continuing the Evolution of Base31", description: "As Base31 continues to evolve, we remain focused on strengthening the places where our community gathers. In the coming weeks, the northwest quadrant of the District will undergo a transformation—shaping it into a more flexible, cohesive, and welcoming part of the site." }
];

export type ListRowDataItem = {
  href: string;
  rel?: string;
  target?: string;
  label: string;
};
export const listRowData: ListRowDataItem[] = [
    { href: "/our-story", rel: "noopener noreferrer", target: "_blank", label: "The Base31 Story" },
    { href: "/history", label: "History" },
    { href: "/who-we-are", label: "Who We Are" },
    { href: "/partnerships", label: "Partnerships" },
    { href: "/the-neighbourhood-plan", label: "The Neighbourhood Plan" },
    { href: "/faq", label: "FAQ" }
];

export type ListRow2DataItem = {
  href: string;
  label: string;
};
export const listRow2Data: ListRow2DataItem[] = [
    { href: "/contact-us?inquiry=general", label: "Contact Us" },
    { href: "/contact-us?inquiry=programming-partnerships", label: "Programming Partnerships" },
    { href: "/commercial-leasing", label: "Commercial Leasing" },
    { href: "/contact-us?inquiry=community-partnerships", label: "Community Partnerships" },
    { href: "/contact-us?inquiry=media-press-requests", label: "Media/Press Requests" },
    { href: "/careers", label: "Careers" }
];

export type TextLinkDataItem = {
  href: string;
  label: string;
};
export const textLinkData: TextLinkDataItem[] = [
    { href: "/privacy-policy", label: "Privacy Policy & Cookies" },
    { href: "/terms-conditions", label: "Terms & conditions" },
    { href: "/ticketing-policy", label: "Ticketing Policy" },
    { href: "/land-acknowledgement", label: "Land Acknowledgement" }
];

export type NavLink2DataItem = {
  label: string;
};
export const navLink2Data: NavLink2DataItem[] = [
    { label: "BASE31" },
    { label: "B31 DISTRICT" },
    { label: "Base Living" }
];


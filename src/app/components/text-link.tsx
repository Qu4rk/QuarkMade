import Link from "next/link";

export type TextLinkData = {
  href: string;
  label: string;
};

/** A text link. */
export default function TextLink({ d }: { d: TextLinkData }) {
  const className = "block underline whitespace-nowrap text-nowrap cursor-pointer hover:border-color-002 hover:text-color-002 hover:outline-color-002 hover:[text-decoration-color:var(--color-002)]";
  const isExternal = d.href.startsWith("http") || d.href.startsWith("mailto:") || d.href.startsWith("#");

  if (isExternal) {
    return (
      <a className={className} data-component="link" href={d.href}>
        {d.label}
      </a>
    );
  }

  return (
    <Link className={className} data-component="link" href={d.href}>
      {d.label}
    </Link>
  );
}

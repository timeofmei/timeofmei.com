import Link from "next/link";

interface LinkButton {
  text: string;
  url: string;
}

export function LinkButton({ text, url }: LinkButton) {
  return (
    <Link href={url}>
      <button className="cool-button">
        <span className="cool-actual-text">&nbsp;{text}&nbsp;</span>
        <span className="cool-hover-text">&nbsp;{text}&nbsp;</span>
      </button>
    </Link>
  );
}

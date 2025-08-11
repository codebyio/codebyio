import Link from "next/link";
import classes from "./CoreValue.module.css";

const CoreValue = ({ title, description, descriptionLinks }) => {
  const renderAnswer = (text, links = []) => {
    const isPlainText = !/{{(.*?)}}/.test(text);
    if (isPlainText || links.length === 0) {
      return text; // return as plain string, no wrapping span
    }

    const parts = text.split(/({{.*?}})/g);

    return parts.map((part, idx) => {
      const match = part.match(/{{(.*?)}}/);
      if (match) {
        const key = match[1];
        const link = links.find((l) => l.key === key);
        if (link) {
          return (
            <Link key={idx} href={link.href}>
              {link.text}
            </Link>
          );
        }
        return null;
      }

      // part = plain string → return as-is (no span)
      return part;
    });
  };
  return (
    <article className={classes["core-value"]}>
      <div className={classes["core-value__title"]}>
        <span>{title}</span>
      </div>
      <div className={classes["core-value__description"]}>
        <p>{renderAnswer(description, descriptionLinks)}</p>
      </div>
    </article>
  );
};

export default CoreValue;

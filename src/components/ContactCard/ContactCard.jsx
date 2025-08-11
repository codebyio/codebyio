import Link from "next/link";
import classes from "./ContactCard.module.css";

const ContactCard = ({ icon, title, subtitle, link, linkLabel }) => {
  return (
    <article className={classes["contact-card"]}>
      <span className={classes["contact-card__icon"]}>{icon}</span>
      <div>
        <h4>{title}</h4>
        <p>{subtitle}</p>
        <Link href={link} target='_blank' rel='nofollow'>
          {linkLabel}
        </Link>
      </div>
    </article>
  );
};

export default ContactCard;

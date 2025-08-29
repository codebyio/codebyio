import Link from "next/link";
import classes from "./ContactCard.module.css";

const ContactCard = ({ icon, title, subtitle, links = [], linkLabels = [] }) => {
  return (
    <article className={classes["contact-card"]}>
      <span className={classes["contact-card__icon"]}>{icon}</span>
      <div>
        <h4>{title}</h4>
        <p>{subtitle}</p>
        <div className={classes["contact-card__link-wrapper"]}>
          {links &&
            links.map((link, idx) => {
              return (
                <Link
                  href={link}
                  className={classes["contact-card__link"]}
                  target='_blank'
                  rel='nofollow'
                >
                  {linkLabels[idx]}
                </Link>
              );
            })}
        </div>
      </div>
    </article>
  );
};

export default ContactCard;

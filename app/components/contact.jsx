import styles from "../page.module.css";
import { Mail, MapPin, Phone } from "lucide-react";

export default function Contact() {
  const contacts = [
    {
      icon: Phone,
      label: "Phone",
      value: "+213 781 103 835",
      href: "tel:+213781103835",
    },
    {
      icon: Mail,
      label: "Email",
      value: "siahmed.boudissa@bbmtech.com",
      href: "mailto:siahmed.boudissa@bbmtech.com",
    },
    {
      icon: MapPin,
      label: "Adresse",
      value: "El Achour, Alger",
      href: "https://www.google.com/maps/search/?api=1&query=El%20Achour%20Alger",
    },
  ];

  return (
    <section className={styles.contactSection} id="contact">
      <div className={styles.contactInner}>
        <span className={styles.contactEyebrow}>Contact</span>
        <h2>Let&apos;s stay on <span className={styles.cntct}>contact</span></h2>
        <div className={styles.contactGrid}>
          {contacts.map(({ icon: Icon, label, value, href }) => (
            <a className={styles.contactItem} href={href} key={label}>
              <Icon size={24} />
              <span>{label}</span>
              <strong>{value}</strong>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

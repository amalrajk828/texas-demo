import Link from "next/link";
import { MessagesSquare } from "lucide-react";
import Container from "../Container";
import { FadeUp } from "../motion";
import hero from "./ServiceHero.module.css";
import s from "./ServiceCta.module.css";

interface ServiceCtaProps {
  eyebrow: string;
  title: string;
  description: string;
  primaryCta: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
}

export default function ServiceCta({
  eyebrow,
  title,
  description,
  primaryCta,
  secondaryCta,
}: ServiceCtaProps) {
  return (
    <section className={s.section} aria-label="Discuss your engineering project">
      <Container>
        <FadeUp duration={0.7} yOffset={24}>
          <div className={s.card}>
            <div className={hero.backdrop} aria-hidden="true" />
            <div className={s.main}>
              <div className={s.content}>
                <div className={s.eyebrow}>
                  <span aria-hidden="true" />
                  {eyebrow}
                </div>
                <h2 className={s.title}>{title}</h2>
                <p className={s.description}>{description}</p>
              </div>

              <div className={s.actionPanel}>
                <div className={s.panelHeading}>
                  <span className={s.icon} aria-hidden="true">
                    <MessagesSquare size={23} strokeWidth={1.5} />
                  </span>
                  <div>
                    <p className={s.panelLabel}>Start a conversation</p>
                    <p className={s.panelNote}>Technical guidance. Clear next steps.</p>
                  </div>
                </div>
                <div className={s.actions}>
                  <Link href={primaryCta.href} className={hero.primaryButton}>
                    {primaryCta.label}
                  </Link>
                  {secondaryCta && (
                    <Link href={secondaryCta.href} className={hero.secondaryButton}>
                      {secondaryCta.label}
                    </Link>
                  )}
                </div>
              </div>
            </div>

            <div className={s.footer}>
              <span>Engineering expertise since 2008</span>
              <span>Kuwait &amp; UAE <span className={s.separator} aria-hidden="true">/</span> Serving the GCC</span>
            </div>
          </div>
        </FadeUp>
      </Container>
    </section>
  );
}

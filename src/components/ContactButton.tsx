import { ArrowRight, Mail } from "lucide-react";
import { profile } from "../data";
import { Magnet } from "./Magnet";

type ContactButtonProps = {
  className?: string;
  label?: string;
};

export function ContactButton({ className, label = "Contact me" }: ContactButtonProps) {
  return (
    <Magnet className={className} strength={6}>
      <a href={`mailto:${profile.email}`} className="contact-button group">
        <Mail className="h-4 w-4" aria-hidden="true" />
        <span>{label}</span>
        <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" aria-hidden="true" />
      </a>
    </Magnet>
  );
}

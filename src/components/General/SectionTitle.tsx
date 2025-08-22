import { cn } from "@/libs/cn";

interface Props {
  title: string;
  sectionNumber: string;
  className?: string;
}

export default function SectionTitle({ title, sectionNumber, className }: Props) {
  return (
    <div className={cn("bg-primary sticky top-8 z-20 flex flex-col pb-8", className)}>
      <p className="supporting-text">Section {sectionNumber}</p>
      <h2 className="heading-section">{title}</h2>
    </div>
  );
}

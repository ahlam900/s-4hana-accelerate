import Reveal from "@/components/Reveal";
import { useTx } from "@/i18n/tx";

const KeyMetrics = () => {
  const tx = useTx();
  const metrics = [
    { value: "+15", label: tx("Années d'expertise SAP Finance", "Years of SAP Finance expertise") },
    { value: "+30", label: tx("Projets S/4HANA accompagnés", "S/4HANA projects delivered") },
    { value: "+20", label: tx("Grandes entreprises référencées", "Major companies referenced") },
    { value: "100%", label: tx("Formations orientées terrain", "Field-oriented programs") },
  ];

  return (
    <section className="section-y bg-background">
      <div className="container-wide">
        <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-border/40">
          {metrics.map((m, i) => (
            <Reveal key={m.label} delay={i * 80} className="px-6 md:px-10 py-8 text-center">
              <div className="font-display text-[42px] md:text-[52px] text-champagne font-medium leading-none">
                {m.value}
              </div>
              <div className="mt-5 text-muted-foreground text-[12px] md:text-[13px] uppercase tracking-[0.15em] leading-[1.5]">
                {m.label}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default KeyMetrics;

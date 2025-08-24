import { useTitle } from "@/shared/lib/useTitle";
import { members } from "@/entities/member";
import { Card } from "@/widgets/card";
 
export function HomePage() {
  useTitle("Главная");
  return (
    <div className="page container">
      <section className="section">
        <h1 className="h1">Наша команда</h1>
      </section>
      
      <section className="section">
        <div className="grid cards">
          {members.map((m) => (
            <Card key={m.id} member={m} />
          ))}
        </div>
      </section>
    </div>
  );
}
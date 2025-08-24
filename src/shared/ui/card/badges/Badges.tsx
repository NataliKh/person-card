import { Member } from "@/entities/member/model/types";
import { Badge } from "./badge/Badge";

type BadgesProps = Pick<Member, "skills">;

export function Badges({ skills }: BadgesProps) {
  return (
    <div className="badges">
      {skills?.map((skill) => (
        <Badge content={skill.name} key={skill.id} />
      ))}
    </div>
  );
}

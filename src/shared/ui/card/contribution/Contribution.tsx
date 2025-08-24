import { Member } from "@/entities/member/model/types";
import { deriveAreasFromContribution } from "@/entities/member/model/areas";

type ContributionProps = Pick<Member, "contribution">;

export function Contribution({ contribution = [] }: ContributionProps) {
  const areas = deriveAreasFromContribution(contribution);
  const short = areas.slice(0, 2);
  const content = short.length ? short.join(" · ") : "—";
  return <span>{content}</span>;
}

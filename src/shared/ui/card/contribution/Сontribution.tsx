import { Member } from "@/entities/member/model/types";

type ContributionProps = Pick<Member, "contribution">;

export function Сontribution({ contribution = "" }: ContributionProps) {
  const contributions = contribution.split(":")[1].split(",");
  const firstTitle: string =
    contributions[0].trim().slice(0, 1).toUpperCase() + contributions[0].trim().slice(1) || "";
  const secondTitle: string =
    contributions[1].trim().slice(0, 1).toUpperCase() + contributions[1].trim().slice(1) || "";
  return (
    <>
      {secondTitle ? (
        <span>
          {firstTitle} · {secondTitle}
        </span>
      ) : (
        <span>{firstTitle}</span>
      )}
    </>
  );
}

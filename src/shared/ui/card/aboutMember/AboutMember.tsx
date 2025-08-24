import { Member } from "@/entities/member/model/types";
type AboutMemberProps = Pick<Member, "firstName" | "lastName" | "age" | "about">;

export function AboutMember({ firstName, lastName, age, about }: AboutMemberProps) {
  return (
    <>
      <div>
        <strong>
          {firstName} {lastName}
        </strong>{" "}
        · <span className="small">{age} лет</span>
      </div>
      <div className="small">{about}</div>
    </>
  );
}

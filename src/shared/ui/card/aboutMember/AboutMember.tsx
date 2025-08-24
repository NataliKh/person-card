import { Member } from "@/entities/member/model/types";
type AboutMemberProps = Pick<Member, "firstName" | "lastName" | "age" | "about">;

export function AboutMember({ firstName, lastName, age, about }: AboutMemberProps) {
  return (
    <>
      <div>
        <strong>
          {firstName} {lastName}
        </strong>
        {typeof age === "number" ? <span className="small"> &middot; {age} лет</span> : null}
      </div>
      {about ? <div className="small">{about}</div> : null}
    </>
  );
}

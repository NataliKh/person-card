import { Favorites, CardImage, AboutMember, Badges, Сontribution } from "@/shared/ui/card";
import { Member } from "@/entities/member/model/types";
import { NavLink } from "react-router-dom";
import { routes } from "@/shared/config/routes";
import "@/app/styles/index.css";
type CardProps = {
  member: Member;
};
export function Card({ member }: CardProps) {
  return (
    <article className="card">
      <Favorites />
      <CardImage src={member.avatarUrl} alt={member.firstName} />
      <div className="card-body">
        <AboutMember
          firstName={member.firstName}
          lastName={member.lastName}
          about={member.about}
          age={member.age}
        />
        <Badges skills={member.skills} />
        <div className="card-footer">
          <Сontribution contribution={member.contribution} />
          <NavLink to={routes.member(member.id)} className="small">
            Открыть →
          </NavLink>
        </div>
      </div>
    </article>
  );
}

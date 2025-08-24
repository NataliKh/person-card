import { CardImage, AboutMember, Badges, Contribution } from "@/shared/ui/card";
import { ToggleFavorite } from "@/features/favorites/toggle/ui/ToggleFavorite";
import { Member } from "@/entities/member/model/types";
import { useNavigate } from "react-router-dom";
import { routes } from "@/shared/config/routes";
import "@/app/styles/index.css";
type CardProps = {
  member: Member;
};
export function Card({ member }: CardProps) {
  const navigate = useNavigate();
  const toMember = () => navigate(routes.member(member.id));
  const onKey = (e: React.KeyboardEvent<HTMLElement>) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      toMember();
    }
  };

  return (
    <article
      className="card"
      role="link"
      tabIndex={0}
      onClick={toMember}
      onKeyDown={onKey}
    >
      <ToggleFavorite id={member.id} />
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
          <Contribution contribution={member.contribution} />
        </div>
      </div>
    </article>
  );
}

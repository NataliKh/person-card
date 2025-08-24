export type Skill = {
  id?: string;
  name: string;
  level?: number;
  color?: string;
  type?: "bar" | "circle";
};

export type Member = {
  id: string;
  firstName: string;
  lastName: string;
  age?: number;
  about?: string;
  avatarUrl?: string;
  socials?: Array<{ platform: "tg" | "vk" | "github" | "linkedin" | "x" | "site"; url: string }>;
  roleBadge?: string;
  skills?: Skill[];
  contribution?: string[];
  portfolio?: string[];
};

import PersonIcon from "@mui/icons-material/Person";
import TwitterIcon from "@mui/icons-material/Twitter";
import ArticleIcon from "@mui/icons-material/Article";
import WorkIcon from "@mui/icons-material/Work";
import SchoolIcon from "@mui/icons-material/School";
import AccountTreeIcon from "@mui/icons-material/AccountTree";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import CardMembershipIcon from "@mui/icons-material/CardMembership";
import ConstructionIcon from "@mui/icons-material/Construction";
import PoolIcon from "@mui/icons-material/Pool";
import TranslateIcon from "@mui/icons-material/Translate";
import PeopleIcon from "@mui/icons-material/People";

export type MenuLeftData = {
  icon: any;
  title: string;
};

const menuLeftData: MenuLeftData[] = [
  {
    icon: PersonIcon,
    title: "Profile",
  },

  { icon: TwitterIcon, title: "Social Network" },
  { icon: ArticleIcon, title: "Objective" },
  { icon: WorkIcon, title: "Work Experience" },
  { icon: SchoolIcon, title: "Education" },
  { icon: AccountTreeIcon, title: "Projects" },
  { icon: EmojiEventsIcon, title: "Awards" },
  { icon: CardMembershipIcon, title: "Certifications" },

  { icon: ConstructionIcon, title: "Skills" },

  { icon: PoolIcon, title: "Hobbies" },
  { icon: TranslateIcon, title: "Languages" },

  { icon: PeopleIcon, title: "References" },
];

export default menuLeftData;

import { DiDotnet, DiPostgresql,DiReact } from "react-icons/di";
import { SiJava, SiFirebase, SiGit } from "react-icons/si";
import { RiFlutterFill } from "react-icons/ri";

export const Skills = [
  {
    slug: "React",
    Component: DiReact,
    title: "React",
    Description: () => <>I work on ReactJs to create responsive websites.</>,
  },
  {
    slug: "flutter",
    Component: RiFlutterFill,
    title: "Flutter",
    Description: () => <>Currently working with Dart & Flutter for app development. </>,
  },
  {
    slug: "java",
    Component: SiJava,
    title: "Java",
    Description: () => <>I can code in Java. But I mainly use it for Android app development.</>,
  },
  {
    slug: ".NET",
    Component: DiDotnet,
    title: ".NET",
    Description: () => <>I am Currently learning the basics of Desktop development using C#.</>,
  },
  {
    slug: "PostgreSQL",
    Component: DiPostgresql,
    title: "PostgreSQL",
    Description: () => <>I have used PostgreSQL for auth, database & analytics in my apps.</>,
  },
  {
    slug: "git",
    Component: SiGit,
    title: "Git",
    Description: () => <>Git is a tool that I use every day. I use GitHub for pushing my code.</>,
  },
];

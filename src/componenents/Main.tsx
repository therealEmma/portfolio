import { ReactNode } from "react";
import { useLocation } from "react-router-dom";
import { FaExternalLinkAlt } from "react-icons/fa";
import profilePic from "../assets/profilepic.jpg";
import {
  Container,
  Highlight,
  SideBar,
  SideBarBigHeading,
  SideBarSmallHeading,
  SideBarParagraph,
  SideBarParagraphContainer,
  SideBarMenu,
  SideBarMenuList,
  SideBarMenuItem,
  MainView,
  SideBarMenuLink,
  SideBarMenuLinkUnderline,
  SideBarMenuName,
  SideBarFooter,
  SideBarContact,
  SideBarAvatarContainer,
  SideBarAvatar,
  SidebarSocials,
  SideBarInspired,
  SideBarInspiredContainer,
  SideBarHeader,
} from "../styles/Main.style";
import Toggle from "./Toggle";
import { ContactLinks, NavLinks } from "../utils/helpers";

interface Props {
  children: ReactNode;
  theme: string;
  toggleTheme: (() => void);
}

export default function Main({ children, theme, toggleTheme }: Props) {
  const location = useLocation();
  const currentPath = location.pathname;
  return (
    <>
    <Toggle theme={theme} toggleTheme={toggleTheme} />
    <Container>
      <SideBar>
       <SideBarHeader>
  <SideBarSmallHeading>Hello, I'm</SideBarSmallHeading>
  <SideBarBigHeading>Ozegbe Emmanuel.</SideBarBigHeading>
  <SideBarParagraphContainer>
    <SideBarParagraph>
  I'm a <Highlight>Backend Software Engineer</Highlight> specializing in{" "}
  <Highlight>scalable architecture</Highlight> and high-concurrency systems. I excel at designing{" "}
  <Highlight>resilient RESTful APIs</Highlight>, modeling complex{" "}
  <Highlight>relational databases</Highlight>, and integrating{" "}
  <Highlight>secure payment workflows</Highlight>. With deep expertise across{" "}
  <Highlight>Node.js, PostgreSQL, and Redis</Highlight>, I build the reliable infrastructure that powers seamless user experiences.
</SideBarParagraph>
  </SideBarParagraphContainer>
</SideBarHeader>
          <SideBarMenu>
            <SideBarMenuList>
              {NavLinks.map((navItem, i) => {
                return (
                  <SideBarMenuItem
                    title={navItem.name}
                    key={navItem.id}
                    $path={currentPath}
                  >
                    <SideBarMenuLink
                      to={navItem.link}
                      id={navItem.id}
                      $active={currentPath === navItem.link}
                    >
                      <span>0{i}</span>
                      <SideBarMenuLinkUnderline className="underline" />
                      <SideBarMenuName>{navItem.name}</SideBarMenuName>
                    </SideBarMenuLink>
                  </SideBarMenuItem>
                );
              })}
            </SideBarMenuList>
          </SideBarMenu>
        <SideBarFooter>
          <SideBarContact>
            <SideBarAvatarContainer>
              <SideBarAvatar
                src={profilePic}
                alt="Ozegbe Emmanuel"
              />
            </SideBarAvatarContainer>
            <SidebarSocials>
              {ContactLinks.map((contact, i) => {
                const Icon = contact.Icon;
                return (
                  <a
                    id={`${i}`}
                    key={contact.id}
                    href={contact.link}
                    className="socials__link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="icon icon--lg">
                      {Icon && <Icon />}
                    </span>
                    <span className="text">{contact.name}</span>
                    <span className="icon icon--sm">
                      <FaExternalLinkAlt />
                    </span>
                  </a>
                );
              })}
            </SidebarSocials>
          </SideBarContact>
          <SideBarInspiredContainer>
            Inspired by{" "}
            <SideBarInspired
              href="https://lope.cell.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Lope Adebesin
            </SideBarInspired>
          </SideBarInspiredContainer>
        </SideBarFooter>
      </SideBar>
      <MainView>{children}</MainView>
    </Container>
    </>
  );
}

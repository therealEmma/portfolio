import { Helmet } from "react-helmet";
import profilePic from "../assets/profilepic.jpg";
import {
  Container,
  HomeView,
  ImageContainer,
  Image,
  Heading,
  Paragraph,
  ParagraphHighlight,
  MenuLink,
  Button,
} from "../styles/Home.style";
import { FaChevronRight } from "react-icons/fa";

export default function Home() {
  return (
    <>
      <Helmet>
        <title> Ozegbe Emmanuel</title>
      </Helmet>

      <Container>
        <HomeView>
          <ImageContainer>
            <Image src={profilePic} alt="Profile Pic"></Image>
          </ImageContainer>
          <Heading>
            <span>Hello, I'm</span> Ozegbe Emmanuel
          </Heading>
          <Paragraph>
           I'm a <ParagraphHighlight>results-driven</ParagraphHighlight> Frontend Engineer with
            <ParagraphHighlight> experience </ParagraphHighlight> in frontend development and  backend integrations. 
            My <ParagraphHighlight>expertise</ParagraphHighlight> includes <ParagraphHighlight>HTML, CSS, JavaScript, TypeScript, React, Tailwind CSS, Next.js,</ParagraphHighlight>.
           I am committed to
            <ParagraphHighlight> creating and optimizing  </ParagraphHighlight>
            user-friendly web solutions and interactions,
            <ParagraphHighlight> helping</ParagraphHighlight> organizations achieve their goals 
            <ParagraphHighlight> effectively.</ParagraphHighlight>.
          </Paragraph>
          <MenuLink to="/work">
            <Button>
              <span>Explore</span>{" "}
              <span className="icon">{<FaChevronRight />}</span>
            </Button>
          </MenuLink>
        </HomeView>
      </Container>
    </>
  );
}

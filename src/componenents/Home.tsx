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
           I'm a <ParagraphHighlight>results-driven</ParagraphHighlight> Backend Software Engineer
            <ParagraphHighlight> with experience </ParagraphHighlight> in building scalable architecture
          and high-concurrency systems. I excel at designing <ParagraphHighlight> my expertise</ParagraphHighlight> includes <ParagraphHighlight>resilient RESTful APIs,</ParagraphHighlight>.
           modelling, complex relationships and 
            <ParagraphHighlight> integrating  </ParagraphHighlight>
            integrating secure payment workflows
            <ParagraphHighlight>  With deep expertise across</ParagraphHighlight> Node.js, PostgreSQL, and Redis
            <ParagraphHighlight> I build the reliable infrastructure that powers seamless user experiences effectively.</ParagraphHighlight>.
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

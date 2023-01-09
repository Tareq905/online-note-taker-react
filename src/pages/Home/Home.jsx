//styles
import { Container, Box, LeftBox, RightBox } from "./Home.styles";
import { ButtonFill } from "../../styles/styles";

import images from "../../assets";

import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  return (
    <Container>
      <div className="home__header">
        <div className="home__logo">
          <img src={images.colorLogo} alt="" />
          <span>Ikaros - The online note taker</span>
        </div>
      </div>
      <Box>
        <LeftBox>
          <div className="home__main-heading">
          “ Be yourself; everyone else is already taken. ”
          </div>
          <p className="home__sub-heading">
            This will help you to create, organise and save your notes
            across all platforms.
          </p>
          <ButtonFill
            className="home__btn"
            onClick={() => navigate("/notes", { state: "notes" })}
          >
            <span>Here We Go...</span>
          </ButtonFill>
        </LeftBox>
        <RightBox>
          <img src={images.homePageGif} alt="home_gif" />
        </RightBox>
      </Box>
    </Container>
  );
};

export default Home;

import React from "react";
import { Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Navbar from "../layout/Navbar";

function SingleArticleIndex() {
  const navigate = useNavigate();
  return (
    <>
      <Navbar />
      <div className="single-article">
        <div className="back-arrow" onClick={() => navigate(-1)}>
          <i className="fa fa-arrow-left"></i>
        </div>
        <Container>
          <div className="article-title">We Create The Magic Of Christmas</div>
          <div className="subtitle">
            What we do with this holiday is dependent on the choices we make.
          </div>
          <div className="img-wrapper">
            <img src="/images/banner.jpeg" alt="" />
          </div>
          <div className="article-content">
            <p>
              I can remember Christmas in childhood. My mom got these
              incandescent Christmas lights that would just randomly blink. I
              loved how those clear glass lights would blink in a way that I
              could never predict. They mesmerized me. I also loved the way the
              lights cast multicolored shadows onto the walls around the tree. I
              was captivated by the spectacle of this wonderful tree, surrounded
              by presents, smelling of pine.
            </p>
            <p>
              That was a family tradition. It didn’t last when I grew up. I
              spent many years alone. I just didn’t see the point in having a
              tree in the apartments and rooms that I rented. It wasn’t until I
              got married that I got in the habit of putting up a tree again.
              What had changed was my level of commitment to life.
            </p>
            <p>
              As I look at my life now, I see that I am here because I made
              commitments to other people. None of what I do or what I have
              would be possible without commitments to other people. I started
              by committing to myself, to know myself. When I knew myself
              enough, I committed to a life with the woman I am married to now.
              Then I committed to having kids. I committed a part of my life to
              an employer, too. What I got in return for those commitments was a
              stable, relatively happy life.
            </p>
            <p>
              The happiness and the joy that I can experience and share during
              this holiday are a direct consequence of the commitments I’ve made
              to other people. I made choices that brought me here. I could
              easily have drifted off into lonely obscurity, but that would not
              have made me happy. I had to choose to go the other way.
            </p>
            <p>
              I do what I do not because this is how the world is, I do it
              because this is how I want the world to be.
            </p>
          </div>
        </Container>
      </div>
    </>
  );
}

export default SingleArticleIndex;

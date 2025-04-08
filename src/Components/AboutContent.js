import AboutMeImage from "../Imgs/AboutMe.png";

//FUNÇÃO QUE EXPORTA
const AboutContent = () => {
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-md-12 pt-5 pb-4">
            <h4 className="text-start text-white">
              Get to Know{" "}
              <n style={{ color: "#0a58ca" }} className="fw-bolder">
                Me
              </n>
            </h4>
          </div>
        </div>
        <div className="row pb-5 mb-5">
          <div className="col-md-6 mt-auto mb-auto">
            <div className="pt-2">
              <p className="fs-6 text-white">
                I'm <n className="coloredText">Tomás Sousa</n>, a first year
                student of the Master in Communication and Web Technologies at
                the University of Aveiro. I come from a degree in Multimedia and
                Communication Technologies and I am looking to expand my
                knowledge in
                <n className="coloredText">web development</n>.
              </p>
              <p className="fs-6 text-white">
                I enjoy the{" "}
                <n className="coloredText">problem-solving aspect of coding</n>,
                along with helping those whom I work alongside. By this, I mean
                I try to make the work environment as enjoyable as possible,
                while also being productive.
              </p>
              <p className="fs-6 text-white">
                Currently, this is my portfolio and it{" "}
                <n className="coloredText">
                  sums up the information about me and about my most important
                  projects
                </n>
              </p>
              <p className="fs-6 text-white">
                I'm looking forward to{" "}
                <n className="coloredText">working with you</n>!
              </p>
              <p className="fs-6 text-white">
                <n className="coloredText">
                  "If you do what you love, you'll never work a day in your
                  life." -{" "}
                  <n style={{ fontStyle: "italic", opacity: "75%" }}>
                    Marc Anthony
                  </n>
                </n>
              </p>
            </div>
          </div>
          <div className="col-md-6 d-flex justify-content-center align-items-center text-center">
            <img
              src={AboutMeImage}
              alt="Illustration Representing a Web Developer at their job."
              className="img-fluid"
              style={{
                maxHeight: window.innerWidth <= 768 ? "300px" : "450px",
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

//EXPORT PARA AS OUTRAS PÁGINAS
export default AboutContent;

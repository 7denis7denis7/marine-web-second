import Button from "../Button/Button";
import "./GetInTouch.scss";

const GetInTouch = () => {
  return (
    <section className="touch">
      <div className="container">
        <div className="touch__inner">
          <div>
            <h2>Get in touch</h2>
            <p>
              Let&apos;s discuss your questions. <br />
              Book a time and we will get back to you.
            </p>
          </div>
          <Button />
        </div>
      </div>
    </section>
  );
};

export default GetInTouch;

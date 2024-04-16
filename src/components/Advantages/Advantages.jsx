import "./Advantages.scss";
import * as advImgs from "../../assets/advantages";
import Button from "../Button/Button";

const advs = [
  {
    id: 1,
    title: "Customer Focus",
    desc: "Long-term partnerships.",
    img: advImgs.adv1,
  },
  {
    id: 2,
    title: "Customized approach",
    desc: "Customized for each client.",
    img: advImgs.adv2,
  },
  {
    id: 3,
    title: "Advanced technology",
    desc: "Innovative solutions",
    img: advImgs.adv3,
  },
  {
    id: 4,
    title: "Sustainable Solutions",
    desc: "Environmental focus.",
    img: advImgs.adv4,
  },
  {
    id: 5,
    title: "Comprehensive services",
    desc: "All-in-one solutions.",
    img: advImgs.adv5,
  },
  {
    id: 6,
    title: "Reduce OPEX",
    desc: "Optimize your spend.",
    img: advImgs.adv6,
  },
  {
    id: 7,
    title: "Improve Security",
    desc: "Protect your data.",
    img: advImgs.adv7,
  },
  {
    id: 8,
    title: "Easy to use",
    desc: "Even a kid can understand it :)",
    img: advImgs.adv8,
  },
];
const Advantages = () => {
  return (
    <section className="advantages">
      <div className="container">
        <div className="advantages__inner">
          <h2>Our advantages</h2>
          <h4>Choose Marine ERP</h4>
          <div className="advantages__grid">
            {advs.map((adv) => (
              <div key={adv.id} className={`tile${adv.id}`}>
                <img src={adv.img} alt={adv.title} width="100" height="100" />
                <div>
                  <h5>{adv.title}</h5>
                  <h6>{adv.desc}</h6>
                </div>
              </div>
            ))}
          </div>
          <div className="advantages__contact">
            <h2>Get in touch</h2>
            <p>
              Let&apos;s discuss your questions. <br />
              Book a time and we will get back to you.
            </p>
            <Button />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Advantages;

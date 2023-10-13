import Image from "next/image";

import hero from "@/assets/images/hero/hero.jpeg";

interface Props {
  videoHeight: number;
}

export function Hero({ videoHeight }: Props) {
  return (
    <section className="home-container" style={{ marginTop: videoHeight }}>
      <div className="home-content">
        <span className="home-blur"></span>
        <span className="home-blur"></span>
        <h4>CREATE YOUR SITE LIKE A PRO</h4>
        <h1>
          Hi, Im <span>Reza</span>, Web Developer
        </h1>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus
          rem eos aliquid quo rerum temporibus ipsum distinctio numquam ut omnis
          placeat, nam sint atque quos dolorem laborum? Rerum, esse dolorem.
        </p>
        <button className="home-btn">Get Started</button>
      </div>
      <div className="home-image">
        <Image src={hero} alt="sdf" width={200} height={200} />
      </div>
    </section>
  );
}

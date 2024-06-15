import Buttons from "./Buttons";
import Cards from "../components/Cards";

const features = [
  {
    icon: "⚡️",
    title: "Instant Server Start",
    content: "On demand file serving over native ESM, no bundling required!"
  },
  {
    icon: "⚡️",
    title: "Lightning Fast HMR",
    content: "Hot Module Replacement (HMR) that stays fast regardless of app size."
  },
  {
    icon: "🛠️",
    title: "Rich Features",
    content: "Out-of-the-box support for TypeScript, JSX, CSS and more."
  },
  {
    icon: "📦",
    title: "Optimized Build",
    content: "Pre-configured Rollup build with multi-page and library mode support."
  },
  {
    icon: "🔩",
    title: "Universal Plugins",
    content: "Rollup-superset plugin interface shared between dev and build."
  },
  {
    icon: "🔑",
    title: "Fully Typed APIs",
    content: "Flexible programmatic APIs with full TypeScript typing."
  }
];

const SeccionUp = () => {
  return (
    <section>
      <div className="container-wrapper">
        <div className="container">
          <div className="image-container">
            <img src="https://vitejs.dev/logo-with-shadow.png" alt="Vite" />
          </div>
          <h1 className="">Vite</h1>
          <p className="text">Next Generation <br /> Frontend Tooling</p>
          <p className="tagline">Get ready for a development environment that can finally catch up with you.</p>
        </div>
      </div>
      <Buttons title='Get started' />
      <Buttons title='White Vite?' />
      <Buttons title='View on GitHub' />
      <Buttons title='ViewConf 23!' />
      <br />
      {
        features.map((item)=>(
          <Cards icon={item.icon} title={item.title} content={item.content}/>
        ))
      }
    </section>
  )
}

export default SeccionUp;
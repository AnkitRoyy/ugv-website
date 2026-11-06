import PageHead from "../common/PageHead";
import PageCta from "../common/PageCta";

const TILES = [
  ["01", "Autonomy", "Perception, localization, planning, and control systems enabling intelligent navigation."],
  ["02", "Robotics Systems", "Mechanical design, electronics, embedded systems, and integration of complex robotics platforms."],
  ["03", "Research", "Focused on SLAM, AI-based perception, and robust autonomy through experimentation."],
];

export default function About() {
  return (
    <section id="about" className="site-page">
      <PageHead eyebrow="01 — About us" title={<>Built in India.<br />For Indian roads.</>}
        intro="An undergraduate team at Delhi Technological University building autonomous ground vehicles end to end." />
      <div className="about-copy">
        <p>UGV-DTU is a team of undergraduate students at Delhi Technological University working on autonomous ground vehicle technology. The team was formed with a clear national goal: to build a ‘Made in India’ solution for complete vehicular autonomy that is specifically designed for Indian road conditions.</p>
        <p>Unlike most self-driving vehicle research which is targeted at structured western road environments, UGV-DTU focuses on the unique challenges of Indian roads: unstructured traffic, poor lane discipline, unpredictable obstacles, and varied terrain. The team works across mechanical engineering, electronics, computer vision, and robotics software to build fully integrated autonomous platforms from scratch.</p>
        <p>The team designs, builds, and validates unmanned ground vehicles end-to-end. On the hardware side, this includes custom chassis fabrication, suspension systems, drivetrain assembly, and integration of sensors such as LiDAR, stereo cameras, IMU, and GPS/RTK modules. On the software side, the team develops a full ROS 2-based autonomous navigation stack featuring SLAM for real-time mapping, Nav2 for path planning, EKF for sensor fusion, and custom computer vision pipelines for lane detection and obstacle recognition.</p>
      </div>
      <div className="page-grid">
        {TILES.map(([n, h, p]) => (
          <article className="info-tile" key={n}><div className="num">{n}</div><h3>{h}</h3><p>{p}</p></article>
        ))}
      </div>
      <PageCta to="/contact">Join or collaborate ↗</PageCta>
    </section>
  );
}

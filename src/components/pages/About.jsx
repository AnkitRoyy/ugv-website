export default function About() {
  return (
    <section id="about" className="site-page">
<div className="page-head"><div className="mono">01 — About us</div><h1>Built in India.<br />For Indian roads.</h1><p>An undergraduate team at Delhi Technological University building autonomous ground vehicles end to end.</p></div>
 <div className="about-copy">
 <p>UGV-DTU is a team of undergraduate students at Delhi Technological University working on autonomous ground vehicle technology. The team was formed with a clear national goal: to build a ‘Made in India’ solution for complete vehicular autonomy that is specifically designed for Indian road conditions.</p>
 <p>Unlike most self-driving vehicle research which is targeted at structured western road environments, UGV-DTU focuses on the unique challenges of Indian roads: unstructured traffic, poor lane discipline, unpredictable obstacles, and varied terrain. The team works across mechanical engineering, electronics, computer vision, and robotics software to build fully integrated autonomous platforms from scratch.</p>
 <p>The team designs, builds, and validates unmanned ground vehicles end-to-end. On the hardware side, this includes custom chassis fabrication, suspension systems, drivetrain assembly, and integration of sensors such as LiDAR, stereo cameras, IMU, and GPS/RTK modules. On the software side, the team develops a full ROS 2-based autonomous navigation stack featuring SLAM for real-time mapping, Nav2 for path planning, EKF for sensor fusion, and custom computer vision pipelines for lane detection and obstacle recognition.</p>
 </div>
 <div className="page-grid">
 <article className="info-tile"><div className="num">01</div><h3>Autonomy</h3><p>Perception, localization, planning, and control systems enabling intelligent navigation.</p></article>
 <article className="info-tile"><div className="num">02</div><h3>Robotics Systems</h3><p>Mechanical design, electronics, embedded systems, and integration of complex robotics platforms.</p></article>
 <article className="info-tile"><div className="num">03</div><h3>Research</h3><p>Focused on SLAM, AI-based perception, and robust autonomy through experimentation.</p></article>
 </div><a className="page-cta" href="#/contact">Join or collaborate ↗</a>
    </section>
  );
}

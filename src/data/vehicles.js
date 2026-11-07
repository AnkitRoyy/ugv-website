import ashwiniImage from '../assets/projects/ashwini_3.jpeg';
import avniImage from '../assets/projects/avni_1.jpeg';
import valkyrieImage from '../assets/projects/valkyrie_2.jpg';
import agniImage from '../assets/projects/agni.jpg';
import centaurImage from '../assets/projects/centaur_2.png';
import airawatImage from '../assets/projects/airawat.jpg';
import kurmImage from '../assets/projects/KURM.JPEG';

export const BOTS = [
  {
    n: 'Ashwini',
    platform: 'UGV',
    focus: 'Autonomous navigation',
    image: ashwiniImage,
    d: 'Ashwini is a compact, three-wheeled differential-drive UGV developed for IGVC 2025 AutoNav. Its 3030 aluminium T-slot chassis carries an RPLiDAR A3M1, Intel RealSense D455 and RTK GPS. The published autonomy stack uses ROS Noetic, EKF sensor fusion and move_base; a LoRa wireless emergency stop is listed with a 1 km range.',
    s: [
      'Competition — IGVC 2025 · AutoNav',
      'Drive — Three-wheeled differential drive',
      'Chassis — 3030 aluminium T-slot',
      'Sensors — RPLiDAR A3M1 · RealSense D455 · RTK GPS',
      'Software — ROS Noetic · EKF · move_base',
      'Safety — LoRa wireless e-stop · 1 km listed range',
      'Top speed — 5 mph listed',
      'Ramp capability — Up to 16° listed'
    ]
  },
  {
    n: 'Avni',
    platform: 'UGV',
    focus: 'UGVC · autonomy',
    image: avniImage,
    d: 'Avni is the team’s flagship UGV rover for the Unmanned Ground Vehicle Challenge (UGVC). Its published profile highlights custom suspension kinematics, a decentralized ROS 2-based autonomy architecture, and an integrated sensing and computing payload. Component-level specifications have not been published.',
    s: [
      'Competition — Unmanned Ground Vehicle Challenge',
      'Platform — Flagship UGV rover',
      'Suspension — Custom kinematics',
      'Software — Decentralized ROS 2 architecture',
      'Payload — Integrated sensing and computing'
    ]
  },
  {
    n: 'Valkyrie',
    platform: 'UAV',
    focus: 'Perception · sensing',
    image: valkyrieImage,
    d: 'Valkyrie is a manually operated UAV built around environmental sensing and real-time situational awareness. Its documented payload measures temperature, humidity and gas concentration, and includes separate FPV and imaging cameras. Sensor readings are sent to a ground station over telemetry for live monitoring and later analysis.',
    s: [
      'Platform — Manually operated UAV',
      'Environmental sensors — Temperature · humidity · gas',
      'Vision — FPV navigation camera · imaging camera',
      'Telemetry — Live sensor data to ground station',
      'Planned work — ML inference · sensor fusion · anomaly detection'
    ]
  },
  {
    n: 'Agni',
    platform: 'UGV',
    focus: 'Navigation · sensor fusion',
    image: agniImage,
    d: 'AGNI (Autonomous Ground-Based Navigation Inspector) is an autonomous ground vehicle designed for unstructured and GPS-denied environments. Its published research describes an inverted-V suspension, adaptive sensor fusion, and a navigation stack combining LiDAR, stereo vision, GPS-IMU and wheel encoders with Dynamic Window Approach obstacle avoidance and YOLO-based object detection.',
    s: [
      'Platform — Autonomous ground vehicle',
      'Operating environment — Unstructured · GPS-denied',
      'Suspension — Custom inverted-V',
      'Sensors — LiDAR · stereo vision · GPS-IMU · wheel encoders',
      'Navigation — Adaptive sensor fusion · Dynamic Window Approach',
      'Perception — YOLO-based object detection',
      'Research — ICCE 2026'
    ]
  },
  {
    n: 'Centaur',
    platform: 'UGV',
    focus: 'First autonomous rover',
    image: centaurImage,
    d: 'Centaur was the team’s first autonomous rover and marked the beginning of UGV-DTU’s ground-robotics work. The available profile describes it as an early step in self-driving robotics and mechanical development; detailed hardware and competition records are not yet published.',
    s: [
      'Platform — Autonomous ground rover',
      'Role — UGV-DTU’s first rover',
      'Design focus — Self-driving robotics · mechanical development'
    ]
  },
  {
    n: 'Airawat',
    platform: 'UGV',
    focus: 'Vision · localization',
    image: airawatImage,
    d: 'Airawat advanced the team’s vehicle development with a focus on computer vision and localization. Its available profile describes this generation as emphasizing stability and reliability. Specific sensors, drive configuration and competition history have not been published.',
    s: [
      'Platform — Ground vehicle',
      'Focus — Computer vision · localization',
      'Design priorities — Stability · reliability'
    ]
  },
  {
    n: 'Kurm',
    platform: 'UGV',
    focus: 'Planning · perception · RTK-GPS',
    image: kurmImage,
    d: 'Kurm continued the team’s ground-vehicle development with refinements to path planning, perception and RTK-GPS precision. The available profile highlights operation across complex terrain; additional performance and hardware specifications have not been published.',
    s: [
      'Platform — Ground vehicle',
      'Focus — Path planning · perception',
      'Localization — RTK-GPS',
      'Design goal — Complex-terrain operation'
    ]
  }
];

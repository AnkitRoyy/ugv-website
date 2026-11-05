export const RS=[
{id:'slam-unstructured-roads',tag:'SLAM · Mapping',title:'Mapping unstructured Indian roads with SLAM',summary:'How the team builds real-time maps where lanes, kerbs and traffic do not follow a fixed pattern.',body:[
'Most published SLAM benchmarks assume clear lane markings, predictable traffic and well-kept road edges. Indian roads rarely offer that. Mixed traffic, parked vehicles, potholes and changing surfaces mean the map has to be built from whatever structure the scene actually provides.',
'UGV-DTU’s approach combines LiDAR scans with stereo camera data inside the ROS 2 stack, so that the vehicle can build a map and localise itself against it at the same time. The map is used by the planner as the vehicle moves, instead of being prepared in advance.',
'Current work focuses on keeping the map consistent when the scene changes quickly, and on recovering the vehicle’s position when parts of the environment look alike or disappear from view.',
'Placeholder article — replace this text with the team’s full write-up, figures and references.']},
{id:'ekf-sensor-fusion',tag:'Localization · Fusion',title:'Sensor fusion with an EKF: LiDAR, IMU and GPS/RTK',summary:'Combining sensors with different strengths into one reliable estimate of where the vehicle is.',body:[
'No single sensor is reliable everywhere. GPS/RTK is precise in open sky but degrades near buildings and trees. An IMU responds instantly but drifts over time. LiDAR and cameras describe the surroundings well but depend on what is in view.',
'The team uses an Extended Kalman Filter to fuse these sources into a single pose estimate. Each sensor contributes where it is strongest, and the filter weighs it down when its readings become uncertain.',
'The same estimate feeds the navigation stack, so path planning and control work from one consistent view of the vehicle’s position and motion.',
'Placeholder article — replace this text with the team’s full write-up, figures and references.']},
{id:'lane-obstacle-perception',tag:'Perception · Computer Vision',title:'Lane and obstacle perception without lane discipline',summary:'Custom vision pipelines for roads where markings fade and obstacles appear without warning.',body:[
'Lane detection methods built for highways with clear paint struggle on roads where markings are worn, missing or ignored by traffic. Obstacles range from pedestrians and animals to carts and debris.',
'UGV-DTU develops its own computer vision pipelines for lane detection and obstacle recognition, designed around the conditions the vehicle actually meets, and tested on the team’s own platforms.',
'The perception output is combined with LiDAR data so that the planner has more than one source of evidence about what is drivable.',
'Placeholder article — replace this text with the team’s full write-up, figures and references.']},
{id:'nav2-path-planning',tag:'Planning · Navigation',title:'Path planning with Nav2 on a custom platform',summary:'Adapting a standard navigation framework to a vehicle that was built from scratch.',body:[
'Nav2 provides a proven structure for planning and control, but it must be tuned to the vehicle it drives. The team’s platforms have their own chassis, drivetrain and turning behaviour.',
'The work covers cost maps that reflect real road conditions, planners that respect the vehicle’s motion limits, and recovery behaviours for when the vehicle gets stuck or the path is blocked.',
'Placeholder article — replace this text with the team’s full write-up, figures and references.']}
];

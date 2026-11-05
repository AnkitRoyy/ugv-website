import { COUNCIL, DEPARTMENTS } from './teamData';

const LEAD_ROLES = /^(Captain|Vice-Captain|Team Manager|Treasurer)$/;
export const LEADERSHIP = COUNCIL.filter((p) => LEAD_ROLES.test(p.role));
const headsOf = (re) => COUNCIL.filter((p) => re.test(p.role));

// Order, copy and focus line come from the design; people come from the existing team data.
export const DEPTS = {
  software: { name: 'Software', desc: 'ROS, perception, planning and simulation.', idx: '01', focus: 'ROS 2 · SLAM · CV', heads: headsOf(/^Software/), members: DEPARTMENTS.Software },
  mechanical: { name: 'Mechanical', desc: 'Chassis, drivetrain and weatherproofing.', idx: '02', focus: 'CAD · FEA · Drivetrain', heads: headsOf(/^Mechanical/), members: DEPARTMENTS.Mechanical },
  electrical: { name: 'Electrical', desc: 'Power, sensors and the safety systems.', idx: '03', focus: 'PCB · BMS · LoRa E-Stop', heads: headsOf(/^Electrical/), members: DEPARTMENTS.Electrical },
  research: { name: 'Research', desc: 'Next-generation autonomy and publications.', idx: '04', focus: 'Control · Simulink · AI', heads: headsOf(/^R&D/), members: DEPARTMENTS['Research and Outreach'] },
};

export type Project = {
  slug: string;
  title: string;
  company: string;
  category: string;
  year: string;
  summary: string;
  description: string;
  role: string;
  technologies: string[];
  theme: 'lensor' | 'axis7' | 'bentech' | 'personal';
  status: string;
  highlights: string[];
  visual: string;
};

export const projects: Project[] = [
  {
    slug: 'raspberry-pi-5-interface-board',
    title: 'Raspberry Pi 5 Interface Board',
    company: 'Lensor',
    category: 'Embedded hardware',
    year: '2025–2026',
    summary: 'A custom PCB connecting a Raspberry Pi 5 to external systems and sensors.',
    description: 'A custom hardware platform developed to extend a Raspberry Pi 5 with the interfaces needed by a larger embedded system. This page is an initial outline; detailed design constraints, interface choices and validation results can be added once approved for public sharing.',
    role: 'Hardware design and integration',
    technologies: ['Raspberry Pi 5', 'PCB design', 'Embedded Linux', 'Hardware integration'],
    theme: 'lensor',
    status: 'Details to be expanded',
    highlights: ['Custom PCB design', 'External system and sensor interfacing', 'Hardware validation'],
    visual: 'board'
  },
  {
    slug: 'autonomous-agricultural-robotics',
    title: 'Autonomous Agricultural Robotics',
    company: 'Axis7',
    category: 'Robotics',
    year: '2022–2024',
    summary: 'Autonomous and remotely operated agricultural vehicles for a robotic harvesting platform.',
    description: 'Worked on autonomous agricultural machinery, including a four-wheel arch vehicle developed for broccoli harvesting. The system brought together vehicle behaviour, localisation and a range of perception sensors. Further details and approved project imagery can be added to this case study.',
    role: 'Robotics software and system integration',
    technologies: ['ROS 1', 'C++', 'Python', 'Behaviour trees', 'RTK-GPS', 'LiDAR', 'CAN'],
    theme: 'axis7',
    status: 'Details to be expanded',
    highlights: ['Behaviour-tree-based vehicle control', 'Multi-sensor integration', 'Autonomous agricultural machinery'],
    visual: 'robot'
  },
  {
    slug: 'embedded-electronics',
    title: 'Embedded Electronics & Firmware',
    company: 'Bentech',
    category: 'Electronics',
    year: '2017–2020',
    summary: 'Embedded C development and electronics work across a variety of hardware projects.',
    description: 'A broad role covering embedded firmware and electronics development. This project entry is intentionally general until specific projects, responsibilities and any publishable images are selected.',
    role: 'Electronic engineering and embedded firmware',
    technologies: ['Embedded C', 'Microcontrollers', 'Electronics', 'Communication interfaces'],
    theme: 'bentech',
    status: 'Project examples to be added',
    highlights: ['Embedded C firmware', 'Electronics development', 'Hardware bring-up'],
    visual: 'circuit'
  },
  {
    slug: 'esp32-mqtt-sensor-platform',
    title: 'ESP32 MQTT Sensor Platform',
    company: 'Personal',
    category: 'IoT / Embedded',
    year: 'Ongoing',
    summary: 'A personal sensor acquisition project exploring ESP32 devices and MQTT communication.',
    description: 'A personal project exploring a small distributed sensor platform using ESP32-based devices and MQTT. The wider direction is to collect sensor readings centrally and make them available for monitoring and analysis.',
    role: 'Personal project',
    technologies: ['ESP32', 'C++', 'MQTT', 'Python'],
    theme: 'personal',
    status: 'In progress',
    highlights: ['Wireless sensor acquisition', 'MQTT messaging', 'Extensible data collection'],
    visual: 'sensors'
  }
];

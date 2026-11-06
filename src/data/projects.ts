import type { MediaItem } from '../lib/media';

export type Project = {
  slug: string;
  title: string;
  company: string;        // employer or context; drives the Employer filter
  disciplines: string[];  // drives the Discipline filter
  category: string;
  year: string;
  summary: string;
  description: string;
  role: string;
  technologies: string[];
  theme: 'lensor' | 'axis7' | 'bentech' | 'personal' | 'masters';
  status: string;
  highlights: string[];
  visual: 'board' | 'robot' | 'circuit' | 'sensors' | 'cart';
  visualLabel: string;
  cover?: string;         // optional card/hero image, e.g. '/media/axis7/cover.jpg'
  media?: MediaItem[];    // images, YouTube, MP4 and embeds shown on the project page
  links?: { label: string; href: string }[];
};

export const projects: Project[] = [
  {
    slug: 'raspberry-pi-5-interface-board',
    title: 'Raspberry Pi 5 Interface Board',
    company: 'Lensor',
    disciplines: ['Electronics & PCB', 'Embedded systems'],
    category: 'Embedded hardware',
    year: '2025–2026',
    summary: 'A custom PCB connecting a Raspberry Pi 5 to external systems and sensors.',
    description: 'A custom hardware platform that extends a Raspberry Pi 5 with the interfaces needed by a larger camera and sensorsystem.',
    role: 'Hardware design and integration',
    technologies: ['Raspberry Pi 5', 'PCB design', 'Embedded Linux', 'Hardware integration'],
    theme: 'lensor',
    status: 'Details to be expanded',
    highlights: ['Custom PCB design', 'Camera and sensor interfacing', 'Hardware and software integration'],
    visual: 'board',
    visualLabel: 'HARDWARE',
    cover: '/media/lensor/Umbra-Lensor.jpeg',
    media: [
      {
        type: 'image',
        src: '/media/lensor/rpi-shield.png',
        alt: 'Render of a custom Raspberry Pi interface board',
        layout: 'side',
        heading: 'Raspberry Pi interface board',
        blurb: 'A custom board for a Raspberry Pi 5. It is the link between the Pi and the rest of the camera system.',
        connections: [
          { to: 'Sensors', via: 'I2C' },
          { to: 'Cameras', via: 'Trigger lines' },
          { to: 'Lights', via: 'PWM' }
        ]
      },
      {
        type: 'image',
        src: '/media/lensor/Umbra-Lensor.jpeg',
        alt: 'A vehicle inside a lit camera inspection rig',
        layout: 'side',
        heading: 'Camera system',
        blurb: 'A Lensor camera inspection rig.'
      }
    ]
  },
  {
    slug: 'autonomous-agricultural-robotics',
    title: 'Autonomous Agricultural Robotics',
    company: 'Axis7',
    disciplines: ['Robotics', 'Perception & sensors', 'Software'],
    category: 'Robotics',
    year: '2022–2024',
    summary: 'Autonomous and remotely operated agricultural vehicles for a robotic harvesting platform.',
    description: 'Work on autonomous agricultural machinery, including a platform developed for broccoli harvesting. The system brought together vehicle behaviour, localisation and a range of perception sensors. Further detail can be added where it is appropriate to share.',
    role: 'Robotics software and system integration',
    technologies: ['ROS 1', 'C++', 'Python', 'Behaviour trees', 'RTK-GPS', 'LiDAR', 'CAN'],
    theme: 'axis7',
    status: 'Details to be expanded',
    highlights: ['Behaviour-tree vehicle control', 'Multi-sensor integration', 'Autonomous agricultural machinery'],
    visual: 'robot',
    visualLabel: 'AUTONOMY',
    cover: '/media/axis7/jono-infront-of-broccoli_harvest.jpeg',
    media: [
      {
        type: 'image',
        src: '/media/axis7/cover-photo-robotics.jpg',
        alt: 'A golf cart robotics platform parked beside a larger agricultural robot in a vineyard',
        layout: 'side',
        heading: 'Field platforms',
        blurb: 'A golf-cart robotics platform beside a larger agricultural machine. My work covered vehicle behaviour and sensors including RTK-GPS, LiDAR, cameras, ultrasonics and CAN.'
      },
      {
        type: 'image',
        src: '/media/axis7/jono-infront-of-broccoli_harvest.jpeg',
        alt: 'Jonathan beside a broccoli harvesting robot lit over a crop row at night',
        layout: 'side',
        heading: 'Broccoli harvester',
        blurb: 'The broccoli harvesting platform during a night test, with the row lit for the cameras.'
      },
      {
        type: 'video',
        src: '/media/axis7/axis7_film.mp4',
        title: 'Axis7 machines in the field',
        layout: 'below',
        heading: 'Field footage',
        blurb: 'Short footage of the machines working in the field.'
      }
    ]
  },
  {
    slug: 'masters-golf-cart-project',
    title: "Master's Golf Cart Project",
    company: "Master's degree",
    disciplines: ['Robotics', 'Software', 'ROS 1'],
    category: 'Robotics',
    year: '2020-2022',
    summary: "A robotics project designed to build a transferable autonomous system based around a golf cart platform.",
    description: "A robotics project designed to build a transferable autonomous system based around a golf cart platform. The clips below show some of the work done during the project.",
    role: 'Path planning, mapping and autonomous driving',
    technologies: ['ROS 1', 'C++', 'Python', 'Gazebo', 'RViz', 'Ubuntu', 'Linux'],
    theme: 'masters',
    status: 'Details to be expanded',
    highlights: ['Path planning', 'Mapping', 'Autonomous driving'],
    visual: 'cart',
    visualLabel: 'ROBOTICS',
    links: [
      {
        label: 'Transferable Semi-autonomous Architecture for Vehicles Operating in Corridor Crop Environments',
        href: 'https://scholar.google.com/citations?view_op=view_citation&hl=en&user=h_gNt8cAAAAJ&citation_for_view=h_gNt8cAAAAJ:u5HHmVD_uO8C'
      }
    ],
    media: [
      {
        type: 'video',
        src: '/media/masters/IRRT*-rviz.mp4',
        title: 'Biased Informed Rapidly-exploring Random Tree (IRRT*) path planning in RViz',
        layout: 'below',
        heading: 'IRRT* Path planning',
        caption: 'The video shows the initial development of the biased-IRRT* path planning algorithm re-planning constantly on. ',
        blurb: 'Biased-IRRT* was one I developed based on other papers as a comparison to more convenstional grid based path planners such as Dijkstra and A*. It showed good promise but during my testing it was the non-optimal solution for large planning problems.'
      },
      {
        type: 'video',
        src: '/media/masters/Autonomous-golf-cart-mapping.mp4',
        title: 'Mapping a route by driving the golf cart',
        layout: 'below',
        heading: 'Mapping',
        caption: 'Manual driving of the golf car to map the vineyard area.',
      blurb: 'This was the initial mapping of the vineyard. I teseted multiple mapping packages (GMapping, Cartographer, and RTAB-Map), with Gmapping being shown and the most reliable during my testing on the vineyard. The simultaneous localisation and mapping was performed by manually driving the golf cart around the vineyard, using the 3D LiDAR, combined localisation sensors such as RTK-GPS, and wheel encoders. The map was then used to test the autonomous driving capabilites of the golf cart.'
      },
      {
        type: 'video',
        src: '/media/masters/Autonomous-golf-cart-driving.mp4',
        title: 'The golf cart driving autonomously',
        layout: 'below',
        heading: 'Autonomous driving',
        caption: 'Golf cart is driving autonomously, in a controlled environment.',
        blurb: 'This was a demonstration of how I converted a golf cart into an autonomous vehicle. This was done by implementing an A* path planner, Time and Elastic Band (TEB) local planner, while primarily using a 3D LiDAR and 3D ultrasonic sensor; all built around the ROS framework. More information can be found in my Master\'s thesis.'
      }
    ]
  },
  {
    slug: 'embedded-electronics',
    title: 'Embedded Electronics & Firmware',
    company: 'Bentech',
    disciplines: ['Embedded systems', 'Electronics & PCB'],
    category: 'Electronics',
    year: '2017–2020',
    summary: 'Embedded C development and electronics work across a variety of hardware projects.',
    description: 'Electronics development and embedded C firmware across a range of hardware projects. The examples below are a selection that can be shown publicly.',
    role: 'Electronic engineering and embedded firmware',
    technologies: ['Embedded C', 'Microcontrollers', 'Electronics', 'Communication interfaces'],
    theme: 'bentech',
    status: 'Project examples to be added',
    highlights: ['Embedded C firmware', 'Electronics development', 'Hardware bring-up'],
    visual: 'circuit',
    visualLabel: 'ELECTRONICS',
    cover: '/media/bentech/autosampler_full.jpg',
    media: [
      {
        type: 'image',
        src: '/media/bentech/autosampler_full.jpg',
        alt: 'A transparent autosampler machine with tubing, clamps and a sample carousel',
        layout: 'side',
        heading: 'Autosampler',
        blurb: 'This product was able to run on a pack of AA batteries, run for up to a year without intervention in harsh mineral rich cave environments, while sampling cave water on accurate time intervals. This product was wanted by and developed for researchers from the University of Waikato.'
      },
      {
        type: 'image',
        src: '/media/bentech/vx-autosampler.jpg',
        alt: '4-layer PCB for an autosampler. Showing motor drivers, sensors, ESP32, power management and RTC',
        layout: 'side',
        heading: 'Autosampler PCB',
        blurb: 'The PCB was designed to be ultra low power while still able to control motors, read sensor temperature and humidity sensors, detect water overflow and when required communicate data with a graphical user interface (GUI) over WiFi through a ESP32. Motors used in this project were stepper motors (table and ganntry) and a linear actuator (for the sampling needle).'
      },
      {
        type: 'image',
        src: '/media/bentech/autosampler-water-detection.jpg',
        alt: 'A probe suspended in a beaker of water on an electronics bench',
        layout: 'side',
        heading: 'Water detection',
        blurb: 'Bench setup for testing water detection on the autosampler. A signal is pulsed on one needle and measured from the other needle using an opamp circuit.'
      },
      {
        type: 'image',
        src: '/media/bentech/LoRa-sensor.jpg',
        alt: 'Small battery powered board with solar panel, to remotely monitor temperature and humidity for the Heat Ranger product.',
        layout: 'side',
        heading: 'Temperature and humidity sensors + LoRa module',
        blurb: 'A small battery powered board with solar panel, to remotely monitor temperature and humidity for the Heat Ranger product.'
      }
    ]
  },
  {
    slug: 'CAN-IO-Board',
    title: 'CAN IO Board',
    company: 'Personal',
    disciplines: ['Embedded systems', 'CAN bus', 'Software', 'Robotics'],
    category: 'Robotics / Embedded',
    year: 'Ongoing',
    summary: 'A personal CAN bus opto-coupled input and output board for user and switch interfaces.',
    description: 'A personal PCB for user interface and sensor acquisition over CAN, built around an STM32. The CANopen system also incorporates a custom made Objecy Dictionary (based on standard CANopen dictionaries) to allow for configuration of packages (PDOs, NMT, SDOs, etc). The board is still in progress and recently changed to a two PCB design for a more compact solution. A python GUI was also created to allow for easy configuration and monitoring of the board.',
    role: 'Personal project',
    technologies: ['STM32', 'C/C++', 'CAN bus', 'DMA', 'PCB design', 'Python'],
    theme: 'personal',
    status: 'In progress',
    highlights: ['CAN bus communication', 'Sensor acquisition', 'Safety and reliability'],
    visual: 'board',
    visualLabel: 'Robotics Peripherals',
    cover: '/media/personal/CAN_IO_Board.jpg',
    media: [
      {
        type: 'image',
        src: '/media/personal/CAN_IO_Board.jpg',
        alt: 'A green CAN input and output board with connectors, a DIP switch and a USB port',
        layout: 'side',
        heading: 'CAN IO board',
        blurb: 'Power, CAN, a node-address switch and a USB port. The board is still in progress.'
      }
    ]
  },
  {
    slug: 'esp32-mqtt-sensor-platform',
    title: 'ESP32 MQTT Sensor Platform',
    company: 'Personal',
    disciplines: ['Embedded systems', 'IoT', 'Software'],
    category: 'IoT / Embedded',
    year: 'Ongoing',
    summary: 'A personal sensor platform using ESP32 devices and MQTT.',
    description: 'A personal project exploring a small distributed sensor platform. ESP32 devices publish readings over MQTT so they can be collected for monitoring and analysis.',
    role: 'Personal project',
    technologies: ['ESP32', 'C++', 'MQTT', 'Python'],
    theme: 'personal',
    status: 'In progress',
    highlights: ['Wireless sensor acquisition', 'MQTT messaging', 'Extensible data collection'],
    visual: 'sensors',
    visualLabel: 'CONNECTED SENSORS'
  }
];

export const featuredSlugs = [
  'raspberry-pi-5-interface-board',
  'autonomous-agricultural-robotics',
  'masters-golf-cart-project'
];

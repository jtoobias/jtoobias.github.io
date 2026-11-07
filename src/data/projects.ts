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
  status?: string;
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
    disciplines: ['Electronics'],
    category: 'Embedded hardware',
    year: '2025–2026',
    summary: 'Custom PCB shield connecting a Raspberry Pi 5 to external systems and sensors for Lensor Gates.',
    description: `Custom PCB shield connecting a Raspberry Pi 5 to multiple cameras, lighting drivers and sensors for Lensor Gates.
    The PCB was designed to be robust, reliable and to EU standards.`,
    role: 'Hardware design and integration',
    technologies: ['PCB design', 'Embedded Linux', 'Raspberry Pi 5', 'Python', 'Cameras'],
    theme: 'lensor',
    // status: 'Details to be expanded',
    highlights: ['Custom PCB design', 'Camera and sensor interfacing', 'Hardware and software integration'],
    visual: 'board',
    visualLabel: 'HARDWARE',
    cover: '/media/lensor/rpi-shield-real.jpeg',
    media: [
      {
        type: 'image',
        src: '/media/lensor/rpi-shield-real.jpeg',
        alt: 'Custom shield PCB for Raspberry Pi 5',
        layout: 'side',
        headingAbove: true,
        heading: 'Raspberry Pi 5 Shield',
        blurb: `Custom Raspberry Pi 5 Shield for cameras, sensors and external systems.
        - It was designed and tested for:
        - Handling a 24V DC supply, with overvoltage and undervoltage protection, reverse-polarity protection and short-circuit protection.
        - Three camera trigger circuits, using 5V high-side switching.
        - Three PWM channels for lighting control, through external LED drivers.
        - 2x I2C communication up to 20 metres, depending on baud rate and sensor power requirements.
        - 2x UART communication.
        - Switched external sensor power, with short-circuit protection.
        - 2x 5-50V input & 2x 24V fused output channels.`
      },
      {
        type: 'image',
        src: '/media/lensor/Umbra-Lensor.jpeg',
        alt: 'A vehicle inside a lit camera inspection rig',
        layout: 'side',
        heading: 'Umbra: The Gate',
        blurb: `The circuit board and Raspberry Pi 5 above were the link between the hardware and the main computer vision system.
        They were used to track the vehicle through the use of magnetometer sensors, trigger cameras at consistent vehicle positions,
        and turn the lights on and off at the right brightness for the vehicle inspection to work.`
      }
    ]
  },


  {
    slug: 'autonomous-agricultural-robotics',
    title: 'Agricultural Robotics',
    company: 'Axis7',
    disciplines: ['Robotics', 'Perception & sensors', 'Python', 'CAN bus','ROS'],
    category: 'Robotics',
    year: '2022–2024',
    summary: `Axis7 was a true robotics startup,
    where I learned a lot and was able to put my skills that I learned from my master's into practice.
    I was able to work on the entire system, from the hardware to the software, and the data collection and analysis.`,

    description: `At Axis7 I worked on various robotics projects, with a couple of main ones being
    the Archi-Jnr control system and our own autonomous broccoli harvester.
    Archi-Jnr was similar to my master's project, by developing a control system for it and designing methods for it to navigate down vineyard rows.
    The broccoli harvester was a fun, tiring, stressful and rewarding project where I was able to work on and design the software system for it.
    It incorporated many things from my master's but also pushed my knowledge in computer vision, camera systems, PLC programming, motor control, and robot kinematics.`,

    role: 'Robotics software and system integration',
    technologies: ['ROS', 'C++', 'Computer vision', 'Python', 'CAN bus', 'LiDAR', 'RTK-GPS', 'Cameras', 'Behaviour trees', 'Linux'],
    theme: 'axis7',
    // status: 'Details to be expanded',
    highlights: ['Behaviour-tree vehicle control', 'Multi-sensor integration', 'Autonomous agricultural machinery'],
    visual: 'robot',
    visualLabel: 'AUTONOMY',
    cover: '/media/axis7/jono-infront-of-broccoli_harvest.jpeg',
    media: [
      {
        type: 'image',
        src: '/media/axis7/jono-infront-of-broccoli_harvest.jpeg',
        alt: 'Night testing and data collection of the broccoli harvesting platform',
        layout: 'side',
        heading: 'Broccoli harvester',
        blurb: 'Night testing and data collection of the broccoli harvesting platform.'
      },
      {
        type: 'video',
        src: '/media/axis7/axis7_film.mp4',
        title: 'Axis7 machines in the field',
        layout: 'below',
        heading: 'Archi-Jnr and Broccoli harvester footage',
        blurb: `Archi-Jnr can be seen autonomously following the vine using a 3D LiDAR.
        After Archi-Jnr, the broccoli harvester can be seen in RViz actively detecting and harvesting broccoli, as the machine is pulled by a tractor.`
      }
    ]
  },
  {
    slug: 'masters-golf-cart-project',
    title: "Master's Golf Cart Project",
    company: "Master's degree",
    disciplines: ['Robotics', 'Perception & sensors', 'C/C++', 'Python', 'ROS', 'CAN bus'],
    category: 'Robotics',
    year: '2020-2022',
    summary: "A robotics project designed to build a transferable autonomous system based around a golf cart platform.",
    description: "A robotics project designed to build a transferable autonomous system based around a golf cart platform. The clips below show some of the work done during the project.",
    role: 'Path planning, mapping and autonomous driving',
    technologies: ['ROS', 'C++', 'Python', 'LiDAR', 'RTK-GPS', 'Ultrasonic sensor', 'CAN bus', 'Computer vision', 'Cameras', 'Behaviour trees', 'Linux', 'Gazebo'],
    theme: 'masters',
    // status: 'Details to be expanded',
    highlights: ['Path planning', 'Mapping', 'Autonomous driving'],
    visual: 'cart',
    visualLabel: 'ROBOTICS',
    cover: '/media/masters/cover-photo-robotics.jpg',
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
        caption: 'The video shows the initial development of the biased-IRRT* path planning algorithm replanning constantly.',
        blurb: 'Biased-IRRT* was one I developed based on other papers as a comparison to more conventional grid-based path planners such as Dijkstra and A*. It showed good promise but during my testing it was the non-optimal solution for large planning problems.'
      },
      {
        type: 'video',
        src: '/media/masters/Autonomous-golf-cart-mapping.mp4',
        title: 'Mapping a route by driving the golf cart',
        layout: 'below',
        heading: 'Mapping',
        caption: 'Manual driving of the golf cart to map the vineyard area.',
      blurb: 'This was the initial mapping of the vineyard. I tested multiple mapping packages (GMapping, Cartographer and RTAB-Map), with GMapping being shown and the most reliable during my testing in the vineyard. The simultaneous localisation and mapping was performed by manually driving the golf cart around the vineyard, using the 3D LiDAR, combined with localisation sensors such as RTK-GPS, and wheel encoders. The map was then used to test the autonomous driving capabilities of the golf cart.'
      },
      {
        type: 'video',
        src: '/media/masters/Autonomous-golf-cart-driving.mp4',
        title: 'The golf cart driving autonomously',
        layout: 'below',
        heading: 'Autonomous driving',
        caption: 'The golf cart is driving autonomously, in a controlled environment.',
        blurb: 'This was a demonstration of how I converted a golf cart into an autonomous vehicle. This was done by implementing an A* path planner and a Timed Elastic Band (TEB) local planner, while primarily using a 3D LiDAR and a 3D ultrasonic sensor, all built around the ROS framework. More information can be found in my master\'s thesis.'
      }
    ]
  },
  {
    slug: 'embedded-electronics',
    title: 'Embedded Electronics & Firmware',
    company: 'Bentech',
    disciplines: ['Electronics', 'C/C++'],
    category: 'Electronics',
    year: '2017–2020',
    summary: `Vast range of circuit board and firmware development for projects in vehicle monitor, an environment research device, and agricultural focus products.
    A few examples are shown here.`,
    description: `    During my time at Bentech I was able to work on a vast range of projects, with a few shown below.
    I am very proud of all the work I did at Bentech, with the two main ones being the autosampler and the Heat Ranger sensor monitor.
    The autosampler tested my ability to make a nice user-friendly product while being precise, reliable, upgradeable and long-lasting.
    When I left, the product was going through its final testing and ready to be sold to other researchers.
    The Heat Ranger sensor was a small IoT-style PCB. It was able to run on a single LiPo battery, monitor temperature and humidity while reporting this information over hundreds of meters back to the base Heat Ranger.
    All of the projects I worked on for clients were upgradeable and largely over the air (OTA) using WiFi or LoRa.`,
    role: 'Electronic engineering and embedded firmware developer',
    technologies: ['PCB design', 'Embedded C', 'ESP32', 'ATxmega', 'LoRa'],
    theme: 'bentech',
    // status: '',
    highlights: ['Embedded C firmware', 'Electronics development', 'Hardware bring-up'],
    visual: 'circuit',
    visualLabel: 'ELECTRONICS',
    cover: '/media/bentech/vx-autosampler.jpg',
    media: [
      {
        type: 'image',
        src: '/media/bentech/autosampler_full.jpg',
        alt: 'A transparent autosampler machine with tubing, clamps and a sample carousel',
        layout: 'side',
        heading: 'Autosampler',
        blurb: `This product was able to run on a pack of AA batteries, 
        run for up to a year without intervention in harsh, mineral-rich cave environments, 
        while sampling cave water on accurate time intervals. 
        This product was wanted by and developed for researchers from the University of Waikato.`
      },
      {
        type: 'image',
        src: '/media/bentech/vx-autosampler.jpg',
        alt: '4-layer PCB for an autosampler. Showing motor drivers, sensors, ESP32, power management and RTC',
        layout: 'side',
        heading: 'Autosampler PCB',
        blurb: `The PCB was designed to be ultra-low-power while still able to control motors,
        read temperature and humidity sensors, detect water overflow and, when required,
        communicate data through a web interface, using the ESP32 as an access point.
        The motors used in this project were stepper motors (table and gantry) and a linear actuator (for the sampling needle).`
      },
      {
        type: 'image',
        src: '/media/bentech/autosampler-water-detection.jpg',
        alt: 'A probe suspended in a beaker of water on an electronics bench',
        layout: 'side',
        heading: 'Water detection',
        blurb: 'An example of the bench setup for testing water (overflow) detection on the autosampler. A signal is pulsed on one needle and measured from the other needle using an opamp circuit.'
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
    disciplines: ['Electronics', 'C/C++', 'Python', 'CAN bus', 'Robotics'],
    category: 'Robotics / Embedded',
    year: 'Ongoing',
    summary: 'A personal CAN bus opto-coupled input and output board for user and switch interfaces.',
    description: `A personal PCB for user interface and sensor acquisition over CAN, built around an STM32.
    The CANopen system also incorporates a custom-made object dictionary (based on standard CANopen dictionaries)
    to allow for configuration of packages (PDOs, NMT, SDOs, etc). The board is still in progress and recently
    changed to a two-PCB design for a more compact solution.
    A Python GUI was also created to allow for easy configuration and monitoring of the board.`,
    role: 'Personal project',
    technologies: ['STM32', 'Embedded C', 'CAN bus', 'PCB design', 'Python'],
    theme: 'personal',
    // status: 'In progress',
    highlights: ['CAN bus communication', 'Sensor acquisition', 'Safety and reliability'],
    visual: 'board',
    visualLabel: 'Robotics Peripherals',
    cover: '/media/personal/CAN_IO_Board.jpg',
    media: [
      {
        type: 'image',
        src: '/media/personal/CAN_IO_Board.jpg',
        alt: `A CANopen opto-isolated IO board with connectors, DIP switches to configure CAN ID and baud rate,
         and a USB port for configuration and monitoring.`,
        layout: 'side',
        heading: 'CAN IO board',
        blurb: `This is a CANopen opto-isolated IO board, built around an STM32. This board was designed for two main purposes:
        - To try to develop a CANopen IO device that could be used in robotics systems while being affordable.
        - To dive into the world of STM32 microcontrollers.`
      },
      {
        type: 'image',
        src: '/media/personal/CAN-IO-GUI-main-page.jpeg',
        alt: `A CAN IO project GUI`,
        layout: 'side',
        heading: 'CAN IO board User Interface',
        blurb: `This made configuring and reading the board information significantly more user-friendly.
        While still a minimum viable product, it was a fun project to work on and learn from.`
      }
    ]
  },
];

export const featuredSlugs = [
  'raspberry-pi-5-interface-board',
  'autonomous-agricultural-robotics',
  'embedded-electronics'
];

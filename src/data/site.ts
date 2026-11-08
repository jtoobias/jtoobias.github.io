import type { MediaItem } from '../lib/media';

export const site = {
  name: 'Jonathan Tobias',
  initials: 'JT',
  role: 'Embedded & Robotics Engineer',
  location: 'Utrecht, The Netherlands',
  email: 'jitobias96@gmail.com',
  linkedin: 'https://www.linkedin.com/in/jonathan-tobias-572209101',
  github: 'https://github.com/jtoobias',
  intro:
    `Here you will find highlights from my engineering journey, spanning hardware, software, and the spaces where they intersect.
    Whether you are hiring, another engineer, or just having a look, I hope you enjoy reading and discovering.`,
  shortIntro:
    'Engineering across electronics, embedded software and robotics.',
  strengths: [
    'Take pride in bringing ideas to life and persevering to see them through.',
    'Enjoy experimenting, investigating, and hands-on problem-solving',
    'Always curious about learning and using new tools, in hardware and in software'
  ],
  weaknesses: [
    'One last improvement... and then five more',
    'Prone to going down interesting technical rabbit holes',
    'A tendency to enjoying engineering conversations a bit too much, no matter how far-fetched the solution.'
  ],
  // Homepage copies of the lists above. Leave both empty to hide the block. Paste the lists back here to show them on the home page again.
  homeStrengths: [] as string[],
  homeWeaknesses: [] as string[],
  // Homepage hero media: a portrait photo or a short highlight video. Hidden on the live site until the REPLACE value is changed.
  heroMedia: { type: 'image', src: '/media/home/cover_photo_mauri.jpeg', alt: 'Portrait of Jonathan Tobias' } as MediaItem,
  availability: 'Open to the right engineering opportunity',
  skills: [
    'Embedded C/C++', 'Python', 'Printed Circuit Board (PCB) design (KiCAD, Altium)', 'Sensor Integration',
    'ROS', 'ESP32', 'STM32', 'Raspberry Pi',
    'CAN', 'MQTT','Most uC Based Communication Protocols', 
    'Git', 'Docker', 'SQL', 'Linux',
    'Computer Vision', 'YOLO', 'OpenCV',
    'CAD (Onshape and Solidworks), 3D Printing'
  ],
  experience: [
    {
      id: 'lensor',
      company: 'Lensor',
      role: 'Embedded / Integration Engineer',
      period: 'Mar 2025 — Present',
      location: 'Amsterdam, The Netherlands',
      theme: 'lensor',
      summary:
        'Developing and integrating embedded hardware and software for camera and communication systems.',
      points: [
        'Designed a custom Raspberry Pi 5 PCB shield to interface with external systems and sensors.',
        'Designed a custom PCB for sensors and to increase communication length.',
        'Developed Python-based product features and supported R&D investigations.',
        'Built a self-test jig to support hardware validation and production testing.',
        'Integrated camera systems and investigated hardware/software issues in production.'
      ]
    },
    {
      id: 'axis7',
      company: 'Axis7',
      role: 'Robotics Engineer',
      period: 'Feb 2022 — Jun 2024',
      location: 'Hamilton, New Zealand',
      theme: 'axis7',
      summary:
        'Worked on autonomous agricultural machinery, including a robotic broccoli harvesting platform.',
      points: [
        'Developed behaviour-tree-based control for autonomous and remotely operated agricultural vehicles.',
        'Integrated sensors including RTK-GPS, IMUs, 3D LiDAR, wheel encoders and time-of-flight (ToF) cameras.',
        'Communicated with sensors and drivers using CAN bus and EtherNet/IP.',
        'Developed YOLO computer vision models for object detection and tracking.'
      ]
    },
    {
      id: 'bentech',
      company: 'Bentech',
      role: 'Electronic Engineer',
      period: 'Nov 2017 — Nov 2020',
      location: 'Hamilton, New Zealand',
      theme: 'bentech',
      summary:
        'Developed custom solutions involving PCB design, CAD and embedded C for a wide range of hardware projects for various clients.',
      points: [
        'Designed and developed custom electronic hardware for clients\' projects.',
        'Developed embedded C firmware and custom bootloaders for microcontroller-based systems, allowing for over-the-air updates.',
        'Projects involved low-power operation, motor control, sensors, lighting and various communication protocols.',
        'LoRa, WiFi, CAN, RS232, RS485, I2C, SPI, USB and SD-CARD storage, Real Time Clock (RTC), sensor acquisition and more.'
      ]
    }
  ]
};

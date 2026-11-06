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
    'Thanks for stopping by. I work across embedded electronics, robotics and the software that connects them. If you are hiring, another engineer, or just having a look, you are welcome.',
  shortIntro:
    'Engineering across electronics, embedded software and robotics.',
  strengths: [
  'Enjoy bringing new ideas to life and tackling unfamiliar challenges',
  'Like experimenting, investigating and hands-on problem-solving',
  'Always curious about how things work and how they could be improved',
  'Interested in exploring new technologies, from motors and sensors to cameras'
  ],
  weaknesses: [
    'One last improvement... (and then five more)',
    'Prone to going down interesting technical rabbit holes',
    'Never short of another idea to explore'
  ],
  // Homepage hero media: a portrait photo or a short highlight video. Hidden on the live site until the REPLACE value is changed.
  heroMedia: { type: 'image', src: '/media/home/cover_photo_mauri.jpeg', alt: 'Portrait of Jonathan Tobias' } as MediaItem,
  availability: 'Open to the right engineering opportunity',
  skills: [
    'Embedded C/C++', 'Python', 'Printed Circuit Board (PCB) design (KiCAD, Altium)', 'Sensor Integration',
    'ROS 1/2', 'ESP32', 'STM32', 'Raspberry Pi',
    'CAN', 'MQTT','Most uC Based Communication Protocols', 
    'Git', 'Docker', 'SQL', 'Linux',
    'Computer Vision', 'YOLO', 'OpenCV',
    'CAD (Onshape and Solidworks), 3D Printing'
  ],
  experience: [
    {
      company: 'Lensor',
      role: 'Embedded / Integration Engineer',
      period: 'Mar 2025 — Present',
      location: 'Amsterdam, The Netherlands',
      theme: 'lensor',
      summary:
        'Developing and integrating embedded hardware and software for camera and communication systems.',
      points: [
        'Designed custom Raspberry Pi 5 PCB shield to interface with external systems and sensors.',
        'Designed custom PCB for sensors and to increase communication length.',
        'Developed Python-based product features and supported R&D investigations.',
        'Built a self-test jig to support hardware validation and production testing.',
        'Integrated camera systems and investigated hardware/software issues in production.'
      ]
    },
    {
      company: 'Axis7',
      role: 'Robotics Engineer',
      period: 'Feb 2022 — Jun 2024',
      location: 'Hamilton,New Zealand',
      theme: 'axis7',
      summary:
        'Worked on autonomous agricultural machinery, including a robotic broccoli harvesting platform.',
      points: [
        'Developed behaviour-tree-based control for autonomous and remotely operated agricultural vehicles.',
        'Integrated sensors including RTK-GPS, IMUs, 3D LiDAR, wheel encoders and time-of-flight (ToF) cameras.',
        'Communication with sensors and drivers using CAN bus and Ethernet-IP protocols.',
        'Developed YOLO computer vision models for object detection and tracking.'
      ]
    },
    {
      company: 'Bentech',
      role: 'Electronic Engineer',
      period: '2017 — 2020',
      location: 'Hamilton,New Zealand',
      theme: 'bentech',
      summary:
        'Developed custom solutions, involving PCB design, CAD design and embedded C for a wide range of hardware projects for various clients.',
      points: [
        'Designed and develeop custom electronic hardware for clients projects.',
        'Developed embedded C firmware and custom bootloaders for microcontroller-based, allowing for over-the-air updates.',
        'Projects involved low power operation, motor control, sensors, lighting and various communication protocols.',
        'LoRa, WiFi, CAN, RS232, RS485, I2C, SPI, USB and SD-CARD storage, Real Time Clock (RTC), , sensor acquisition and more.'
      ]
    }
  ]
};

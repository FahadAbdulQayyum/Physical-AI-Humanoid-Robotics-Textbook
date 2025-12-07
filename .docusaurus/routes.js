import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/Physical-AI-Humanoid-Robotics-Textbook/search',
    component: ComponentCreator('/Physical-AI-Humanoid-Robotics-Textbook/search', '08c'),
    exact: true
  },
  {
    path: '/Physical-AI-Humanoid-Robotics-Textbook/docs',
    component: ComponentCreator('/Physical-AI-Humanoid-Robotics-Textbook/docs', 'e94'),
    routes: [
      {
        path: '/Physical-AI-Humanoid-Robotics-Textbook/docs',
        component: ComponentCreator('/Physical-AI-Humanoid-Robotics-Textbook/docs', '92f'),
        routes: [
          {
            path: '/Physical-AI-Humanoid-Robotics-Textbook/docs',
            component: ComponentCreator('/Physical-AI-Humanoid-Robotics-Textbook/docs', '49f'),
            routes: [
              {
                path: '/Physical-AI-Humanoid-Robotics-Textbook/docs/intro',
                component: ComponentCreator('/Physical-AI-Humanoid-Robotics-Textbook/docs/intro', '1a1'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/Physical-AI-Humanoid-Robotics-Textbook/docs/module-1-ros2/',
                component: ComponentCreator('/Physical-AI-Humanoid-Robotics-Textbook/docs/module-1-ros2/', '268'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/Physical-AI-Humanoid-Robotics-Textbook/docs/module-1-ros2/chapter-1-intro-ros2',
                component: ComponentCreator('/Physical-AI-Humanoid-Robotics-Textbook/docs/module-1-ros2/chapter-1-intro-ros2', '79b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/Physical-AI-Humanoid-Robotics-Textbook/docs/module-1-ros2/chapter-2-nodes-topics',
                component: ComponentCreator('/Physical-AI-Humanoid-Robotics-Textbook/docs/module-1-ros2/chapter-2-nodes-topics', '8f3'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/Physical-AI-Humanoid-Robotics-Textbook/docs/module-1-ros2/chapter-3-services-actions-parameters',
                component: ComponentCreator('/Physical-AI-Humanoid-Robotics-Textbook/docs/module-1-ros2/chapter-3-services-actions-parameters', '86f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/Physical-AI-Humanoid-Robotics-Textbook/docs/module-1-ros2/chapter-4-urdf-robot-modeling',
                component: ComponentCreator('/Physical-AI-Humanoid-Robotics-Textbook/docs/module-1-ros2/chapter-4-urdf-robot-modeling', '1db'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/Physical-AI-Humanoid-Robotics-Textbook/docs/module-1-ros2/chapter-5-launch-files-packages',
                component: ComponentCreator('/Physical-AI-Humanoid-Robotics-Textbook/docs/module-1-ros2/chapter-5-launch-files-packages', '847'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/Physical-AI-Humanoid-Robotics-Textbook/docs/module-2-digital-twin/',
                component: ComponentCreator('/Physical-AI-Humanoid-Robotics-Textbook/docs/module-2-digital-twin/', '956'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/Physical-AI-Humanoid-Robotics-Textbook/docs/module-3-isaac/',
                component: ComponentCreator('/Physical-AI-Humanoid-Robotics-Textbook/docs/module-3-isaac/', 'bd9'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/Physical-AI-Humanoid-Robotics-Textbook/docs/module-4-vla-humanoids/',
                component: ComponentCreator('/Physical-AI-Humanoid-Robotics-Textbook/docs/module-4-vla-humanoids/', '61e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/Physical-AI-Humanoid-Robotics-Textbook/docs/references/glossary',
                component: ComponentCreator('/Physical-AI-Humanoid-Robotics-Textbook/docs/references/glossary', '88e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/Physical-AI-Humanoid-Robotics-Textbook/docs/setup/cloud',
                component: ComponentCreator('/Physical-AI-Humanoid-Robotics-Textbook/docs/setup/cloud', '5c2'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/Physical-AI-Humanoid-Robotics-Textbook/docs/setup/edge-kit',
                component: ComponentCreator('/Physical-AI-Humanoid-Robotics-Textbook/docs/setup/edge-kit', '41d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/Physical-AI-Humanoid-Robotics-Textbook/docs/setup/workstation',
                component: ComponentCreator('/Physical-AI-Humanoid-Robotics-Textbook/docs/setup/workstation', '51c'),
                exact: true,
                sidebar: "tutorialSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/Physical-AI-Humanoid-Robotics-Textbook/',
    component: ComponentCreator('/Physical-AI-Humanoid-Robotics-Textbook/', '637'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];

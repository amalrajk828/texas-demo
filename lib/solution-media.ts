export const SOLUTION_MEDIA = {
  flow: {
    video: "/videos/flow-measurement.mp4",
    poster: "/videos/flow-measurement.jpg",
    href: "/service/flow-measurement-solutions/",
    label: "Flow Measurement & Control Systems",
  },
  inspection: {
    video: "/videos/inspection-testing.mp4",
    poster: "/videos/inspection-testing.jpg",
    href: "/service/inspection-testing/",
    label: "Inspection & Testing",
  },
  automation: {
    video: "/videos/industrial-automation.mp4",
    poster: "/videos/industrial-automation.jpg",
    href: "/service/industrial-automation/",
    label: "Industrial Process Automation",
  },
} as const;

export type SolutionMediaKey = keyof typeof SOLUTION_MEDIA;

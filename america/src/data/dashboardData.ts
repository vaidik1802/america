
import {
  LayoutGrid,
  TrendingUp,
  Clock3,
  BarChart3,
  TriangleAlert,
  Database,
  Network,
  FileText,
  Plug,
  Users,
} from "lucide-react";

export const sidebarSections = [
  {
    title: "INTELLIGENCE",
    items: [
      {
        label: "Executive Overview",
        icon: LayoutGrid,
        path: "/",
      },
      {
        label: "SKU P&L Explorer",
        icon: TrendingUp,
        path: "/sku-pl",
      },
      {
        label: "Margin Waterfall",
        icon: Clock3,
        path: "/margin-waterfall",
      },
      {
        label: "Channel Analytics",
        icon: BarChart3,
        path: "/channel-analytics",
      },
    ],
  },

  {
    title: "MONITORING",
    items: [
      {
        label: "Alerts Inbox",
        icon: TriangleAlert,
        path: "/alerts",
      },
      {
        label: "Data Ecosystem",
        icon: Database,
        path: "/ecosystem",
      },
      {
        label: "Agentic Hierarchy",
        icon: Network,
        path: "/hierarchy",
      },
      {
        label: "Board pack",
        icon: FileText,
        path: "/board-pack",
      },
    ],
  },

  {
    title: "SETUP",
    items: [
      {
        label: "Data connectors",
        icon: Plug,
        path: "/connectors",
      },
      {
        label: "Team & Billing",
        icon: Users,
        path: "/team-billing",
      },
    ],
  },
];
export const stats = [
  {
    title: "NET REVENUE (MTD)",
    value: "AED 154.4M",
    trend: "↗ 78.2%",
    desc: "vs same period LY",
    positive: true,
  },
  {
    title: "GROSS MARGIN %",
    value: "36.2%",
    trend: "↘ 1.2 pts",
    desc: "vs LY • 4 SKUs flagged",
    positive: false,
  },
  {
    title: "EBIT (MTD)",
    value: "AED 18.1M",
    trend: "↗ on track",
    desc: "11.7% margin",
    positive: true,
  },
  {
    title: "ACTIVE ALERTS",
    value: "3",
    color: "bg-red-400",
    trend: "↘ 2 high",
    desc: "1 medium severity",
    positive: false,
  },
];

export const alerts = [
  {
    level: "HIGH PRIORITY",
    title: "Zinc Burger 1kg margin -6.1pts",
    desc: "Trade spend exceeded 38% of gross rev on e-commerce channel.",
    time: "2h ago",
    status: "UNRESOLVED",
  },
  {
    level: "HIGH PRIORITY",
    title: "Frozen Veg returns +1.9pts above threshold",
    desc: "Northern Emirates route showing cold chain lag.",
    time: "5h ago",
    status: "INVESTIGATING",
  },  {
    level: "HIGH PRIORITY",
    title: "Chicken Nuggets mix shift detected",
    desc: "Modern trade volume -11% offset by food service growth. Net margin impact +0.3pts.",
    time: "1D ago",
    status: "INVESTIGATING",
  },
];
export const channelData = [

];
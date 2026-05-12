import { RiArrowDropRightLine } from "react-icons/ri";

interface SKU {
  category: string;
  title: string;
  subtitle?: string; 
  sublabel?: string;
  label: string;  
volumetitle?: string;
volume?: string;
  revenuetitle: string; 
    revenue: string;
    avg: string;
    avgtitle: string;
    icon?: React.ComponentType;
  
}
export const skuData : SKU[] =[
{
 category: "F",
 title: "Frozen Meat",
 label: "3 active SKUs in portfolio",
 subtitle: "AED 11.22M",
 sublabel: "TOTAL NET REVENUE",
 volumetitle: "VOLUME",
 volume: "4870K units",
 revenuetitle: "AVG GM%",
 revenue: "4.84M",
 avg: "AVG EBIT%",
 avgtitle: "11.1%",
 icon:RiArrowDropRightLine ,
},
]
declare module 'lucide-react' {
  export interface LucideIconProps extends React.SVGProps<SVGSVGElement> {
    size?: number | string;
    color?: string;
    strokeWidth?: number | string;
    absoluteStrokeWidth?: boolean;
  }
  export type LucideIcon = React.ForwardRefExoticComponent<LucideIconProps & React.RefAttributes<SVGSVGElement>>;
  
  export const Car: LucideIcon;
  export const Fuel: LucideIcon;
  export const Settings: LucideIcon;
  export const Users: LucideIcon;
  export const ShieldCheck: LucideIcon;
  export const Ship: LucideIcon;
  export const FileCheck: LucideIcon;
  export const Wrench: LucideIcon;
  export const Banknote: LucideIcon;
  export const MapPin: LucideIcon;
  export const PhoneCall: LucideIcon;
  export const MessageCircle: LucideIcon;
  export const X: LucideIcon;
  export const Menu: LucideIcon;
  export const Instagram: LucideIcon;
  export const ChevronDown: LucideIcon;
  export const ChevronUp: LucideIcon;
  export const Check: LucideIcon;
  export const ArrowRight: LucideIcon;
  export const AlertCircle: LucideIcon;
  export const Phone: LucideIcon;
  export const Mail: LucideIcon;
  export const Calendar: LucideIcon;
}
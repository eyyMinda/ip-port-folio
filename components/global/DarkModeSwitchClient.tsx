import { DarkModeSwitch } from "react-toggle-dark-mode";

export type DarkModeSwitchClientProps = {
  checked: boolean;
  onChange: (checked: boolean) => void;
  size?: number;
  sunColor?: string;
  moonColor?: string;
};

export default function DarkModeSwitchClient(props: DarkModeSwitchClientProps) {
  return <DarkModeSwitch {...props} />;
}

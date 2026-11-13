import { useEffect, useState } from "react";
import { Battery, BatteryCharging, Wifi, WifiOff } from "lucide-react";

type BatteryStatus = EventTarget & { level: number; charging: boolean };
type DeviceNavigator = Navigator & { getBattery?: () => Promise<BatteryStatus> };

const formatTime = () => new Intl.DateTimeFormat(undefined, {
  hour: "2-digit",
  minute: "2-digit",
  hourCycle: "h23",
}).format(new Date());

export default function DeviceStatus() {
  const [time, setTime] = useState(formatTime);
  const [online, setOnline] = useState(() => navigator.onLine);
  const [battery, setBattery] = useState<{ level: number; charging: boolean }>();

  useEffect(() => {
    let active = true;
    let deviceBattery: BatteryStatus | undefined;
    const syncConnection = () => setOnline(navigator.onLine);
    const syncTime = () => setTime(formatTime());
    const syncBattery = () => {
      if (deviceBattery) setBattery({
        level: Math.round(deviceBattery.level * 100),
        charging: deviceBattery.charging,
      });
    };

    const clock = window.setInterval(syncTime, 1000);
    window.addEventListener("online", syncConnection);
    window.addEventListener("offline", syncConnection);
    document.addEventListener("visibilitychange", syncTime);

    (navigator as DeviceNavigator).getBattery?.().then((status) => {
      if (!active) return;
      deviceBattery = status;
      syncBattery();
      status.addEventListener("levelchange", syncBattery);
      status.addEventListener("chargingchange", syncBattery);
    }).catch(() => {
      // Battery access can be unavailable or blocked by the browser.
    });

    return () => {
      active = false;
      window.clearInterval(clock);
      window.removeEventListener("online", syncConnection);
      window.removeEventListener("offline", syncConnection);
      document.removeEventListener("visibilitychange", syncTime);
      deviceBattery?.removeEventListener("levelchange", syncBattery);
      deviceBattery?.removeEventListener("chargingchange", syncBattery);
    };
  }, []);

  const ConnectionIcon = online ? Wifi : WifiOff;
  const BatteryIcon = battery?.charging ? BatteryCharging : Battery;
  const networkLabel = online ? "Device reports online" : "Device reports offline";
  const batteryLabel = battery
    ? `Battery ${battery.level}%${battery.charging ? ", charging" : ""}`
    : "Battery status unavailable";

  return (
    <span className="device-status">
      <time aria-label={`Device time ${time}`}>{time}</time>
      <span role="img" aria-label={networkLabel} title={networkLabel}><ConnectionIcon size={14} aria-hidden="true" /></span>
      <span role="img" aria-label={batteryLabel} title={batteryLabel}>
        <BatteryIcon size={16} aria-hidden="true" />
        {battery && <span aria-hidden="true">{battery.level}%</span>}
      </span>
    </span>
  );
}

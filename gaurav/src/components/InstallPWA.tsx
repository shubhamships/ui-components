import { useState } from "react";
import Button from "./ui/personal/Button";
let deferredPrompt: any = null;
export const InstallPWA = () => {
  const [showInstall, setShowInstall] = useState(false);
  const installApp = async () => {
    if (deferredPrompt) {
      deferredPrompt.prompt();
      const { outcome } = await deferredPrompt.userChoice;
      console.log(`User response to install prompt: ${outcome}`);
      deferredPrompt = null;
      setShowInstall(false);
    }
  };
  window.addEventListener("beforeinstallprompt", (e) => {
    e.preventDefault();
    deferredPrompt = e;
    console.log("beforeinstallprompt fired");
    setShowInstall(true);
  });
  window.addEventListener("appinstalled", () => {
    console.log("PWA installed successfully");
    deferredPrompt = null;
    setShowInstall(false);
  });
  return showInstall ? (
    <div className="flex justify-center items-center">
      <div className="fixed top-4 w-full max-w-96">
        <Button
          title="Install App"
          variant="default"
          size="default"
          onClick={installApp}
          className="w-full hover:bg-none"
        />
        <Button
          title="x"
          variant="destructive"
          size="icon"
          onClick={() => setShowInstall(false)}
          className=" absolute text-sm -top-1 -right-1 h-4 w-4"
        />
      </div>
    </div>
  ) : null;
};

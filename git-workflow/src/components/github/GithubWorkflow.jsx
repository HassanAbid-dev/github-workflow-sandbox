import { useState } from "react";
import { ThemeProvider } from "./ThemeContext";
import Dashboard from "./dashboard/DashBoard";
import Workspace from "./workspace/Workspace";

export default function GithubWorkflow() {
  const [selectedRepo, setSelectedRepo] = useState(null);
  const [notifications, setNotifications] = useState([]);
  const user = { email: "intern@granjur.com", name: "Sandbox User" };

  const addNotification = (notification) => {
    setNotifications((prev) => [notification, ...prev]);
  };

  return (
    <ThemeProvider>
      <div className="relative min-h-screen overflow-hidden bg-white text-[#0F172A] dark:bg-[#010409] dark:text-[#E6EDF3] font-sans antialiased">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-72 bg-gradient-to-b from-[#F8FAFC]/70 via-transparent to-transparent blur-3xl dark:from-[#0F172A]/70" />
        <div className="relative flex min-h-screen w-full flex-col">
          <div className="w-full bg-transparent shadow-none rounded-none border-none dark:bg-transparent">
            <div className="min-h-[calc(100vh-0rem)]">
              {!selectedRepo ? (
                <Dashboard onSelectRepo={setSelectedRepo} />
              ) : (
                <Workspace
                  repo={selectedRepo}
                  user={user}
                  onBack={() => setSelectedRepo(null)}
                  onNotify={(notification) => {
                    setNotifications((prev) => [notification, ...prev]);
                  }}
                  notifications={notifications}
                  onDismiss={(id) =>
                    setNotifications((prev) => prev.filter((n) => n.id !== id))
                  }
                  onDismissAll={() => setNotifications([])}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}

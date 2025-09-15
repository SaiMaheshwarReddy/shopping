import config from "@/config.js";

export async function enableMocking() {
  if (!config.USE_MSW) {
    console.log("🔗 Using real API:", config.API_BASE_URL);
    return;
  }

  console.log("🎭 Starting MSW for API mocking...");

  if (typeof window === "undefined" && config.USE_MSW) {
    // Node.js environment (testing)
    const { server } = await import("./server.js");
    server.listen({ onUnhandledRequest: "warn" });
    console.log("🧪 MSW server started for testing");
  } else {
    // Browser environment
    const { worker } = await import("./browser.js");
    await worker.start({
      onUnhandledRequest: "warn",
      serviceWorker: {
        url: "/mockServiceWorker.js",
      },
    });
    console.log("🎭 MSW worker started for browser");
  }
}

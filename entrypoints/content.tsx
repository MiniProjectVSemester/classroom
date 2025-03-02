import FocusModeUI from "@/components/FocusModeUI";
import ReactDOM from "react-dom/client"



export default defineContentScript({
  matches: ['*://*.youtube.com/*'],
  cssInjectionMode: "ui",
  runAt: "document_end",
  async main(ctx) {
    console.log("hello content");

    const ui = await createShadowRootUi(ctx,{
      name: "FocusMode",
      position: "inline",
      anchor: "body",
      onMount: (container) => {
        const app = document.createElement("div");
        container.append(app);

        const root = ReactDOM.createRoot(app);
        root.render(<FocusModeUI />);
        return root;
      },
      onRemove: (root) => {
        root?.unmount();
      },
    })
    
    ui?.mount();
  },
});

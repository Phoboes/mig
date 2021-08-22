// Semi-transparent overlay and content container.
// Todo: Clicking the transparent pane  or hitting escape should close the overlay window.
import Portal from "hocs/portal";
import CloseButton from "components/svgs/closeButton";

export default function Overlay({ children, toggleState, bg = "bg-white" }) {
  return (
    <Portal selector="#portal-root">
      <div
        className={`w-screen h-screen absolute z-10 flex justify-center bg-opacity-40 overscroll-auto ${bg}`}
        // Close the pane if the background is clicked.
        onClick={toggleState}
      >
        <div
          className="border-2 border-blue-100 rounded-xl px-8 py-4 w-4/5 h-4/5 mt-20 relative bg-gray-100 shadow-xl"
          onClick={(e) => {
            // Prevent clicking the child of the overlay from closing the overlay
            e.stopPropagation();
          }}
        >
          <div className="absolute top-3 right-3" onClick={toggleState}>
            <CloseButton classes="cursor-pointer fill-current text-blue-300 hover:text-blue-500 active:text-blue-500 w-5" />
          </div>
          {children}
        </div>
      </div>
    </Portal>
  );
}

// Semi-transparent overlay and content container.
// Todo: Clicking the transparent pane  or hitting escape should close the overlay window.

const Overlay = function ({ children, toggleState }) {
  return (
    <div
      onClick={() => {
        // toggleState();
      }}
    >
      <div>
        <div
          onClick={() => {
            toggleState();
          }}
        >
          Close
        </div>
        {children}
      </div>
    </div>
  );
};

export default Overlay;

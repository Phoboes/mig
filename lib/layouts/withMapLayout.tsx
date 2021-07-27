export default function withMapLayout(Component) {
  return function MapLayout() {
    return (
      <div className="py-14 flex-auto">
        <Component />
      </div>
    );
  };
}

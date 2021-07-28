export default function withMapLayout(Component) {
  return function MapLayout() {
    return (
      <div className="pt-14 flex-auto">
        <Component />
      </div>
    );
  };
}

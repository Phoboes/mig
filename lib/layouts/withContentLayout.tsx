export default function withContentLayout(Component) {
  return function ContentLayout() {
    return (
      <div className="py-14 leading-relaxed flex-auto w-9/12 max-w-6xl min-w-xs mx-auto">
        <Component />
      </div>
    );
  };
}

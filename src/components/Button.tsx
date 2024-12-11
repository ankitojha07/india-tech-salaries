interface ButtonDetails {
  title: string;
  bgClass: string;
  hoverClass: string;
  marginPadding: string;
}

const HomePage = ({
  title,
  bgClass,
  hoverClass,
  marginPadding,
}: ButtonDetails) => {
  return (
    <div>
      <button
        className={`${marginPadding} rounded-lg text-lg hover:${hoverClass} ${bgClass}`}
      >
        {title}
      </button>
    </div>
  );
};

export default HomePage;

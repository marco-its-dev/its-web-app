type PageTitleProps = {
  title: string;
};

export const PageTitle = ({ title }: PageTitleProps) => {
  return <h1 className="text-[5vh] font-extrabold">{title}</h1>;
};

type PageHeaderProps = {
  title: string;
  subtitle: string;
};

export function PageHeader({ title, subtitle }: PageHeaderProps) {
  return (
    <div className="mb-8">
      <h1 className="font-heading text-[26px] font-bold leading-tight text-heading">
        {title}
      </h1>
      <p className="mt-1 text-base text-body">{subtitle}</p>
    </div>
  );
}

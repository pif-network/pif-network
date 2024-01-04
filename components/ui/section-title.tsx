export const SectionTitle = ({
  children,
  content,
}: {
  children?: React.ReactNode;
  content?: string;
}) => {
  return (
    <div>
      <div className="w-8 rounded-sm border mb-1 border-primary-900 opacity-20" />
      {children}
    </div>
  );
};

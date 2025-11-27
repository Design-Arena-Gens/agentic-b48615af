'use client';

interface SectionHeaderProps {
  title: string;
  description: string;
  actions?: React.ReactNode;
  id?: string;
}

const SectionHeader = ({ title, description, actions, id }: SectionHeaderProps) => (
  <div
    className="flex flex-col gap-3 border-b border-neutral-200 pb-6 md:flex-row md:items-center md:justify-between"
    id={id}
  >
    <div>
      <h1 className="text-2xl font-semibold text-neutral-900">{title}</h1>
      <p className="mt-1 text-sm text-neutral-500">{description}</p>
    </div>
    {actions ? <div className="flex items-center gap-2">{actions}</div> : null}
  </div>
);

export default SectionHeader;

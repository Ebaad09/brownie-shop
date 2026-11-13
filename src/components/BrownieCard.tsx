
type BrownieCardProps = {
  name: string;
  description: string;
  price: number;
  label: string;
  style: string;
};

export default function BrownieCard({
  name,
  description,
  price,
  label,
  style,
}: BrownieCardProps) {
  return (
    <article className="group overflow-hidden rounded-3xl border border-line bg-white">
      <div className={`${style} relative flex h-52 items-center justify-center`}>
        <div className="rotate-[-8deg] rounded-xl bg-[#32180f] p-3 shadow-xl transition duration-300 group-hover:rotate-0">
          <div className="h-20 w-32 rounded-lg border-2 border-[#956044] bg-[#60331f]">
            <div className="flex h-full items-center justify-around">
              <span className="h-2 w-2 rounded-full bg-[#c99a70]" />
              <span className="h-2 w-2 rounded-full bg-[#c99a70]" />
              <span className="h-2 w-2 rounded-full bg-[#c99a70]" />
            </div>
          </div>
        </div>

        <span className="absolute left-4 top-4 rounded-full bg-paper px-3 py-1 text-xs font-semibold text-choc">
          {label}
        </span>
      </div>

      <div className="p-5">
        <h3 className="font-display text-xl font-bold">{name}</h3>

        <p className="mt-2 min-h-12 text-sm leading-6 text-muted">
          {description}
        </p>

        <div className="mt-5 border-t border-line pt-4">
          <p className="text-lg font-bold text-choc">
            Rs. {price.toLocaleString("en-PK")}
          </p>
        </div>
      </div>
    </article>
  );
}

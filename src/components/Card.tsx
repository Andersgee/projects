type Props = {
  flip: boolean;
};

export function Card({ flip }: Props) {
  return (
    <div className="grid grid-cols-2 max-w-3xl mb-4 rounded-lg overflow-hidden h-60 sm:h-40">
      <div className="bg-red-400">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi eligendi vero reprehenderit odit accusantium
      </div>
      <div className="bg-green-400">b</div>
    </div>
  );
}

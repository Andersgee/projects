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

/*
const Container = styled.div<ContainerProps>`
  display: grid;
  grid-template:
    "image" 1fr
    "content" 1fr
    / auto;

  box-shadow: ${(props) => props.theme.shadow[5]};
  border-radius: 1rem;
  overflow: hidden;
  background-color: ${(props) => props.theme.color.paper};

  @media ${(props) => props.theme.media.md_and_above} {
    grid-template:
      ${(props) => (props.flip ? `"content image"` : `"image content"`)} 30ch
      / 1fr 1fr;
  }
`;

const Content = styled.div`
  grid-area: content;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  padding: 1rem;
  //align-items: center;

  @media ${(props) => props.theme.media.md_and_above} {
    padding: 2rem;
    align-items: flex-start;
  }
`;
*/

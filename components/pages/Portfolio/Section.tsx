'use client';

import { PortfolioItemDataInterface } from '../../PortfolioItems/PortfolioItemInterface';
import PortfolioItems from '../../PortfolioItems/PortfolioItems';

interface Props {
  name: string;
  items: PortfolioItemDataInterface[];
  setPlayingPortfolioItem: (item: PortfolioItemDataInterface) => unknown;
}

export default function Section(props: Props) {
  if (props.items.length < 1) return null;

  const id = props.name;
  return (
    <div id={id} className="px-4" key={props.name}>
      <div className="align-center mh-2 flex-row justify-between">
        <div className="text-2xl text-white">{props.name}</div>
      </div>
      <PortfolioItems
        items={props.items}
        setPlayingPortfolioItem={props.setPlayingPortfolioItem}
      ></PortfolioItems>
    </div>
  );
}

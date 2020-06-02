import TOC from '../assets/rules/toc.json';
export { TOC };

export interface Section {
  id: string;
  title: string;
}

export function getSection(id: string): Section {
  return TOC.find(section => section.id === id);
}

export function getNext(id: string): Section|undefined {
  let index = TOC.findIndex(section => section.id === id);
  if (index == null) {
    return undefined;
  }
  index += 1;
  return index < TOC.length ? TOC[index] : undefined;
}

export function getPrev(id: string): Section|undefined {
  let index = TOC.findIndex(section => section.id === id);
  if (index == null) {
    return undefined;
  }
  index -= 1;
  return index < 0 ? undefined : TOC[index];
}

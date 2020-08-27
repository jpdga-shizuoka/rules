import TOC_RULES from '../assets/toc/rules.json';
import TOC_QAS from '../assets/toc/qas.json';
import TOC_MISC from '../assets/toc/miscs.json';

const TOC = TOC_RULES.concat(TOC_QAS.concat(TOC_MISC));
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

export function isSubsection(id: string) {
  return /\d{5}/.test(id)
  || (id !== 'qa-index') && /^qa-/.test(id);
}
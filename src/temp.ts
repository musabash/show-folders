import type { Item, Folder } from './types';

export const sampleData: (Item | Folder)[] = [
  {
    type: 'pdf',
    name: 'Employee Handbook',
    added: '2017-01-06',
    size: 153,
  },
  {
    type: 'pdf',
    name: 'Public Holiday policy',
    added: '2016-12-06',
    size: 132,
  },
  {
    type: 'folder',
    name: 'Expenses',
    files: [
      {
        type: 'doc',
        name: 'Expenses claim form',
        added: '2017-05-02',
        size: 55,
      },
      {
        type: 'doc',
        name: 'Fuel allowances',
        added: '2017-05-03',
        size: 76,
      },
    ],
  },
  {
    type: 'csv',
    name: 'Cost centres',
    added: '2016-08-12',
    size: 15,
  },
  {
    type: 'folder',
    name: 'Misc',
    files: [
      {
        type: 'doc',
        name: 'Christmas party',
        added: '2017-12-01',
        size: 123,
      },
      {
        type: 'mov',
        name: 'Welcome to the company!',
        added: '2015-04-24',
        size: 12476,
      },
    ],
  },
];


import React from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { createSerializer } from 'enzyme-to-json';

// snapshot serailizer for producing more human readable snapshots
expect.addSnapshotSerializer(createSerializer({mode: 'deep'}));

Enzyme.configure({ adapter: new Adapter() });

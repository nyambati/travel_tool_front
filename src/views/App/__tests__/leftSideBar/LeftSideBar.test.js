import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { shallow } from 'enzyme';
import LeftSideBar from '../../../../components/LeftSideBar/LeftSideBar';
import LeftSideNavItems from '../../../../components/LeftSideBar/LeftSideNavItems/LeftSideNavItems';
import { LeftSideNavItem } from '../../../../components/LeftSideBar/LeftSideNavItems/LeftSideNavItem/LeftSideNavItem';
import DropdownItem from '../../../../components/LeftSideBar/LeftSideNavItems/DropdownItem/DropdownItem';
import BookmarkIcon from '../../../../images/icons/bookmark';
import DropdownIcon from '../../../../images/icons/dropdown';
import SettingsIcon from '../../../../images/icons/settings';


describe('<LeftSideBar /> tests', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<LeftSideBar />);
    expect(wrapper).toMatchSnapshot();
  });

  describe('<LeftSideNavItems /> tests', () => {
    let wrapper;

    beforeEach(() => {
      wrapper = shallow(<LeftSideNavItems />);
    });

    it('renders correctly', () => {
      expect(wrapper).toMatchSnapshot();
    });

    it('it renders two dropdown items', () => {
      const dropDownItems = wrapper.find('DropdownItem');
      expect(dropDownItems).toHaveLength(2);
    });

    describe('<LeftSideNavItem tests', () => {
      it('renders the LeftSideNavItem', () => {
        const match = {path: '/test-link'};
        const iconSrc = () => {};
        const wrapper = shallow(
          <LeftSideNavItem
            text="Test link"
            match={match}
            iconSrc={iconSrc}
            link_to="/test-link" />
        );
        expect(wrapper).toMatchSnapshot();
      });

      describe('Dropdown Navigation item', () => {
        let match, iconSrc, wrapper;

        beforeEach(() => {
          match = {path: '/test-link'};
          iconSrc = () => {};
          wrapper = shallow(
            <LeftSideNavItem
              text="Test link"
              isDropdown
              iconSrc={iconSrc}
              match={match}
              link_to="/test-link" />
          );
        });

        it('renders as dropdown', () => {
          expect(wrapper).toMatchSnapshot();
        });

        it('toggles dropdown', () => {
            const expectedStateOnClick = { dropdownActive: true };

            wrapper.find('NavLink').simulate('click');
            const stateOnClick = wrapper
              .instance()
              .state;
            expect(stateOnClick).toEqual(expectedStateOnClick);
        });
      });
    });

    describe('<DropdownItem />', () => {
      it('renders correctly', () => {
        const wrapper = shallow(
          <DropdownItem link_to="/test-link/test-endpoint">
            Test Link
          </DropdownItem>
        );

        expect(wrapper).toMatchSnapshot();
      });
    });

    describe('SVG Icons', () => {
      it('renders icons', () => {
        const bookmarkIconWrapper = shallow(<BookmarkIcon active />);
        const dropdownIconWrapper = shallow(<DropdownIcon active />);
        const settingsIconWrapper = shallow(<SettingsIcon active />);
        expect(bookmarkIconWrapper).toMatchSnapshot();
        expect(dropdownIconWrapper).toMatchSnapshot();
        expect(settingsIconWrapper).toMatchSnapshot();
      });
    });
  });
});

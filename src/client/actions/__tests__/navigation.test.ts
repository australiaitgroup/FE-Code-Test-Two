import { toggleSidebar } from '../navigation';

describe('navigation action', () => {
    it('should return TOGGLE_SIDEBAR action', () => {
        expect(toggleSidebar()).toEqual({
            type: 'TOGGLE_SIDEBAR',
        });
    });
});

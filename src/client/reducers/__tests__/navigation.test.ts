import reducer from '../navigation';
import { toggleSidebar } from '../../actions/navigation';

describe('navigation reducer', () => {
    it('should return the initial state', () => {
        expect(reducer(undefined, {} as any)).toEqual({
            showSidebar: false,
        });
    });

    it('should change sidebar visibility', () => {
        const stateToggleOnce = reducer(undefined, toggleSidebar());
        expect(stateToggleOnce).toEqual({ showSidebar: true });

        const stateToggleTwice = reducer(stateToggleOnce, toggleSidebar());
        expect(stateToggleTwice).toEqual({ showSidebar: false });
    });
});

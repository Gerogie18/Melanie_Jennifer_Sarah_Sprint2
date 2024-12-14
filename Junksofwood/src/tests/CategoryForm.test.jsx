import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter, useSearchParams, useNavigate } from 'react-router-dom';
import CategoryForm from '../components/shopcomponents/CategoryForm'
import { vi } from 'vitest';

vi.mock('react-router-dom', () => ({
    ...vi.importActual('react-router-dom'),
    useNavigate: vi.fn(),
    useSearchParams: vi.fn(),
    MemoryRouter: vi.fn(),
}));

describe('CategoryForm', () => {
    const mockNavigate = vi.fn();
    const mockSetSearchParams = vi.fn();
    const mockUseSearchParams = vi.fn(() => [{ get: vi.fn().mockReturnValue('') }, mockSetSearchParams]);

    beforeEach(() => {
        vi.mocked(useNavigate).mockReturnValue(mockNavigate);
        vi.mocked(useSearchParams).mockImplementation(mockUseSearchParams);
    });

    afterEach(() => {
        vi.clearAllMocks();
    });

    it('renders the checkbox with the correct label', () => {
        render(
            <MemoryRouter>
                <CategoryForm categoryId="1" label="Category 1" allCategoryIDs={['1', '2', '3']} />
            </MemoryRouter>
        );

        expect(screen.getByLabelText('Category 1')).toBeInTheDocument();
    });

    it('checks the checkbox if the category is in the search params', () => {
        mockUseSearchParams.mockReturnValueOnce([{ get: vi.fn().mockReturnValue('1') }, mockSetSearchParams]);

        render(
            <MemoryRouter>
                <CategoryForm categoryId="1" label="Category 1" allCategoryIDs={['1', '2', '3']} />
            </MemoryRouter>
        );

        expect(screen.getByLabelText('Category 1')).toBeChecked();
    });

    it('calls navigate with the correct query string when checkbox is checked', () => {
        render(
            <MemoryRouter>
                <CategoryForm categoryId="1" label="Category 1" allCategoryIDs={['1', '2', '3']} />
            </MemoryRouter>
        );

        fireEvent.click(screen.getByLabelText('Category 1'));

        expect(mockSetSearchParams).toHaveBeenCalledWith(new URLSearchParams('cat=1'));
        expect(mockNavigate).toHaveBeenCalledWith('?cat=1');
    });

    it('calls navigate with the correct query string when checkbox is unchecked', () => {
        mockUseSearchParams.mockReturnValueOnce([{ get: vi.fn().mockReturnValue('1') }, mockSetSearchParams]);

        render(
            <MemoryRouter>
                <CategoryForm categoryId="1" label="Category 1" allCategoryIDs={['1', '2', '3']} />
            </MemoryRouter>
        );

        fireEvent.click(screen.getByLabelText('Category 1'));

        expect(mockSetSearchParams).toHaveBeenCalledWith(new URLSearchParams('cat='));
        expect(mockNavigate).toHaveBeenCalledWith('?cat=');
    });

    it('sets all categories in search params if none are present', () => {
        render(
            <MemoryRouter>
                <CategoryForm categoryId="1" label="Category 1" allCategoryIDs={['1', '2', '3']} />
            </MemoryRouter>
        );

        expect(mockSetSearchParams).toHaveBeenCalledWith(new URLSearchParams('cat=1,2,3'));
    });
});
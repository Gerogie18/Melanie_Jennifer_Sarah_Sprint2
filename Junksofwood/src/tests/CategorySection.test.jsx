import { describe, it, expect, vi } from 'vitest';
import { render, screen, waitFor } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import userEvent from "@testing-library/user-event";
import CategorySection from "../components/homecomponents/CategorySection";

const mockNavigate = vi.fn();

// Mock setup
vi.mock('react-router-dom', async (importOriginal) => {
    const actual = await importOriginal();
    return {
      ...actual,
      useNavigate: () => mockNavigate, // Ensure this is returning correctly
    };
  });


describe('CategorySection', () => {

    const renderComponent = () => {
        return render(
            <BrowserRouter>
                <CategorySection />
            </BrowserRouter>
        );
    };

    it('renders the category section with heading and description', () => {
        renderComponent();
        expect(screen.getByText('Categories')).toBeInTheDocument();
    });

    it('renders the ShopButton component', () => {
        renderComponent();
        expect(screen.getByRole('button', { name: /ShopAll/i })).toBeInTheDocument();
    });

    
    it('renders category images and handles click events', async () => {
        render(
            <BrowserRouter>
                <CategorySection />
            </BrowserRouter>
        );
        const images = screen.getAllByAltText((alt) => alt.includes("product image"));

        if (images.length >= 3) {
            
            userEvent.click(images[0]);
            await waitFor(() => {
                expect(mockNavigate).toHaveBeenCalledWith('/category/0');
            });

            userEvent.click(images[1]);
            await waitFor(() => {
                expect(mockNavigate).toHaveBeenCalledWith('/category/1');
            });
            
            userEvent.click(images[2]);
            await waitFor(() => {
                expect(mockNavigate).toHaveBeenCalledWith('/category/2');
            });
            
        } else {
            throw new Error('Expected at least 3 images, but found ' + images.length);
        }
});

});
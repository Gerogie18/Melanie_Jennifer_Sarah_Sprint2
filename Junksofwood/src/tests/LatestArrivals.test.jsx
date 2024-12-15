import { describe, it, expect, vi } from 'vitest';
import { render, screen, waitFor } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import userEvent from "@testing-library/user-event";
import LatestArrivals from "../components/homecomponents/LatestArrivals";

const mockNavigate = vi.fn();

// Mock setup
vi.mock('react-router-dom', async (importOriginal) => {
    const actual = await importOriginal();
    return {
      ...actual,
      useNavigate: () => mockNavigate, // Ensure this is returning correctly
    };
  });

  const renderComponent = () => {
    return render(
        <BrowserRouter>
            <LatestArrivals />
        </BrowserRouter>
    );
};


describe("Latest Arrivals Component", () => {

it('renders the category section with heading and description', () => {
    renderComponent();
    expect(screen.getByText('Our Latest Arrivals')).toBeInTheDocument();
});

it('renders the ShopButton component', () => {
    renderComponent();
    expect(screen.getByRole('button', { name: /ShopAll/i })).toBeInTheDocument();
});


  
it("navigates to correct product page when an image is clicked", async () => {
    render(
      <BrowserRouter>
        <LatestArrivals />
      </BrowserRouter>
    );

    const images = screen.getAllByAltText((alt) => alt.includes("product image"));

    userEvent.click(images[0]);
    await waitFor(() => {
        expect(mockNavigate).toHaveBeenCalledWith("/product/48");
      });

    userEvent.click(images[1]);
    await waitFor(() => {
        expect(mockNavigate).toHaveBeenCalledWith("/product/45");
      });

    userEvent.click(images[2]);
    await waitFor(() => {
        expect(mockNavigate).toHaveBeenCalledWith("/product/50");
      });
});
})
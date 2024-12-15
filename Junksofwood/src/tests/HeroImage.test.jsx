import { describe, it, expect } from 'vitest';
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import HeroImage from "../components/homecomponents/HeroImage";


  const renderComponent = () => {
    return render(
        <BrowserRouter>
            <HeroImage />
        </BrowserRouter>
    );
};


describe("Hero Image Component", () => {

  it('renders the hero image with an alt description', () => {
      renderComponent();
      const heroImage = screen.getByRole('hero-img');
      expect(heroImage).toBeInTheDocument();
      expect(heroImage).toHaveAttribute('alt');
  });
  
})
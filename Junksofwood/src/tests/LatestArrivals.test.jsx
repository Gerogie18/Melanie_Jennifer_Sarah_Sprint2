import { describe, it, expect } from 'vitest'
import jest from 'jest-mock';
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import userEvent from "@testing-library/user-event";
import LatestArrivals from "../components/homecomponents/LatestArrivals";

describe("LatestArrivals Component", () => {
    it("renders the LatestArrivals component with heading and description", () => {
        render(
            <BrowserRouter>
                <LatestArrivals />
            </BrowserRouter>
        );

        expect(screen.getByText("Our Latest Arrivals")).toBeInTheDocument();
    });

    it("renders the images with correct alt text", () => {
        render(
            <BrowserRouter>
                <LatestArrivals />
            </BrowserRouter>
        );

        const images = screen.getAllByAltText("product image");
        expect(images).toHaveLength(3);
    });

    it("navigates to /shop when 'Shop all' button is clicked", () => {
        const mockNavigate = jest.fn();
        jest.mock("react-router-dom", () => ({
            ...jest.requireActual("react-router-dom"),
            useNavigate: () => mockNavigate,
        }));

        render(
            <BrowserRouter>
                <LatestArrivals />
            </BrowserRouter>
        );

        const button = screen.getByText("Shop all");
        userEvent.click(button);

        expect(mockNavigate).toHaveBeenCalledWith("/shop");
    });
});
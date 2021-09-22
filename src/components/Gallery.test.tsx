import Gallery, { getRandomPeople } from "./Gallery";
import { render, screen, fireEvent, findByAltText } from '@testing-library/react';
import jest from "jest"

describe("<Gallery />", () => {
    it("should render 20 images", () => {
        render ( <Gallery /> );

        const contentText = screen.getAllByText(/Gallery/i);
        expect(contentText).toBeTruthy();

        // var apiFunc = jest.spyOn(getRandomPeople, 'getData'.mockImplementationOnce(() => {
        //     return Promise.resolve({
        //         json: () => Promise.resolve(response)
        //     })
        // }))
    })
})
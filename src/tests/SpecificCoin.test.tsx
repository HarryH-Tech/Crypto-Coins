import React from "react";
//  import { render, screen } from '@testing-library/react';
//  import SpecificCoin from '../components/SpecificCoin';
//  import axios from "axios";

//  import {fetchData} from "../utils"
//  test("renders information about a specific coin", function() {
//      render(<SpecificCoin />);

//  })

//  jest.mock("axios");

//  describe("fetchUsers", () => {
//    describe("when API call is successful", () => {
//      it("should return users list", async () => {
//        const users = [
//          { id: 1, name: "John" },
//          { id: 2, name: "Andrew" },
//        ];
//        axios.get.mockResolvedValueOnce(users);

//        const result = await fetchData("bitcoin");

//        expect(axios.get).toHaveBeenCalledWith(`${BASE_URL}/users`);
//        expect(result).toEqual(users);
//      });
//   });

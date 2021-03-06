import { render, screen } from "@testing-library/react";
import { getByRoleName } from "../utilities";
import ProductCard from "../../pages/components/ProductCard";
import { BrowserRouter as Router } from "react-router-dom";

describe("Product card", () => {
	describe("user inteface should have", () => {
		test("a name", () => {
			render(
				<Router>
					<ProductCard
						name={"Nike Air Max Terrascape 90 sneakers in black/dark gray"}
						image={
							"images.asos-media.com/products/nike-air-max-terrascape-90-sneakers-in-black-dark-gray/200487519-1-black"
						}
						priceText={"$140.00"}
						price={140}
						brand={"Nike"}
						id={1}
					/>
				</Router>
			);
			expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent(
				"Nike Air Max Terrascape 90 sneakers in black/dark gray"
			);
		});
		test("a brand", () => {
			render(
				<Router>
					<ProductCard
						name={"Nike Air Max Terrascape 90 sneakers in black/dark gray"}
						image={
							"images.asos-media.com/products/nike-air-max-terrascape-90-sneakers-in-black-dark-gray/200487519-1-black"
						}
						priceText={"$140.00"}
						price={140}
						brand={"Nike"}
						id={1}
					/>
				</Router>
			);
			expect(screen.getByRole("heading", { level: 2 })).toHaveTextContent("By: Nike");
		});
		test("an image", () => {
			render(
				<Router>
					<ProductCard
						name={"Nike Air Max Terrascape 90 sneakers in black/dark gray"}
						image={
							"images.asos-media.com/products/nike-air-max-terrascape-90-sneakers-in-black-dark-gray/200487519-1-black"
						}
						priceText={"$140.00"}
						price={140}
						brand={"Nike"}
						id={1}
					/>
				</Router>
			);
			expect(screen.getByRole("img")).toBeInTheDocument();
		});
		test("a price", () => {
			render(
				<Router>
					<ProductCard
						name={"Nike Air Max Terrascape 90 sneakers in black/dark gray"}
						image={
							"images.asos-media.com/products/nike-air-max-terrascape-90-sneakers-in-black-dark-gray/200487519-1-black"
						}
						priceText={"$140.00"}
						price={140}
						brand={"Nike"}
						id={1}
					/>
				</Router>
			);
			expect(screen.getByText(/^\$\d+(.\d{1,2})?$/)).toHaveTextContent("$140.00");
		});
		test("a details button", () => {
			render(
				<Router>
					<ProductCard
						name={"Nike Air Max Terrascape 90 sneakers in black/dark gray"}
						image={
							"images.asos-media.com/products/nike-air-max-terrascape-90-sneakers-in-black-dark-gray/200487519-1-black"
						}
						priceText={"$140.00"}
						price={140}
						brand={"Nike"}
						id={1}
					/>
				</Router>
			);
			expect(getByRoleName("button", "1")).toBeInTheDocument();
		});
	});
});

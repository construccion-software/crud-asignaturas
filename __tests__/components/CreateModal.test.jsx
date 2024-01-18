import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import CreateModal from "../../src/components/CreateModal";

describe("CreateModal", () => {
  it("loads CreateModal", async () => {
    render(<CreateModal isOpen={true} />);
    await screen.findByText("Create Subject");
    //await screen.findByText('Create Subject')
    expect(screen.getByText("Create Subject")).toHaveTextContent(
      "Create Subject"
    );
  });

  it("does not load CreateModal if it not open", async () => {
    render(<CreateModal isOpen={false} />);
    await screen.queryByText("Create Subject");

    expect(screen.queryByText("Create Subject")).toBeNull();
  });
});

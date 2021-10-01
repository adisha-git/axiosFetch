import React from "react";
import { render, fireEvent, waitFor } from "@testing-library/react";
import Users from "../Users";
import mockUserResp from "./mockUserResp.json";
import axios from "axios";
import UserContextProvider from "../../../contexts/users-context";

describe("Users page", () => {
  beforeEach(() => {
    jest.spyOn(axios, "get").mockReturnValue(
      Promise.resolve({
        data: mockUserResp,
      })
    );
  });

  it("should render all user data without filtering", async () => {
    const { getByTestId, queryByTestId } = await waitFor(() =>
      render(
        <UserContextProvider>
          <Users />
        </UserContextProvider>
      )
    );
    expect(queryByTestId("name-username-filter")).not.toBeNull();
    expect(queryByTestId("email-filter")).not.toBeNull();
    expect(getByTestId("name1").textContent).toContain("Leanne Graham");
    expect(getByTestId("email1").textContent).toContain("Sincere@april.biz");
    expect(getByTestId("tel1").textContent).toContain("1-770-736-8031 x56442");
    expect(getByTestId("address1").textContent).toContain(
      "Kulas Light Apt. 556Gwenborough92998-3874"
    );
    expect(getByTestId("website1")).toHaveAttribute(
      "href",
      "www.hildegard.org"
    );
    expect(getByTestId("company1").textContent).toContain("Romaguera-Crona");

    expect(getByTestId("name2").textContent).toContain("Ervin Howell");
    expect(getByTestId("email2").textContent).toContain("Shanna@melissa.tv");
    expect(getByTestId("tel2").textContent).toContain("010-692-6593 x09125");
    expect(getByTestId("address2").textContent).toContain(
      "Victor Plains Suite 879Wisokyburgh90566-7771"
    );
    expect(getByTestId("website2")).toHaveAttribute(
      "href",
      "www.anastasia.net"
    );
    expect(getByTestId("company2").textContent).toContain("Deckow-Crist");

    expect(getByTestId("name3").textContent).toContain("Clementine Bauch");
    expect(getByTestId("email3").textContent).toContain("Nathan@yesenia.net");
    expect(getByTestId("tel3").textContent).toContain("1-463-123-4447");
    expect(getByTestId("address3").textContent).toContain(
      "Douglas Extension Suite 847McKenziehaven59590-4157"
    );
    expect(getByTestId("website3")).toHaveAttribute("href", "www.ramiro.info");
    expect(getByTestId("company3").textContent).toContain("Romaguera-Jacobson");
  });

  it("should filter values with name", async () => {
    const { getByTestId, queryByTestId } = await waitFor(() =>
      render(
        <UserContextProvider>
          <Users />
        </UserContextProvider>
      )
    );
    fireEvent.change(getByTestId("name-username-filter"), {
      target: { value: "Leanne Graham" },
    });
    jest.setTimeout(100);
    await waitFor(() => {
      expect(queryByTestId("company1")).not.toBeNull();
      expect(getByTestId("name1").textContent).toContain("Leanne Graham");
      expect(getByTestId("email1").textContent).toContain("Sincere@april.biz");
      expect(getByTestId("tel1").textContent).toContain(
        "1-770-736-8031 x56442"
      );
      expect(getByTestId("address1").textContent).toContain(
        "Kulas Light Apt. 556Gwenborough92998-3874"
      );
      expect(getByTestId("website1")).toHaveAttribute(
        "href",
        "www.hildegard.org"
      );
      expect(getByTestId("company1").textContent).toContain("Romaguera-Crona");
    });
    await waitFor(() => {
      expect(queryByTestId("userContent2")).toBeNull();
      expect(queryByTestId("userContent3")).toBeNull();
    });
  });

  it("should filter values with userName", async () => {
    const { getByTestId, queryByTestId } = await waitFor(() =>
      render(
        <UserContextProvider>
          <Users />
        </UserContextProvider>
      )
    );
    fireEvent.change(getByTestId("name-username-filter"), {
      target: { value: "Bret" },
    });
    jest.setTimeout(100);
    await waitFor(() => {
      expect(queryByTestId("company1")).not.toBeNull();
      expect(getByTestId("name1").textContent).toContain("Leanne Graham");
      expect(getByTestId("email1").textContent).toContain("Sincere@april.biz");
      expect(getByTestId("tel1").textContent).toContain(
        "1-770-736-8031 x56442"
      );
      expect(getByTestId("address1").textContent).toContain(
        "Kulas Light Apt. 556Gwenborough92998-3874"
      );
      expect(getByTestId("website1")).toHaveAttribute(
        "href",
        "www.hildegard.org"
      );
      expect(getByTestId("company1").textContent).toContain("Romaguera-Crona");
    });
    await waitFor(() => {
      expect(queryByTestId("userContent2")).toBeNull();
      expect(queryByTestId("userContent3")).toBeNull();
    });
  });

  it("should filter values with email", async () => {
    const { getByTestId, queryByTestId } = await waitFor(() =>
      render(
        <UserContextProvider>
          <Users />
        </UserContextProvider>
      )
    );
    fireEvent.change(getByTestId("email-filter"), {
      target: { value: "Sincere@april.biz" },
    });
    jest.setTimeout(100);
    await waitFor(() => {
      expect(queryByTestId("company1")).not.toBeNull();
      expect(getByTestId("name1").textContent).toContain("Leanne Graham");
      expect(getByTestId("email1").textContent).toContain("Sincere@april.biz");
      expect(getByTestId("tel1").textContent).toContain(
        "1-770-736-8031 x56442"
      );
      expect(getByTestId("address1").textContent).toContain(
        "Kulas Light Apt. 556Gwenborough92998-3874"
      );
      expect(getByTestId("website1")).toHaveAttribute(
        "href",
        "www.hildegard.org"
      );
      expect(getByTestId("company1").textContent).toContain("Romaguera-Crona");
    });
    await waitFor(() => {
      expect(queryByTestId("userContent2")).toBeNull();
      expect(queryByTestId("userContent3")).toBeNull();
    });
  });
});

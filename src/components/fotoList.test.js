import React from "react";
import { shallow } from "enzyme";
import FotoList from "./fotoList";
import Foto from "./foto";
import LoadMore from "./loadMore";

const fotos = [
  {
    id: 1,
    name: "Island",
    year: "2001",
    genre: "Nature",
    image:
      "https://images.unsplash.com/photo-1442530792250-81629236fe54?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=980&h=980&fit=crop&s=9631adb2d2f752e3a0734f393fef634b"
  },
  {
    id: 2,
    name: "Forest",
    year: "2003",
    genre: "Nature",
    image:
      "https://images.unsplash.com/photo-1468851508491-4f854ec88aa0?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=900&h=900&fit=crop&s=b1222b6a1d3694cac76d2a23c3a02254"
  },
  {
    id: 3,
    name: "Whale",
    year: "2004",
    genre: "Animals",
    image:
      "https://images.unsplash.com/photo-1454991727061-be514eae86f7?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=900&h=900&fit=crop&s=3c55430f01fe9ac9a9ccb3383d1416ff"
  },
  {
    id: 4,
    name: "Mountain",
    year: "2014",
    genre: "Nature",
    image:
      "https://images.unsplash.com/photo-1467890947394-8171244e5410?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=980&h=980&fit=crop&s=9396f0adf263b51b44626228225684d0"
  },
  {
    id: 5,
    name: "Boat",
    year: "2018",
    genre: "Man",
    image:
      "https://images.unsplash.com/photo-1443302382600-0bfacc473376?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=980&h=980&fit=crop&s=0c0f26518c1001f67b6c2e4480a8d3e0"
  },
  {
    id: 6,
    name: "Flowers",
    year: "2019",
    genre: "Nature",
    image:
      "https://images.unsplash.com/photo-1429091443922-e7d9ae79a837?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=900&h=900&fit=crop&s=e81cb6a60c53788559edb9bec21b80fc"
  },
  {
    id: 7,
    name: "Fire",
    year: "2016",
    genre: "Nature",
    image:
      "https://images.unsplash.com/photo-1468245856972-a0333f3f8293?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=900&h=900&fit=crop&s=1f57cc13084e32839627453821a43abf"
  },
  {
    id: 8,
    name: "Garden",
    year: "2003",
    genre: "Nature",
    image:
      "https://images.unsplash.com/photo-1427392797425-39090deb14ec?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=900&h=900&fit=crop&s=8bfe49466d0da200e61128a8ab0e8fbe"
  },
  {
    id: 9,
    name: "Bridge",
    year: "2009",
    genre: "Man",
    image:
      "https://images.unsplash.com/photo-1445723356089-6dbb51d9c4f8?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=980&h=980&fit=crop&s=6e476c6e7ce1adac161295616d1bec05"
  }
];

describe("Test Fotolist Component", () => {
  describe("Initial testing", () => {
    const component = shallow(<FotoList />);
    it("default number of list entries", () => {
      expect(component.find(Foto)).toHaveLength(3);
    });
    it("test list entries through increasing visible property", () => {
      const length = component.state("fotos").length;
      component.setState({ visible: length });
      expect(component.find(Foto)).toHaveLength(length);
    });
    it("Test empty list", () => {
      component.setState({ fotos: [] });
      expect(component.find("p").text()).toBe("No fotos found");
    });
  });
  describe("Load More Functionality", () => {
    const component = shallow(<FotoList />);
    it("Initial state", () => {
      expect(component.state().visible).toBe(3);
      expect(component.find("LoadMore").length).toBe(1);
    });
    it("LoadMore hidden when all items are visible", () => {
      const length = component.state("fotos").length;
      component.setState({ visible: length });
      expect(component.find("LoadMore").length).toBe(0);
    });
    it("Test LoadMore click", () => {
      const component = shallow(<FotoList />);
      component
        .find("LoadMore")
        .props()
        .onLoadMore();
      expect(component.state().visible).toBe(6);
    });
  });
  describe("Collapse Functionality", () => {
    const component = shallow(<FotoList />);
    it("Initial state", () => {
      expect(component.find("Collapse").length).toBe(0);
    });
    it("Collapse is visible when all item are present", () => {
      const length = component.state("fotos").length;
      component.setState({ visible: length });
      expect(component.find("Collapse").length).toBe(1);
    });
    it("Test Collapse click", () => {
      component
        .find("Collapse")
        .props()
        .onCollapse();
      expect(component.state().visible).toBe(3);
    });
  });
  describe("Search Functionality", () => {
    const component = shallow(<FotoList />);
    // const input = component.find("Search").find("input");
    // input.simulate("change", { target: { value: "test" } });
    // component
    //   .find("Search")
    //   .props()
    //   .onSearchTypeChange("test");
    // expect(component.state("queryString")).toBe("test");
  });
});

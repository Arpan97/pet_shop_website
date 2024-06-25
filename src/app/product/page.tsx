"use client";
import React, { useCallback, useEffect, useState } from "react";
import {
  AllCategoryData,
  FilterData,
  SortingData,
  productsData,
} from "@/utils/DataConstant";
import List from "@/components/ListView/List";
import ProductCard from "./ProductCard";
import Checkbox from "@/elements/Checkbox";
import Loader from "@/elements/Loader";

const Product = () => {
  const [state, setState] = useState<any>({
    petTypeList: [],
    accessoriesTypeList: [],
    selectedFilter: [],
    filteredData: [],
    loader: true,
    sortValue: "",
    selectedSort: "",
    filterValue: "",
    selectedFilterVal: "",
  });
  const updateState = useCallback((key?: any, value?: any) => {
    if (typeof key === "object") {
      setState((prevState: any) => ({
        ...prevState,
        ...key,
      }));
    } else {
      setState((prevState: any) => ({
        ...prevState,
        [key]: value,
      }));
    }
  }, []);
  const [selectedValues, setSelectedValues] = useState<any[]>([]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      const petType = AllCategoryData?.filter((item) => item?.type === "pet");
      const accessoryType = AllCategoryData?.filter(
        (item) => item?.type === "accessory"
      );
      updateState({
        filteredData: productsData,
        petTypeList: petType || [],
        accessoriesTypeList: accessoryType || [],
        loader: false,
      });
    }, 2000);
    return () => {
      clearTimeout(timeout);
    };
  }, []);

  const renderCategory = (item: any) => (
    <Checkbox
      key={item.id}
      label={item.name}
      value={item.name}
      selectedValues={selectedValues}
      setSelectedValues={setSelectedValues}
    />
  );
  const handleUpdateSort = (item: any) => {
    // sortBy={[{ key: 'offerPrice', descending: false }]}
    updateState("sortValue", item);
    if (item === "L2H") {
      updateState("selectedSort", [{ key: "offerPrice", descending: false }]);
    } else if (item === "H2L") {
      updateState("selectedSort", [{ key: "offerPrice", descending: true }]);
    } else if (item === "A2Z") {
      updateState("selectedSort", [{ key: "name", descending: false }]);
    } else if (item === "Z2A") {
      updateState("selectedSort", [{ key: "name", descending: true }]);
    }
  };
  const renderSort = (item: any) => (
    <label className="md:text-base text-sm cursor-pointer">
      <input
        type="radio"
        value={item?.type}
        checked={state.sortValue === item?.type}
        onChange={() => handleUpdateSort(item?.type)}
        className="mr-2 cursor-pointer"
      />
      {item?.name}
    </label>
  );
  const handleUpdateFilter = (item: any) => {
    // sortBy={[{ key: 'offerPrice', descending: false }]}
    updateState("filterValue", item);
    if (item === "<1000") {
      updateState("selectedFilterVal", [
        { key: "offerPrice", descending: false },
      ]);
    } else if (item === "1001") {
      updateState("selectedFilterVal", [
        { key: "offerPrice", descending: true },
      ]);
    } else if (item === "5001") {
      updateState("selectedFilterVal", [{ key: "name", descending: false }]);
    } else if (item === "10000>") {
      updateState("selectedFilterVal", [{ key: "name", descending: true }]);
    }
  };
  const renderFilter = (item: any) => (
    <label className="md:text-base text-sm cursor-pointer">
      <input
        type="radio"
        value={item?.type}
        checked={state.filterValue === item?.type}
        onChange={() => handleUpdateFilter(item?.type)}
        className="mr-2 cursor-pointer"
      />
      {item?.name}
    </label>
    // <Checkbox
    //   key={item.id}
    //   label={item.name}
    //   value={item.name}
    //   selectedValues={selectedValues}
    //   setSelectedValues={setSelectedValues}
    // />
  );

  const renderProduct = (item: any) => (
    <ProductCard key={item.id} data={item} />
  );
  const onBtnClear = (e: any) => {
    e.preventDefault();
    setSelectedValues([]);
    updateState("filteredData", productsData);
  };
  const onBtnApply = (e: any) => {
    e.preventDefault();
    if (selectedValues?.length > 0) {
      let filteredProducts = productsData.filter((product: any) =>
        selectedValues.includes(product.category)
      );
      updateState("filteredData", filteredProducts);
    } else {
      updateState("filteredData", productsData);
    }
  };
  return (
    <div className="flex w-full bg-gray-100 pl-2">
      {state.loader ? (
        <Loader />
      ) : (
        <>
          <div className="md:w-[25%] border-2 shadow-lg rounded-xl h-fit md:mt-3">
            <div className="text-black px-5 py-5">
              <p className="font-bold text-sm md:text-xl">All Pet Category</p>
              <div className="flex flex-col">
                <List data={state.petTypeList} renderList={renderCategory} />
              </div>
            </div>
            <div className="text-black px-5 py-5">
              <p className="font-bold text-sm md:text-xl">Sort</p>
              <div className="flex flex-col">
                <List data={SortingData} renderList={renderSort} />
              </div>
            </div>
            <div className="lg:flex">
              <button
                onClick={onBtnClear}
                className="bg-red-400 w-[95%] lg:ml-3 md:ml-2 ml-1 mb-3 py-2 shadow-lg md:text-base text-sm rounded-lg text-white font-bold"
              >
                Clear Filter
              </button>
              <button
                onClick={onBtnApply}
                className="bg-blue-400 w-[95%] lg:ml-3 md:ml-2 md:mr-3 ml-1 mb-3 py-2 shadow-lg md:text-base text-sm rounded-lg text-white font-bold"
              >
                Apply Filter
              </button>
            </div>
          </div>
          <div className="md:w-[75%] bg-gray-100 ml-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 md:mx-3 md:my-3 ml-2 mr-2">
              <List
                data={state?.filteredData}
                renderList={renderProduct}
                isSort
                sortingBy={state?.selectedSort ? state?.selectedSort : ""}
              />
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Product;

import FlatList from "flatlist-react";
import Empty from "../Empty/Empty";
import { memo } from "react";

interface ListProps {
  data: any;
  renderList: any;
  isSort?: boolean;
  sortingBy?: any;
}

const List = ({ data, renderList, isSort, sortingBy }: ListProps) => {
  return (
    <>
      {isSort ? (
        <FlatList
          list={data}
          renderItem={renderList}
          renderWhenEmpty={() => <Empty />}
          sortBy={sortingBy}
          renderOnScroll
          //   sortBy={["firstName", { key: "lastName", descending: true }]}
        />
      ) : (
        <FlatList
          list={data}
          renderItem={renderList}
          renderWhenEmpty={() => <Empty />}
          renderOnScroll
        />
      )}
    </>
  );
};

export default memo(List);

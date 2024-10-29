import * as React from "react";

import { CompactTable } from "@table-library/react-table-library/compact";
import { useTheme } from "@table-library/react-table-library/theme";
import { getTheme } from "@table-library/react-table-library/baseline";
import { useSelector } from "react-redux";

// import { DocumentationSee } from "../documentation";
// import { nodes } from "../data";

const Tab = () => {
//   let data = { nodes };

  const theme = useTheme(getTheme());

  const [search, setSearch] = React.useState("");

  const handleSearch = (event) => {
    setSearch(event.target.value);
  };

//   data = {
//     nodes: data.nodes.filter((item) =>
//       item.name.toLowerCase().includes(search.toLowerCase())
//     ),
//   };

  const COLUMNS = [
    { label: "Task", renderCell: (item) => item.name },
    {
      label: "Deadline",
      renderCell: (item) =>
        item.deadline.toLocaleDateString("en-US", {
          year: "numeric",
          month: "2-digit",
          day: "2-digit",
        }),
    },
    { label: "Type", renderCell: (item) => item.type },
    {
      label: "Complete",
      renderCell: (item) => item.isComplete.toString(),
    },
    { label: "Tasks", renderCell: (item) => item.nodes?.length },
  ];

  const { users } = useSelector((state) => state.user);

  return (
    <>
      <label htmlFor="search">
        Search by Task:&nbsp;
        <input id="search" type="text" value={search} onChange={handleSearch} />
      </label>
      <br />

      <CompactTable columns={COLUMNS} data={users} theme={theme} />

      <br />
      {/* <DocumentationSee anchor={"Features/Search"} /> */}
    </>
  );
};

export default Tab;
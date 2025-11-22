"use client";

import { ColumnDef } from "@tanstack/react-table";
import dynamic from "next/dynamic";
import React from "react";

// --- IMPORTANT ---
// 1. Manually define the necessary props type locally to avoid circular dependencies
interface ClientDataTableProps {
  columns: any[];
  data: any[];
}

// 2. Dynamically import the DataTable component, bypassing SSR
const DynamicDataTable = dynamic(() => 
  import("./data-table").then((mod) => mod.DataTable),
  { ssr: false } // This is now allowed inside a "use client" file
);

// 3. This is the component called by the server
export const ClientTableWrapper: React.FC<ClientDataTableProps> = ({ columns, data }) => {
  return (
    <React.Suspense fallback={<div>Loading table...</div>}>
      <DynamicDataTable columns={columns} data={data} />
    </React.Suspense>
  );
};
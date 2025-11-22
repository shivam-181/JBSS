"use client";

import { ColumnDef } from "@tanstack/react-table";
import dynamic from "next/dynamic";
import React from "react";

// The actual DataTable component (Client Component that uses hooks)
import { DataTable } from "./data-table";

// This is the component that will be rendered only on the client
const DynamicDataTable = dynamic<DataTableProps<any, any>>(
  () => Promise.resolve(DataTable),
  { ssr: false } // <-- This instruction is now valid because the wrapper is "use client"
);

interface ClientTableWrapperProps {
  columns: ColumnDef<any, any>[];
  data: any[];
}

export const ClientTableWrapper: React.FC<ClientTableWrapperProps> = ({ columns, data }) => {
  return (
    // We add a loading fallback here because ssr: false means it won't appear instantly
    <React.Suspense fallback={<div>Loading table...</div>}>
      <DynamicDataTable columns={columns} data={data} />
    </React.Suspense>
  );
};
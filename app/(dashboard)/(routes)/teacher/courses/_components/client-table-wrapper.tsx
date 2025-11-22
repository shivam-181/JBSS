"use client";

import { ColumnDef } from "@tanstack/react-table";
import dynamic from "next/dynamic";
import React from "react";

import { DataTableProps } from "./data-table";

const DynamicDataTable = dynamic(
  () => import("./data-table").then((mod) => mod.DataTable),
  { ssr: false }
) as <TData, TValue>(props: DataTableProps<TData, TValue>) => React.JSX.Element;

export function ClientTableWrapper<TData, TValue = unknown>({
  columns,
  data,
}: DataTableProps<TData, TValue>) {
  return (
    <React.Suspense fallback={<div>Loading table...</div>}>
      <DynamicDataTable columns={columns} data={data} />
    </React.Suspense>
  );
}
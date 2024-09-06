"use client";
import BasicTable from "@src/components/basic-table";
import DataTable from "@src/components/data-table";
import EnhancedTable from "@src/components/sorting-table";
import React from "react";
import styled from "@emotion/styled";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import StickyHeadTable from "@src/components/sticky-header-table";
import CollapsibleTable from "@src/components/collapsible-table";
import ImageTable from "@src/components/table-image";

const darkTheme = createTheme({
    palette: {
      mode: 'dark',
    },
  });

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

const TableContainer = styled.div`
  align-self: center;
  color: #333;
  align-items: center;
  justify-content: center;
  display: flex;
  width: 50%;
`;

const TablePage = () => {
  return (
    <div>
      <ThemeProvider theme={darkTheme}>
        <Container>
          <h1>Table Page</h1>
          <TableContainer>
            <EnhancedTable />
          </TableContainer>
        </Container>
      </ThemeProvider>
    </div>
  );
};

export default TablePage;

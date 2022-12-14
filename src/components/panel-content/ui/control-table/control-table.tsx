import React, { ReactNode } from "react";
import { styled, themes } from "@storybook/theming";

// Interfaces
interface Cell {
  side: "left" | "right";
}

interface ControlTableRow {
  name: string;
  control: ReactNode;
}

interface ControlTable {
  rows: ControlTableRow[];
}

// Styles
const Table = styled.table({
  width: "100%",
  borderCollapse: "collapse",
});

const Row = styled.tr({
  padding: 0,
  borderBottom: `1px solid ${themes.normal.appBorderColor}`,
});

const commonCellStyles = ({ side }: Cell) => ({
  width: side === "left" ? "25%" : "75%",
  padding: side === "left" ? "10px 15px 10px 30px" : "10px 30px 10px 15px",
});

const HeadCell = styled.th<Cell>(({ side }) => ({
  ...commonCellStyles({ side }),
  fontWeight: 700,
  textAlign: "left",
  color: themes.normal.textMutedColor,
}));

const BodyCell = styled.td<Cell>(({ side }) => ({
  ...commonCellStyles({ side }),
  fontWeight: side === "left" ? 700 : 400,
}));

// Table
const ControlTable = (props: ControlTable) => {
  return (
    <Table>
      <thead>
        <Row>
          <HeadCell side="left">Name</HeadCell>
          <HeadCell side="right">Control</HeadCell>
        </Row>
      </thead>

      <tbody>
        {props.rows.map(row => (
          <Row key={row.name}>
            <BodyCell side="left">{row.name}</BodyCell>
            <BodyCell side="right">{row.control}</BodyCell>
          </Row>
        ))}
      </tbody>
    </Table>
  )
};

export default ControlTable;

import React from "react";
import "./Table.css";

const Table

class HoverStripedTable extends Table {
    render() {
      return (
        <BootstrapTable data={  } striped hover condensed>
            <TableHeaderColumn dataField='name'>Away</TableHeaderColumn>
            <TableHeaderColumn dataField='name'>Home</TableHeaderColumn>
            <TableHeaderColumn dataField='name'>Spread</TableHeaderColumn>
            <TableHeaderColumn dataField='name'>Moneyline</TableHeaderColumn>
            <TableHeaderColumn dataField='price'>Total</TableHeaderColumn>
        </BootstrapTable>
      );
    }
  }
import { Card, Table, TableBody, TableCell, TableHead, TableRow } from "@mui/material";
import * as React from "react";
import { useTranslate, Title } from "react-admin";

import segments from "./data";
import LinkToRelatedCustomers from "./LinkToRelatedCustomers";

const Segments = () => {
  const translate = useTranslate();

  return (
    <Card sx={{ mt: 2 }}>
      <Title title={translate("resources.segments.name", { smart_count: 2 })} />
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>{translate("resources.segments.fields.name")}</TableCell>
            <TableCell />
          </TableRow>
        </TableHead>
        <TableBody>
          {segments.map((segment) => (
            <TableRow key={segment.id}>
              <TableCell>{translate(segment.name)}</TableCell>
              <TableCell>
                <LinkToRelatedCustomers segment={segment.id} />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Card>
  );
};

export default Segments;

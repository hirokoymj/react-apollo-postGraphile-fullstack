import React from "react";
import { useQuery } from "@apollo/react-hooks";
import get from "lodash/get";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

import { ALL_PEOPLE } from "../Queries/PeopleQueries";

export const PeopleTable = ({ tableHead }) => {
  const { loading, data } = useQuery(ALL_PEOPLE);
  const all_people = get(data, "allPeople.edges", []);

  return (
    <>
      {loading ? (
        <p>loading</p>
      ) : (
        <Paper>
          <Table>
            <TableHead>
              <TableRow>
                {tableHead.map(data => (
                  <TableCell key={data}>{data}</TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {all_people.map(({ node }) => (
                <TableRow key={node.id}>
                  {tableHead.map(item => (
                    <TableCell key={item}>{node[item]}</TableCell>
                  ))}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Paper>
      )}
    </>
  );
};

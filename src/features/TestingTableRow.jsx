import Table from "@/ui/table/Table";

export default function TestingTableRow({ test }) {
  return (
    <Table.Row key={test?.id}>
      <Table.Cell>{test?.arabic}</Table.Cell>
      <Table.Cell>{test?.english}</Table.Cell>
      <Table.Cell>{test?.french}</Table.Cell>
      <Table.Cell>{test?.german}</Table.Cell>
    </Table.Row>
  );
}

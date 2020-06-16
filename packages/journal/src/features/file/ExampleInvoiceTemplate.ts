import { createFile, FileType } from "./File";

const content = [
  { type: "paragraph", breakoutTop: true, children: [{ text: "" }] },
  {
    type: "table",
    headerRow: false,
    children: [
      {
        type: "table-row",
        children: [
          {
            type: "table-cell",
            children: [
              { type: "h2", children: [{ text: "ACME CORPORATION" }] },
              {
                type: "paragraph",
                children: [{ text: "1599 Appleview Town" }],
              },
              { type: "paragraph", children: [{ text: "Church Street" }] },
              {
                type: "paragraph",
                children: [{ text: "New York,  NY 12345" }],
              },
              { type: "paragraph", children: [{ text: "" }] },
            ],
          },
          {
            type: "table-cell",
            children: [
              {
                type: "h2",
                children: [{ text: "INVOICE" }],
                textAlign: "right",
              },
              {
                type: "paragraph",
                children: [{ text: "#{{example-counter}}" }],
                textAlign: "right",
              },
            ],
          },
        ],
      },
    ],
  },
  {
    type: "table",
    headerRow: false,
    children: [
      {
        type: "table-row",
        children: [
          {
            type: "table-cell",
            children: [
              {
                type: "paragraph",
                children: [{ text: "Bill To:", bold: true }],
              },
              { type: "paragraph", children: [{ text: "" }] },
              { type: "paragraph", children: [{ text: "John Smith" }] },
              { type: "paragraph", children: [{ text: "127 High Road" }] },
              { type: "paragraph", children: [{ text: "James Street" }] },
              {
                type: "paragraph",
                children: [{ text: "California,  CA 12345" }],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    type: "table",
    headerRow: false,
    children: [
      {
        type: "table-row",
        children: [
          {
            type: "table-cell",
            children: [
              {
                type: "paragraph",
                children: [{ text: "Invoice Date", bold: true }],
              },
            ],
          },
          {
            type: "table-cell",
            children: [
              { type: "paragraph", children: [{ text: "Terms", bold: true }] },
            ],
          },
          {
            type: "table-cell",
            children: [
              {
                type: "paragraph",
                children: [{ text: "Due Date", bold: true }],
              },
            ],
          },
          {
            type: "table-cell",
            children: [{ type: "paragraph", children: [{ text: "" }] }],
          },
          {
            type: "table-cell",
            children: [{ type: "paragraph", children: [{ text: "" }] }],
          },
        ],
      },
      {
        type: "table-row",
        children: [
          {
            type: "table-cell",
            children: [
              { type: "paragraph", children: [{ text: "{{today}}" }] },
            ],
          },
          {
            type: "table-cell",
            children: [{ type: "paragraph", children: [{ text: "30 Days" }] }],
          },
          {
            type: "table-cell",
            children: [
              { type: "paragraph", children: [{ text: "{{today 30}}" }] },
            ],
          },
          {
            type: "table-cell",
            children: [{ type: "paragraph", children: [{ text: "" }] }],
          },
          {
            type: "table-cell",
            children: [{ type: "paragraph", children: [{ text: "" }] }],
          },
        ],
      },
    ],
  },
  {
    type: "table",
    headerRow: false,
    children: [
      {
        type: "table-row",
        children: [
          {
            type: "table-cell",
            children: [
              {
                type: "paragraph",
                children: [{ text: "Description", bold: true }],
              },
            ],
          },
          {
            type: "table-cell",
            children: [
              {
                type: "paragraph",
                children: [{ text: "Quantity", bold: true }],
                textAlign: "right",
              },
            ],
          },
          {
            type: "table-cell",
            children: [
              {
                type: "paragraph",
                children: [{ text: "Price", bold: true }],
                textAlign: "right",
              },
            ],
          },
          {
            type: "table-cell",
            children: [
              {
                type: "paragraph",
                children: [{ text: "Total", bold: true }],
                textAlign: "right",
              },
            ],
          },
        ],
        id: "",
      },
      {
        type: "table-row",
        children: [
          {
            type: "table-cell",
            children: [
              { type: "paragraph", children: [{ text: "Product 1" }] },
            ],
          },
          {
            type: "table-cell",
            children: [
              {
                type: "paragraph",
                children: [{ text: "1" }],
                textAlign: "right",
              },
            ],
          },
          {
            type: "table-cell",
            children: [
              {
                type: "paragraph",
                children: [{ text: "100" }],
                textAlign: "right",
              },
            ],
          },
          {
            type: "table-cell",
            children: [
              {
                type: "paragraph",
                children: [{ text: "100" }],
                textAlign: "right",
              },
            ],
          },
        ],
      },
      {
        type: "table-row",
        children: [
          {
            type: "table-cell",
            children: [
              { type: "paragraph", children: [{ text: "Product 2" }] },
            ],
          },
          {
            type: "table-cell",
            children: [
              {
                type: "paragraph",
                children: [{ text: "2" }],
                textAlign: "right",
              },
            ],
          },
          {
            type: "table-cell",
            children: [
              {
                type: "paragraph",
                children: [{ text: "200" }],
                textAlign: "right",
              },
            ],
          },
          {
            type: "table-cell",
            children: [
              {
                type: "paragraph",
                children: [{ text: "400" }],
                textAlign: "right",
              },
            ],
          },
        ],
      },
      {
        type: "table-row",
        children: [
          {
            type: "table-cell",
            children: [{ type: "paragraph", children: [{ text: "" }] }],
          },
          {
            type: "table-cell",
            children: [{ type: "paragraph", children: [{ text: "" }] }],
          },
          {
            type: "table-cell",
            children: [
              {
                type: "paragraph",
                children: [{ text: "" }],
                textAlign: "right",
              },
            ],
          },
          {
            type: "table-cell",
            children: [{ type: "paragraph", children: [{ text: "" }] }],
          },
        ],
      },
      {
        type: "table-row",
        children: [
          {
            type: "table-cell",
            children: [{ type: "paragraph", children: [{ text: "" }] }],
          },
          {
            type: "table-cell",
            children: [{ type: "paragraph", children: [{ text: "" }] }],
          },
          {
            type: "table-cell",
            children: [
              {
                type: "paragraph",
                children: [{ text: "Sub Total", bold: true }],
                textAlign: "right",
              },
            ],
          },
          {
            type: "table-cell",
            children: [
              {
                type: "paragraph",
                children: [{ text: "500" }],
                textAlign: "right",
              },
            ],
          },
        ],
      },
      {
        type: "table-row",
        children: [
          {
            type: "table-cell",
            children: [{ type: "paragraph", children: [{ text: "" }] }],
          },
          {
            type: "table-cell",
            children: [{ type: "paragraph", children: [{ text: "" }] }],
          },
          {
            type: "table-cell",
            children: [
              {
                type: "paragraph",
                children: [{ text: "Tax (10%)", bold: true }],
                textAlign: "right",
              },
            ],
          },
          {
            type: "table-cell",
            children: [
              {
                type: "paragraph",
                children: [{ text: "50" }],
                textAlign: "right",
              },
            ],
          },
        ],
      },
      {
        type: "table-row",
        children: [
          {
            type: "table-cell",
            children: [{ type: "paragraph", children: [{ text: "" }] }],
          },
          {
            type: "table-cell",
            children: [{ type: "paragraph", children: [{ text: "" }] }],
          },
          {
            type: "table-cell",
            children: [
              {
                type: "paragraph",
                children: [{ text: "Total", bold: true }],
                textAlign: "right",
              },
            ],
          },
          {
            type: "table-cell",
            children: [
              {
                type: "paragraph",
                children: [{ text: "550" }],
                textAlign: "right",
              },
            ],
          },
        ],
      },
    ],
    id: "items-table",
  },
  {
    type: "paragraph",
    breakoutBottom: true,
    children: [{ text: "" }],
    textAlign: "center",
  },
  { type: "paragraph", children: [{ text: "" }] },
  { type: "paragraph", children: [{ text: "" }] },
  {
    type: "paragraph",
    children: [{ text: "All amounts in USD" }],
    textAlign: "center",
  },
];

const ExampleInvoiceTemplate = createFile(
  "ExampleInvoiceTemplate",
  "Invoice Template",
  FileType.Document,
  true,
  "ExampleCollection"
);

ExampleInvoiceTemplate.template = true;

export { ExampleInvoiceTemplate };

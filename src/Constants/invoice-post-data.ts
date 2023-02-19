export const INVOICE_POST_DATA = {
    "invoices": [
      {
        "bankAccount": {
          "bankId": "",
          "sortCode": "09-01-01",
          "accountNumber": "5255666",
          "accountName": "John Terry"
        },
        "customer": {
          "firstName": "Nguyen",
          "lastName": "Dung 2",
          "contact": {
            "email": "nguyendung2@101digital.io",
            "mobileNumber": "+6597594971"
          },
          "addresses": [
            {
              "premise": "CT11",
              "countryCode": "VN",
              "postcode": "1000",
              "county": "hoangmai",
              "city": "hanoi"
            }
          ]
        },
        "documents": [
          {
            "documentId": "96ea7d60-89ed-4c3b-811c-d2c61f5feab2",
            "documentName": "Bill",
            "documentUrl": "http://url.com/#123"
          }
        ],
        "invoiceReference": "#123456",
        "invoiceNumber": "INV123312312312",
        "currency": "GBP",
        "invoiceDate": "2021-05-27",
        "totalAmount": "100",
        "amount": "100",
        "quantity": 0,
        "dueDate": "2021-06-04",
        "description": "Invoice is issued to Akila Jayasinghe",
        "customFields": [
          {
            "key": "invoiceCustomField",
            "value": "value"
          }
        ],
        "extensions": [
          {
            "addDeduct": "ADD",
            "value": 10,
            "type": "PERCENTAGE",
            "name": "tax"
          },
          {
            "addDeduct": "DEDUCT",
            "type": "FIXED_VALUE",
            "value": 10.00,
            "name": "discount"
          }
        ],
        "items": [
          {
            "itemReference": "itemRef",
            "description": "Honda RC150",
            "quantity": 1,
            "rate": 1000,
            "itemName": "Honda Motor",
            "itemUOM": "KG",
            "customFields": [
              {
                "key": "taxiationAndDiscounts_Name",
                "value": "VAT"
              }
            ],
            "extensions": [
              {
                "addDeduct": "ADD",
                "value": 10,
                "type": "FIXED_VALUE",
                "name": "tax"
              },
              {
                "addDeduct": "DEDUCT",
                "value": 10,
                "type": "PERCENTAGE",
                "name": "tax"
              }
            ]
          }
        ]
      }
    ]
  }
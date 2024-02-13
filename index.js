const { createAdminApiClient } = require('@shopify/admin-api-client');
const fs = require('fs');
const { insertItem } = require('./helpers/itemsTransaction/index');

(async () => {
  require('dotenv').config();

  const client = createAdminApiClient({
    storeDomain: 'nesdersanshop.myshopify.com',
    apiVersion: '2023-04',
    accessToken: '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',
  });

  const operation = `
    query {
        products(first: 100, reverse: true) {
            edges {
              node {
                id
                productType
                productCategory {
                    productTaxonomyNode {id
                    isRoot
                    fullName
                    name}
                }
                status
                title
                availablePublicationCount
                totalInventory
                totalVariants
                vendor
                featuredImage {
                  src
                }
                variants(first: 100) {
                    edges {
                        node {
                          id
                          barcode
                          image {
                            url
                          }
                          product {
                            id
                          }
                          price
                          sku
                          inventoryQuantity
                        }
                      }
                }
              }
            }
          }
    }
    `;

  const { data, errors, extensions } = await client.request(operation);

  const products = data.products.edges.map(e => {
    return e.node.variants.edges.map(edge => {
      return {
        barcode: edge.node.barcode,
        price: edge.node.price,
        quantity: edge.node.inventoryQuantity,
        status: e.node.status,
        title: e.node.title,
        category: JSON.stringify(e.node.productCategory?.productTaxonomyNode.fullName)
      }
    })
  })

  const flattenedProducts = products.reduce((acc, curr) => acc.concat(curr), []);

  for (let i = 0; i < flattenedProducts.length; i++) {
    await insertItem({
      code: flattenedProducts[i].barcode,
      name: flattenedProducts[i].title,
      keyword1: flattenedProducts[i].category ? flattenedProducts[i].category.split(' > ')[0].replace(/"/g, '') : undefined,
      keyword2: flattenedProducts[i].category ? flattenedProducts[i].category.split(' > ')[1].replace(/"/g, '') : undefined,
      keyword3: flattenedProducts[i].category ? flattenedProducts[i].category.split(' > ')[2].replace(/"/g, '') : undefined,
    });
  }

  fs.writeFile('inventoryItems.json', JSON.stringify(data), (err) => {
    if (err) throw err;
    console.log('The file has been saved!');
  });
})()

db.sales.aggregate([
  {
    $unwind: "$items" // Flatten the 'items' array to handle each item separately
  },
  {
    $project: {
      store: 1,
      month: { $dateToString: { format: "%Y-%m", date: "$date" } }, // Extract month in YYYY-MM format
      revenue: { $multiply: ["$items.quantity", "$items.price"] }, // Calculate revenue for each item
      price: "$items.price" // Extract price of each item
    }
  },
  {
    $group: {
      _id: { store: "$store", month: "$month" },
      totalRevenue: { $sum: "$revenue" }, // Sum revenue for each store-month combination
      averagePrice: { $avg: "$price" } // Calculate average price for each store-month combination
    }
  },
  {
    $sort: {
      "_id.store": 1, // Sort by store
      "_id.month": 1 // Sort by month
    }
  },
  {
    $project: {
      store: "$_id.store",
      month: "$_id.month",
      totalRevenue: 1,
      averagePrice: 1,
      _id: 0 // Remove _id field
    }
  }
])

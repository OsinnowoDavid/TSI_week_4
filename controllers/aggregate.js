import courseModel from "../models/courseSchema.js";

const getstats = async (req, res) => {
    try {
        console.log("Starting aggregation...");
        const stats = await courseModel.aggregate([
            // {
            //     $match: { courseprice: { $gt: 4.5 } } // Ensure this matches the schema field name
            // },
            {
                $group: {
                    _id: "$coursename  ",
                    num:{ $sum: 1 },
                    totalprice: { $sum: "$courseprice" },
                    avgPrice: { $avg: "$courseprice" },
                    minPrice: { $min: "$courseprice" },
                    maxPrice: { $max: "$courseprice" }
                }
            }
        ]);
        console.log("Aggregation result:", stats);
        res.status(200).json({ success: true, data: stats });
    } catch (error) {
        console.error("Aggregation error:", error);
        res.status(404).json({
            status: "fail",
            message: error
        });
    }
};
export { getstats };
import mongoose from 'mongoose';
import { Cake } from "../modules/cakeuplode.js";
import fs from "fs"

const showcake = async (req, res) => {

    const id = new mongoose.Types.ObjectId(req.query.id);



    try {
        const queryData = [
            {
                $lookup: {
                    from: "categories",
                    localField: "category",
                    foreignField: "_id",
                    as: "category",
                    pipeline: [
                        {
                            $project: {
                                __v: 0
                            }
                        }
                    ]
                },
            },
            {
                $lookup: {
                    from: "subcategories",
                    localField: "subCategory",
                    foreignField: "_id",
                    as: "subCategory",
                    pipeline: [
                        {
                            $lookup: {
                                from: "categories",
                                localField: "category",
                                foreignField: "_id",
                                as: "category",
                            }
                        }, {
                            $unwind: "$category"
                        }, {
                            $project: {
                                __v: 0
                            }
                        }


                    ]

                }

            },
            {
                $lookup: {
                    from: "cakeflavorwithprices",
                    localField: "flavor",
                    foreignField: "_id",
                    as: "flavor",
                    pipeline: [
                        {
                            $lookup: {
                                from: "cakeflavors",
                                localField: "flavor",
                                foreignField: "_id",
                                as: "flavor"
                            }
                        }, {
                            $unwind: "$flavor"
                        }, {
                            $sort: { "price": 1 } // Sort in ascending order by the price field
                        }, {
                            $project: {
                                flavor: {
                                    _id: 0,
                                    __v: 0
                                },
                                __v: 0

                            }
                        }
                    ]
                }
            },
            {
                $lookup: {
                    from: "servingsizewithpricetiers",
                    localField: "size",
                    foreignField: "_id",
                    as: "size",
                    pipeline: [
                        {
                            $lookup: {
                                from: "cakesizes",
                                localField: "size",
                                foreignField: "_id",
                                as: "size"
                            }
                        }, {
                            $unwind: "$size"
                        },
                        {
                            $sort: { "price": 1 } // Sort in ascending order by the price field
                        },
                        {
                            $lookup: {
                                from: "caketiers",
                                localField: "tier",
                                foreignField: "_id",
                                as: "tier"
                            }
                        },
                        {
                            $unwind: "$tier"
                        },
                        {
                            $sort: { "price": 1 } // Sort in ascending order by the price field
                        },
                        {
                            $project: {
                                size: {

                                    _id: 0,
                                    __v: 0
                                },
                                tier: {
                                    _id: 0,
                                    __v: 0
                                },
                                __v: 0
                            }
                        }


                    ]
                }
            },

            {
                $project: {
                    _id: 1,
                    name: 1,
                    category: {
                        $first: "$category"
                    },
                    subCategory: 1,
                    flavor: 1,
                    size: 1,
                    discount: 1,
                    images: 1,


                }
            }





        ]

        if (req.query.id) {

            queryData.push({
                $match: {
                    _id: id
                }
            })
        }

        const data = await Cake.aggregate(
            queryData
        )

        console.log(data);

        res.status(200).json(data)

    } catch (error) {
        res.status(404).json({ error: error })
    }


}
const uplodecake = async (req, res) => {

    let { name, category, subCategory, flavor, size, discount, topdeals } = req.body;
    const images = req.files;

    subCategory = JSON.parse(subCategory)
    flavor = JSON.parse(flavor)
    size = JSON.parse(size)


    const imagePaths = []

    try {

        images.forEach(element => {
            imagePaths.push(element.path);
        });

        // Convert string IDs to ObjectId
        const subCategoryIds = subCategory.map(id => new mongoose.Types.ObjectId(id));
        const flavorIds = flavor.map(id => new mongoose.Types.ObjectId(id));
        const sizeIds = size.map(id => new mongoose.Types.ObjectId(id));


        const data = await Cake.create({
            name,
            category,
            subCategory: subCategoryIds,
            flavor: flavorIds,
            size: sizeIds,
            discount,
            topdeals: topdeals || undefined,
            images: imagePaths
        });

        res.status(201).json(data)
    } catch (error) {
        imagePaths.forEach(image => {
            const exist = fs.existsSync(image);
            if (exist) {
                fs.unlinkSync(image);
            }
        });
        res.status(400).json({ error, msg: "error while uploading" })
    }





}
const updatecake = async (req, res) => {

}
const editcake = async (req, res) => {

}
const deletecake = async (req, res) => {

}


export { showcake, uplodecake, updatecake, editcake, deletecake }
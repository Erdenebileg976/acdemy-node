import { Request, Response } from "express";
import Restaurant from "../models/restaurants";

export const getRestaurants = async (
  req: Request,
  res: Response,
): Promise<void> => {
  try {
    const page = Math.max(1, parseInt(req.query.page as string) || 1);
    const limit = Math.max(1, parseInt(req.query.limit as string) || 12);
    const skip = (page - 1) * limit;

    const filter: Record<string, unknown> = {};

    if (req.query.search) {
      const regex = { $regex: req.query.search as string, $options: "i" };
      filter.$or = [{ title: regex }, { name: regex }];
    }

    const sortField = (req.query.sort as string) || "name";
    const sortOrder = (req.query.order as string) === "desc" ? -1 : 1;

    const [restaurants, total] = await Promise.all([
      Restaurant.find(filter)
        .skip(skip)
        .limit(limit)
        .sort({ [sortField]: sortOrder })
        .select("name restaurant_id borough cuisine address grades")
        .lean(),
      Restaurant.countDocuments(filter),
    ]);

    res.json({
      page,
      limit,
      total,
      totalPages: Math.ceil(total / limit),
      restaurants,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};

export const getRestaurantsById = async (
  req: Request,
  res: Response,
): Promise<void> => {
  try {
    const restaurant = await Restaurant.findById(req.params.id).lean();

    if (!restaurant) {
      res.status(404).json({ message: "Restaurant not found" });
      return;
    }

    res.json(restaurant);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};

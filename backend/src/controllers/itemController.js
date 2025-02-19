import { itemService } from "../services/itemService.js";

export const fetchAllItems = async (req, res, next) => {
  const page = parseInt(req.query.page) || 1;
  const limit = parseInt(req.query.limit) || 9;

  try {
    const response = await itemService.getAllItems({ page, limit });

    if (!response || response.length === 0) {
      return res.status(200).json({
        status: 200,
        message: "查無資料",
        data: [],
      });
    }

    res.status(200).json({
      status: 200,
      message: "資料取得成功",
      data: response,
    });
  } catch (error) {
    next(error);
  }
};

export const addItem = async (req, res, next) => {
  try {
    const data = req.body;

    const response = await itemService.createItem(data);

    res.status(200).json({
      status: 200,
      message: "資料新增成功",
      data: response,
    });
  } catch (error) {
    next(error);
  }
};

export const editItem = async (req, res, next) => {
  try {
    const id = parseInt(req.params.id, 10);
    const data = req.body;

    const response = await itemService.updataItem(id, data);

    res.status(200).json({
      status: 200,
      message: "資料更新成功",
      data: response,
    });
  } catch (error) {
    next(error);
  }
};

export const removeItem = async (req, res, next) => {
  try {
    const id = parseInt(req.params.id, 10);

    const response = await itemService.deleteItem(id);

    res.status(200).json({
      status: 200,
      message: "資料刪除成功",
      data: response,
    });
  } catch (error) {
    next(error);
  }
};

export const lookupItem = async (req, res, next) => {
  try {
    const { keyword, type, rarity } = req.query;

    const response = await itemService.searchItems({ keyword, type, rarity });

    if (!response || response.length === 0) {
      return res.status(200).json({
        status: 200,
        message: "查無資料",
        data: [],
      });
    }

    res.status(200).json({
      status: 200,
      message: "資料查詢成功",
      data: response,
    });
  } catch (error) {
    next(error);
  }
};

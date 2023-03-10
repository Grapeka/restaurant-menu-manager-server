import mongoose from 'mongoose';
import { IMenuItem } from '../interfaces/IMenuItem';

export const menuItemSchema: mongoose.Schema<IMenuItem> = new mongoose.Schema({
  ownerId: { type: mongoose.Schema.Types.ObjectId, ref: 'Merchant' },
  name: { type: String, required: true },
  category: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  image: { type: String, required: false },
});

export class MenuItemModel {
  private static instance: MenuItemModel;
  public model: mongoose.Model<IMenuItem>;

  private constructor() {
    this.model = mongoose.model('MenuItem', menuItemSchema);
  }

  public static getInstance(): MenuItemModel {
    if (!MenuItemModel.instance) {
      MenuItemModel.instance = new MenuItemModel();
    }
    return MenuItemModel.instance;
  }
}

import {
  CreationOptional,
  DataTypes,
  InferAttributes,
  InferCreationAttributes,
  Model,
} from 'sequelize'
import sequelize from '../database'

export interface TImage {
  fileName: string
  filePath: string
}

export interface IPoster {
  authorId: number
  category: string
  name: string
  price: number
  condition: 'new' | 'used'
  location: string
  description: string
  images: string
}

export interface PosterModel
  extends Model<
      InferAttributes<PosterModel>,
      InferCreationAttributes<PosterModel>
    >,
    IPoster {
  id: CreationOptional<number>
}

const Poster = sequelize.define<PosterModel>('Poster', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  authorId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  category: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  price: {
    type: DataTypes.INTEGER,
  },
  condition: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  location: {
    type: DataTypes.STRING,
  },
  description: {
    type: DataTypes.STRING,
  },
  images: {
    type: DataTypes.JSON,
  },
})

export default Poster

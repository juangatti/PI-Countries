const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('Country', {
    
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    id:{
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true
    },
    region:{
      type: DataTypes.STRING,
      allowNull: false
    },
    subregion:{
      type: DataTypes.STRING
    },
    population:{
      type: DataTypes.INTEGER
    },
    capital:{
      type: DataTypes.STRING,
      allowNull:false
    },
    population:{
      type: DataTypes.INTEGER
    },
    area:{
      type: DataTypes.INTEGER
    },
    flag:{
      type: DataTypes.STRING ,
      allowNull:false
    }
  });
};

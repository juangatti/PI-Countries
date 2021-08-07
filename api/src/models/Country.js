const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('country', {
    
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
   id:{
      type: DataTypes.CHAR(3),
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
   
    capital:{
      type: DataTypes.STRING,
      allowNull:false
    },
    population:{
      type: DataTypes.INTEGER
    },
    area:{
      type: DataTypes.FLOAT
    },
    flag:{
      type: DataTypes.STRING ,
      allowNull:false
    }
  });
};
